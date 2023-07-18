function dragonOfLoowater(dragonHeads: number[], knights: number[]): number | string {
    dragonHeads.sort((a, b) => a - b); 
    knights.sort((a, b) => a - b); 
  
    let totalTallness = 0;
    let knightIndex = 0;
  
    for (let i = 0; i < dragonHeads.length; i++) {
      const diameter = dragonHeads[i];
      
      while (knightIndex < knights.length && knights[knightIndex] < diameter) {
        knightIndex++;
      }
  
      if (knightIndex >= knights.length) {
        return "knight fall"; 
      }
  
      totalTallness += knights[knightIndex];
      knightIndex++;
    }
  
    return totalTallness;
  }
  
  console.log(dragonOfLoowater([5, 4], [7, 8, 4])); 
  console.log(dragonOfLoowater([5, 10], [5])); 
  console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); 
  console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5]));
  