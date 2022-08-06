import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

function ExpensesList({ items }) {
  if (!items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((v) => (
        <ExpenseItem key={v.id} title={v.title} amount={v.amount} date={v.date} />
      ))}
    </ul>
  );
}

export default ExpensesList;
