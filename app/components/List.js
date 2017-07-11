import Item from './Item'
import Input from './Input'
import { connect } from 'react-redux';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        }

        this.selectItem = this.selectItem.bind(this);
    }
    
    selectItem(evt, itemId) {
        this.setState({
            selected: itemId
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Room mates list</h3>
                <ul className="list">
                    {console.log('Current list:', this.props.list)}
                    {this.props.list.map(item =>
                        <Item 
                            key={item.id}
                            item={item}
                            onSelectItem={this.selectItem}
                            onAddKarma={this.props.addKarma}
                            onRemoveItem={this.props.removeItem}
                            selected={this.state.selected === item.id} 
                        />
                    )}
                </ul>
                <hr className="separator"/>
                <Input 
                    inputRef={el => this.inputElement = el} 
                    keyPressEvent={(e) => {
                        if (e.key == 'Enter') {
                            this.props.addItem(e.target.value)
                            this.inputElement.value = '';   // clearing DOM element via React ref handle
                        }
                    }}
                />
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
    addItem: (name) => {
        dispatch({ type: 'ADD_ITEM', name: name})
    },
    removeItem: itemId => {
        dispatch({ type: 'REMOVE_ITEM', id: itemId})
    },
    addKarma: itemId => {
        dispatch({ type: 'ADD_KARMA', id: itemId})
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);