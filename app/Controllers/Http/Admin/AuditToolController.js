"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Tool = use("App/Models/Tool");
/**
 * Resourceful controller for interacting with audittools
 */
class AuditToolController {
  /**
   * Show a list of all audittools.
   * GET audittools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const tools = await Tool.all();
    return view.render("admin.toolTable", { tools: tools.toJSON() });
  }

  /**
   * Render a form to be used for creating a new audittool.
   * GET audittools/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    return view.render("admin.addTool");
  }

  /**
   * Create/save a new audittool.
   * POST audittools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, session, response }) {
    
    try {
      const input = request.all();
      await Tool.create({ tool_name: input.name});
       
      session.flash({
        notification: {
          type: "success",
          message: "Audit Tool created successfully!",
        },
      });
      return response.redirect("/tools");

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
   * Display a single audittool.
   * GET audittools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing audittool.
   * GET audittools/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update audittool details.
   * PUT or PATCH audittools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a audittool with id.
   * DELETE audittools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, session, request, response }) {
    try {
      const toolId = params.id;

      const tool = await Tool.find(toolId);
      await tool.delete();

      session.flash({
        notification: {
          type: "success",
          message: "Audit Tool deleted successfully!",
        },
      });

      return response.redirect("/tools");
      
    } catch (error) {
      session.flash({
        notification: {
          type: "danger",
          message: "Failed to delete Audit Tool !",
        },
      });
      return response.redirect("back");
    }
  }
}

module.exports = AuditToolController;
