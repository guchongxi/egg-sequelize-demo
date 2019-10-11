'use strict';

const Service = require('egg').Service;

class Apps extends Service {
  async list() {
    return this.ctx.model.Apps.findAll({
      include: [{
        model: this.ctx.model.Users,
        as: 'user',
      }, {
        model: this.ctx.model.Tasks,
        as: 'tasks',
      }, {
        model: this.ctx.model.Groups,
        as: 'groups',
      }],
    });
  }
}

module.exports = Apps;
