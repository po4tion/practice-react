import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseItemHandler = (items) => {
    const expenseItem = {
      ...items,
      id: Math.random().toString(),
    };

    onAddExpense(expenseItem);
  };

  const startEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const stopEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm onSaveExpenseItem={saveExpenseItemHandler} onCancel={stopEditingHandler} />
      ) : (
        <button onClick={startEditingHandler}>Add New Expenses</button>
      )}
    </div>
  );
}

export default NewExpense;
