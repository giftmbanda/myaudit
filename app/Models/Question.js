"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Question extends Model {
  section() {
    return this.belongsTo("App/Models/Section");
  }
}

module.exports = Question;
