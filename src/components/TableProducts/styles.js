import styled from "styled-components"

export const StyledTable = styled.table`
	margin: 0 auto;
	width: 98%;
	color: #012840;

	thead {
		background-color: #012840;
		color: #f4f4f4;
	}

	thead th {
		height: 30px;
		line-height: 30px;
	}

	tfoot {
		background-color: #012840;
		color: #f4f4f4;
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
	}
`

export const StyledThDescription = styled.th`
	width: 50%;
`

export const StyledThQtd = styled.th`
	width: 20%;
`

export const StyledThValues = styled.th`
	width: 15%;
`
