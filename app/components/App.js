import List from './List';
import SimpleState from 'react-simple-state';
import simpleState from '../SimpleState'

class App extends React.Component {
    constructor() {
        super();

        // Setting up initial state data to be used across the App components
        simpleState.addListener('listdata', {
            names: ['Justas', 'Mindaugas', 'Paulius', 'Saulius', 'Andrius', 'Tadas', 'Mindaugas V', 'Mantas J', 'Mantas'],
            selectedName: '',
        });

    }

    render() {
        return (
            <List></List>
        )
    }
}

module.exports = App;