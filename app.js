/**
 * Created by ubuntu on 1/15/16.
 */


(function(){


    angular
        .module("myApp", ["ngMaterial","firebase","ngMdIcons"])

        .controller("appController", ["$firebaseArray",appController]);

    //////////main controller/////////////////////////
    function appController( $firebaseArray  ) {

        _this = this;

        var rawData = new Firebase("https://material-todo-app.firebaseio.com");

        _this.todoList = $firebaseArray(rawData);


        ////////////add a to-do///////////////////////
        _this.addTodo = function(){

            if(!_this.newTodo)
                return;

            _this.todoList.$add({
                    text : _this.newTodo ,
                    status : 1
                });
            _this.newTodo = "";
        };

        //////////mark to-do as done//////////////////////////
        _this.markDone = function(record){

            if(record.status == 2)
                return;

            record.status = 2;
            _this.todoList.$save(record);

        };


        //////////mark to-do as not done//////////////////////////
        _this.markNotDone = function(record){

            if(record.status == 1)
                return;

            record.status = 1;
            _this.todoList.$save(record);

        };


        ///////////detete a to-do///////////////////////////////////
        _this.deleteTodo = function(record){
            _this.todoList.$remove(record);
        };


        //////////open menu code//////////////////////////////
        _this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };







    }




})();





