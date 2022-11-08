let array1 = [0, 2, 2, 0, 3, 3, 4, 4, 5, 0, 6, 7, 8, 6];
const output = [...new Set(array)];
console.log(output);

let array = [];
function removeVowels(str) {
  let rem;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      rem = str.replace(/[aeiou]/gi, "");
      array.push(str[i]);
    }
  }
  console.log(`${rem}, ${array.join("")}`);
}

removeVowels("Hi my name is Saurabh Duryodhan");
