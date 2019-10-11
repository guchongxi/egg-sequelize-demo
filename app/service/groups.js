'use strict';

const Service = require('egg').Service;

class Groups extends Service {
  async list() {
    return this.ctx.model.Groups.findAll({
      include: [{
        model: this.ctx.model.Apps,
        as: 'apps',
        include: [{
          model: this.ctx.model.Users,
          as: 'user'
        }]
      }],
    });
  }
}

module.exports = Groups;
