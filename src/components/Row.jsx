/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { PageContext } from '../App';
import { STATIC_VARIABLES } from '../Global/GlobalVariables';
import Counter from './Counter';
import RowCost from './RowCost';
import { debounce } from '../utils/debouncer';

const StyledRow = styled.div`
    
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top:1rem ;
    input{
        border:0 transparent;
        background-color: transparent;
        outline: none;
        font-size: medium;
        text-align: left;
        padding-left:1em;
    }
    .rowCost{
        width:inherit;
    }
    .inputName{
        display: flex;  
    }
    h2{
        margin: 0;
        width:2rem;
    }
`;

function Row({ pageId }) {
    const { tableState, setTableState } = useContext(PageContext)
    useEffect(() => {
        setTableState([...tableState, { id: pageId, name: `Page ${pageId + 1}`, designComplexity: 0, interactionAnimationComplexity: 0, integerationComplexity: 0 }])
    }, [])

    const changeHandler = (event) => {

        let value = event.target.value;
        if (tableState.length === 0) {
            setTableState([{ id: pageId, name: value, designComplexity: 0, interactionAnimationComplexity: 0, integerationComplexity: 0 }])
        }
        else {
            let bool = false;
            const newArray = tableState.map((ele) => {
                if (ele.id === pageId) {
                    bool = true;
                    return { ...ele, name: value }
                } else {
                    return { ...ele }
                }
            })
            bool ? setTableState([...newArray]) : setTableState([...tableState, { id: pageId, name: value, designComplexity: 0, interactionAnimationComplexity: 0, integerationComplexity: 0 }])
        }
    }

    const optimizedVersion = debounce(changeHandler)


    return (
        <StyledRow>
            <div className='inputName'>
                <h2>{pageId + 1}.</h2>
                <input placeholder='Enter Page name here' onChange={optimizedVersion} />
            </div>
            <Counter page={tableState[pageId]} counterName={STATIC_VARIABLES.PAGE_DESIGN_COLUMN_VAR} />
            <Counter page={tableState[pageId]} counterName={STATIC_VARIABLES.INTERACTION_COLUMN_VAR} />
            <Counter page={tableState[pageId]} counterName={STATIC_VARIABLES.INTEGRATION_COLUMN_VAR} />
            <RowCost page={tableState[pageId]} className='rowCost' />
        </StyledRow>

    )
}

export default Row

