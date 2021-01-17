"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class QuestionSchema extends Schema {
  up() {
    this.create("questions", (table) => {
      table.increments();
      table.integer("section_id").unsigned().references("id").inTable("sections");
      table.string("question", 254).notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("questions");
  }
}

module.exports = QuestionSchema;
