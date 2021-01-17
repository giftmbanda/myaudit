"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User = use("App/Models/User");
const { validateAll } = use("Validator");
const randomString = require("random-string");
/**
 * Resourceful controller for interacting with signin
 */

class signinController {
  /**
   * Show a list of all signin.
   * GET signin
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new signin.
   * GET signin/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    return view.render("shared.signup");
  }

  /**
   * Create/save a new signin.
   * POST signin
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, session, response }) {
    //validate form inputs
    const validation = await validateAll(request.all(), {
      name: "required",
      email: "required|email|unique:users,email",
      password: "required",
    });

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(["password"]);
      return response.redirect("back");
    }

    //create user
    const user = await User.create({
      name: request.input("name"),
      email: request.input("email"),
      password: request.input("password"),
      role: request.input('role'),
    });

    return response.redirect("/");
  }

  /**
   * Display a single signin.
   * GET signin/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing signin.
   * GET signin/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update signin details.
   * PUT or PATCH signin/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a signin with id.
   * DELETE signin/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = signinController;
