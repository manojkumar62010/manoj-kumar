let heros=[["akshy kumar","hritik roshan","ajay devgan"],["thor","spiderman","flash"]]
for(let i=0;i<heros.length;i++){
    console.log(i,heros[i],heros[i].length);
    for(let j=0;j<heros[i].length;j++){
        console.log(`j=${j},${heros[i][j]}`);
    }
}


// sorting practice question
let a=[10,5,12,2,1,25,40];
b=a.sort();
console.log(b)