async function restcountries() {
    
    var res = await fetch("https://restcountries.com/v2/all");
    var out = await res.json();
    

for ( var keys in out){

// var country = out[keys].name;

var rows = document.getElementById("rows");
var div = document.createElement("div");
div.setAttribute("class", "col-lg-4 col-sm-6"); 

div.innerHTML  = `
<div class="card-header">
<div id="namediv">${out[keys].name}</div>

<div class="card-body">
<img src="${out[keys].flag}" class="card-img-top" alt="...">
<div id="countrydetails">
    <h6 id="capital">Capital: ${out[keys].capital}</h6>
    <h6 id="region">Region : ${out[keys].region}</h6>
    <h6 id="countrycode">Country code : ${out[keys].alpha3Code}</h6>
    
    <button type="button" class="btn btn-primary" onclick="toshowweather('${out[keys].name}')">click for weather</button>
    </div>
    <div id="weatherfor-${out[keys].name}" style="background-color: transparent;"></div>
</div>

</div>

`;

rows.append(div)


};
  






};


restcountries();




// async function toshowweather(nameee){

//     // const apikey = "b82f495113770f253e882a7a774377da";
//     // const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

//     // var res = await fetch(api + `&appid=${apikey}` + `&q=${countryname}`);
//     // var result = await res.json();

 
async function toshowweather(countryname){

var target = document.getElementById(`weatherfor-${countryname}`);


 const apikey = "b82f495113770f253e882a7a774377da";
 const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

 var res = await fetch(api + `&appid=${apikey}` + `&q=${countryname}`);
 var result = await res.json();


 target.innerHTML= `
Weather : ${result.weather[0].main} <br>
Weather desc : ${result.weather[0].description} <br>
lat : ${result.coord.lat} , lon : ${result.coord.lon}

  `;
}

