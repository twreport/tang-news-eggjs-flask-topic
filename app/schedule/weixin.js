const Subscription = require('egg').Subscription;

class WeixinDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 0 8/12 * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("parse weixin topic OK")
        await this.ctx.service.weixin.start();
    }
}

module.exports = WeixinDriver;
