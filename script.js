function indexOfIgnoreCase(str: string, subStr: string): number {
  
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  
  return lowerStr.indexOf(lowerSubStr);
}


const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

