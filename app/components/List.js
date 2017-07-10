import Item from './Item'
import Input from './Input'
import { connect } from 'react-redux';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.selectName = this.selectName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    
    selectName(newItemSelected) {
        // redux
        this.props.selectItemDispatch(newItemSelected);
    }

    addItem(evt) {
        if (evt.key == 'Enter') {
            console.log('New name submitted: ', evt.target.value);
            let newItemEntered = evt.target.value;
            this.inputElement.value = '';   // clearing DOM element via React ref handle

            // redux
            this.props.addItemDispatch(newItemEntered);
        }
    }

    removeItem(evt) {
        // redux
        dispatch({ type: 'REMOVE_ITEM'});
    }
 
    render() {
        return (
            <div className="container">
                <h3 className="title">Room mates list</h3>
                <ul className="list">
                    {this.props.list.map((itemObj, i) => {
                        console.log('List Item object', itemObj, i);
                        return (
                            <Item 
                                key={i}
                                position={i}
                                name={itemObj.name} 
                                selectItemEvent={this.selectName} 
                                removeItemEvent={this.removeItem}
                                selected={this.props.select}>
                            </Item>
                        )
                    })}
                </ul>
                <hr className="separator"/>
                <Input 
                    inputRef={el => this.inputElement = el} 
                    keyPressEvent={this.addItem}>
                </Input>
            </div>
        )
    }
}

// Connecting redux (mapping)

const mapStateToProps = state => {
    return {
        list: state.list,
        select: state.select
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemDispatch: (name) => {
        dispatch({ type: 'ADD_ITEM', name: name})
    },
    selectItemDispatch: (index) => {
        dispatch({ type: 'SELECT_ITEM', index: index})
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);