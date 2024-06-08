import React from 'react'
import { Code } from './Code'

const ReactEs6Destructuring = () => {
    const ex1code = `const vehicles = ['mustang', 'f-150', 'expedition'];
        // old way
    const car = vehicles[0];
    const truck = vehicles[1];iii
    const suv = vehicles[2];`;
    const ex2code = `const vehicles = ['mustang', 'f-150', 'expedition'];

                const [car, truck, suv] = vehicles;`
    const ex3code = `const vehicles = ['mustang', 'f-150', 'expedition'];

    const [car,, suv] = vehicles;`
    const ex4code = `function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);`
        const ex5code = `const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}`
        const ex6code = `const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}`


    return (
        <div class=" flex justify-center  items-center lg:-mt-40">
            <div class="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>React ES6 Destructuring</h1>


                <h1 className='mt-28 ' style={{ fontSize: '30px' }}>Destructuring</h1>
                <p>To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

                    Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

                    Destructuring makes it easy to extract only what is needed.</p>

                <h1>Destructing Arrays</h1>
                <p>
                    <p>Here is the old way of assigning array items to a variable:</p>

                </p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <p>Before:</p>
                <pre>
                    <Code code={ex1code} language='javascript'></Code>
                </pre>

                <p className='text-red-500'>Here is the new way of assigning array items to a variable:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <p>With destructuring:</p>
                <pre>
                    <Code code={ex2code} language='javascript'></Code>
                </pre>
                <p className='bg-yellow-100 text-black pl-5 pr-5'>When destructuring arrays, the order that variables are declared is important.</p>
                <p>If we only want the car and suv we can simply leave out the truck but keep the comma:</p>
                <pre>
                    <Code code={ex3code} language='javascript'></Code>
                </pre>
                <p>Destructuring comes in handy when a function returns an array:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex4code} language='javascript'></Code>
                </pre>
                <h1 style={{ fontSize: '30px' }}>Destructuring Objects</h1>
                <p>Here is the old way of using an object inside a function:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <p>Before:</p>
                <pre>
                    <Code code={ex5code} language='javascript'></Code>
                </pre>
                <p className='text-red-500 mt-40'>Here is the new way of using an object inside a function:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <p>With Destructing</p>
                <pre>
                    <Code code={ex6code} language='javascript'></Code>
                </pre>




            </div>
        </div>
    )
}

export default ReactEs6Destructuring
