import React from 'react'
import { Code } from './Code'

const Redux = () => {

    const codeexp1 = `import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)`
    const codeexp2 = `import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer`

    const codeexp3 = `import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})`

    const codeexp4 = `import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}`


    const codeexp5 = `import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})`
    return (
        <div>
            <div className="flex justify-center lg:-mt-[470px]">
                <div className="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                    <h1 style={{ fontSize: '42px' }}>Redux Installation</h1>

                    <h2>Redux Toolkit</h2>
                    <p>Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect).</p>
                    <p>It's available as a package on NPM for use with a module bundler or in a Node application:</p>
                    <pre className='p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
                        <code># NPM
                            npm install @reduxjs/toolkit

                            # Yarn
                            yarn add @reduxjs/toolkit</code>
                    </pre>

                    <h2>Complementary Packages</h2>
                    <h3 style={{ fontSize: '32px' }}>React-Redux</h3>
                    <p>Most likely, you'll also need the react-redux bindings for use with React.</p>
                    <pre className='p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
                        <code>npm install react-redux</code>
                    </pre>

                    <p>Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using module bundlers like Vite and Webpack for the most comfortable development experience.</p>

                    <h3 style={{ fontSize: '32px' }}>Redux DevTools Extension</h3>
                    <p>Redux Toolkit's configureStore automatically sets up integration with the Redux DevTools. You'll want to install the browser extensions to view the store state and actions:</p>
                    <ul>
                        <li><a href="https://chrome.google.com/webstore/detail/redux-devtools-extension/lmhkpmbekcpmknklioeibfkpmmfibljd">Redux DevTools Extension for Chrome</a></li>
                        <li><a href="https://addons.mozilla.org/en-US/firefox/addon/redux-devtools/">Redux DevTools Extension for Firefox</a></li>
                    </ul>
                    <p>If you're using React, you'll want the React DevTools extension as well:</p>
                    <ul>
                        <li><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">React DevTools Extension for Chrome</a></li>
                        <li><a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">React DevTools Extension for Firefox</a></li>
                    </ul>

                    <h2 style={{ fontSize: '32px' }}>Create a React Redux App</h2>
                    <p>The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template.</p>
                    <p>Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.</p>
                    <pre className='p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
                        <code># Vite with our Redux+TS template
                            # (using the `degit` tool to clone and extract the template)
                            npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

                            # Next.js using the `with-redux` template
                            npx create-next-app --example with-redux my-app</code>
                    </pre>

                    <h2 style={{ fontSize: '32px' }}>Redux Core</h2>
                    <p>To install the redux core package by itself:</p>
                    <pre className='p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
                        <code># NPM
                            npm install redux

                            # Yarn
                            yarn add redux</code>
                    </pre>

                    <p>If you're not using a bundler, you can access these files on unpkg, download them, or point your package manager to them.</p>

                    <p><i>Last updated on Nov 25, 2023</i></p>


                    <h1 style={{ fontSize: '40px' }}>Redux Toolkit Quick Start</h1>

                    <h2 style={{ fontSize: '25px' }}>What You'll Learn:</h2>



                    <p>How to set up and use Redux Toolkit with React-Redux</p>

                    <h2>Prerequisites</h2>
                    <p>Familiarity with ES6 syntax and features</p>
                    <p>Knowledge of React terminology: JSX, State, Function Components, Props, and Hooks</p>
                    <p>Understanding of Redux terms and concepts</p>

                    <h2>Introduction</h2>
                    <p>Welcome to the Redux Toolkit Quick Start tutorial! This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly.</p>

                    <h2>How to Read This Tutorial</h2>
                    <p>This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, see the tutorials linked in the "Tutorials Overview" page.</p>

                    <p>For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on a typical Create-React-App folder structure where all the application code is in a src, but the patterns can be adapted to whatever project or folder setup you're using.</p>

                    <p>The Redux+JS template for Create-React-App comes with this same project setup already configured.</p>

                    <h2>Usage Summary</h2>
                    <h3>Install Redux Toolkit and React-Redux</h3>
                    <p>Add the Redux Toolkit and React-Redux packages to your project:</p>
                    <pre className='p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
                        <code># NPM
                            npm install @reduxjs/toolkit react-redux</code>
                    </pre>

                    <h3 style={{ fontSize: '25px' }}>Create a Redux Store</h3>
                    <p>Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:</p>
                    <pre>
                        <Code code={codeexp5} language='javascript'></Code>
                    </pre>

                    <p>This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.</p>

                    <h3>Provide the Redux Store to React</h3>
                    <p>Once the store is created, we can make it available to our React components by putting a React-Redux &lt;Provider&gt; around our application in src/index.js. Import the Redux store we just created, put a &lt;Provider&gt; around your &lt;App&gt;, and pass the store as a prop:</p>
                    <pre>
                        <Code code={codeexp1} language='javascript'></Code>
                    </pre>

                    <h3>Create a Redux State Slice</h3>
                    <p>Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.</p>

                    <p>Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.</p>

                    <p>Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.</p>
                    <pre className=' overflow-x-auto'>
                        <Code code={codeexp2} language='javascript'></Code>
                    </pre>

                    <h3>Add Slice Reducers to the Store</h3>
                    <p>Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.</p>
                    <pre >
                        <Code code={codeexp3} language='javascript'></Code>
                    </pre>

                    <h3>Use Redux State and Actions in React Components</h3>
                    <p>Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a &lt;Counter&gt; component inside, then import that component into App.js and render it inside of &lt;App&gt;.</p>
                    <pre>
                        <Code code={codeexp4} language='javascript'></Code>
                     </pre>
                </div>
            </div>
        </div>
    )
}

export default Redux
