// arry
// array always written by [] (square bracket)
 const myArr =[ 0,2,6,4,40,8];
 const myHeros =["manoj","vikash"]

 const myArr2 = new Array(1,2,3,4)

 console.log(myArr[5]);


//   Array method

// myArr.push(9)
//  myArr.push(10)
//  myArr.pop()

// myArr.unshift(9)
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();
 console.log(myArr);
 console.log(newArr)
//  console.log(typeof newArr)


// slice,splice
 console.log("A",myArr);

 const myn1 =myArr.slice(1,3);
 console.log(myn1);
 console.log("B",myArr)

 const myn2 =myArr.splice(1,3);
 console.log("c",myArr);
 console.log(myn2);


 const marvel_hero =[ "thor","ironman","spiderman"]
 const dc_heros =["superman","flash","batman"]
//  marvel_hero.push(dc_heros);
//  console.log(marvel_hero);
//  console.log(marvel_hero[3]);
// console.log(marvel_hero[3][1]);

//  const allHeros = marvel_hero.concat(dc_heros);
// console.log(allHeros);
 const all_new_heros = [...marvel_hero,...dc_heros];
 console.log(all_new_heros);

 const another_array = [1,2,3,[4,5,6],7,[8,9[10,22]]];
 const real_another_array =another_array.flat(Infinity);
 console.log(real_another_array);

 console.log(Array.isArray("manoj"))
 console.log(Array.from("manoj"));
 console.log(Array.from({name:"hitesh"}))//

 let score1=100;
 let score2=200;
 let score3=300;
 let score4=400;

 console.log(Array.of(score1,score2,score3,score4))



