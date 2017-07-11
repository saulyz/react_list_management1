
const initialListState = [{name: 'Saulius'}, {name: 'Andrius'}];

const list = (state = initialListState, action) => {
    console.log('Rx --- :');
    console.log(action);
    switch (action.type) {
        case 'ADD_ITEM': 
            return [...state, {name: action.name}];
        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

module.exports = list;