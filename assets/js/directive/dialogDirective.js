'use strict';
//angular.module(myApp)
app.directive('dialogDirective', function () {
    return {
        templateUrl: '../assets/template/directive/dialogDirectiveView.html',
        scope: {
            title: '=',
            onClose: '&',
            showModal: '=',
            showClose: '=',
            showSave: '='
        },
        transclude: {
            'title': '?dialogTitle',
            'body': 'dialogBody',
            'footer': 'dialogFooter'
        },

        link: function (scope, element, attr, controllers) {

            if (scope.showSave.label != null) {
                scope.saveLabel = scope.showSave.label;
            } else {
                scope.saveLabel = 'save';
            }

            if (scope.showClose.label != null) {
                scope.closeLabel = scope.showClose.label;
            } else {
                scope.closeLabel = 'Close';
            }
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
