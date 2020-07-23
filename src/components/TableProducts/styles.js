import styled from "styled-components"

export const StyledTable = styled.table`
	margin: 0 auto;
	width: 98%;
	color: var(--text-color);

	thead {
		background-color: var(--background-colorA);
	}

	thead th {
		height: 30px;
		line-height: 1.5;
		font-weight: 400;
		padding-bottom: 4px;
		text-transform: uppercase;
	}

	tfoot {
		background-color: var(--background-colorA);
	}

	tfoot tr {
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 1rem;
	}

	tfoot tr th {
		text-align: right;
		padding-right: 10px;
		font-weight: 400;
		text-transform: uppercase;
	}
`

export const StyledTh = styled.th`
	width: ${props => props.width}%;
	height: 30px;
	line-height: 30px;
`
