/*var twod = [];
var rows = 5;

for (var i = 0; i < rows; ++i) {
    twod[i] = [];
} */

/*Array.matrix = function(numrows, numcols, initial) {   
    var arr = [];   
    for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
        columns[j] = initial;      
    }      
    arr[i] = columns;
}
return arr;
}


var nums = Array.matrix(5,5,0);
console.log(nums[1][1]); // displays 0 
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
console.log(names[1][2]);*/
//pg28


/*var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
console.log(grades[2][2]);
var total = 0; 
var average = 0.0;
for (var row = 0; row < grades.length; ++row) { 
      for (var col = 0; col < grades[row].length; ++col) {
                total += grades[row][col];
            } 
                  average = total / grades[row].length;
                  console.log("Student " + parseInt(row+1) + " average: " +average.toFixed(2));
                  total = 0;
                  average = 0.0;
                }*/
//pg30
/*
var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]]; 
var total = 0; var average = 0.0; 
for (var row = 0; row < grades.length; ++row) {   
    for (var col = 0; col < grades[row].length; ++col) {      
        total += grades[row][col];   
    }   
    average = total / grades[row].length;   
    console.log("Student " + parseInt(row+1) + " average: " +average.toFixed(2));
   total = 0;   
   average = 0.0; 
}*/
//pg32
/*function Point(x,y){
       this.x = x;   
       this.y = y;
    }
function displayPts(arr) {
     for (var i = 0; i < arr.length; ++i){
         console.log(arr[i].x + ", " + arr[i].y);   
        }
    }
var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
 for (var i = 0; i < points.length; ++i) {
       console.log("Point " + parseInt(i+1) + ": " + points[i].x + ", " +points[i].y);
  } 
  var p5 = new Point(12,-3);
  points.push(p5);
  console.log("After push: ");
  displayPts(points);
  points.shift();
  console.log("After shift: ");
   displayPts(points); */
//pg32
   function weekTemps() {
       this.dataStore = [];
       this.add = add;
       this.average = average; 
    }
function add(temp) {
     this.dataStore.push(temp);
    }
function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {     
         total += this.dataStore[i];   
        }
           return total / this.dataStore.length; }
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());