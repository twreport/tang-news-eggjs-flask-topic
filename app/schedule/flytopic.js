const Subscription = require('egg').Subscription;

class FlyDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 0 0/2 * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("Put Weixin Article To Tangwei.cc!")
        await this.ctx.service.flytopic.start();
    }
}

module.exports = FlyDriver;
