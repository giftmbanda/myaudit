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
    return view.render("admin.registerUserForm");
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
    const userId = params.id;
    const user = await User.find(userId);
    return view.render("admin.editUserForm", { user: user.toJSON() });
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
    const userId = params.id;
    const user = request.all();

    const updateUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      is_active: user.is_active,
      role: user.role,
    };

    await User.query().where("id", userId).update(updateUser);
    return response.redirect("/users");
  }

  /**
   * Delete a UserController with id.
   * DELETE UserController/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const userId = params.id;
    await User.query().where("id", userId).update({ is_active: false });
    return response.redirect("/users");
  }
}

module.exports = UserController;
