"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
    Route.on("/").render("shared.signin"); //render login
    Route.post("/login", "Auth/LoginController.store").as("login"); //process login
    Route.get("/signup", "Auth/SigninController.create"); //render signin
    Route.post("/signup", "Auth/SigninController.store").as("signup"); //process signup
    Route.get("/forgotpassword", "Auth/LoginController.show"); //render forgotpassword
}).middleware(["authenticated"]); //can only access them if you're NOT LOGGED IN

Route.group(() => {
    Route.get("/logout", "Auth/LoginController.destroy"); //process logout
    Route.get("/dashboard", "DashboardController.index"); //render dashboard
}).middleware(["auth"]); //can only access them if you're LOGGED IN

Route.group(() => {
    Route.get("/users", "Admin/UserController.index"); //render users
    Route.get("/register", "Admin/UserController.create"); //render register
    Route.post("/register", "Auth/SigninController.store").as("register"); //process register
    Route.get("/tools", "Admin/AuditToolController.index"); //render tools
    Route.get("/sections", "Admin/SectionController.index"); //render sections
    Route.get("/questions", "Admin/QuestionController.index"); //render questions
}).middleware(["auth", "admin"]); //can only access them if you're LOGGED IN AS AN ADMIN
