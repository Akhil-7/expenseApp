import React from 'react'
import './Expenses.css'
function Expenses({title, date, amt}) {
    const cdate = new Date(date)
    const month = cdate.toLocaleString('default',{month:'long'})
    const day = cdate.toLocaleString('default',{day:'2-digit'})
    const year = cdate.getFullYear()
  return (
    <div className="">
        
        <div className='rowOfExp'>
            <div className="date">{month}<br/>{day}<br/>{year}</div>
            <div className="Exp"> <h1>{title}</h1></div>
            <div className="Amt"><h3>₹ {amt}</h3></div>
        </div>
    </div>
  )
}

export default Expenses