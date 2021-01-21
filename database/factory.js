"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

// User blueprint
Factory.blueprint("App/Models/User", (faker, i, usersArray) => {
  return {
    name: usersArray.name[i],
    email: usersArray.email[i],
    password: usersArray.password[i],
    is_active: usersArray.is_active[i],
    role: usersArray.role[i],
  };
});

// Tool blueprint
Factory.blueprint("App/Models/Tool", (faker, i, toolsArray) => {
  return {
    tool_name: toolsArray.tool_name[i],
  };
});

// Section blueprint
Factory.blueprint("App/Models/Section", (faker, i, sectionsArray) => {
  return {
    tool_id: sectionsArray[i].tool_id,
    section_name: sectionsArray[i].section_name
  };
});

// Question blueprint
Factory.blueprint("App/Models/Question", (faker, i, questionsArray) => {
  return {
    section_id: questionsArray.section_id[i],
    question: questionsArray.question[i],
  };
});
