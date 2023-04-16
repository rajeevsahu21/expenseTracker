import Expensedate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseTitle, expenseAmount }) => {
  return (
    <li>
      <Card className="expense-item">
        <Expensedate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
