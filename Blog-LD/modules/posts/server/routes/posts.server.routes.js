'use strict';

var postsPolicy = require('../policies/posts.server.policy'),
  posts = require('../controllers/posts.server.controller');

module.exports = function(app) {
  app.route('/api/posts').all(postsPolicy.isAllowed)
    .get(posts.list)
    .post(posts.create);

  app.route('/api/posts/:postId').all(postsPolicy.isAllowed)
    .get(posts.read)
    .put(posts.update)
    .delete(posts.delete);

  app.param('postId', posts.postByID);
};
