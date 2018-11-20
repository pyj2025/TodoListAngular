angular.module('todo').factory('todoStorage', function() {
    var TODO_DATA = 'TODO_DATA';
    var storage = {
        // todos : [
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
        // ],
        todos : [],
        _saveToLocalStorage : function(data) {
            localStorage.setItem(TODO_DATA, JSON.stringify(data))
        },

        _getFromLocalStorage : function() {
            return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
        },

        get : function() {
            // storage.todos = storage._getFromLocalStorage()
            angular.copy(storage._getFromLocalStorage(), storage.todos);
            return storage.todos;
        },

        remove : function(todo) {
            var checker = storage.todos.findIndex(function(item) {
                return item === todo;
            });
    
            if(checker > -1) {
                storage.todos.splice(checker, 1);
                storage._saveToLocalStorage(storage.todos);
    
            }            
        },

        add : function(newTodoTitle) {
            var newTodo = {
                title : newTodoTitle,
                completed : false, 
                createdAt : Date.now()
            };
            
            storage.todos.push(newTodo);
            storage._saveToLocalStorage(storage.todos);
    
            // storage.newTodoTitle = "";
        },

        update : function(newTodoTitle) {
            storage._saveToLocalStorage(storage.todos);
    
        }
    }

    return storage;
});