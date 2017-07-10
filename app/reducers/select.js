const initialSelectState = null;

const select = ( state = initialSelectState, action ) => {
    console.log('Rx --- :');
    console.log(action);
    switch (action.type) {
        case 'SELECT_ITEM': 
            return action.index;
        default: 
            return state;
    }
}

module.exports = select;