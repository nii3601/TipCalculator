"use client";
import './globals.css';
import { useState } from 'react';



export default function Home() {

  const [userInput,setUserInput] = useState<number>(0.00);
  const [rate,selectRate] = useState<number>(0);

  

  function onChangeUserInput(e:any){
    e.preventDefault();
    setUserInput(e.target.value);
  }

  return (
    <main className='flex flex-col items-center justify-center bg-slate-50 min-h-screen w-screen pb-10'>
      <div className='flex flex-col space-y-4 w-full px-5 md:px-20 lg:px-40'>
        <p className='font-bold text-black w-full text-base md:text-xl lg:text-2xl'>Tip Calculator</p>
        <input
        value={`${Number.isNaN(userInput) ? "" : userInput}`}
        placeholder='Enter Total Bill'
        className='w-full h-10 md:h-14 p-2 rounded border border-black font-medium'
        type={"text"}
        inputMode={"decimal"}
        onChange={onChangeUserInput}
      />
      <div className='flex flex-row w-full space-x-2 justify-evenly items-center'>
        <button
          onClick={()=>{
            selectRate(0.05)
          }}
          className={`h-14 lg:h-20 w-full ${rate === 0.05 ? "bg-slate-400" : "bg-slate-600"} hover:bg-slate-400 hover:text-black text-white rounded text-xs md:text-base lg:text-lg`}>
          5%
        </button>
        <button 
        onClick={()=>{
          selectRate(0.10)
        }}
        className={`h-14 lg:h-20 w-full ${rate === 0.10 ? "bg-slate-400" : "bg-slate-600"} hover:bg-slate-400 hover:text-black text-white rounded text-xs md:text-base lg:text-lg`}>
          10%
        </button>
        <button 
        onClick={()=>{
          selectRate(0.15)
        }}
        className={`h-14 lg:h-20 w-full ${rate === 0.15 ? "bg-slate-400" : "bg-slate-600"} hover:bg-slate-400 hover:text-black text-white rounded text-xs md:text-base lg:text-lg`}>
          15%
        </button>
      </div>
      {
        rate !== 0 ?
        <div className='flex flex-row items-center justify-center mt-2'>
        <p className='text-black font-bold text-3xl'>&#x20B5;</p>
        <p className='pt-5 text-6xl'>{!Number.isNaN(userInput) ? (userInput * rate).toFixed(2) : '0.00'}</p>
      </div>
        :
        <></>
      }
      </div>
    </main>
  )
}
