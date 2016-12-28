var React = require('React');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                timestamp = completedAt;
                message = 'Completed ';
            }
            return message + moment.unix(timestamp).format('MMM Do, YYYY @ HH:mm');
        };

        return (
            <div onClick={() => {
                    this.props.onToggle(id);
                }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;
