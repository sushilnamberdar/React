import React from 'react'

export const ReactIntro = () => {
    return (
        <div class=" flex justify-center lg:-mt-60">
            <div class="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>React Introduction</h1>
                <h2>What is React?</h2>
                <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.

                    React is a tool for building UI components.</p>
                <h1 style={{ fontSize: '30px' }}>How does React Work?</h1>
                <h2>React creates a VIRTUAL DOM in memory</h2>
                <h2>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</h2>
                <h2>React only changes what needs to be changed!</h2>
                <p>React finds out what changes have been made, and changes only what needs to be changed.You will learn the various aspects of how React does this in the rest of this tutorial.</p>
                <h1 style={{ fontSize: '30px' }}> React.JS History</h1>
                <h2 className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-md" style={{ fontSize: '20px' }}>
                     
                        Current version of React.JS is V18.0.0 (April 2022).
                        Initial Release to the Public (V0.3.0) was in July 2013.
                        React.JS was first used in 2011 for Facebook's Newsfeed feature.
                        Facebook Software Engineer, Jordan Walke, created it.
                        Current version of create-react-app is v5.0.1 (April 2022)
                        create-react-app includes built tools such as webpack, Babel, and ESLint.
                </h2>
            </div>
        </div>
    )
}
