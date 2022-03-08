const results = document.querySelector('#results');


async function asyncFetch(value) {
    const res = await fetch (`https://swapi.dev/api/films/1/${value}/`)
    const data = await res.json();
    displayResults(data,value)
}


function displayResults(data,value) {
    let output = ""
    if(value === 'films') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" stle="opacity:.8"
            <h4 class="card-title text-center">${item.title}</h4>
            <div class="card-content">
            <span style="text-decoration:underline">producer</span>: ${item.producer}<br>
            <span style="text-decoration:underline">director</span>: ${item.director}<br>
            <span style="text-decoration:underline">release date</span>: ${item.release_date}<br>
            <p class="text-center">${item.opening_craw}</p>
            </div>
            `
        })
    }
    if(value === 'people') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" stle="opacity:.8"
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
            <span style="text-decoration:underline">height</span>: ${item.height}<br>
            <span style="text-decoration:underline">birth year</span>: ${item.birth_year}<br>
            <span style="text-decoration:underline">skin color</span>: ${item.skin_color}<br>
            </div>
            `
        })
    }
    if(value === 'vehicles') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" stle="opacity:.8"
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
            <span style="text-decoration:underline">capacity</span>: ${item.cargo_capacity}kg<br>
            <span style="text-decoration:underline">model</span>: ${item.model}<br>
            <span style="text-decoration:underline">manufacturer</span>: ${item.manufacturer}<br>
            <span style="text-decoration:underline">vehicle class</span>: ${item.vehicle_class}<br>
            </div>
            `
        })
    }
    results.innerHTML =output
}

//event listener for buttons
document.querySelector('#buttons').addEventListener('click', e =>{
    asyncFetch(e.target.textContent.trim().toLowerCase());
})