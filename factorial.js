function fact(n)
{
    var result;
    if(n === 0 || n === 1)
        return 1;

    result = fact(n-1) * n;
    return result;
}
function factiterative(num)
{
    var product =1;
    for(var i=num;i>=1;i--)
    {
        product *= i;
    }
    return product;
}
var start = Math.round(new Date().getTime());
console.log(fact(30));
var stop = Math.round(new Date().getTime());
var ans = stop-start;
console.log(ans);

var starti = Math.round(new Date().getTime());
console.log(factiterative(30));
var stopi;
stopi = Math.round(new Date().getTime());
var ans1 = stopi-starti;
console.log(ans1);