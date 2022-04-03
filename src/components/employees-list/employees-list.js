import './employees-list.scss';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
	const listItems = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
		)
	});
	return (
		<ul className="app-list list-group">
			{listItems}
		</ul>
	)
}

export default EmployeesList;