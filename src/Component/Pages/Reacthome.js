import React from 'react'
import localhostimgreact from '../../Images/Screenshot_2024-05-19_22_20_05.png'

export const Reacthome = () => {
  return (
    <div class=" flex justify-center items-center lg:-mt-[470px]">
      <div class="max-w-full lg:max-w-screen-md pl-8 pr-8">
        <div className="container mx-auto p-4" style={{ fontSize: '22px' }}>
          <p className="mt-6 text-xl font-semibold">About React</p>
          <p className="mb-2" >
            React is a JavaScript library for building user interfaces.
          </p>
          <p className="mb-2">
            React is used to build single-page applications.
          </p>
          <p className="mb-2">
            React allows us to create reusable UI components.
          </p>
          <h1 className="text-2xl font-bold mb-4">Create React App</h1>
          <p className="mb-2">
            To learn and test React, you should set up a React Environment on your computer.
          </p>
          <p className="mb-2">
            This tutorial uses the : create-react-app.
          </p>
          <p className="mb-2">
            The create-react-app tool is an officially supported way to create React applications.
          </p>
          <p className="mb-2">
            Node.js is required to use : create-react-app.
          </p>
          <p className="mb-2">
            Open your terminal in the directory you would like to create your application.
          </p>
          <br></br>
          <p className="mb-4">
            Run this command to create a React application named  : my-react-app:
          </p>
          <pre className=" p-2 rounded mb-4 text-green-600 overflow-x-auto" style={{ background: 'black' }}>
            <code>npx create-react-app my-react-app</code>
          </pre>
          <p className="text-2xl font-bold mb-4">
            Run the React application
          </p>
          <p className='mb-4'>
            Run this command to move to the : my-react-app directory:
          </p>
          <pre className=' p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
            <code>cd my-react-app</code>
          </pre>
          <br></br>
          <p className="mb-4">
            Run this command to execute the React application <code>my-react-app</code>:
          </p>
          <pre className=' p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
            <code>npm start</code>
          </pre>


          <p className="mb-2">
            A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.
          </p>
          <img src={localhostimgreact}></img>

        </div>
        <h1 className="text-2xl font-bold mb-4">What's Next?</h1>
        <p className='mb-2'>
          Now you have a React Environment on your computer, and you are ready to learn more about React.
        </p>

      </div>
    </div>

  )
}
