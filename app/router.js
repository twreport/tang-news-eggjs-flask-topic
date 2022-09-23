'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test_weibo', controller.home.test_weibo);
  router.get('/test_weixin', controller.home.test_weixin);
  router.get('/test_top', controller.home.test_top);
  router.get('/test_fly', controller.home.test_fly);
};
