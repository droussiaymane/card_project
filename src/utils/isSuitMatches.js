  
  const isSuitMatches=(leftcard,rightcard)=>{
    if (leftcard !== null && rightcard !== null && leftcard.suit === rightcard.suit){
      return true;
    }
    return false;
  }

  module.exports=isSuitMatches;