import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Code } from './Code'; // Assuming you have a Code component

const AxiosPage = () => {
  // State to store fetched data
  const [data, setData] = useState(null);
  // State to handle errors
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make GET request using axios
        const response = await axios.get('https://api.example.com/data');
        // Update state with fetched data
        setData(response.data);
        // Clear error state if request succeeds
        setError(null);
      } catch (error) {
        // Handle error if request fails
        setData(null);
        setError(error.message);
      }
    };

    // Call fetchData function
    fetchData();

    // Clean-up function (optional) - cancels ongoing requests
    return () => {
      // Cleanup code if necessary
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Code for the example
  const exampleCode = `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
        setError(null);
      } catch (error) {
        setData(null);
        setError(error.message);
      }
    };

    fetchData();

    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default AxiosPage;
`;

  // Render fetched data or error message
  return (
    <div className="flex justify-center items-center lg:-mt-[470px]">
      <div className="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
        <h1 style={{ fontSize: '30px' }}>Using Axios in React with useEffect</h1>
        <h2>What is Axios?</h2>
        <p>Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js. It provides an easy-to-use API for performing asynchronous operations.</p>
        <h2>Installation:</h2>
        <p>To use Axios in your React project, you need to install it first:</p>
        
         
          
          <pre className=" p-2 rounded mb-4 text-green-600 overflow-x-auto" style={{ background: 'black' }}>
          <code>npm install axios</code>
          </pre>

        
        <p>or</p>
        <pre className=" p-2 rounded mb-4 text-green-600 overflow-x-auto" style={{ background: 'black' }}>
        <code>yarn add axios</code>
          </pre>
        <h2>Example:</h2>
        <p>Here's how you can use Axios with useEffect to fetch data from an API when the component mounts:</p>
        <pre>
        <Code code={exampleCode} language="javascript" />
        </pre>
        <p>In this example, we:</p>
        <ul>
          <li>Import React, useState, useEffect, and axios.</li>
          <li>Define a functional component called AxiosPage.</li>
          <li>Use useState to manage state for fetched data and errors.</li>
          <li>Use useEffect to perform the data fetching when the component mounts.</li>
          <li>Inside useEffect, we define a fetchData function to make a GET request using axios.</li>
          <li>We update the state with the fetched data and handle errors accordingly.</li>
          <li>The useEffect hook runs only once when the component mounts (empty dependency array).</li>
          <li>We render the fetched data or error message based on the state.</li>
        </ul>
        <p>Ensure that you replace the URL in the axios.get call with the actual API endpoint you want to fetch data from.</p>
      </div>
    </div>
  );
};

export default AxiosPage;
