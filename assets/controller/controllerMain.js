'use strict';
angular.module( myApp )
    .controller('controllerMain', controllerMain);

    function controllerMain(){

        var vm = this;

        vm.onDialogClose = function(){
            return confirm( 'Vuoi chiudere?' );
        };

        vm.clickSave = function(){
            console.log('Ho salvato dal controller padre');
        };
    }
