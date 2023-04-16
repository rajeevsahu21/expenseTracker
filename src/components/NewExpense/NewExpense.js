import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  const editingHandler = () => {
    setIsEditing((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onCancel={editingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
