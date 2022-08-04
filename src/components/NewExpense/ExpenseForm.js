import { useState } from "react";
import "./ExpenseForm.scss";

function ExpenseForm({ onSaveExpenseItem }) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => ({ ...prevState, amount: e.target.value }));
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => ({ ...prevState, date: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseItem = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    onSaveExpenseItem(expenseItem);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} min="2022-08-05" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
