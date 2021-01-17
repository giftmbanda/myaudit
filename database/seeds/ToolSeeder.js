"use strict";

/*
|--------------------------------------------------------------------------
| ToolSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class ToolSeeder {
  async run() {
    await Factory.model("App/Models/Tool").createMany(5, toolsArray);
    //console.log(toolsArray);
  }
}

const toolsArray = {
  tool_name: [
    "Nursing Management Audit Tool",
    "Clinical Facilitators Audit Tool",
    "SHERQ Officers Audit Tool",
    "SHERQ Audit Tool - General Wards",
    "Documentation Audit Tool - Version 2",
  ],
};

module.exports = ToolSeeder;
