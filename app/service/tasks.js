'use strict';

const Service = require('egg').Service;

class Tasks extends Service {
  async list() {
    return this.ctx.model.Tasks.findAll({
      include: [{
        model: this.ctx.model.Users,
        as: 'user',
      }, {
        model: this.ctx.model.Apps,
        as: 'app',
      }],
    });
  }
}

module.exports = Tasks;
