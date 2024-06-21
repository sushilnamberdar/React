import React, { useState, useEffect, useContext } from 'react';
import { Code } from './Code';

const ReactHooks = () => {
    const useStateCode = `
const [count, setCount] = useState(0);

// Updating state
setCount(count + 1);
    `;

    const useEffectCode = `
useEffect(() => {
    // Side effects here
    document.title = \`You clicked \${count} times\`;
}, [count]);
    `;

    const useContextCode = `
const ThemeContext = React.createContext('light');

function ThemeToggle() {
    const theme = useContext(ThemeContext);
    return <button style={{ background: theme }}>Toggle Theme</button>;
}
    `;

    return (
        <div className="flex justify-center items-center lg:-mt-[470px] lg:mb-20">
            <div className="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>Understanding React Hooks</h1>
                <p>React Hooks are functions that enable you to use state and other React features without writing a class. They allow you to use React features in functional components, which can make your code more concise and easier to understand.</p>

                <h1 style={{ fontSize: '30px' }}>useState Hook</h1>
                <p>The <code>useState</code> hook is a function that allows functional components to manage state. It returns a stateful value and a function to update it.</p>
                <p>Example:</p>
                <pre>
                    <Code code={useStateCode} language='javascript'></Code>
                </pre>
                <p>In this example, <code>count</code> is a state variable initialized to 0, and <code>setCount</code> is a function to update it. The state can be updated using the setter function, as shown.</p>

                <h1 style={{ fontSize: '30px' }}>useEffect Hook</h1>
                <p>The <code>useEffect</code> hook adds the ability to perform side effects in functional components. It runs after every render, including the first render.</p>
                <p>Example:</p>
                <pre>
                    <Code code={useEffectCode} language='javascript'></Code>
                </pre>
                <p>In this example, the effect function updates the document title whenever the <code>count</code> state changes. The second argument to <code>useEffect</code> is an array of dependencies, which ensures that the effect runs only when those dependencies change.</p>

                <h1 style={{ fontSize: '30px' }}>useContext Hook</h1>
                <p>The <code>useContext</code> hook allows functional components to consume context created by the <code>React.createContext</code> API.</p>
                <p>Example:</p>
                <pre>
                    <Code code={useContextCode} language='javascript'></Code>
                </pre>
                <p>In this example, the <code>ThemeToggle</code> component consumes the theme context. It uses the <code>useContext</code> hook to access the current value of the context and render UI based on that value.</p>
            </div>
        </div>
    );
}

export default ReactHooks;
