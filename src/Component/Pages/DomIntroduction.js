import React from 'react';
import { Code } from './Code';

const DomIntroduction = () => {
    const ex1code = `
<!DOCTYPE html>
<html>
<head>
    <title>Document Object Model</title>
</head>
<body>
    <h1 id="title">Hello, World!</h1>
    <p class="description">The Document Object Model is a programming interface for web documents.</p>
</body>
</html>
    `;

    const ex2code = `
document.getElementById('title').innerHTML = 'Hello, DOM!';
    `;

    const ex3code = `
const paragraphs = document.getElementsByClassName('description');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}
    `;

    const ex4code = `
const newElement = document.createElement('div');
newElement.textContent = 'This is a new element!';
document.body.appendChild(newElement);
    `;

    const ex5code = `
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
    `;

    return (
        <div className="flex justify-center items-center lg:-mt-40">
            <div className="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>Introduction to the DOM</h1>
                <p>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes.</p>

                <h1 style={{ fontSize: '30px' }}>Basic HTML Structure</h1>
                <p>Here is an example of a basic HTML document:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex1code} language='html'></Code>
                </pre>

                <h1 style={{ fontSize: '30px' }}>DOM Structure</h1>
                <p>The DOM represents an HTML document as a tree structure where each node is an object representing part of the document. The structure starts from the document object and branches out to include elements, attributes, and text nodes.</p>
                <p>Here's a simple representation of the DOM structure for the provided HTML example:</p>
                <pre>
                    {`
Document
 └── html
     ├── head
     │   └── title
     └── body
         ├── h1#title
         └── p.description
                    `}
                </pre>
                <p className='text-red-500'>Accessing and Manipulating the DOM</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <p>Changing the text of an element with id "title":</p>
                <pre>
                    <Code code={ex2code} language='javascript'></Code>
                </pre>

                <p className='bg-yellow-100 text-black pl-5 pr-5'>Using JavaScript to access and manipulate the DOM can change the content and style of elements.</p>
                <p>Changing the style of all elements with class "description":</p>
                <pre>
                    <Code code={ex3code} language='javascript'></Code>
                </pre>

                <h1 style={{ fontSize: '30px' }}>Creating and Appending Elements</h1>
                <p>Adding a new element to the DOM:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex4code} language='javascript'></Code>
                </pre>

                <h1 style={{ fontSize: '30px' }}>Event Listeners</h1>
                <p>Listening for the DOM content to be fully loaded:</p>
                <h1 style={{ fontSize: '30px' }}>Example:</h1>
                <pre>
                    <Code code={ex5code} language='javascript'></Code>
                </pre>
            </div>
        </div>
    );
};

export default DomIntroduction;
