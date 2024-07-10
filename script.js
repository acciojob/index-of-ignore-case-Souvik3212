function indexOfIgnoreCase(s1: string, s2: string): number {
  
  const lowerStr = s1.toLowerCase();
  const lowerSubStr = s2.toLowerCase();

  
  return lowerStr.indexOf(lowerSubStr);
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
