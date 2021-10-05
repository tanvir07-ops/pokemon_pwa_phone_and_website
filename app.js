// // pokemonList ke select korlam man e holo kon pokemon select korbo take target korlam const pokemonList diye:
// const pokemonList  = document.getElementById("pokemonList");
// // defaultPokemon er means holo page er first e jate 1 number pokemon tah select kora thake:

// const defaultPokemon = "https://pokeapi.co/api/v2/pokemon/1/";

// const pokemonCard = document.getElementById("pokemonCard");

// // jokhon ei window mane e screen ta load hobe tokhon ei getPokemonList() function ti kaaj kobe:
// window.addEventListener("load", (e) => {

//     // jehetu ami promise theke response paisi man e resolve paisi tai .then() method ti use kore jate defatultPokemon ti dekhte pai tar code:

//   getPokemonList().then(() => {
//       showPokemonCard(defaultPokemon);
//   });

// //   pokemonList er  moddeh jekono pokemon ke select korle jate oi pokemon er details dekhay tar code:
// pokemonList.addEventListener("change", (e) => {
//     showPokemonCard(e.target.value);
// });

//   registerServiceWorker();



// })


// // api theke data niye aslam nicher getPokemonList() function er maddome:

// async function getPokemonList() {
  
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35");
//     const json = await response.json();
//     // console.log(json)
   
// //    api er every results ke html e show koralam map namok ekti iterable diye(mane e for loop er moto!):
//     pokemonList.innerHTML = json.results.map(
//        (result) => `<option value="${result.url}">${result.name}</option>`

//     )
  

// }



// // pokemonlist e select korle jate pokemon gula show kora tar jonne nicher function ta:

// async function showPokemonCard(url){
//     // ei function e parameter hishebe url deoaar means holo je ekek pokemon er name er jonne ekek pokemon show korbe tai:!
   
	


//         try {
//             const response = await fetch(url);
//             const json = await response.json();
    
//             pokemonCard.innerHTML = createCard(json);


//         }
	    
//         catch (error) {
//             console.log("Network is unavailable");
//             pokemonCard.innerHTML = offlineCard();

//         }
  
// }

// // for offlineCard shows a network unavailable in div in pokemonCard:


// function offlineCard() {
// 	return `
//         <div class="card-header">
//             <p>Network is unavailable</p>
//         </div>
//     `;
// }



// function createCard(pokemon){
//     return `
//     <div class = "card-header">
//     <h2>#${pokemon.id}</h2>
// </div>
// <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top" height = "150px" width = "150px">
//  <div class="card-body">
//   <h5 class="card-title" style = "text-transform: capitalize;">${pokemon.name}</h5>
//   <div class="badge badge-warning ">Height : ${pokemon.height}</div>
//   <div class ="badge badge-danger">Weight : ${pokemon.weight}</div>
 
//  </div>`
// }




// // nicher function ta holo amra jate amader localhost e run korate pari ei index.html file e click nah korei django teh jevabe run korate pari sevabe(localhost:8000):

// async function registerServiceWorker(){

//     if("serviceWorker" in navigator){
//         try {
//               await navigator.serviceWorker.register("sw.js")
//         }
//         catch(error){
//              console.log("Failed : "+error);
//         }
//     }

//     // ar terminal e likha lagbe localhost e run koranor jonne:
//     // python -m http.server 8000

// }







const pokemonList = document.querySelector("#pokemonList");

const defaultPokemon = "https://pokeapi.co/api/v2/pokemon/1/";
const pokemonCard = document.querySelector("#pokemonCard");

window.addEventListener("load", (e) => {
	getPokemonList().then(() => {
		showPokemonCard(defaultPokemon);
	});

	pokemonList.addEventListener("change", (e) => {
		showPokemonCard(e.target.value);
	});

	registerServiceWorker();
});

async function getPokemonList() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35");
	const json = await response.json();

	pokemonList.innerHTML = json.results.map(
		(result) => `<option value="${result.url}">${result.name}</option>`
	);
}

async function showPokemonCard(url) {
	try {
		const response = await fetch(url);
		const json = await response.json();

		pokemonCard.innerHTML = createCard(json);
	} catch (error) {
		console.log("Network is unavailable");
		pokemonCard.innerHTML = offlineCard();
	}
}

function offlineCard() {
	return `
        <div class="card-header">
            <p>Network is unavailable</p>
        </div>
    `;
}

function createCard(pokemon) {
	return `
    <div class="card-header">
        <h2>#${pokemon.id}</h2>
    </div>
    <img
        src="${pokemon.sprites.other.dream_world.front_default}"
        class="card-img-top"
        width="150"
		height="150"
		alt="${pokemon.name}"
    />
    <div class="card-body">
        <h3
            class="card-title"
            style="text-transform: capitalize"
        >
            ${pokemon.name}
        </h3>
        <div class="badge badge-warning">Height: ${pokemon.height}</div>
        <div class="badge badge-danger">Weight: ${pokemon.weight}</div>
    </div>
    `;
}

async function registerServiceWorker() {
	if ("serviceWorker" in navigator) {
		try {
			await navigator.serviceWorker.register("sw.js");
		} catch (error) {
			console.log("Failed: ", error);
		}
	}
}





