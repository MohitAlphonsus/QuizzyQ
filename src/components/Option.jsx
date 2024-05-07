function Option({ className, children, onClick, isDisabled }) {
	return (
		<button className={className} onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
}

export default Option;
