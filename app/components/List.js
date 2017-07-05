import Item from './Item';
import Input from './Input';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Justas', 'Mindaugas', 'Paulius', 'Saulius', 'Andrius', 'Tadas', 'Mindaugas V', 'Mantas J', 'Mantas'],
            selectedName: '',
            inputValue: ''
        };

        this.selectName = this.selectName.bind(this);
        this.addName = this.addName.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }
    
    selectName(evt) {
        this.setState(() => {
            return {
                selectedName: evt.target.textContent
            }
        });
    }

    addName(evt) {
        if (evt.key == 'Enter') {
            let newName = evt.target.value;
            let namesBeforeChange = this.state.names;
            console.log('New name submitted: ', newName);
            this.setState(() => {
                return {
                    inputValue: ''
                }
            });
            namesBeforeChange.push(newName.trim());
            this.setState(() => {
                return {
                    names: namesBeforeChange
                }
            })
        }
    }

    updateInputValue(evt) {
        this.setState(() => {
            return {
                inputValue: evt.target.value
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Room mates list</h3>
                <ul className="list">
                    {this.state.names.map((nameval) => {
                        return (
                            <Item key={nameval} name={nameval} selectItemEvent={this.selectName} selected={this.state.selectedName}></Item>
                        )
                    })}
                </ul>
                <hr className="separator"/>
                <Input value={this.state.inputValue} changeValueEvent={this.updateInputValue} keyPressEvent={this.addName}></Input>
            </div>
        )
    }
}

module.exports = List;