'use strict';
//angular.module(myApp)
app.directive('tabsDirective', function () {
    return {
        templateUrl: '../assets/template/directive/tabsDirectiveView.html',
        transclude: true,
        scope: {},
        controller: function tabs($scope){
            var tabs = $scope.tabs = [];
            //$scope.tabs= ["Link a", "Link b"];
            $scope.select = function(tab) {
                angular.forEach(tabs, function(tab) {
                    tab.selected = false;
                });
                tab.selected = true;
            };
            this.addTab = function(tab){
                if (tabs.length === 0) {
                    $scope.select(tab);
                }
                tabs.push(tab);
            }
        },
        //link: function (scope, element, attr) {
        //    scope.tabs= ["Link a", "Link b"];
        //}


    }
});

app.directive('tabContent', function () {
    return {
        require: "^^tabsDirective",
        templateUrl: '../assets/template/directive/tabContentDirectiveView.html',
        transclude: true,
        scope: {
            title: "@"
        },
        link: function(scope, element, attrs, controller){
            controller.addTab(scope);
        }
    }
});