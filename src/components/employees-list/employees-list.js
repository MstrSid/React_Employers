import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDelete }) => {
	const listItems = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)} />
		)
	});
	return (
		<ul className="app-list list-group">
			{listItems}
		</ul>
	)
}

export default EmployeesList;