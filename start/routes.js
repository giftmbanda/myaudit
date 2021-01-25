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
    Route.get("/user/create", "Admin/UserController.create"); //render user register
    Route.get("/user/:id/edit", "Admin/UserController.edit"); //render user edit
    Route.post("/user/:id/update", "Admin/UserController.update") //process user update
    Route.post("/user/:id/delete", "Admin/UserController.destroy"); //process user deletion
    Route.post("/user/store", "Admin/UserController.store"); //process register

    Route.get("/tools", "Admin/AuditToolController.index"); //render tools
    Route.get("/tool/create", "Admin/AuditToolController.create"); //render  add tool
    Route.post("/tool/store", "Admin/AuditToolController.store"); //render tools
    Route.post("/tool/:id/delete", "Admin/AuditToolController.destroy"); //process tool deletion

    Route.get("/sections", "Admin/SectionController.index");
    Route.get("/section/create", "Admin/SectionController.create");
    Route.post("/section/store", "Admin/SectionController.store");
    Route.post("/section/:id/delete", "Admin/SectionController.destroy");
    Route.get("/section/:id/edit", "Admin/SectionController.edit");

    Route.get("/questions", "Admin/QuestionController.index");
    Route.get("/question/create", "Admin/QuestionController.create");
    Route.post("/question/store", "Admin/QuestionController.store");
    Route.post("/question/:id/delete", "Admin/QuestionController.destroy");
    Route.get("/question/:id/edit", "Admin/QuestionController.edit");

}).middleware(["auth", "admin"]); //can only access them if you're LOGGED IN AS AN ADMIN