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
    
    selectName(name) {
        this.setState(() => {
            return {
                selectedName: name
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
            namesBeforeChange.push(newName);
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
            <div>
                <h3>Room mates list</h3>
                <ul className="list">
                    {this.state.names.map((nameval) => {
                        return (
                            <li 
                                name={nameval} 
                                key={nameval} 
                                onClick={this.selectName.bind(null, nameval)}
                                className={this.state.selectedName === nameval && 'selected'}
                            >
                                {nameval} 
                            </li>
                        )
                    })}
                </ul>
                <p>Type and press Enter to add new name</p> 
                <input 
                    type="text" 
                    name="newname" 
                    value={this.state.inputValue}
                    onChange={evt => {
                        evt.persist();
                        this.updateInputValue(evt);
                    }}
                    onKeyPress={evt => {
                        this.addName(evt)
                    }}
                />
            </div>
        )
    }
}

module.exports = List;