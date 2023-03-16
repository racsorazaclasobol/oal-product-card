import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButton } from '../.';

const product = {
	id: '1',
	title: 'Coffee Mug - Card.',
	// img: './coffee-mug.png'
}

const App = () => {
	return (
		<>
			<ProductCard product={ product } initialValues={{ counter: 4, maxCounter: 10 }} >
			{
				({ counter, maxCounter, isMaxCounterReached, reset, increaseBy }) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButton />
					</>
				)
			}
			</ProductCard>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
