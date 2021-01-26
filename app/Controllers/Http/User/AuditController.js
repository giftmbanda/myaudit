"use strict";
const Tool = use("App/Models/Tool");
const Section = use("App/Models/Section");
const Question = use("App/Models/Question");

class AuditController {
  async index({ request, response, view }) {
    const tools = await Tool.all();
    return view.render("user.userAudit", { tools: tools.toJSON() });
  }

  async getSectionByToolId({ params, request, response, view }) {
    const toolId = params.id;
    const sections = await Section.query().where("tool_id", toolId).fetch();
    console.log( { sections: sections.toJSON() })
    return view.render("user.userSection", { sections: sections.toJSON() });
  }

  async getQuestionBySectionId({ params, request, response, view }) {
    const sectionId = params.id;
    const questions = await Question.query().where("section_id", sectionId).fetch();
    console.log( { questions: questions.toJSON() })
    //return view.render("user.userSection", { questions: questions.toJSON() });
  }
}

module.exports = AuditController;
