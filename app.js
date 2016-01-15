/**
 * Created by ubuntu on 1/15/16.
 */


(function(){


    angular
        .module("myApp", ["ngMaterial","firebase"])
        .controller("appController", ["$firebaseArray",appController]);

    function appController( $firebaseArray ) {

        _this = this;

        var rawData = new Firebase("https://material-todo-app.firebaseio.com");

        _this.todoList = $firebaseArray(rawData);



        _this.add = function(text){

            if(!text)
                return;

            _this.todoList.$add({
                    text : text ,
                    status : 1
                });
            _this.newTodo = "";

        };


        _this.markDone = function(record){

            record.status = 2;
            _this.todoList.$save(record);



        };









        this.name = "abc inzwd klhdsd";
    }




})();





