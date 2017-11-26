/*var nums = [1,2,3,4,5,9]; 
nums.pop();
console.log(nums);*/

/*var nums = [9,1,2,3,4,5];
console.log(nums);
for (var i = 0; i < nums.length; ++i)
{
    nums[i] = nums[i+1];
}
console.log(nums);*/

/*var nums = [9,1,2,3,4,5]; 
nums.shift(); 
console.log(nums);*/

/*var nums = [6,1,2,3,4,5]; 
var first = nums.shift(); // first gets the value 9 
console.log(first);
nums.push(first);
console.log(nums);*/

/*var nums = [1,2,3,7,8,9];
 var newElements = [4,5,6];
  nums.splice(3,0,newElements); 
  console.log(nums);*/

  var nums = [1,2,3,7,8,9];
  nums.splice(3,0,4,5,6);
  console.log(nums); 