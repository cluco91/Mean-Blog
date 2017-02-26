(function () {
  'use strict';

  angular
    .module('posts')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'postResolve'];

  function PostsController ($scope, $state, $window, Authentication, post) {
    var vm = this;

    vm.authentication = Authentication;
    vm.post = post;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.post.$remove($state.go('posts.list'));
      }
    }

    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.postForm');
        return false;
      }

      if (vm.post._id) {
        vm.post.$update(successCallback, errorCallback);
      } else {
        vm.post.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('posts.view', {
          postId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
