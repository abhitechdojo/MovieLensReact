import React, {PropTypes} from 'react';

const TableControl = (data) => (
	<table>
		<tr>
			<th>Movie Genre</th>
			<th>Movie Title</th>
			<th>Movie Year</th>
			<th>Avg Rating</th>
		</tr>
		<tbody>
			data.map(row => 
				<tr>
					<td>row.genre</td>
					<td>row.title</td>
					<td>row.year</td>
					<td>row.avgrating</td>
				</tr>
				)
		</tbody>
	</table>
	)

TableControl.propTypes = {
	tableData: PropTypes.arrayOf(
		PropTypes.shape({
			genre: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			year: PropTypes.string.isRequired,
			avgrating: PropTypes.string.isRequired
		}
		).isRequired
	).isRequired
}

export default TableControl;
