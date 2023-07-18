function solveEquations(A: number, B: number, C: number): [number, number, number] | string {
    for (let x = 1; x <= 100; x++) {
      for (let y = 1; y <= 100; y++) {
        for (let z = 1; z <= 100; z++) {
          if (x + y + z === A && x * y * z === B && x ** 2 + y ** 2 + z ** 2 === C) {
            return [x, y, z];
          }
        }
      }
    }
  
    return "No Solution ";
  }
  
  const A1 = 1, B1 = 2, C1 = 3;
  console.log(solveEquations(A1, B1, C1)); 
  
  const A2 = 6, B2 = 6, C2 = 14;
  console.log(solveEquations(A2, B2, C2)); 