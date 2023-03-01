// load data function 
const loadPhones = async () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    const res = await fetch(url);
    const data = await res.json();
    displyPhones(data.data);
}

const displyPhones = phones => {
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        // create element 
        const phoneDiv = document.createElement('div');
        // add class list dynamically
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        
        `;
    })
}

// call the function
loadPhones();