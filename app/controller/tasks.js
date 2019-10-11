'use strict';

const Controller = require('egg').Controller;

class TasksController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.tasks.list();
  }
}

module.exports = TasksController;
