var voteEligible= function(age)
{
    if (age<=0||age>130) {
        console.log(`In valid data.....`);
    }
    if (age<18 && age>=1) {
       console.log(`Not eligible for vote...`);  
    }
    if (age>=18 && age<=130) {
        console.log(`eligible for vote....`);   
    }
}
console.log(`====== condition 1 ========`);
console.log(`The enter age is : 18`);
voteEligible(18)
console.log(`====== condition 2 ========`);
console.log(`The enter age is : 0`);
voteEligible(5)
console.log(`====== condition 3 ========`);
console.log(`The enter age is : 131`);
voteEligible(131)

