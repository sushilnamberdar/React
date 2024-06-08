import React from 'react';
import { Code } from './Code';

const VirtualDomIntroduction = () => {
    const ex1code = `
const element = <h1>Hello, world</h1>;
    `;

    const ex2code = `
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world'
);
    `;

    const ex3code = `
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
    `;

    const ex4code = `
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
    `;

    const ex5code = `
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
    `;

    const ex6code = `
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
    `;

    return (
        <div className="flex justify-center items-center lg:-mt-[470px]">
            <div className="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>Introduction to the Virtual DOM</h1>
                <p>The Virtual DOM (VDOM) is a concept implemented by libraries such as React. It's a lightweight, in-memory representation of the real DOM. The Virtual DOM allows React to efficiently update the UI by keeping a virtual representation of the UI and only updating the parts that change.</p>

                <h1 style={{ fontSize: '30px' }}>Creating Virtual DOM Elements</h1>
                <p>In React, you can create elements using JSX or the React API:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <p>Using JSX:</p>
                <pre>
                    <Code code={ex1code} language='javascript'></Code>
                </pre>
                <p>Using React API:</p>
                <pre>
                    <Code code={ex2code} language='javascript'></Code>
                </pre>

                <h1 style={{ fontSize: '30px' }}>Components and Virtual DOM</h1>
                <p>React components can be class-based or functional. Here's an example of a class-based component:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex3code} language='javascript'></Code>
                </pre>
                <p>Rendering a component to the real DOM:</p>
                <pre>
                    <Code code={ex4code} language='javascript'></Code>
                </pre>

                <h1 style={{ fontSize: '30px' }}>How the Virtual DOM Works</h1>
                <p>When you create elements and components in React, the following steps occur:</p>
                <ol className='list-decimal pl-10'>
                    <li>React creates a Virtual DOM representation of the UI.</li>
                    <li>When the state or props of a component change, React updates the Virtual DOM.</li>
                    <li>React then compares the updated Virtual DOM with a previous snapshot using a process called "reconciliation."</li>
                    <li>React identifies the differences and updates only the necessary parts of the real DOM to reflect these changes.</li>
                </ol>
                <p>This process ensures efficient updates, minimizing the number of direct manipulations to the actual DOM.</p>

                <h1 style={{ fontSize: '30px' }}>Displaying Data on the Web</h1>
                <p>To display data on the web using the Virtual DOM, React renders the Virtual DOM elements into the real DOM:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex6code} language='javascript'></Code>
                </pre>
                <p>This code creates a Virtual DOM element and mounts it to a real DOM node with the id "root."</p>

                <h1 style={{ fontSize: '30px' }}>Virtual DOM Lifecycle</h1>
                <p>The Virtual DOM lifecycle in React includes various phases where specific methods are called. These methods allow you to perform actions at different points in a component's life:</p>

                <ul className='list-disc pl-10'>
                    <li><strong>Mounting:</strong> When a component is being inserted into the DOM.</li>
                    <li><strong>Updating:</strong> When the component's props or state change.</li>
                    <li><strong>Unmounting:</strong> When a component is being removed from the DOM.</li>
                </ul>

                <h1 style={{ fontSize: '30px' }}>Mounting</h1>
                <p>Mounting is the phase in which a component is created and inserted into the DOM. This phase includes the following lifecycle methods:</p>
                <ul className='list-disc pl-10'>
                    <li><strong>constructor:</strong> Called when the component is instantiated. It's used to initialize the component's state and bind event handlers.</li>
                    <li><strong>static getDerivedStateFromProps:</strong> Invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state or null to update nothing.</li>
                    <li><strong>render:</strong> The only required method in a class component. It returns the React elements that make up the component's UI.</li>
                    <li><strong>componentDidMount:</strong> Called immediately after the component is inserted into the DOM. It's a good place to initiate network requests or set up subscriptions.</li>
                </ul>

                <h1 style={{ fontSize: '30px' }}>Updating</h1>
                <p>Updating is the phase when a component is re-rendered as a result of changes to its props or state. This phase includes the following lifecycle methods:</p>
                <ul className='list-disc pl-10'>
                    <li><strong>static getDerivedStateFromProps:</strong> Invoked right before calling the render method, both on the initial mount and on subsequent updates.</li>
                    <li><strong>shouldComponentUpdate:</strong> Called to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change.</li>
                    <li><strong>render:</strong> Returns the React elements that make up the component's UI.</li>
                    <li><strong>getSnapshotBeforeUpdate:</strong> Called right before the most recently rendered output is committed to the DOM. It enables your component to capture some information (e.g., scroll position) from the DOM before it is potentially changed.</li>
                    <li><strong>componentDidUpdate:</strong> Called immediately after updating occurs. It's a good place to operate on the DOM when the component has been updated.</li>
                </ul>

                <h1 style={{ fontSize: '30px' }}>Unmounting</h1>
                <p>Unmounting is the phase when a component is removed from the DOM. This phase includes the following lifecycle method:</p>
                <ul className='list-disc pl-10'>
                    <li><strong>componentWillUnmount:</strong> Called immediately before a component is destroyed. It's used to clean up resources such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount.</li>
                </ul>

                <h1 style={{ fontSize: '30px' }}>V8 Engine</h1>
                <p>The V8 engine is an open-source JavaScript engine developed by Google. It is written in C++ and is used in Google Chrome and Node.js to execute JavaScript code. V8 compiles JavaScript directly to native machine code before executing it, which makes it very fast.</p>
                <p>The V8 engine powers the JavaScript execution environment in both web browsers and server-side platforms, enabling high-performance JavaScript applications.</p>

                <p className='bg-yellow-100 text-black pl-5 pr-5'>Understanding the Virtual DOM, how data is rendered on the web, and the underlying V8 engine provides a comprehensive foundation for building efficient and performant web applications with React.</p>
            </div>
        </div>
    );
};

export default VirtualDomIntroduction;
