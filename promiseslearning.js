const fetch = require( 'node-fetch')

async function getJunk(){  
  try{
    let junk = await fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints')
    .then(response => response.json())
    .then(result => result.data.forEach( result => {console.log(result.name)}))
  }
  catch(err){
    console.log(err)
  }
}

getJunk()
// const bedMade = ()=>{
//   const bedmade = true
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(bedmade){
//         resolve('hooray bed is made ')
//       }
//     }, 400)
//   })
// }

// const litterScooped = (message)=>{
//   const litterscooped = true
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(litterscooped){
//         resolve(message + 'The garbage is emptied')
//       }
//     },500)
//   })
// }

// const catsPetted = (message)=>{
//   const choresDone = true
//   return new Promise((resolve,reject)=>{
//     if(choresDone){
//     resolve(message + ' yummmmmy')
//   }
//   })
// }

// bedMade()
// .then( value => {
//   return litterScooped(value)
// })
// .then( value => {
//   return catsPetted(value)
// })
// .then( value => {
//   return console.log(value)
// })
// .catch( error => {
//   console.error(error)
// })
