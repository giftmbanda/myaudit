"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Question = use("App/Models/Question");
const Section = use("App/Models/Section");


/**
 * Resourceful controller for interacting with questions
 */
class QuestionController {
  /**
   * Show a list of all questions.
   * GET questions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const questions = await Question.query().with("section").fetch();
    return view.render("admin.questionTable", { questions: questions.toJSON()} );
  }

  /**
   * Render a form to be used for creating a new question.
   * GET questions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    const sections = await Section.all();
    return view.render("admin.addQuestion", { sections: sections.toJSON() });
  }

  /**
   * Create/save a new question.
   * POST questions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, session, response }) {
    try {
      const input = request.all();

      await Question.create({
        question: input.question,
        section_id: input.section,
      });

      session.flash({
        notification: {
          type: "success",
          message: "Question created successfully!",
        },
      });
      return response.redirect("/questions");
    } catch (error) {
      session.flash({
        notification: {
          type: "danger",
          message: "An error occurred!",
        },
      });
      return response.redirect("back");
    }
  }

  /**
   * Display a single question.
   * GET questions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing question.
   * GET questions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update question details.
   * PUT or PATCH questions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a question with id.
   * DELETE questions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, session, request, response }) {
    try {
      const questionId = params.id;

      const question = await Question.find(questionId);
      await question.delete();

      session.flash({
        notification: {
          type: "success",
          message: "Question deleted successfully!",
        },
      });

      return response.redirect("/questions");
      
    } catch (error) {
      session.flash({
        notification: {
          type: "danger",
          message: "Failed to delete question!",
        },
      });
      return response.redirect("back");
    }
  }
}

module.exports = QuestionController;
