import { User } from './search-panel';

interface ListProps {
	id?: number,
	name?: string,
	personId?: number,
	organization?: string,
	created?: number,
}

interface ListProps {
	users: User[],
	list: ListProps[],
}

export const List = ({users, list}: ListProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th>名称</th>
					<th>负责人</th>
				</tr>
			</thead>
			<tbody>
				{list.map(project => (
					<tr key={project.id}>
						<td>{project.name}</td>
						<td>{users.find(user => user.id === project.personId)?.name || '无'}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}