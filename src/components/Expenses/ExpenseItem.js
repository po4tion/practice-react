import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

function ExpenseItem({ date, title: t, amount }) {
  const [title, setTitle] = useState(t);
  console.log("Check");

  const clickHandler = () => {
    setTitle("업데이트!");
    console.log("클릭!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
}

export default ExpenseItem;
