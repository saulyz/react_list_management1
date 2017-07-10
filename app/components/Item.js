const Item = ( props ) => {
    return (
        <li 
            onClick={(evt) => {
                evt.persist();
                props.selectItemEvent(props.position)}
            }
            key={props.position}  // avoid using props.key
            className={props.selected === props.position && 'selected'} >
            {props.name} 
        </li>
    )
}

module.exports = Item;