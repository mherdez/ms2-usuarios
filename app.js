

const getPokemon = async (id) => {
  const peticion = await fetch('https://pokeapi.co/api/v2/pokemon/' + id );
  const data = await peticion.json()
  console.log(data)
  return data
}






// const Pokemon = new Promise((resolve, reject) => {
//   const id = Math.floor(Math.random() * 100 + 1 )
//   const peticion = fetch('https://pokeapi.co/api/v2/pokemon/' + id);

//   if (peticion) {
//     resolve ( peticion.then((data) =>
//     data.json().then( resp => resp)
//   ))

//   } else {
//     reject(error);
//   }
// });


// recorrer todos los nombres

// usuariosPromise.then((usuarios) => {
//   usuarios.forEach( usuario  => {
//     // console.log(usuario.name.first, usuario.name.last, usuario.email, usuario.picture.large)
//     document.querySelector('body').innerHTML += `

//       <div class='card'>
//         <div><img src="${usuario.picture.large}"></div>
//         <p>${usuario.name.first} ${usuario.name.last}</p>
//         <p class="email">${usuario.email}</p>
//       </div>`;
//   });
// }
// )



for (let i = 1; i <= 10; i++) {

  getPokemon(i).then((pokemon) => {
    document.querySelector('body').innerHTML += `
          <div class='card'>
            <div><img src="${pokemon.sprites.other.dream_world.front_default}"></div>
            <p>${pokemon.name}</p>
          </div>`;
    })


}




