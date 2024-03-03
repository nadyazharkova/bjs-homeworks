const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        let oldText = tooltip;
        if (oldText.textContent != elem.title) {
            tooltip.classList.add('tooltip_active');
            oldText.innerText = elem.title;

            console.log(elem.title);
            console.log(oldText.textContent)
        } else {
            oldText.innerText = '';
            tooltip.classList.remove('tooltip_active');
        }

        let coords = elem.getBoundingClientRect();
        oldText.style.left = coords.left + "px";
        oldText.style.top = coords.top + 20 +"px";
    })
})