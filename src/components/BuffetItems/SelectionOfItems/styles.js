import styled from "styled-components"

export const StyledDivWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 16px 0;
	position: relative;
	margin: 15px auto;

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
		font-weight: bold;
		text-align: center;
		line-height: 1.5;
	}

	span {
		margin-left: 8px;
	}
`
