'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.users.list();
  }
}

module.exports = UsersController;
