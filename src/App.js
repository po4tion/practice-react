import { useState } from "react";
import "./App.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYEXPENSES = [
  { id: "id_01", title: "Car Insurance1", amount: 294.67, date: new Date(2022, 8, 7) },
  { id: "id_02", title: "Car Insurance2", amount: 294.67, date: new Date(2022, 8, 7) },
  { id: "id_03", title: "Car Insurance3", amount: 294.67, date: new Date(2022, 8, 7) },
  { id: "id_04", title: "Car Insurance4", amount: 294.67, date: new Date(2022, 8, 7) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [...prev, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
