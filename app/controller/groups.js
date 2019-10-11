'use strict';

const Controller = require('egg').Controller;

class GroupsController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.groups.list();
  }
}

module.exports = GroupsController;
