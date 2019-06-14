const bedMade = ()=>{
  const bedmade = false
  return new Promise(function(resolve, reject){
    if(bedmade){
    resolve('I made the bed ')
    }
    else{
      reject('I did not make the bed')
    }
  })
}

const litterScooped = (message)=>{
  const litterscooped = true
  return new Promise(function(resolve,reject){
    if(litterscooped){
    resolve(message + 'The garbage is emptied')
  }
  else{
    reject('Best start scoopin them litters boi')
  }
  })
}

const catsPetted = (message)=>{
  const choresDone = true
  return new Promise(function(resolve,reject){
    if(choresDone){
    resolve(message + ' yummmmmy')
  }
  })
}

bedMade()
.then( value => {
  return litterScooped(value)
}, reason =>{
  return litterScooped(reason)
})
.then( value => {
  return catsPetted(value)
})
.then( value => {
  return console.log(value)
})
.catch( error => {
  console.error(error)
})