'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuditToolSchema extends Schema {
  up () {
    this.create('tools', (table) => {
      table.increments()
      table.string("tool_name", 254).notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('tools')
  }
}

module.exports = AuditToolSchema
