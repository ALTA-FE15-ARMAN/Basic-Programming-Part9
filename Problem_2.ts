function atbashCipher(input: string): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const reversedAlphabet = alphabet.split("").reverse().join("");
    let result = "";
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char === " ") {
        result += " "; 
      } else {
        const index = alphabet.indexOf(char.toLowerCase());
        const reversedChar = reversedAlphabet[index];
        result += char === char.toLowerCase() ? reversedChar : reversedChar.toUpperCase();
      }
    }
  
    return result;
  }
  
 
  const inputSatu = "olivn rkhfn wloli hrg znvg";
  const outputSatu = atbashCipher(inputSatu);
  console.log(outputSatu); 

   
  const inputDua = "svool dliow! rn ovzimnrmt gbkvhxirkg!";
  const outputDua = atbashCipher(inputDua);
  console.log(outputDua); 

  const inputTiga = "gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt";
  const outputTiga = atbashCipher(inputTiga);
  console.log(outputTiga); 

  

  