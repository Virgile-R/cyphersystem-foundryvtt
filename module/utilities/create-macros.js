import {
  itemMacroString,
  recursionString,
  tagString
} from "../macros/macro-strings.js";

/**
* Create a Macro from an Item drop.
* Get an existing item macro if one exists, otherwise create a new one.
* @param {Object} data     The dropped data
* @param {number} slot     The hotbar slot to use
* @returns {Promise}
*/
export async function createCyphersystemMacro(data, slot) {
  if (data.type !== "Item") return;
  if (!("data" in data)) return ui.notifications.warn(game.i18n.localize("CYPHERSYSTEM.CanOnlyCreateMacroForOwnedItems"));
  const item = data.data;

  // Create the macro command
  let command = "";

  if (item.type == "recursion") {
    command = recursionString(data.actorId, item._id);
  } else if (item.type == "tag") {
    command = tagString(data.actorId, item._id);
  } else {
    command = itemMacroString(item._id);
  }

  let macro = await Macro.create({
    name: item.name,
    type: "script",
    img: item.img,
    command: command,
    flags: { "cyphersystem.itemMacro": true }
  });

  game.user.assignHotbarMacro(macro, slot);
  return false;
}
