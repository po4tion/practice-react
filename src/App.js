import "./App.scss";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: "id_01", title: "Car Insurance1", amount: 294.67, date: new Date(2022, 8, 3) },
    { id: "id_02", title: "Car Insurance2", amount: 294.67, date: new Date(2022, 8, 3) },
    { id: "id_03", title: "Car Insurance3", amount: 294.67, date: new Date(2022, 8, 3) },
    { id: "id_04", title: "Car Insurance4", amount: 294.67, date: new Date(2022, 8, 3) },
  ];

  return (
    <div>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
