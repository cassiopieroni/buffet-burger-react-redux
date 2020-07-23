import styled from "styled-components"

export const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	max-width: 100%;
	width: 100%;
	margin: 15px auto;
	padding-bottom: 100px;

	@media (min-width: 900px) {
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
		padding: 0 16px 100px 16px;
	}
`
