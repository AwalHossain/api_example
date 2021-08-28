const country  = document.getElementById('country');


const countryList = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then (data => displayCountries(data))
}

countryList();

const displayCountries = counties =>{
    // console.log(counties);
    counties.forEach(single =>{
        // console.log(single.name);
        const div = document.createElement('div')
      div.innerHTML = `
        <div class="details">
        <h2>${single.name} </h2>
        <p>${single.capital} </p>
        <button onclick=loadCountryByName('${single.name}')>Details</button>
    
        `
        
        country.appendChild(div)
       
    })
}
const countryDetails = document.getElementById('details')

const loadCountryByName = (name) =>{
console.log(`${name}`);
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    console.log(url);
     fetch(url)
    .then(response => response.json())
    .then(dataFlag =>{
        displayFlag(dataFlag)
    } )


}

const displayFlag = (dataFlag) =>{
console.log(dataFlag[0].name);
countryDetails.innerHTML = `
<h2>${dataFlag[0].name} </h2>
<img width="250px"  src="${dataFlag[0].flag} ">
`
}

