// Rekursiv funksiyaga oid misollar
// 1-misol
// function sumOfNumbers(n) {
//   if (n == 1) {
//     return 1
//   }
//   return n + sumOfNumbers(n - 1)
//   sumOfNumbers()
// }
// console.log(sumOfNumbers(5));


// 2-misol
// function factorial(num) {
//   if (num == 1) {
//     return 1;
//   }

//   return num * factorial(num - 1)
// }
// console.log((factorial(5)));

// String metodlariga oid misollar
// 1-misol
// function belgiOlish(str, index) {
//   if (index >= str.length) {
//     return ""
//   }
//   return str.charAt(index)
// }

// console.log(belgiOlish('Salom', 3));


// 2-misol
// function last(arg) {
//   if (arg.length == 0) {
//     return ""
//   }
//   return arg.charAt(arg.length - 1)
// }
// console.log(last("salom"));


// ### 3. `at`  doir misollar
// 1-misol
// let str = 'hello world!'
// console.log(str.at(6));
// 2-misol
// function last(arg) {
//   if (arg.length == 0) {
//     return ""
//   }
//   return arg.at(arg.length - 1)

// }
// console.log(last('hello'));

// 3-misol
// let str = 'hello'
// console.log(str.at(-2));

// console.log(str.at(-5));


// ### 4. `slice` doir misollar
// 1-misol
// let str = 'hello'
// let name = str.slice(2,4)
// console.log(name);


// 2-misol
// let str = 'javascript bu dasturlash tili'
// console.log(str.slice(0, 3));


// 3-misol
// let str = 'html, css va sass'
// console.log(str.slice(-5));

// ## 5. `substring` doir misollar
// 1-misol
// let str = 'salom Begzod yaxshimisan'
// let res = str.substring(6, 12)
// console.log(res);

// 2-misol
// let str = 'hello world!'
// let res = str.substring(0,4)
// console.log(res);


// 3-misol
// let str = 'football palying'
// console.log(str.substring(4).slice(1));


// ### 6. `substr` doir misollar
// 1-misol
// let str = 'word excel'
// console.log(str.substr(6,12));


// ### 7. `trim`, `trimStart`, `trimEnd` doir misollar
// 1-misol
// let str = prompt('soz kiriting')
// let res = str.trim()
// console.log(res);

// 2-misol
// let str = '       salom yaxshimisiz'
// let res = str.trimStart()
// console.log(res);



// 3-misol
// let str = 'Pop, rock va klassik musiqa                          '
// let res = str.trimEnd()
// console.log(res);



// ### 8. `padEnd`, `padStart` doir misollar
// 1-misol
// let str = '5'
// let res = str.padEnd(10, "!")


// console.log(res);


// 2-misol
// let str = 'hello world!'
// let res = str.padStart(15, "*")
// console.log(res);


// 3-misol
// let phone = '12345'
// let res = phone.padStart(8, '0')
// console.log(res);


// ### 9. `repeat` doir misollar
// 1-misol
// let str = 'play '
// let res = str.repeat(3)
// console.log(res);

// 2-misol
// let str = 'hello'
// let repeatedStr = ''

// for (let char of str) {
//   repeatedStr += char.repeat(2)
// }
// console.log(repeatedStr);


// 3-misol
// let str = 'JavaScript dasturlash tili - zamonaviy veb-ilovalar yaratish uchun ishlatiladigan kuchli dasturlash tili.';
// let res = (str + ', ').repeat(5)
// console.log(res);

// ### 10. `replace` doir misollar
// let str = 'salom Bezgod. Yaxshimisan Begzod'
// let res = str.replace('g', 'k')
// console.log(res);



// 2-misol
// let str = 'salom men Python dasturlash tilida o`qiyman'
// let res = str.replace('Python', 'Frontend')
// console.log(res);


// 3-misol
// let numbers = '1,2,3,4,5'
// console.log(numbers.replace(1, '*'));

// ### 11. `replaceAll` doir misollar
// 1-misol
// let str = 'javascript'
// let res = str.replaceAll('a', "o")
// console.log(res);

// 3-misol
// let str = prompt('Soz kiriting')
// let res = str.replaceAll(/\d/g, '*')
// console.log(res);



// ### 12. `split` doir misollar
// 1-misol
// let str = 'hello world!'
// let res = str.split(', ')
// console.log(res);
// 2-misol
// let str = 'salom'
// console.log(str.split(''));

// 3-misol
// let str = 'salom men frontendda oqiyman'
// console.log(str.split(' '));


// 13. `indexOf` doir misollar
// 1-misol
// let str = 'watch tv'
// console.log(str.indexOf('t'));
// 2-misol
// let str = 'Salom men Javascript dasturlash tili'
// let wordToFind = 'Javascript'
// let index = str.indexOf(wordToFind)

// console.log(index);


// 3-misol
// let str = 'salom'
// let charToFind = 'a'
// let index = str.indexOf(charToFind)
// console.log(index);


// ### 15. `includes` doir misollar
// 1-misol
// let str = 'hello'
// let res = str.includes('e')
// console.log(res);


// 2-misol
// let str = prompt('son')
// let hasNumbers = /\d/.tset(str)

// if (hasNumbers) {
//   console.log('Stringda raqamlar mavjud.');

// } else {
//   console.log('Stringda raqamlar yo`q');

// }