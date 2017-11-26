var top = 0 ;
function Stack() {
    this.dataStore = [];
    this.top = top;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.capacity = capacity;
    this.getTop = getTop;
    this.isEmpty = isEmpty;
}

function push(element){
    this.dataStore[this.top++] = element; //the current value of top is used to place the element at the top of the stack then only is it incremented.
}

function pop(){
    return this.dataStore[--this.top]; //decrement the top value because the underlying array is zero based.
}

function peek(){
    return this.dataStore[this.top-1];
}

function clear(){
    return this.top=0;
}

function capacity(){
    return this.top;
}

function getTop()
{
    return this.dataStore[this.top];
}

function isEmpty()
{
    return s.capacity() === 0;
}

 var s = new Stack();

/*sort a stack using recursion*/
//function sortedInsert(stack, value){
     // Base case: Either stack is empty or newly inserted
    // item is greater than top (more than all existing)
 //if(s.isEmpty()||value>s.peek()){
   // s.push(value);
    //return;
 //}
    //If top is greater, remove the top item and recurse
   // var temp = s.pop();
    //sortedInsert(s,value);
    // Put back the top item removed earlier
    //s.push(temp);
//}
//function sortStack(stack)
//{
  //  if(!s.isEmpty()){
    //    var x = s.pop();
        //sort the remaing stack
      //  sortStack(s);
        //push the top item back in the sorted stack
      //  sortedInsert(s, x);
    //}
//}

//s.push(30);
//s.push(-5);
//s.push(18);
//s.push(14);
//s.push(-3);
//console.log("Stack elements before sorting: ");
//console.log("\r\n");
/*for(var i=0; i<s.capacity();i++){
    console.log("value is: "+s.dataStore[i]); 
}
console.log("\r\n");

sortStack(s);
console.log("Stack elements afer sorting: ");
console.log("\r\n");
for(var i=0; i<s.capacity();i++){
    console.log("value is: "+s.dataStore[i]); 
}*/

 /*-------------------------------------------------*/
 /*stack reverse*/
// var s = new Stack();
//function reverse(){
    /* Hold all items in Function Call Stack until we reach end of the stack */
    //if(s.capacity()>0){
        //var x = s.peek();
        //s.pop();
      //  reverse();
        /* Insert all the items held in Function Call Stack one by one from the bottom to top. Every item is inserted at the bottom */
    //    insertAtBottom(x);
  //  }
//}

//function insertAtBottom(x){
     //if(s.isEmpty()){
       // s.push(x)
     //}else{
         /* All items are held in Function Call Stack until we reach end of the stack. When the stack becomes empty, the st.size() becomes 0, the above if part is executed and the item is inserted at the bottom */
         //var a = s.peek();
         //s.pop();
       //  insertAtBottom(x)
         //push allthe items held in Function Call Stack
            //once the item is inserted at the bottom
    //     s.push(a);
  //   }

//}


//s.push(1);
//s.push(2);
//s.push(3);
//s.push(4);
//for(var i=0; i<s.capacity();i++){
  //  console.log("value is: "+s.dataStore[i]); 
//}
//reverse();
 //console.log("\r\n");
//for(var i=0; i<s.capacity();i++){
  //  console.log("value is: "+s.dataStore[i]); 
//}
//console.log("END");

/*//calculate factorial using a stack
function factStack(n){
 var s = new Stack();
 while(n>1){
     s.push(n--);

 }
    var product =1;
    while(s.capacity()>0){
        product *= s.pop();
    }
    return product;
}
console.log("factorial: "+ factStack(5));*/

//base conversion
/*function multipleBase(num,base){
    var s= new Stack();
    do{
        
        console.log("pushing: "+ num%base);
        s.push(num%base);
        num = Math.floor(num /=base);

    }while(num>0)
    var converted="";

    while(s.capacity()>0){
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base =2;
var newNum = multipleBase(num,base);
console.log(num+" converted to base "+base+" is " +newNum);
num=125;
base = 8;
newNum = multipleBase(num,base);
console.log(num+" converted to base "+base+" is " +newNum);*/

/*
//minstack problem
var stack = new Stack();
var minStack = new Stack();

function minPush(num){
    stack.push(num);
    //the min stack is empty or the number is smaller than or equal to the number at the top push
    if(minStack.peek()===undefined||minStack.capacity()<=0 || num <= minStack.peek()){
        console.log("minStack top: "+minStack.peek())
        console.log("pushing number: "+num)
        minStack.push(num);
    }
}

function minPop(){
    if(stack.top<= minStack.peek()){
        minStack.pop();
    }else{
    stack.pop();
    }
    
}

function minTop(){
    return minStack.peek();
}

function getMinTop(){
    return minStack.peek();
}

function minStackTest(numbers){

    for(var i=0; i<numbers.length;i++){
        
        minPush(numbers[i]);
    }

}
var number = [3,1,4,1,2]

function minStackTester(){

  for(var i =0; i<number.length; i++){
        minPush(number[i]);
    }
    getMinTop();
    minPop();
    minPop();
    console.log("the min top is: "+getMinTop());
}
minStackTester();*/

//palindrome tester
/*function isPalindrome(word){
    
    for(var i =0; i<word.length; i++){
        myStack.push(word[i]);
    }
    var rword = "";
    while(myStack.capacity()>0){
        rword+=myStack.pop();
        console.log(rword);
    }
    if(word==rword){
        return true;
    }
    else{
        return false;
    }
    
}
 var word = "hello";
 if(isPalindrome(word)){
    console.log(word+" "+":is a palindrome!");
 }else{
     console.log(word+" "+":is not a palindrome!");
 }

word = "racecar";
 if(isPalindrome(word)){
    console.log(word+" "+":is a palindrome!");
 }else{
     console.log(word+" "+":is not a palindrome!");
 }*/


/*myStack.push("Dave");
//myStack.push("Ray");
//myStack.push("Brian");
//var len = myStack.capacity();
//console.log("length: "+ len);
/console.log(myStack.peek());
var popped = myStack.pop();
console.log("The popped element is: "+popped);
console.log(myStack.peek());
myStack.push("Mary");
console.log(myStack.peek());
console.log("length: "+ len);*/

