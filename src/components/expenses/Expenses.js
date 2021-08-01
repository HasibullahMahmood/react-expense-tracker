import './Expenses.css';

import ExpenseItem from '../expenseItem/ExpenseItem';
import Card from '../card/Card';

const Expenses = () => {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];
	return (
		<Card className="expenses">
			{expenses.map((expense) => {
				return <ExpenseItem expenseObj={expense} key={expense.id} />;
			})}
		</Card>
	);
};

export default Expenses;