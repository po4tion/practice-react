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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      <ExpenseItem title={item[0].title} amount={item[0].amount} date={item[0].date} />
      <ExpenseItem title={item[1].title} amount={item[1].amount} date={item[1].date} />
      <ExpenseItem title={item[2].title} amount={item[2].amount} date={item[2].date} />
      <ExpenseItem title={item[3].title} amount={item[3].amount} date={item[3].date} />
    </Card>
  );
}

export default Expenses;
