app.service('deferredRequest', function($q){
    var name = "Marco";
    this.getName = function(){
        var deferred = $q.defer();
        setTimeout(function(){
            deferred.resolve(name);
        }, 300);
        return deferred.promise;
    }
});