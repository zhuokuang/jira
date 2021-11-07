import { useEffect, useState } from "react"
import qs from 'qs';
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { clearObject } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
	const [search, setSearch] = useState({
		name: '',
		id: '',
	});

	const [list, setList] = useState([]);

	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`${apiUrl}/list?${qs.stringify(clearObject(search))}`).then(async response => {
			if(response.ok) {
				setList(await response.json());
			}
		})
	}, [search]);

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