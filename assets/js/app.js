let cl = console.log;

function Circle (radius){
    this.radius = radius;
    /* this.draw = function(){
        cl(`Circle is drawn with radius ${this.radius}`)
    } */
}
Circle.prototype.draw = function(){
    cl(`Circle is drawn with radius ${this.radius}`)  
}

Circle.prototype.toString = function(){
    cl(`Circle is drawn with Radius ${this.radius} and using CircleBase Prototype`)
}

let c1 = new Circle(10);
let c2= new Circle(20);

/* Instances created by same constructor function have same prototype */
/* Prototype of instance created by constructor function is same as prototype of constructor function  */
cl(c1.__proto__ === c2.__proto__)  //true

cl(c1)
cl(c2)

c2.draw()  //Circle is drawn with radius 20
/* draw is an prototype member
radius is instance member */

let str1 = new String("Hello String Method")
cl(str1)

String.prototype.reverseString = function(str){
    cl(`String is reversed`)
    //return str.split('').reverse().join('')
}

//Object.keys method will return Instance members only
cl(Object.keys(c2))

//for in will return instance as well as prototype membersl
for(let k in c2){
    cl(k)
}


/* Constructor
>> Array
>> math
>> date
>> string
>> number
>> promise */