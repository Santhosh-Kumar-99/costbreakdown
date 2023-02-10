/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { PageContext } from '../App';
import { totalRowCost } from '../utils/rowCalculator';


const StyledRow = styled.div`
    min-width: 4rem;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
`;
function RowCost({ page }) {
    const [rowTotal, setrowTotal] = useState(0);
    const { tableState } = useContext(PageContext)

    useEffect(() => {
        totalRowCost(page, setrowTotal);
    }, [tableState])

    return (
        <StyledRow>${rowTotal}</StyledRow>
    )
}

export default RowCost