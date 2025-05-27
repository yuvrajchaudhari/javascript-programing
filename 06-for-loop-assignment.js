console.log(`==========Increment 5 to 15===============`)
for (let index = 5; index <= 15; index++) {
    console.log(index); 
}
console.log('==================decrement 50 to 40 =============')
for (let index = 50; index >=40; index--) {
   console.log(index);
}

console.log('write a program first 15 odd number==========')
for (let index = 0; index <=30; index++) {
    if(index%2!=0){
    console.log(index)
    }
    
}

console.log('write a program first 10 even number==========')
for (let index = 0; index <=20; index++) {
    if(index%2==0){
    console.log(index)
    }    
}

console.log(`======= Print the table of 5 =======`);
for (let index = 1; index <=10; index++) {
    var result = index*5;
    console.log(result);
}

console.log(`======= Print the table of 10 =======`);
for (let index = 1; index <=10; index++) {
    var result = index*10;
    console.log(result);
}

console.log(`======= Print the table of 10 in reverse order  =======`);
for (let index = 10; index >=1; index--) {
    console.log(index * 10); 
}