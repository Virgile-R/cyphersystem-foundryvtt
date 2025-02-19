/**
* Extend the basic ActorSheet with some very simple modifications
* @extends {ActorSheet}
*/
import { CypherActorSheet } from "./actor-sheet.js";

export class CypherActorSheetVehicle extends CypherActorSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["cyphersystem", "sheet", "actor", "vehicle"],
      template: "systems/cyphersystem/templates/actor/vehicle-sheet.html",
      width: 650,
      height: false,
      resizable: false,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body" }],
      scrollY: [".sheet-body", ".tab", ".description", ".items", ".settings"]
    });
  }
}
