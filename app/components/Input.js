const Input = (props) => {
    return (
        <div>
            <p><small>Type in and press Enter to add new name</small></p> 
            <input 
                type="text" 
                name="newname" 
                value={props.value}
                onChange={evt => {
                    evt.persist();
                    props.changeValueEvent(evt);
                }}
                onKeyPress={evt => {
                    props.keyPressEvent(evt)
                }}
                className="input-text w-450"
            />
        </div> 
    )
}

module.exports = Input;