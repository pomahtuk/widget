(function() {
  var chunk;

  chunk = function(array, amount) {
    var arr, i, row, rows, _i, _ref;
    arr = angular.copy(array);
    rows = [];
    for (i = _i = 0, _ref = arr.length - 1; amount > 0 ? _i <= _ref : _i >= _ref; i = _i += amount) {
      row = arr.splice(0, amount);
      rows.push(row);
    }
    return rows;
  };

  angular.module('myApp', ['ngAnimate']).controller('WidgetController', function($scope) {
    var filterUsers, users;
    users = [
      {
        name: 'Анжелика',
        title: 'Очень длинное сообщение',
        language: 'Русский'
      }, {
        name: 'Анастасия',
        title: 'Очень длинное сообщение',
        language: 'Немецкий'
      }, {
        name: 'Евгения',
        title: 'Очень длинное сообщение',
        language: 'Французский'
      }, {
        name: 'Анна',
        title: 'Очень длинное сообщение',
        language: 'Английский'
      }, {
        name: 'Екатерина',
        title: 'Очень длинное сообщение',
        language: 'Английский'
      }, {
        name: 'Ольга',
        title: 'Очень длинное сообщение',
        language: 'Русский'
      }, {
        name: 'Ирина',
        title: 'Очень длинное сообщение',
        language: 'Русский'
      }, {
        name: 'Марина',
        title: 'Очень длинное сообщение',
        language: 'Русский'
      }
    ];
    $scope.rows = chunk(users, 2);
    $scope.users = users;
    $scope.scrollbarUpdate = function() {
      $('.nano').nanoScroller({
        iOSNativeScrolling: true,
        sliderMaxHeight: 180
      });
      return true;
    };
    filterUsers = function() {
      var filterredUsers;
      if ($scope.applyFilter === true) {
        filterredUsers = $.grep($scope.users, function(element, index) {
          return element.language === $scope.currentLang;
        });
        return $scope.rows = chunk(filterredUsers, 2);
      } else {
        return $scope.rows = chunk($scope.users, 2);
      }
    };
    $scope.$watch('applyFilter', function(newVal, oldVal) {
      if (newVal != null) {
        return filterUsers();
      }
    });
    return $scope.$watch('currentLang', function(newVal, oldVal) {
      if (newVal != null) {
        return filterUsers();
      }
    });
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
