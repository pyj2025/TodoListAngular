// angular.module('todo').controller('TodoCtrl', ['$scope', function($scope, todoStorage) {
    
angular.module('todo').controller('TodoCtrl', function($scope, todoStorage) {


    $scope.name = 'Kkei';
    
    $scope.todos = todoStorage.get();

    // $scope.todo = {
    //     title : 'hw1',
    //     completed : false,
    //     createdAt : Date.now()
    // }

    // $scope.todos = [
    //     {
    //         title : 'hw1',
    //         completed : false,
    //         createdAt : Date.now()
    //     },
    //     {
    //         title : 'hw2',
    //         completed : false,
    //         createdAt : Date.now()
    //     },
    //     {
    //         title : 'hw3',
    //         completed : true,
    //         createdAt : Date.now()
    //     }
    // ]

    $scope.remove = function (todo) {
        // alert();
        // var checker = $scope.todos.findIndex(function(item) {
        //     return item === todo;
        // });

        // if(checker > -1) {
        //     $scope.todos.splice(checker, 1);
        // }
        todoStorage.remove(todo);
    }

    $scope.add = function (newTodoTitle) {
        // alert(newTodoTitle);

        // var newTodo = {
        //     title : newTodoTitle,
        //     completed : false, 
        //     createdAt : Date.now()
        // };
        
        // $scope.todos.push(newTodo);

        todoStorage.add(newTodoTitle);
        $scope.newTodoTitle = "";

        
    }
    $scope.update = function () {
        // alert();
        todoStorage.update();
    }

});

