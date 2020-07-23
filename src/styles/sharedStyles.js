import styled from "styled-components"

export const StyledSectionsBg = styled.section`
	background-color: var(--background-colorA);
	transition: all 0.3s ease-in-out;
	color: var(--text-color);
	box-shadow: 4px 4px 3px black;
	box-sizing: border-box;
	border-radius: 3px;
`

export const StyledSections = styled(StyledSectionsBg)`
	padding: 15px 0 30px;
	min-width: 340px;

	h2 {
		width: 100%;
		height: 60px;
		line-height: 60px;
		margin: 20px auto;
		text-align: center;
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: bold;
	}

	/* @media (max-width: 830px) {
		width: 550px;
	} */
`

export const StyledDivsBuffetWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 15px 0;

	h3 {
		font-size: 1.1rem;
		width: 200px;
		font-weight: bold;
		text-align: start;
		padding: 0 10px;
		box-sizing: border-box;
		line-height: 1.5;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-around;
		width: 300px;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-around;
		width: 300px;
	}
`

export const StyledButtons = styled.button`
	position: relative;
	background-color: #f25252;
	border-radius: 2px;
	margin: 15px auto;
	padding: 10px 20px;
	border: none;
	box-shadow: 3px 3px 5px black;
	box-sizing: border-box;
	font-family: arial;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 5px 5px 5px black;
	}

	&:hover img {
		transform: translateY(-4px);
	}

	img {
		margin: 0 10px;
		transition: all 0.3s ease-in-out;
	}

	p {
		margin: 0 10px;
		font-size: 1.1rem;
		font-weight: bold;
		color: #f1f1f1;
	}
`

export const StyledLiItemsDisplay = styled.li`
	margin: 8px 4px;
	list-style: none;
	background-color: ${props => (props.isChecked ? "var(--color-B)" : "tranparent")};
	border: 2px solid var(--text-color);
	color: var(--text-color);
	flex-grow: 1;
	cursor: pointer;
	border-radius: 3px;
	transition: all 0.1s ease-in-out;
	box-shadow: ${props =>
		props.isChecked ? "inset 0 0 4px black" : "3px 3px 2px black"};

	:hover {
		border: 2px solid
			${props => (props.isChecked ? "var(--text-color)" : "var(--color-B)")};
	}

	&:active {
		transform: translateY(2px);
		box-shadow: inset 0 0 8px black;
	}

	label {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 100%;
		padding: 16px 32px;
	}

	label span {
		margin-left: 8px;
		font-size: 0.9rem;
	}

	input {
		display: none;
	}
`
