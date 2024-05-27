import React,{useEffect} from 'react'
import 'tailwindcss/tailwind.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'
export const Code = (props) => {
    // const {code, language} = props;
    useEffect (() =>{
        Prism.highlightAll();
    },[]);
  return (
    <>
    
        <code className= {`language-${props.language}`}>
            {props.code}
        </code>
    </>
  )
}
