(function() {
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
    $scope.users = users;
    $scope.scrollbarUpdate = function() {
      $('.nano').nanoScroller({
        iOSNativeScrolling: true,
        sliderMaxHeight: 180
      });
      return true;
    };
    filterUsers = function() {
      if ($scope.applyFilter === true) {
        return $scope.users = $.grep(users, function(element, index) {
          return element.language === $scope.currentLang;
        });
      } else {
        return $scope.users = users;
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
