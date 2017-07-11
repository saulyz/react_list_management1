import classNames from 'classnames';

const Name = ({item, selected, onClick}) => {
    return (
        <span 
            className={classNames('item-name', selected && 'selected')}
            onClick={onClick}>
            {item.name}
        </span>
    )
}

const Badge = ({content}) => (
    <span className="item-box item-badge">{content}</span>
)

const ActionButton = ({content, stylingClass, onClick, buttonType}) => {
    let stylingClasses = ["item-box"];
    if (typeof(buttonType) == 'undefined') {
        stylingClasses = [...stylingClasses, "button-action-default"];
    } else {
        stylingClasses = [...stylingClasses, "button-action-" + buttonType];
    }
    return (
        <button className={classNames(stylingClasses)} onClick={onClick}>{content}</button>
    )
}

const BadgeKarma = ({item}) => {
    const hasKarmaPoints = item.karma;
    if (hasKarmaPoints) {
        return <Badge content={hasKarmaPoints} />;
    } else {
        return null;
    }
}

const Item = ({item, onSelectItem, onAddKarma, onRemoveItem, selected }) => (
    <li>
        <Name 
            item={item}
            selected={selected}
            onClick={(e) => {onSelectItem(e, item.id)}}
        /> 
        <BadgeKarma item={item} />
        <span className="item-separator">|</span> 
        <ActionButton 
            content="Add karma"
            onClick={(e) => {onAddKarma(item.id)}}
        />
        <ActionButton 
            content="Remove"
            buttonType="primary"
            onClick={(e) => {onRemoveItem(item.id)}}
        />
    </li>
)

module.exports = Item;