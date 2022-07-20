const isValueMatches=(leftcard,rightcard)=>{

    if (leftcard !== null && rightcard !== null && leftcard.value === rightcard.value){
      return true;
    }
    return false;
  }
  module.exports=isValueMatches;