import styled from "styled-components"

export const StyledDiv = styled.div`
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`

const StyledLabel = styled.label`
	display: flex;
	align-items: start;
	flex-direction: column;
	margin: 8px auto;
	width: 90%;
	text-align: start;

	input {
		width: 100%;
		border: 1px solid var(--text-color);
		border-radius: 3px;
		height: 40px;
		padding: 3px 10px;
		margin: 5px 0;
		font-weight: bold;
		text-transform: uppercase;
		background-color: var(--color-B);
		color: var(--text-color);

		&::placeholder {
			color: lightgray;
			text-transform: lowercase;
			font-weight: 400;
		}
	}
`

export const StyledLabelXL = styled(StyledLabel)`
	width: 100%;
`

export const StyledLabelL = styled(StyledLabel)`
	width: 69%;
`

export const StyledLabelM = styled(StyledLabel)`
	width: 49%;
`

export const StyledLabelS = styled(StyledLabel)`
	width: 29%;
`
