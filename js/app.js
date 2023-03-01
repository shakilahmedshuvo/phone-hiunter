// load data function 
const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displyPhones(data.data);
}

const displyPhones = phones => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = "";
    // display 20 phones only
    phones = phones.slice(0, 21);

    // display no phones found  
    const noPhone = document.getElementById('no-phone-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    // display all phones 
    else {
        noPhone.classList.add('d-none');
    };
    phones.forEach(phone => {
        // create element 
        const phoneDiv = document.createElement('div');
        // add class list dynamically
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv)

    })
    // stop spinner or loader
    toggleSpinner(false)
}

// handle search btn click
document.getElementById('btn-search').addEventListener('click', function () {
    // start loader]
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

// call the function
// loadPhones();