function indexOfIgnoreCase(s1: string, s2: string): number {
  
  const lowers1 = s1.toLowerCase();
  const lowers2 = s2.toLowerCase();

  
  return lowers1.indexOf(lowers2);
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
