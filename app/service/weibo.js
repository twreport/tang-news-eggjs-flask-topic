'use strict';
const Service = require('egg').Service;

class WeiboService extends Service {
    async start() {
        const { ctx } = this;
        await this.weiboTopicDriver();
    }

    // 定时执行将微博前20名取出，比照其他文章组成专题
    async weiboTopicDriver() {
        const scrapyd_server_url = this.app.config.AiServerUrl;
        // 拼接curl地址
        const url = scrapyd_server_url + "ai/topic/weibo_similar";
        const result = await this.ctx.curl(
            url, {
            method: 'GET',
            timeout: 2 * 3600 * 1000
        }
        );
        console.log(result)
    }
}
module.exports = WeiboService;