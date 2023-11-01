
//MIN API URL
let url = "https://majazocom.github.io/Data/solaris.json" 


//MIN DOM
let planetDesc = document.getElementById("planet-description")
let planetTempDay = document.getElementById("planet-tempday")
let planetTempNight = document.getElementById("planet-tempnight")
let planetCircumference = document.getElementById("planet-circumference")
let planetMoons = document.getElementById("planet-moons")
let planetName = document.getElementById("planet-name")
let planetPopUp = document.querySelector(".planet-inside-pop-up")





//HÄMTA API DATAN
const fetchAPI = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch key")
        }
        const data = await response.json()
         console.log(data)
         //SPARA DATAN I PLANETS. GÖR EN FOREACH SOM GÅR IGENOM HIMMELKROPPARNA 1 OCH 1 OCH SEDAN ANROPAR MIN POPUP FUNCTION FÖR ATT DE SKA BLI TILL VARJE HIMMELKROPP 
         planets = data
        planets.forEach(planet => {
            
            planetsPopUp(planet);
           
        });

    }
    catch (error) {
        console.error("Error fetching key", error);
    }
}

fetchAPI();
//PopUP
const planetsPopUp = (planet) => {
    document.getElementById(planet.latinName).addEventListener("click", () => {
        planetDesc.innerText = planet.desc
        planetName.innerText = planet.name
        planetTempDay.innerText = "TEMPERATUR DAGTID: " + planet.temp.day + "C"
        planetTempNight.innerText = "TEMPERATUR NATTID: " + planet.temp.night + "C"
        planetCircumference.innerText = "OMKRETS: "+ planet.circumference + " km"
        planetMoons.innerText = "MÅNAR: " + planet.moons
        planetPopUp.className = `planet-inside-pop-up ${planet.latinName}`

        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex"; 
        /* console.log(planet) */
    });
    document.getElementById("closeButton").addEventListener("click", () => {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
    }); 
    /* console.log(planet.latinName) */
} 



// FUNKAR EJ VET EJ VARFÖR.

/* let url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/"

// hämta api-nyckel först
const fetchAPIKey = async () => {
    try {
        const keyResponse = await fetch(`${url}/keys`, {
            method: "POST",
        })

        if (!keyResponse.ok) {
            throw new Error("Failed to fetch key")
        }
        let apiKey = await keyResponse.json()
        apiKey = apiKey.key
        console.log(apiKey)
        return apiKey;
    }

    catch (error) {
        console.error("Error fetching key", error);
    }
}
// funktion för att hämta himlakropparna från api'et mha api-nyckel
const fetchBodies = async () => {
    let key = await fetchAPIKey();

    console.log(`'x-zocom': '${key}'`);
    try {
        const response = await fetch(`${url}/bodies`, {
            method: "GET",
            mode: "no-cors",
            headers: { 'x-zocom': `${key}`}
        })

        if (!response.ok) {
            throw new Error("Failed to fetch bodies")
        }
        const data = await response.json()
        console.log(data)
        planets = data
        planets.forEach(planet => {
            console.log(planet.latinName)
            document.getElementById(planet.latinName).addEventListener("click", () => {
                console.log(planet)
            })
        });
    }

    catch (error) {
        console.error("Error fetching body", error);
    }
}
fetchBodies();  */











