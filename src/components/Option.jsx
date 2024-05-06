function Option({ className, children, onClick, disabled }) {
	return (
		<button className={className} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}

export default Option;
