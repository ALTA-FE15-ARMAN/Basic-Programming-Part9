function convertToAcronym(phrase: string): string {
    const words = phrase.split(' ');
  
    let acronym = '';
  
    for (const word of words) {
      acronym += word[0].toUpperCase();
    }
  
    return acronym;
  }
  
  const input1 = 'portable network graphics';
  const output1 = convertToAcronym(input1);
  console.log(output1); 
  
  const input2 = 'correct me if im wrong';
  const output2 = convertToAcronym(input2);
  console.log(output2); 
  
  const input3 = 'thank god its friday';
  const output3 = convertToAcronym(input3);
  console.log(output3);