const Input = (props) => {
    return (
        <div>
            <p><small>Type in and press Enter to add new name</small></p> 
            <input 
                type="text" 
                name="newname"
                ref={props.inputRef}
                value={props.value}
                onKeyPress={evt => {
                    props.keyPressEvent(evt)
                }}
                className="input-text w-450"
            />
        </div> 
    )
}

module.exports = Input;