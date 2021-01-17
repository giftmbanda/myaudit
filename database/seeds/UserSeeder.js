"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UserSeeder {
  async run() {
    await Factory.model("App/Models/User").createMany(2, usersArray);
    //console.log(users);
  }
}

const usersArray = {
  name: ["Gift Banda", "Admin"],
  email: ["giftmbanda@gmail.com", "admin@myaudit.com"],
  password: ["gift", "admin"],
  is_active: [true, true],
  role: ["admin", "admin"],
};
module.exports = UserSeeder;
