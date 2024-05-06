import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.p`
	font-size: 3rem;
	color: var(--color-neutral);
	letter-spacing: 1px;
	font-weight: 600;

	span {
		color: var(--color-accent);
	}
`;

function Logo() {
	const navigate = useNavigate();
	return (
		<LogoText onClick={() => navigate('/')}>
			Quizzy<span>Q</span>
		</LogoText>
	);
}

export default Logo;
