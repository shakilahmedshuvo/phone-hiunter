// for API to data load 
const loadPhones = async () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    // 1.
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
    // 2.
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}

const displayPhones = phones => {
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        // create the element
        const phoneDiv = document.createElement('div');
        // add the class list

    })
}

// call the function
loadPhones();
