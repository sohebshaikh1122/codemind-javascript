console.log(`================= using do while loop============ `);

console.log(`----print number from 5 to 15 by incrementing 1-----`);
var index=5;
do {
    console.log(index);
    index++;
} while (index<=15);

console.log(`----print number from 50 to 40 by decrementing 1-----`);
var index=50;
do {
    console.log(index);
    index--;
} while (index>=40);

console.log(`----print number first 15 odd number -----`);
var index=1;
do {
    if (index%2!=0) {
        console.log(index);
    }
    index++;
} while (index<=30);

console.log(`----print number first 10 even number -----`);
var index=0;
do {
    if (index%2==0) {
        console.log(index); 
    }
    index++;
} while (index<=20);

console.log(`----print table of 5 like 5-10- 15----`);
var index=1;
do {
    var num=5;
    num=num*index;
    console.log(num);
    index++; 
} while (index<=10);

console.log(`----print table of 10 like 10-20-30---`);
var index=1;
do {
    var num=10;
    num=num*index;
    console.log(num);
    index++;
} while (index<=10);

console.log(`----print table of 10 in reverse order like 100- 90- 80-`);
var index=1;
var num=100;
do {
    console.log(num);
    num=num-10;
    index++;
} while (index<=10);