import styled, { css } from 'styled-components';

const Btn = styled.button`
	border: none;
	padding: 1.6rem 3.2rem;
	font-size: 1.6rem;
	font-weight: 700;
	border-radius: 0.8rem;
	cursor: pointer;
	${props => {
		switch (props.$type) {
			case 'secondary':
				return css`
					background-color: var(--color-neutral);
					color: var(--color-primary);
				`;
			default:
				return css`
					background-color: var(--color-accent);
					color: var(--color-neutral-2);
				`;
		}
	}}
`;

function Button({ children, onClick, $type }) {
	return (
		<Btn onClick={onClick} $type={$type}>
			{children}
		</Btn>
	);
}

export default Button;
