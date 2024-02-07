const toggleList = ({list, activeClassNames}) => list.classList.toggle(activeClassNames);
const renderValue = ({value, containerValue}) => containerValue.textContent = value;

const onItemClick = options => {
    const {
        event,
        list,
        container,
        containerValue,
        containerClassName,
        linkClassName,
        listClassName
    } = options;

    const target = event.target.closest(`.${linkClassName}`);
    
    if (!target) {
        return;
    }

    const currentContainer = target.closest(`.${containerClassName}`);

    if (currentContainer !== container) {
        return;
    }

    event.preventDefault();

    const value = target.textContent.trim();

    renderValue({value, containerValue});

    toggleList({
        list,
        activeClassNames: listClassName
    });
}

const initDropDown = options => {
    const {container, classNames} = options;
    const list = container.querySelector(`.${classNames.list}`);
    const containerValue = container.querySelector(`.${classNames.value}`);

    container.addEventListener('click', () => toggleList({
        list,
        activeClassNames: classNames.activeList,
    }));
    
    document.addEventListener('click', event => onItemClick ({
        event,
        list, 
        container,
        containerValue,
        listClassName: classNames.activeList,
        containerClassName: classNames.container,
        linkClassName: classNames.link
    }))
}

initDropDown({
    container: document.querySelector('.dropdown'),
    classNames: {
        container: 'dropdown',
        link: 'dropdown__link',
        value: 'dropdown__value',
        list: 'dropdown__list',
        activeList: 'dropdown__list_active'
    }
})