'use strict';

const Service = require('egg').Service;

class Users extends Service {
  async list() {
    return this.ctx.model.Users.findAll({
      include: [{
        model: this.ctx.model.Apps,
        as: 'apps',
      }, {
        model: this.ctx.model.Tasks,
        as: 'tasks',
      }, {
        model: this.ctx.model.Infos,
        as: 'info',
      }],
    });
  }
}

module.exports = Users;
