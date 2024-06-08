import React from 'react';
import { Code } from './Code'; // Assuming this is a pre-defined component for displaying code snippets

const ReactComponents = () => {
    const functionalComponentCode = `
function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
}
    `;

    const classComponentCode = `
class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
    `;

    const lifecycleMethodsCode = `
class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor: Component is created');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps: Syncing state with props');
        return null; // Return an object to update state or null to do nothing
    }

    componentDidMount() {
        console.log('componentDidMount: Component is mounted to the DOM');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Deciding whether to re-render');
        return true; // Return false to prevent re-render
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Capturing state before update');
        return null; // Return a value to pass to componentDidUpdate
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Component updated');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is being removed from the DOM');
    }

    render() {
        return (
            <div>
                <h1>Lifecycle Demo</h1>
            </div>
        );
    }
}
    `;

    return (
        <div className="flex justify-center items-center lg:-mt-[470px]">
            <div className="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>React Components and Their Lifecycle</h1>
                <p>React components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.</p>

                <h1 style={{ fontSize: '30px' }}>Types of React Components</h1>
                
                <h2 style={{ fontSize: '25px' }}>Functional Components</h2>
                <p>Functional components are simple functions that take props as an argument and return React elements. They are also called stateless components because they do not manage their own state.</p>
                <pre>
                    <Code code={functionalComponentCode} language='javascript' />
                </pre>
                <p>Functional components are easier to write and test, and they are often used for presentational purposes.</p>

                <h2 style={{ fontSize: '25px' }}>Class Components</h2>
                <p>Class components are ES6 classes that extend from <code>React.Component</code>. They can manage their own state and have access to lifecycle methods.</p>
                <pre>
                    <Code code={classComponentCode} language='javascript' />
                </pre>
                <p>Class components are typically used for components that need to manage state or lifecycle methods.</p>

                <h1 style={{ fontSize: '30px' }}>Component Lifecycle</h1>
                <p>React components go through a series of phases from their creation to their destruction. These phases are known as the component lifecycle. The lifecycle can be broadly categorized into three phases:</p>

                <h2 style={{ fontSize: '25px' }}>Mounting</h2>
                <p>This phase occurs when a component is being created and inserted into the DOM. The methods called in this order are:</p>
                <ul>
                    <li><strong>constructor(props)</strong>: Initializes the component's state and binds methods.</li>
                    <li><strong>static getDerivedStateFromProps(nextProps, prevState)</strong>: Synchronizes state with props (rarely used).</li>
                    <li><strong>render()</strong>: Returns the React elements to be rendered to the DOM.</li>
                    <li><strong>componentDidMount()</strong>: Called after the component is mounted to the DOM. Ideal for initializing network requests or subscriptions.</li>
                </ul>

                <h2 style={{ fontSize: '25px' }}>Updating</h2>
                <p>This phase occurs when a component is being re-rendered due to changes in props or state. The methods called in this order are:</p>
                <ul>
                    <li><strong>static getDerivedStateFromProps(nextProps, prevState)</strong>: Synchronizes state with props (rarely used).</li>
                    <li><strong>shouldComponentUpdate(nextProps, nextState)</strong>: Determines whether the component should re-render. Returning false prevents the component from updating.</li>
                    <li><strong>render()</strong>: Returns the React elements to be rendered to the DOM.</li>
                    <li><strong>getSnapshotBeforeUpdate(prevProps, prevState)</strong>: Captures some information from the DOM before it is updated (rarely used).</li>
                    <li><strong>componentDidUpdate(prevProps, prevState, snapshot)</strong>: Called after the component updates. Ideal for performing DOM operations or making network requests based on the previous state or props.</li>
                </ul>

                <h2 style={{ fontSize: '25px' }}>Unmounting</h2>
                <p>This phase occurs when a component is being removed from the DOM. The method called is:</p>
                <ul>
                    <li><strong>componentWillUnmount()</strong>: Called immediately before the component is destroyed. Used for cleanup tasks such as removing event listeners or canceling network requests.</li>
                </ul>

                <h1 style={{ fontSize: '30px' }}>Example: Lifecycle Methods in a Class Component</h1>
                <pre>
                    <Code code={lifecycleMethodsCode} language='javascript' />
                </pre>
                <p>This example demonstrates the use of various lifecycle methods in a class component. The console logs help track when each lifecycle method is called.</p>
            </div>
        </div>
    );
}

export default ReactComponents;
