const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

for (let elem of hasTooltip) {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        tooltip.classList.toggle('tooltip_active');
        let oldText = tooltip;
        oldText.innerText = elem.title;

        let coords = elem.getBoundingClientRect();
        oldText.style.left = coords.left + "px";
        oldText.style.top = coords.top + 20 +"px";
    })
}
