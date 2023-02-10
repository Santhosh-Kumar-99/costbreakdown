import React, { useContext } from 'react'
import styled from 'styled-components'
import { PageContext } from '../App';
import { InteractionAnimationCost, PageDesignCost, IntegerationCost } from './ColumnCost';
import TotalCost from './TotalCost';

const StyledSummary = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
    align-items: flex-end;

    .pageCount{
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        margin: 0;
        min-width: 20rem;
    }
    p{
        margin: 0;
    }
    .pageHeader{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
    }
   
    .count{     
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        line-height: 60px;
    }
    
`;

function Summary() {

    const { tableState } = useContext(PageContext)
    return (
        <StyledSummary>
            <div className='pageCount'>
                <p className='count'>{tableState.length !== 0 && tableState[tableState.length - 1].id + 1}</p>
                <p className='pagesHeader'>{tableState.length !== 0 && tableState[tableState.length - 1].id + 1 === 1 ? 'Page' : 'Pages'}</p>
            </div>
            <PageDesignCost />
            <InteractionAnimationCost />
            <IntegerationCost />
            <TotalCost />
        </StyledSummary>
    )
}

export default Summary