import { createStore } from 'redux';
import list from '../reducers';

const store = createStore(list);

module.exports = store;