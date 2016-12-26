var React = require('React');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos:[
                {
                    id:1,
                    text: 'Walk the dog'
                }, {
                    id:2,
                    text: 'Clean the yard'
                }
            ]
        }
    },
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <ToDoList todos
            </div>
        );
    }
});

module.exports = TodoApp;
