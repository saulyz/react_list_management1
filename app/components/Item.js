
const Item = ( props ) => {
    return (
        <li 
            onClick={(evt) => {
                evt.persist();
                props.selectItemEvent(evt)}
            }
            className={props.selected === props.name && 'selected'} >
            {props.name} 
        </li>
    )
}

module.exports = Item;