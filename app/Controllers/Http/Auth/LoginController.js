"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User = use("App/Models/User");
const Hash = use("Hash");

/**
 * Resourceful controller for interacting with logins
 */

class LoginController {
  /**
   * Show a list of all logins.
   * GET logins
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new login.
   * GET logins/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new login.
   * POST logins
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth, session, response }) {
    const { email, password, remember } = request.all();

    const user = await User.query()
      .where("email", email)
      .where("is_active", true)
      .first();

    if (user) {
      const passwordVerified = await Hash.verify(password, user.password);
      if (passwordVerified) {
        await auth.remember(!!remember).login(user);
        return response.redirect("dashboard");
      }
    }
  }
  /**
   * Display a single login.
   * GET logins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return view.render("shared.forgotPassword");
  }

  /**
   * Render a form to update an existing login.
   * GET logins/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update login details.
   * PUT or PATCH logins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a login with id.
   * DELETE logins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ auth, params, request, response }) {
    await auth.logout();
    return response.redirect("/");
  }
}

module.exports = LoginController;
