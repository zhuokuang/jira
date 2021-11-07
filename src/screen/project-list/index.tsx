import { useEffect, useState } from "react"
import qs from 'qs';
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { clearObject } from "utils";
import { useDebounce } from "hooks";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
	const [search, setSearch] = useState({
		name: '',
		id: '',
	});
	const [list, setList] = useState([]);
	const [users, setUsers] = useState([]);
	const debouncedSearch = useDebounce(search, 200);

	useEffect(() => {
		fetch(`${apiUrl}/list?${qs.stringify(clearObject(debouncedSearch))}`).then(async response => {
			if(response.ok) {
				setList(await response.json());
			}
		})
	}, [debouncedSearch]);

	useEffect(() => {
		fetch(`${apiUrl}/users`).then(async response => {
			if(response.ok) {
				setUsers(await response.json());
			}
		});
	}, []);

	return (
		<div className="project-list">
			<SearchPanel users={users} search={search} setSearch={setSearch} />
			<List users={users} list={list} />
		</div>
	)
}