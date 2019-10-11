'use strict';

const Controller = require('egg').Controller;

class AppsController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.apps.list();
  }
}

module.exports = AppsController;
