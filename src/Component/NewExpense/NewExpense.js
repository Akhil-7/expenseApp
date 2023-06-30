import React, { useState } from 'react';
import './NewExpense.css';
function NewExpense(props) {
	// const [Title, setTitle] = useState('')
	// const [Date, setDate] = useState('')
	// const [Amt, setAmt] = useState('')

	// const changeTitle = (e) =>{
	//   console.log(e.target.value)
	//   setTitle(e.target.value)
	// }

	const [userInput, setUserInput] = useState({inputtedTitle: 'LCC',inputtedDate: '22',inputtedAmt: '2000'});

	const changeTitle = (e) => {
		setUserInput((previousState) => {
			return { ...previousState, inputtedTitle: e.target.value   };
		});
	};

	const changeAmt = e => {
		setUserInput(previousState => {
			return { ...previousState, inputtedAmt: e.target.value };
		});
	};

	const changeDate = e => {
		setUserInput(previousState => {
			return { ...previousState, inputtedDate: e.target.value };
		});
	};

	const submitData = e => {
		e.preventDefault();

		const formValues = {
			title: userInput.inputtedTitle,
			date: userInput.inputtedDate,
			amt: userInput.inputtedAmt,
		};

		props.forData(formValues);

		setUserInput({
			inputtedTitle: '',
			inputtedDate: '',
			inputtedAmt: '',
		});
	};

	return (
		<form onSubmit={submitData}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={userInput.inputtedTitle}
						onChange={changeTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={userInput.inputtedAmt}
						onChange={changeAmt}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={userInput.inputtedDate}
						onChange={changeDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default NewExpense;
