import selectExpense from '../../selectors/expenses';

const expenses = [
	{
		id: '1',
		description: 'Hekko',
		note: '',
		amount: 109,
		createdAt: 0
	},
	{
		id: '2',
		description: 'Hello123',
		note: '',
		amount: 10999,
		createdAt: -1000
	},
	{
		id: '3',
		description: 'Hekko3221',
		note: '',
		amount: 10999999,
		createdAt: -2000
	}
];

test('should filter text by data', () => {
	const filters = {
		text: 'H',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpense(expenses, filters);
});
