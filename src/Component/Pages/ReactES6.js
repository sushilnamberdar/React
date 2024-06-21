import React, { useRef, useEffect } from 'react'
import { Code } from './Code';
export const ReactES6 = () => {
  const ex1code = `class Car {
          constructor(name) {
            this.brand = name;
          }
        }`;

  const ex2code = `class Car {
        constructor(name) {
          this.brand = name;
        }
      }
      
      const mycar = new Car("Ford");`

  const ex3code = `class Car {
        constructor(name) {
          this.brand = name;
        }
        
        present() {
          return 'I have a ' + this.brand;
        }
      }
      
      const mycar = new Car("Ford");
      mycar.present();`

  const ex4code = `class Car {
        constructor(name) {
          this.brand = name;
        }
      
        present() {
          return 'I have a ' + this.brand;
        }
      }
      
      class Model extends Car {
        constructor(name, mod) {
          super(name);
          this.model = mod;
        }  
  show() {
    return this.present() + ', it is a ' + this.model
    ethods like .map()
    Modules
    Ternary Operator
    Spared Operatorethods like .map()
    Modules
    Ternary Operator
    Spared Operator }
      }
      const mycar = new Model("Ford", "Mustang");
      mycar.show();`;

  const ex5code = `hello = () => {
  return "Hello World!";
    }`
  const ex6code = `hello = () => "Hello World!";`

  const ex7code = `hello = (val) => "Hello " + val;`
  const ex8code = `hello = val => "Hello " + val;`

  const ex9code = `class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);`

const ex10code = `class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);`



  return (
    <div class=" flex justify-center  items-center lg:-mt-[470px] lg:mb-20">
      <div class="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
        <h1 style={{ fontSize: '30px' }}>What is ES6?</h1>
        <p>ES6 stands for ECMAScript 6.</p>
        <p>ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.</p>
        <h1>Why Should I Learn ES6:</h1>
        <p>
          <p>React uses ES6, and you should be familiar with some of the new features like:</p>
          <ul className='list-disc ml-10'>
            <li>classes</li>
            <li>Arrow Function</li>
            <li>Variables ( let,const,var)</li>
            <li>Array Methods like .map()</li>
            <li>Modules</li>
            <li>Ternary Operator</li>
            <li>Spared Operator</li>
          </ul>
        </p>
        <h1 style={{ fontSize: '30px' }}>Classes:</h1>
        <p>ES6 introduced classes.

          A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
        </p>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>
        <p> A simple class constructor</p>
        <p className=" overflow-x-auto bg-gray-800  p-4 sm:p-8 md:p-8 lg:p-10 xl:p-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-md h-auto " style={{ fontSize: '1.2rem', padding: '2vw' }}>
          <pre>
            <Code className='bg-gray-800' code={ex1code} language='javascript'></Code>
          </pre>
        </p>
        <p className='bg-yellow-100 text-black pl-5 pr-5'>Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.</p>
        <p >Now you can create objects using the Car class:</p>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>
        <p>Create an object called "mycar" based on the Car class:</p>
        <pre>
          <Code code={ex2code} language='javascript'></Code>
        </pre>

        <p className='bg-yellow-100 text-black pl-5 pr-5'>Note: The constructor function is called automatically when the object is initialized.</p>
        <h1 style={{ fontSize: '30px' }}>
          Method in Classes:
        </h1>
        <p> Create a method named "Present":</p>
        <pre>
          <Code code={ex3code} language='javascript'></Code>
        </pre>
        <p>As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).</p>

        <h1 style={{ fontSize: '30px' }}>Class Inheritance:</h1>
        <p>To create a class inheritance, use the extends keyword.
          A class created with a class inheritance inherits all the methods from another class:
        </p>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>
        <p>Create a class named "Model" which will inherit the methods from the "Car" class:</p>
        <pre>
          <Code code={ex4code} language='javascript'></Code>
        </pre>
        <h1 style={{ fontSize: '30px' }}>React ES6 Arrow Functions </h1>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>

        <pre>
          <Code code={ex5code} language='javascript'></Code>
        </pre>

        <p>It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword: </p>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>
        <p>Arrow Functions Return Value by Default:</p>
        <pre>
          <Code code={ex6code} language='javascript'></Code>

        </pre>
        <p className='bg-yellow-100 text-black pl-5 pr-5'>Note: This works only if the function has only one statement.</p>
        <p>If you have parameters, you pass them inside the parentheses:</p>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>
        <p>Arrow Function With Parameters</p>
        <pre>
          <Code code={ex7code} language='javascript'></Code>
        </pre>
        <p>In fact, if you have only one parameter, you can skip the parentheses as well:</p>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>
        <pre>
          <Code code={ex8code} language='javascript'></Code>
        </pre>
        <h1 style={{ fontSize: '30px' }}>What About <span className='text-red-600'>this</span> ? </h1>

        <p>The handling of this is also different in arrow functions compared to regular functions.

          In short, with arrow functions there is no binding of this.

          In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

          With arrow functions, the this keyword always represents the object that defined the arrow function.

          Let us take a look at two examples to understand the difference.

          Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

          The first example uses a regular function, and the second example uses an arrow function.

          The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.</p>
        <h1 style={{ fontSize: '30px' }}>Example:</h1>
        <p>With a regular function,  <span className='text-red-600'>this</span> represents the object that called the function:</p>

        <pre>
          <Code code={ex9code} language='javascript'></Code>
        </pre>
        <p>With an arrow function,  <span className='text-red-600'>this</span> represents the Header object no matter who called the function:</p>


        <pre>
          <Code code={ex10code} language='javascript'></Code>
        </pre>
          




      </div>
    </div>
  )
}
