import classNames from 'classnames';

const Name = (props) => {
    return (
        <span 
            className={classNames('item-name', props.selected === props.position && 'selected')}
            onClick={props.onClick}>
            {props.name}
        </span>
    )
}

const RemoveButton = (props) => {
    return <button className={props.stylingClass} onClick={props.onClick}>Remove</button>
}

const Item = (props) => {
    return (
        <li 
            key={props.position}  // avoid using props.key
            >
            <Name 
                name={props.name}
                position={props.position}
                selected={props.selected}
                className="item-name"
                onClick={(e) => {props.selectItemEvent(props.position)}}
            /> 
            <span className="item-separator">|</span> 
            <RemoveButton 
                position={props.position}
                stylingClass="default"
                onClick={(e) => {props.removeItemEvent(props.position)}}
            />
        </li>
    )
}

module.exports = Item;