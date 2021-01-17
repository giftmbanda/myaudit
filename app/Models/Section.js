"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Section extends Model {
  tool() {
    return this.belongsTo("App/Models/Tool");
  }

  questions() {
    return this.hasMany("App/Models/Question");
  }
}

module.exports = Section;
