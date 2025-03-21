const array = [7,15,20,3,25,2,40]

const ans=array.filter((Element)=>
{
    if (Element%5==0) {
        return Element;
    }
})
console.log(ans);
