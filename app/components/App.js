var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List');

// state
// life cycle events
// UI

class App extends React.Component {
    render() {
        return (
            <List></List>
        )
    }
}

module.exports = App;