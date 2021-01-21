// "use strict";

// /*
// |--------------------------------------------------------------------------
// | SectionSeeder
// |--------------------------------------------------------------------------
// |
// | Make use of the Factory instance to seed database with dummy data or
// | make use of Lucid models directly.
// |
// */

// /** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use("Factory");
// const Tool = use("App/Models/Tool");

// class SectionSeeder {
//   async run() {
//     const tools = await Tool.all();
//     const _tools = tools.toJSON()

//     const sectionArrays = [];

//     for (const i in _tools) {
//       let tool = _tools[i];

//       sectionArrays.push({
//         tool_id: tool.id,
//         section_name: `Section ${tool.id}`
//       });
//     }
//     console.log(sectionArrays.length);
//     //await Factory.model("App/Models/Section").createMany(sectionArrays.length, sectionArrays);
//   }
// }

// module.exports = SectionSeeder;
