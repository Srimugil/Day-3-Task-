function reqListener() {
    console.log(this.responseText);
    const countryArr = JSON.parse(this.responseText);
    console.log(countryArr);
    for (let country of countryArr){
        console.log(country.name.common);
        console.log(country.subregion);
        console.log(country.region);
        console.log(country.population);
    }

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();