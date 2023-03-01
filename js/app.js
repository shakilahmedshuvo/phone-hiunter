// load data function 
const loadPhones = async () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

// call the function
loadPhones();