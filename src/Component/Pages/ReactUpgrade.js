import React from 'react'

export const ReactUpgrade = () => {
    return (
        <div class=" flex justify-center lg:-mt-40">
            <div class="max-w-full lg:max-w-screen-md pl-8 pr-8 space-y-4" style={{ fontSize: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>Upgrade to React 18</h1>
                <h2>Upgrading an existing React application to version 18 only requires two steps.</h2>
                <p className="bg-gray-800 text-white p-4 sm:p-8 md:p-8 lg:p-10 xl:p-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-md h-auto " style={{ fontSize: '1.2rem', padding: '2vw' }}>
                    If you are already using the latest version of create-react-app which uses React version 18 you can skip this section.</p>
                <h1 style={{ fontSize: '30px' }}>Step 1: Install React 18</h1>
                <pre className=' p-2 rounded mb-4 text-green-600 overflow-x-auto' style={{ background: 'black' }}>
                    <code>npm i react@latest react-dom@latest</code>
                </pre>
                <h1 style={{ fontSize: '30px' }}>Step 2: Use the new root API</h1>
                <p>In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.</p>
            </div>
        </div>
    )
}
