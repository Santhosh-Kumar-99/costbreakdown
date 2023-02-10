import React, { useContext } from 'react'
import styled from 'styled-components'
import { PageContext } from '../App';
import { STATIC_VARIABLES } from '../Global/GlobalVariables';
import Complexity from './Complexity';


const StyledCounter = styled.div`
    width: 16rem;
    min-height:1rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 2, 71, 0.1);
    border-radius: 100px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding:0.05em 0em;
    
  
    .complexity{
        text-align: center;
        flex-grow: 2;
    }
    button{
        flex-grow: 0;
        border: transparent;
        background-color: transparent;
        font-size:1rem;
        font-weight: 400;
        padding-left:1rem;
        padding-right:1rem;
    }
`;




function Counter({ page, counterName }) {

    const { tableState, setTableState } = useContext(PageContext)

    const decrementHanlder = () => {
        if (page[counterName] > 0 && page[counterName] <= 3) {
            if (tableState.length === 0) {
                setTableState([{ ...page, [counterName]: page[counterName] - 1 }])
            }
            else {
                let bool = false;
                const newArray = tableState.map((ele) => {
                    if (ele.id === page.id) {
                        bool = true;
                        return { ...ele, [counterName]: page[counterName] - 1 }
                    } else {
                        return { ...ele }
                    }
                })
                bool ? setTableState([...newArray]) : setTableState([...tableState, { ...page, [counterName]: page[counterName] - 1 }])
            }

        }

    }

    const incrementHandler = () => {
        if (page[counterName] >= 0 && page[counterName] < 3) {
            if (tableState.length === 0) {
                setTableState([{ ...page, [counterName]: page[counterName] + 1 }])

            }
            else {
                let bool = false;
                const newArray = tableState.map((ele) => {
                    if (ele.id === page.id) {
                        bool = true;
                        return { ...ele, [counterName]: page[counterName] + 1 }
                    } else {
                        return { ...ele }
                    }
                })
                bool ? setTableState([...newArray]) : setTableState([...tableState, { ...page, [counterName]: page[counterName] + 1 }])
            }

        }

    }

    const changeHandler = (level) => {
        switch (level) {
            case 0:
                return <Complexity level={level} name={STATIC_VARIABLES.COMPLEXITY_BAR_NAME_1_VAR} />;
            case 1:
                return <Complexity level={level} name={STATIC_VARIABLES.COMPLEXITY_BAR_NAME_2_VAR} />;
            case 2:
                return <Complexity level={level} name={STATIC_VARIABLES.COMPLEXITY_BAR_NAME_3_VAR} />;
            case 3:
                return <Complexity level={level} name={STATIC_VARIABLES.COMPLEXITY_BAR_NAME_4_VAR} />;
            default:
                return <Complexity level={level} name={STATIC_VARIABLES.COMPLEXITY_BAR_NAME_1_VAR} />;

        }
    }
    return (
        <StyledCounter>
            <button onClick={decrementHanlder}>-</button>
            <div className='complexity'>
                {page ? changeHandler(page[counterName]) : <Complexity level={0} name={STATIC_VARIABLES.COMPLEXITY_BAR_NAME_1_VAR} />}
            </div>
            <button onClick={incrementHandler}>+</button>

        </StyledCounter>

    )
}

export default Counter