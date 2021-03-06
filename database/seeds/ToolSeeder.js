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
const Tool = use("App/Models/Tool");

class ToolSeeder {
  async run() {
    await Factory.model("App/Models/Tool").createMany(5, toolsArray);
    const tools = await Tool.all();
    const _tools = tools.toJSON();
    const sectionArrays = [];

    for (const i in _tools) {
      sectionArrays.push({
        tool_id: _tools[i].id,
        section_name: `Section ${_tools[i].id}`
      });
    }
    await Factory.model("App/Models/Section").createMany(sectionArrays.length, sectionArrays);
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
