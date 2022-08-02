import "./ExpenseDate.scss";

function ExpenseDate({ date }) {
  const year = date.toLocaleString("ko-KR", { year: "numeric" });
  const month = date.toLocaleString("ko-KR", { month: "long" });
  const day = date.toLocaleString("ko-KR", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{year}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
