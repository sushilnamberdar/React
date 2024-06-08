// import { useState } from 'react'
import React from 'react'
import { topic } from '../data/data'

import { Button } from '@headlessui/react'
import { Link } from 'react-router-dom'


export const Mainmenu = () => {


    const handleMenuItemClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (

        <div class="container block justify-center mt-10 ml-4 sticky top-20 z-50 " style={{width:'150px'}} >
            {/* Menu button that show only in mobile  */}
            <input type='checkbox' id='menu-toggle' className='hidden peer' />
            <label
                htmlFor='menu-toggle'
                className='menu-button block p-2 bg-gray-800 text-white rounded cursor-pointer lg:hidden'
                style={{ width: '100px' }}
            >
                Menu
            </label>
            {/* Menu items (hidden on small screens unless checbox is checked) */}
            <div className='mt-4 peer-checked:block lg:block hidden'>
                {topic.map((item, index) => {
                    return (
                        <div key={index}  onClick={handleMenuItemClick} className='p-2  mb-2 flex items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '10px', margin: '5px', width: '200px' }}
                        >
                            <Link to={`${item.path}`}>
                            {item.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

