import React, { useState } from 'react'

function Random() {
    const [password,setPassword] = useState('')
    const generatePassword = (length)=> {
        let result = '';
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()|}{}';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random()* charactersLength));    
        }
        return result;
    }
    const handleGenerateClick = () => {
        const length = 8; 
        setPassword(generatePassword(length));
    };
  return (
    <div className=' h-[100vh] grid justify-center items-center'>
        <div className=' h-[20vh] w-[30vw] bg-[wheat] flex justify-center items-center gap-[10px]'>
           <input value={password}  type="text
           " placeholder='Generate Password' className=' h-[6vh]'/>
            <button className=' bg-[red] h-[6vh] w-[6vw] font-semibold' onClick={handleGenerateClick}>Click me</button>
        </div>
    </div>
  )
}

export default Random