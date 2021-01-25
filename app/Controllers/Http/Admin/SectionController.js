"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Section = use("App/Models/Section");
const Tool = use("App/Models/Tool");
/**
 * Resourceful controller for interacting with sections
 */
class SectionController {
  /**
   * Show a list of all sections.
   * GET sections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const sections = await Section.query().with("tool").fetch();
    return view.render("admin.sectionTable", { sections: sections.toJSON() });
  }

  /**
   * Render a form to be used for creating a new section.
   * GET sections/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    const tools = await Tool.all();
    return view.render("admin.addSection", { tools: tools.toJSON() });
  }

  /**
   * Create/save a new section.
   * POST sections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, session, response }) {
    try {
      const input = request.all();

      await Section.create({
        section_name: input.section,
        tool_id: input.tool,
      });

      session.flash({
        notification: {
          type: "success",
          message: "Section created successfully!",
        },
      });
      return response.redirect("/sections");
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
   * Display a single section.
   * GET sections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing section.
   * GET sections/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update section details.
   * PUT or PATCH sections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a section with id.
   * DELETE sections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, session, request, response }) {
    try {
      const sectionId = params.id;

      const section = await Section.find(sectionId);
      await section.delete();

      session.flash({
        notification: {
          type: "success",
          message: "Section deleted successfully!",
        },
      });

      return response.redirect("/sections");
      
    } catch (error) {
      session.flash({
        notification: {
          type: "danger",
          message: "Failed to delete section!",
        },
      });
      return response.redirect("back");
    }
  }
}

module.exports = SectionController;
