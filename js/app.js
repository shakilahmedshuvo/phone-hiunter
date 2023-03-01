// load data function 
const loadPhones = async () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    const res = await fetch(url);
    const data = await res.json();
    displyPhones(data.data);
}

const displyPhones = phones => {
    const phonesContainer = document.getElementById('phones-container');
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
        phonesContainer.appendChild(phoneDiv);
    })
}

// 
document.getElementById('btn-search').addEventListener('click', function () {

})


// call the function
loadPhones();