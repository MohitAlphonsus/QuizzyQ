import styled from 'styled-components';

const Btn = styled.button`
	border: none;
	padding: 1.6rem 3.2rem;
	font-size: 1.6rem;
	font-weight: 700;
	border-radius: 0.8rem;
	cursor: pointer;
	background-color: var(--color-accent);
	color: var(--color-neutral-2);
`;

function Button({ children, onClick }) {
	return <Btn onClick={onClick}>{children}</Btn>;
}

export default Button;
