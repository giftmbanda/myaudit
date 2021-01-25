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
  async store({ request, session, response }) {
    const user = request.all();

    await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });

    session.flash({
      notification: {
        type: "success",
        message: "User updated successfully!",
      },
    });

    return response.redirect("/users");
  }

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
  async update({ params, request, session, response }) {
    try {
      const userId = params.id;
      const user = await User.find(userId);
      const input = request.all();

      user.name = input.name ? input.name : user.name;
      user.email = input.email ? input.email : user.email;
      user.password = input.password ? input.password : user.password;
      user.is_active = input.is_active ? input.is_active : user.is_active;
      user.role = input.role ? input.role : user.role;

      await user.save();
      session.flash({
        notification: {
          type: "success",
          message: "User updated successfully!",
        },
      });
      
      return response.redirect(`/user/${userId}/edit`);

    } catch (error) {
      session.flash({
        notification: {
          type: "danger",
          message: "An error occurred, failed to update user.",
        },
      });
      return response.redirect("/users");
    }
  }

  /**
   * Delete a UserController with id.
   * DELETE UserController/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, request, session, response }) {
    const userId = params.id;
    if (auth.user.id != userId) {
      const user = await User.find(userId);
      user.is_active = false;

      await user.save();

      session.flash({
        notification: {
          type: "success",
          message: "User deleted successfully!",
        },
      });
      return response.redirect("/users");
    } else {
      session.flash({
        notification: {
          type: "danger",
          message: "You can not delete yourself!",
        },
      });
      return response.redirect("/users");
    }
  }
}

module.exports = UserController;
