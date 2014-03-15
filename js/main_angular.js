(function() {
  angular.module('myApp', ['ngAnimate']).controller('WidgetController', function($scope) {
    var index, row, rows, user, users, _i, _len;
    users = [
      {
        name: 'Анжелика',
        title: 'Очень длинное сообщение'
      }, {
        name: 'Анастасия',
        title: 'Очень длинное сообщение'
      }, {
        name: 'Евгения',
        title: 'Очень длинное сообщение'
      }, {
        name: 'Анна',
        title: 'Очень длинное сообщение'
      }, {
        name: 'Екатерина',
        title: 'Очень длинное сообщение'
      }, {
        name: 'Ольга',
        title: 'Очень длинное сообщение'
      }, {
        name: 'Ирина',
        title: 'Очень длинное сообщение'
      }, {
        name: 'Марина',
        title: 'Очень длинное сообщение'
      }
    ];
    rows = [];
    for (index = _i = 0, _len = users.length; _i < _len; index = _i += 2) {
      user = users[index];
      row = [users[index], users[index + 1]];
      rows.push(row);
    }
    $scope.rows = rows;
    $scope.users = users;
    $scope.currentLang = 'Русский';
    $scope.activeTab = 'users';
    return $scope.scrollbarUpdate = function() {
      if ($scope.scrollbarAPI != null) {
        return $scope.scrollbarAPI.update();
      } else {
        $('#container').tinyscrollbar();
        return $scope.scrollbarAPI = $('#box').data("plugin_tinyscrollbar");
      }
    };
  }).directive('onFinishRender', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        if (scope.$last) {
          return $timeout(function() {
            return scope.$evalAsync(attr.onFinishRender);
          }, 0);
        }
      }
    };
  });

}).call(this);
