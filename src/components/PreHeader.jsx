import React from 'react';
import investomate from '../assets/investomate-logo.png';
import asaanHisab from '../assets/asanhisab.png';


function PreHeader() {
  return (
    <div className = "w-full flex flex-row justify-start items-center px-80 py-1 text-xl font-extrabold">
        <div className = "flex flex-row items-center">
            <img src = {investomate} alt = "investomate" className = "h-6" />
            <p className = "text-sm font-bold text-black ml-2">Investomate</p>
        </div>
        <div className = "flex flex-row items-center ml-4">
            <img src = {asaanHisab} alt = "asaanHisab" className = "h-6" />
            <p className = "text-sm font-bold text-black ml-2">Asaan Hisab</p>
        </div>
    </div>
  )
}

export default PreHeader