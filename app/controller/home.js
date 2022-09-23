'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test_weibo() {
    const { ctx } = this;
    await ctx.service.weibo.start()
  }
  async test_weixin() {
    const { ctx } = this;
    await ctx.service.weixin.start()
  }
  async test_top() {
    const { ctx } = this;
    await ctx.service.top.start()
  }
  async test_fly() {
    const { ctx } = this;
    await ctx.service.flytopic.start()
  }
}

module.exports = HomeController;
