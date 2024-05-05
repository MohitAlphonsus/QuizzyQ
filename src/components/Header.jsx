import { FaSun, FaMoon } from 'react-icons/fa6';
import styled from 'styled-components';
import { Logo } from '../components';
import { useEffect, useState } from 'react';

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 5%;
`;

const ThemeToggleButton = styled.button`
	display: flex;
	align-items: center;
	gap: 1rem;
	border: none;
	background: none;
	color: var(--color-neutral);
	font-size: 1.8rem;
	cursor: pointer;

	.theme-icon {
		font-size: 2rem;
	}
`;

function Header() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

	const toggleTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
		document.querySelector('body').setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	};

	useEffect(function () {
		toggleTheme();
	}, []);

	// useEffect(function () {
	// 	localStorage.getItem('theme') === 'light'
	// 		? setTheme('light')
	// 		: setTheme('dark');
	// }, []);

	return (
		<Nav>
			<Logo />
			<ThemeToggleButton onClick={toggleTheme}>
				{theme === 'dark' ? (
					<FaMoon className="theme-icon" />
				) : (
					<FaSun className="theme-icon" />
				)}
			</ThemeToggleButton>
		</Nav>
	);
}

export default Header;
