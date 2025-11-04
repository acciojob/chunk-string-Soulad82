function stringChop(str, size) {
  let newstr=str.substirng(0,5)
  console.log(newstr)
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
