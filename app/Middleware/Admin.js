"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, auth, response }, next) {
    try {
      if((await auth.user.role) === "admin"){
        await next(); // call next to advance the request
      }
    } catch (error) {
      return response.route("/"); //route to the login page
    }
  }
}

module.exports = Admin;
