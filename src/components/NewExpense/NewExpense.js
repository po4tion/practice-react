import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

function NewExpense({ onAddExpense }) {
  const saveExpenseItemHandler = (items) => {
    const expenseItem = {
      ...items,
      id: Math.random().toString(),
    };

    onAddExpense(expenseItem);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseItem={saveExpenseItemHandler} />
    </div>
  );
}

export default NewExpense;
