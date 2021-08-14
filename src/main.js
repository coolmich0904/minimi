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

// main
loadItems() 
.then(items => {
displayItems(items);
// setEventListeners(items)

})
.catch(console.log);