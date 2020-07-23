import styled from "styled-components"

export const StyledDivWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 100%;
	padding: 8px 0;
	position: relative;
	margin: 16px auto;

	ul {
		display: flex;
		align-items: center;
		justify-content: stretch;
		flex-wrap: wrap;
		width: 100%;
	}
`

export const StyledDivTitle = styled.div`
	display: flex;
	align-items: center;

	h3 {
		font-size: 1.1rem;
		font-weight: 400;
		text-align: center;
		line-height: 1.5;
		text-transform: uppercase;
	}

	span {
		margin-left: 8px;
		font-weight: 400;
		font-size: 1rem;
	}
`
