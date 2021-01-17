"use strict";

/*
|--------------------------------------------------------------------------
| QuestionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class QuestionSeeder {
  async run() {
    // await Factory.model("App/Models/Question").createMany(2, questionsArray);
  }
}

const questionsArray = {
  section_id: [1, 1], // section_id must already be existing in section table!!
  question: ["question one", "question two"],
};
module.exports = QuestionSeeder;
