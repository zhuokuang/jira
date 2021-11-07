import {useArray} from 'hooks';
export const TryUseArray = () => {
	const {value, removeIndex, add, clear} = useArray([{name: 'rose', age: 21}]);

	return (
		<div className="try-use-array">
			<button onClick={() => add({name: 'john', age: 22})}>add john</button>
			<button onClick={() => removeIndex(0)}>remove</button>
			<button onClick={() => clear()}>clear</button>
			<div>
				{value.map((person, index) => (
					<div>
						{index} {person.name} {person.age}
					</div>
				))}
			</div>
		</div>
	)
}