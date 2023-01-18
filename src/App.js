import React, { useState } from 'react';
import './App.css';
import Expenses from './Component/Expense/Expenses';
import TopRow from './Component/Expense/TopRow';
import NewExpense from './Component/NewExpense/NewExpense';

const exp = [
	{
		id: 1,
		date: '2022-01-11',
		title: 'Phone',
		amt: 20000,
	},
	{
		id: 2,
		date: '2022-02-12',
		title: 'Food',
		amt: 2000,
	},
	{
		id: 3,
		date: '2022-03-13',
		title: 'Movie',
		amt: 200,
	},
	{
		id: 4,
		date: '2021-04-14',
		title: 'Trip',
		amt: 20000,
	},
	{
		id: 5,
		date: '2020-05-15',
		title: 'Car',
		amt: 2000000,
	},
];
function App() {
	const [datas, setData] = useState(exp);

	// const valueFromForm = formData => {
	// 	setData(preData => {
	// 		return [formData, ...preData];
	// 	});
	// };

  const valueFromForm = formData => {
    setData(
      (preData)=>{
        return[formData, ...preData]
      }
    );
  }

	const [filteredYear, setFilteredYear] = useState('2022');

	const filterYearHandeler = getYear => {
		setFilteredYear(getYear);
	};

	const filteredExp = datas.filter(data => {
		return new Date(data.date).getFullYear().toString() === filteredYear;
	});

	return (
		<div className="App">
			<div className="NewExpense">
				<NewExpense forData={valueFromForm} />
			</div>
			<div className="Expenses">
				<TopRow selectedYear={filteredYear} getYear={filterYearHandeler} />
				{filteredExp.length === 0 ? (
					<h1 className="no-data"> No Data</h1>
				) : (
					filteredExp.map(obj => {
						return <Expenses title={obj.title} date={obj.date} amt={obj.amt} />;
					})
				)}
				{/* <Expenses/> */}
			</div>
		</div>
	);
}

export default App;
