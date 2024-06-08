import React from 'react';
import { Code } from './Code';

const ReactProps = () => {
    const ex1code = `
function Welcome(props) {
    return (
        <h1>Hello, {props.name}</h1>
    );
}
    `;

    const ex2code = `
class Welcome extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
    `;

    const ex3code = `
function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}
    `;

    const ex4code = `
class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}
    `;

    const ex5code = `
function App() {
    const user = {
        name: 'John Doe',
        age: 25,
        location: 'New York'
    };

    return <UserProfile user={user} />;
}

function UserProfile(props) {
    return (
        <div>
            <h1>Name: {props.user.name}</h1>
            <h2>Age: {props.user.age}</h2>
            <h3>Location: {props.user.location}</h3>
        </div>
    );
}
    `;

    const ex6code = `
function Welcome({ name }) {
    return (
        <h1>Hello, {name}</h1>
    );
}
    `;

    const lifecycleCode = `
class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor: Props:', props);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps:', nextProps, prevState);
        return null; // No state change
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update: Prev Props:', prevProps);
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
            </div>
        );
    }
}
    `;

    const propsDrillingCode = `
function App() {
    const user = {
        name: 'Jane Doe',
        age: 30,
        location: 'San Francisco'
    };

    return (
        <div>
            <h1>Props Drilling Example</h1>
            <ParentComponent user={user} />
        </div>
    );
}

function ParentComponent(props) {
    return (
        <div>
            <h2>Parent Component</h2>
            <ChildComponent user={props.user} />
        </div>
    );
}

function ChildComponent(props) {
    return (
        <div>
            <h3>Child Component</h3>
            <GrandchildComponent user={props.user} />
        </div>
    );
}

function GrandchildComponent(props) {
    return (
        <div>
            <h4>Grandchild Component</h4>
            <p>Name: {props.user.name}</p>
            <p>Age: {props.user.age}</p>
            <p>Location: {props.user.location}</p>
        </div>
    );
}
    `;

    return (
        <div className="flex justify-center items-center lg:-mt-[470px]">
            <div className="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>Understanding Props in React</h1>
                <p>Props (short for properties) are a fundamental concept in React. They are used to pass data from one component to another, typically from a parent component to a child component. Props are read-only, meaning they should not be modified by the receiving component.</p>

                <h1 style={{ fontSize: '30px' }}>Passing Props to Functional Components</h1>
                <p>In functional components, props are passed as an argument to the function. Here's an example:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex1code} language='javascript'></Code>
                </pre>
                <p>This function component receives props and uses the name prop to display a greeting message.</p>

                <h1 style={{ fontSize: '30px' }}>Passing Props to Class Components</h1>
                <p>In class components, props are accessible via <code>this.props</code>. Here's the same example using a class component:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex2code} language='javascript'></Code>
                </pre>
                <p>The class component receives props and uses the name prop to display a greeting message.</p>

                <h1 style={{ fontSize: '30px' }}>Using Props in JSX</h1>
                <p>Props can be used to pass data to components when they are rendered. Here's how you can pass props to a component in JSX:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex3code} language='javascript'></Code>
                </pre>
                <p>In this example, the Welcome component is rendered three times with different name props.</p>

                <h1 style={{ fontSize: '30px' }}>Multiple Props</h1>
                <p>Components can receive multiple props. Here's an example with multiple props:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex4code} language='javascript'></Code>
                </pre>
                <p>The Greeting component receives two props: message and subtitle, and displays them accordingly.</p>

                <h1 style={{ fontSize: '30px' }}>Passing Objects as Props</h1>
                <p>You can also pass objects as props to components. Here's an example:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex5code} language='javascript'></Code>
                </pre>
                <p>In this example, the UserProfile component receives a user object as a prop and displays its properties.</p>

                <h1 style={{ fontSize: '30px' }}>Destructuring Props</h1>
                <p>For cleaner and more readable code, you can destructure props directly in the function parameters. Here's how:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex6code} language='javascript'></Code>
                </pre>
                <p>In this example, the name prop is destructured directly in the function parameters, making the code more concise.</p>

                <h1 style={{ fontSize: '30px' }}>Props Lifecycle</h1>
                <p>Understanding the lifecycle of props is crucial for managing component updates and ensuring that your application behaves as expected.</p>

                <h2 style={{ fontSize: '25px' }}>Mounting</h2>
                <p>During the mounting phase, the component is being created and inserted into the DOM.</p>
                <ul>
                    <li><strong>constructor(props)</strong>: Called when the component is created. Props can be accessed via <code>this.props</code> or passed to the constructor.</li>
                    <li><strong>static getDerivedStateFromProps(nextProps, prevState)</strong>: Invoked right before calling the render method, both on the initial mount and on subsequent updates. Used to update the state based on the props.</li>
                    <li><strong>componentDidMount()</strong>: Called once the component has been mounted to the DOM. Suitable for initializing external data sources.</li>
                </ul>

                <h2 style={{ fontSize: '25px' }}>Updating</h2>
                <p>During the updating phase, the component is being re-rendered due to changes in props or state.</p>
                <ul>
                    <li><strong>static getDerivedStateFromProps(nextProps, prevState)</strong>: Called again to update the state based on the props.</li>
                    <li><strong>shouldComponentUpdate(nextProps, nextState)</strong>: Determines if the component should re-render or not based on the changes in props or state.</li>
                    <li><strong>render()</strong>: Renders the component's JSX based on the current props and state.</li>
                    <li><strong>getSnapshotBeforeUpdate(prevProps, prevState)</strong>: Called right before the DOM is updated, allowing you to capture information (e.g., scroll position) from the DOM before it changes.</li>
                    <li><strong>componentDidUpdate(prevProps, prevState, snapshot)</strong>: Called after the component updates. Can be used to operate on the DOM when the component has been updated.</li>
                </ul>

                <h2 style={{ fontSize: '25px' }}>Unmounting</h2>
                <p>During the unmounting phase, the component is being removed from the DOM.</p>
                <ul>
                    <li><strong>componentWillUnmount()</strong>: Called immediately before the component is destroyed. Can be used to perform cleanup tasks such as removing event listeners.</li>
                </ul>

                <h1 style={{ fontSize: '30px' }}>Example: Lifecycle Methods with Props</h1>
                <pre>
                    <Code code={lifecycleCode} language='javascript'></Code>
                </pre>
                <p>This example demonstrates how props interact with lifecycle methods in a class component. You can see logs in the console to understand when each lifecycle method is called.</p>

                <h1 style={{ fontSize: '30px' }}>Props Drilling</h1>
                <p>Props drilling refers to the process of passing data from a top-level component down to nested child components through props. This can lead to deeply nested components receiving props that they do not need directly, but must pass down to their children.</p>
                <p>Here's an example demonstrating props drilling:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={propsDrillingCode} language='javascript'></Code>
                </pre>
                <p>In this example, the user object is passed from the App component to the ParentComponent, then to the ChildComponent, and finally to the GrandchildComponent, where it is used to display user details.</p>
            </div>
        </div>
    );
}

export default ReactProps;
