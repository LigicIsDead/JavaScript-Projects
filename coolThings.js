const justCoolStuff = (arr1, arr2) => {
    coolThings = []
    for (i=0; arr1.length > i; i++){
      for(j=0; arr2.length > j; j++){
        if (arr1[i] === arr2[j]){
          coolThings.push(arr2[j])
        }
      }
    }
    return coolThings
  }
  
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))