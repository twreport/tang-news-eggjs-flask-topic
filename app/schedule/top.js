const Subscription = require('egg').Subscription;

class TopDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 0 0/12 * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("parse top topic OK")
        await this.ctx.service.top.start();
    }
}

module.exports = TopDriver;
