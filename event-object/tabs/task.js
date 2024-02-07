const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('tab_active');
        })

        tab.classList.add('tab_active');

        tabContents.forEach((content) => {
            if(content.classList.contains('tab__content_active')){
                content.classList.remove('tab__content_active');
            }
            
            const activeIndex = tabContents[index];
            activeIndex.classList.add('tab__content_active');
        })
    })
})