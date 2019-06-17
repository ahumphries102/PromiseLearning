const fetch = require( 'node-fetch')

// async function getJunk(){  
//   try{
//     await fetch('http://localhost:5000/cats')
//     //Parameter passed in then's function is the success value of the fetch. In this case it's the data from the URL.
//     .then(dataReceived => dataReceived.json())
//     .then(useData => console.log(useData))
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// getJunk()

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


const nuke = ()=>{
  return new Promise((resolve, reject)=>{
    try{
    resolve(fetch('http://localhost:5000/cats')
      .then(response=>response.json()))
  }
  catch(error){
    console.log(error)
  }
  })
}

async function doggo(){
  await fetch('http://localhost:5000/cats')
  .then(getData=> getData.json())
  .then(useData=>console.log(useData))
}

doggo()