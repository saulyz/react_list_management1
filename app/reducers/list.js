
const initialListState = [{id: 0, name: 'Saulius', karma: 0}, {id: 1, name: 'Andrius', karma: 0}];
let itemId = 2;

const list = (state = initialListState, action) => {
    console.log('### Redux ###');
    console.log(action);
    switch (action.type) {
        case 'ADD_ITEM': 
            return [...state, {id: itemId++, name: action.name, karma: 0}];
        case 'REMOVE_ITEM':
            const itemIdToRemove = (item) => item.id != action.id;
            return state.filter((itemIdToRemove)
            );
        case 'ADD_KARMA':
            return state.map(item => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {karma: item.karma + 1})
                }
                return item
            });
        default:
            return state;
    }
}

module.exports = list;