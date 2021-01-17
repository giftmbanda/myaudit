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
    await Factory.model("App/Models/User").createMany(6, usersArray);
    //console.log(users);
  }
}

const usersArray = {
  name: [
    "Gift Banda",
    "Tiger Nixon",
    "Garrett Winters",
    "Ashton Cox",
    "Cedric Kelly",
    "Rhona Davidson",
  ],
  email: [
    "giftmbanda@gmail.com",
    "tiger@gmail.com",
    "garrett@gmail.com",
    "ashton@gmail.com",
    "cedric@gmail.com",
    "rhona@gmail.com",
  ],
  password: ["gift", "gift", "gift", "gift", "gift", "gift"],
  is_active: [true, true, true, true, true, true],
  role: ["admin", "user", "user", "user", "user", "admin"],
};
module.exports = UserSeeder;
