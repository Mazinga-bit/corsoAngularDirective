'use strict';
//angular.module( myApp )
app.controller('controllerMain', controllerMain);

function controllerMain(deferredRequest) {

    var vm = this;

    vm.showClose = {
        show: true,
        label: null
    };
    vm.showSave = {
        show: true,
        label: 'Directive Save'
    };

    vm.onDialogClose = function () {
        return confirm('Vuoi chiudere?');
    };

    vm.clickSave = function () {
        console.log('Ho salvato dal controller padre');
    };

    deferredRequest.getName().then(function(name){
       vm.name = name;
    });
}
