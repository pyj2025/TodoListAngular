angular.module('todo').directive('todoTitle', function() {
    return {
        template : '<h1>TodoList Angular</h1>'
    }
});

angular.module('todo').directive('todoItem', function() {
    return {

        templateUrl : 'todoItem.tpl.html'

        // template : '<div class="input-group mb-3">' +
        //                 '<div class="input-group-prepend">' +
        //                     '<div class="input-group-text">' +
        //                         '<input type="checkbox" ng-model="todo.completed">' +
        //                     '</div>' +
        //                 '</div>' +
        //                 '<input type="text" class="form-control" ng-model="todo.title">' +
        //                 '<button class="btn btn-danger" type="button" id="button-addon2" ng-click="remove(todo)">Delete</button>' +
        //             '</div>' +
        //             '<date>{{ todo.createdAt | date : \'yyyy-MM-dd hh:mm:ss\' }}</date>'   


    }
});

angular.module('todo').directive('todoFilters', function() {
    return {
        templateUrl : 'todoFilters.tpl.html'
    }
});

angular.module('todo').directive('todoForm', function() {
    return {
        templateUrl : 'todoForm.tpl.html'
    }
});