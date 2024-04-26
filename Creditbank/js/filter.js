const list = document.querySelector('.list')
const items = document.querySelectorAll('.card')
const listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }

        switch(targetId) {
            case 'all' :
                getItems('card')
                break
            case 'cash' :
                getItems(targetId)
                break
            case 'ref' :
                getItems(targetId)
                break
            case 'another' :
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) { 
    items.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }

    })  
}