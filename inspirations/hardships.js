//hardships
if(life.difficulty === 'HARD'){
  adapt().then(overcome)
}

if (life.difficulty === 'HARD'){
  adapt().then( (trial) => {
    overcome(trial).then( (success) => {
      console.log('You did it! You have overcome your hardship!')
    })
  })
}