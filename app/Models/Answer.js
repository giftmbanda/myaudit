"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Answer extends Model {
  //   static boot() {
  //     super.boot();
  //     /**
  //      * A hook to assign score the answer before saving
  //      * it to the database.
  //      */
  //     this.addHook("beforeSave", async (AnswerInstance) => {
  //       if (AnswerInstance.dirty.answer) {
  //         if (AnswerInstance.answer === "true") {
  //           AnswerInstance.score = 5;
  //         }
  //       }
  //     });
  //   }
}

module.exports = Answer;
