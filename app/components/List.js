import Item from './Item'
import Input from './Input'
import SimpleState from 'react-simple-state'
import simpleState from '../SimpleState'

class List extends React.Component {
    constructor(props) {
        super(props);

        const listdata = simpleState.getState('listdata');

        this.state = {
            listdata: listdata
        }

        this.selectName = this.selectName.bind(this);
        this.addName = this.addName.bind(this);
    }
    
    componentWillMount() {
        simpleState.subscribe('listdata', this, (nextlistdata) => {
            this.setState({
                listdata: nextlistdata
            });
        });
    }

    componentWillUnmount() {
        simpleState.unsubscribe('listdata', this);
    }

    selectName(evt) {
        let listdataClone = this.state.listdata;
        listdataClone.selectedName = evt.target.textContent;
        simpleState.evoke('listdata', listdataClone);
    }

    addName(evt) {
        if (evt.key == 'Enter') {
            console.log('New name submitted: ', evt.target.value);
            let listdataClone = this.state.listdata;
            listdataClone.names.push(evt.target.value);
            simpleState.evoke('listdata', listdataClone);
            console.log('After state change :', this.state.listdata);

            this.inputElement.value = '';   // clearing DOM element via React ref handle
        }
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Room mates list</h3>
                <ul className="list">
                    {this.state.listdata.names.map((nameval) => {
                        return (
                            <Item 
                                key={nameval} 
                                name={nameval} 
                                selectItemEvent={this.selectName} 
                                selected={this.state.listdata.selectedName}>
                            </Item>
                        )
                    })}
                </ul>
                <hr className="separator"/>
                <Input 
                    inputRef={el => this.inputElement = el} 
                    keyPressEvent={this.addName}>
                </Input>
            </div>
        )
    }
}

module.exports = List;