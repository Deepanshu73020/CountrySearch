let searchButton = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

countryInp.addEventListener("keyup",function(event){
  if(event.keypress==="enter"){
    event.preventDefault();
    searchButton.click();
  }
});

searchButton.addEventListener("click", () => {
  let countryName = countryInp.value;
  let url = `https://restcountries.com/v3.1/name/${countryName}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      result.innerHTML = `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h1>${data[0].name.common}</h1>
    <div class="wrapper">
      <div class="data-wrapper"> 
      <h2> Capital : </h2>
      <span>${data[0].capital[0]}</span>
      </div>

      <div class="wrapper">
      <div class="data-wrapper"> 
      <h2> Continents : </h2>
      <span>${data[0].continents[0]}</span>
      </div>
      <div class="wrapper">
      <div class="data-wrapper"> 
      <h2> Currencies : </h2>
      <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - "${Object.keys(data[0].currencies)[0]}</span>
      </div>
      </div>`
    })
    .catch (() => {
      if (countryName.length == 0) {
      alert(`Field can't be empty`)
      }
      else {
      alert(`Invalid Country name`)
      }
      document.location.reload(true);

  })
}); 
