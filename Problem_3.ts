function isArmstrongNumber(number: number): boolean {
    const numberStr = number.toString();
    const power = numberStr.length;
    let sum = 0;
  
    for (let i = 0; i < numberStr.length; i++) {
      const digit = parseInt(numberStr[i], 10);
      sum += Math.pow(digit, power);
    }
  
    return sum === number;
  }
  
  const inputX = 153;
  console.log(isArmstrongNumber(inputX)); 
  
  const inputY = 9;
  console.log(isArmstrongNumber(inputY));
  
  const inputZ = 10;
  console.log(isArmstrongNumber(inputZ)); 
  