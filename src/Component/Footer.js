import React from 'react'
import { Link } from 'react-router-dom'
import { logo, navbar } from '../data/data'

export const Footer = () => {
  return (
    <footer className=" bg-blueGray-200 pt-8 pb-6 lg:ml-48 " >
    <div className="container mx-auto px-4 mt-0">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            
              {
                logo.map((item,index) =>{
                  return(
                    <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                      <a href={item.path} target='blank'>
                    <img  key={index}  src={item.img} />      
                    </a>
                    </button>
                  )
                })
              }
            
            
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6 ml-60  ">
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 -ml-40">USEFUL LINKS</span>
              <ul className="list-unstyled">
               {navbar.map((item,index) => {
                return(
                <li> <Link key={item.index} className='-ml-40' to={`${item.path}`}>{item.name}</Link></li>
                )
               })}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2024 </span>
            <a href="https://www.instagram.com/buntynamberdar/" target='blank' className="text-blueGray-500 hover:text-blueGray-800">Sushil Namberdar</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
