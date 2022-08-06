import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.scss";

function Expenses({ item }) {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = item.filter((v) => {
    return v.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((v) => (
        <ExpenseItem key={v.id} title={v.title} amount={v.amount} date={v.date} />
      ))}
    </Card>
  );
}

export default Expenses;
