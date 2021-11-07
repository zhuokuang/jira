export interface User {
	id: number,
	name: string,
}

interface SearchPanelProps {
	users: User[],
	search: {
		name: string,
		id: string,
	},
	setSearch: (search: SearchPanelProps['search']) => void,
}


export const SearchPanel = ({users, search, setSearch}: SearchPanelProps) => {

	return (
		<form>
			<input type="text" value={search.name} onChange={evt => setSearch({
				...search,
				name: evt.target.value,
			})} />
			<select value={search.id} onChange={evt => setSearch({
					...search,
					id: evt.target.value,
				})
			}>
				<option key={''} value="">负责人</option>
				{users.map(user => (
					<option key={user.id} value={user.id}>{user.name}</option>
				))}
			</select>
		</form>
	)
}