"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User = use("App/Models/User");
/**
 * Resourceful controller for interacting with UserController
 */
class UserController {
  /**
   * Show a list of all UserController.
   * GET UserController
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const users = await User.all();
    //console.log({ users: users.toJSON() });
    return view.render("admin.userTable", { users: users.toJSON() });
  }

  /**
   * Render a form to be used for creating a new UserController.
   * GET UserController/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    return view.render("admin.registerForm");
  }

  /**
   * Create/save a new UserController.
   * POST UserController
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single UserController.
   * GET UserController/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing UserController.
   * GET UserController/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    //get users id via params and use it to query db
    //get users profile and return the data to the form in the view
    return view.render("admin.userTable");
  }

  /**
   * Update UserController details.
   * PUT or PATCH UserController/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    //get the user id via params and user data via form input
    //query the db for the user by the user id from params
    // if found the update the user by the by the data received from form input
  }

  /**
   * Delete a UserController with id.
   * DELETE UserController/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = UserController;
