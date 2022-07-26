module.exports = function toReadable (number) {
    const arNumbers = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  const arTen = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  let strNum = number===0 ? 'zero': ''
  let numInt = Math.trunc(number/100)
  let numRest = number % 100    
  strNum= numInt>0 ? arNumbers[numInt]+' hundred' : strNum
  if (numRest === 0) {return strNum}

  if (numRest>0 & numRest<20) {
      strNum = strNum+' '+arNumbers[numRest]
  }
  else {
      strNum = strNum+' '+arTen[Math.trunc(numRest/10-1)]  
      strNum = numRest-Math.trunc(numRest/10)*10 >0 ? strNum+' '+ arNumbers[numRest-Math.trunc(numRest/10)*10] : strNum
  }
   return strNum.trim()
}
