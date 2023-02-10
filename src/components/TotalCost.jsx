import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { PageContext } from '../App'


const StyledTotalCost = styled.div`

min-width: auto;
.title{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

}

.amount{
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 40px;
}

`;

function TotalCost() {
    const { tableState, total } = useContext(PageContext)
    const [final, setfinal] = useState(0)
    useEffect(() => {
        let totalCost = 0;
        total.forEach(element => {
            totalCost = totalCost + element;
        });
        setfinal(totalCost)
    }, [tableState])




    return (
        <StyledTotalCost>
            <div className='title'>Sub Total</div>
            <div className='amount'><p>${final}</p></div>
        </StyledTotalCost>

    )
}

export default TotalCost