import List from './List';
import { Provider } from 'react-redux'
import store from '../store/store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <List />
            </Provider>
        )
    }
}

module.exports = App;