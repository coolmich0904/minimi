
//Fetch the items from JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then (json => json.items);
}

// Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item=> createHtmlString(item)).join('');
}

// Create HTML list from the given data item
function createHtmlString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
            <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const dataset =  event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    // console.log(event.target.dataset.key);
    // console.log(event.target.dataset.value);

    if(key == null || value == null) {
        return;
    }

    // displayItems(items.filter(item => item[key] === value));
    const filtered = items.filtered(item => item[key] === value);
    console.log(filtered);
    displayItems(filtered);

}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));

}

// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items)
    })
    .catch(console.log("Error"));

