'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer("question_id").unsigned().references("id").inTable("questions");
      table.enum('answer', ['true', 'false','n/a']).notNullable();
      table.integer("score").defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
