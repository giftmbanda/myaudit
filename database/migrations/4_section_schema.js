'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SectionSchema extends Schema {
  up () {
    this.create('sections', (table) => {
      table.increments()
      table.integer("tool_id").unsigned().references("id").inTable("tools");
      table.string("section_name", 254).notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('sections')
  }
}

module.exports = SectionSchema
