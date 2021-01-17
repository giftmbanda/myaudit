"use strict";

/*
|--------------------------------------------------------------------------
| SectionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class SectionSeeder {
  async run() {
    // await Factory.model("App/Models/Section").createMany(2, sectionsArray);
  }
}

const sectionsArray = {
  tool_id: [1, 2], // tool_id must already be existing in tool table!!
  section_name: ["section one", "section two"],
};

module.exports = SectionSeeder;
