const Subscription = require('egg').Subscription;

class WeiboDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 0 4/12 * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("parse weibo topic OK")
        await this.ctx.service.weibo.start();
    }
}

module.exports = WeiboDriver;
