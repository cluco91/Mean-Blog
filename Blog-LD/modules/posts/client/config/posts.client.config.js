(function () {
  'use strict';

  angular
    .module('posts')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {

    menuService.addMenuItem('topbar', {
      title: 'Latest Posts',
      state: 'posts.list',
      roles: ['*']
    });

    menuService.addMenuItem('topbar', {
      title: 'Create Post',
      state: 'posts.create',
      roles: ['user']
    });
  }
}());
