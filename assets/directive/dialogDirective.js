'use strict';
//angular.module(myApp)
app.directive('dialogDirective', function () {
    return {
        templateUrl: '../assets/template/directive/dialogDirectiveView.html',
        scope: {
            title: '=',
            onClose: '&',
            showModal: '='
        },
        transclude: {
            'title': '?dialogTitle',
            'body': 'dialogBody',
            'footer': 'dialogFooter'
        },

        link: function (scope, element, attr) {

            scope.clickSave = function () {
                console.log('Ho salvato dalla direttiva');
            };

            scope.close = function () {
                if (scope.onClose()) {
                    scope.showModal = false;
                }
            };
        }
    }
});
