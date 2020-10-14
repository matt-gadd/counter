import { create, tsx } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';
import * as css from './Counter.m.css';

const factory = create({ icache });
export default factory(function Counter({ middleware: { icache } }) {
	const count = icache.getOrSet('count', 0);
	return (
		<virtual>
			<button classes={ css.decrement } onclick={() => {
				icache.set("count", (current: number) => current - 1)
			}}>-</button>
			<span classes= { css.count }>{ `${count}` }</span>
			<button classes={ css.decrement } onclick={() => {
				icache.set("count", (current: number) => current + 1)
			}}>+</button>
		</virtual>
	);
});
