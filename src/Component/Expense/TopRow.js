import React, {useState} from 'react'
import './Expenses.css'
function TopRow(props) {


    const selectYear = (e)=>{

        props.getYear(e.target.value)
    }

  return (
    <div className="topRow">
            <div className="content"><h4>Filter By Year</h4></div>
            <div className="filter">
                <select name="" id="" value={props.selectedYear} onChange={selectYear}>
                    <option value={props.selectedYear}>{props.selectedYear}</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
  )
}

export default TopRow