/*var nums = [2,3,4,5];
var newNnum = 1;
var N = nums.length;
for(var i = N; i>=0;--i){
    console.log(nums[i-1]);
    nums[i]=nums[i-1];
}
nums[0]=newNnum;
console.log(nums);*/


var nums = [2,3,4,5]; 
console.log(nums);
var newnum = 1;
nums.unshift(newnum); 
console.log(nums); 
nums = [3,4,5];
nums.unshift(newnum,1,2);
console.log(nums); 