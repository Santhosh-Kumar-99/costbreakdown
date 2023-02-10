import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { PageContext } from '../App';
import { STATIC_VARIABLES } from '../Global/GlobalVariables';
import { columnCalculator } from '../utils/columnCalculator';




const StyledCost = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
`;

export function PageDesignCost() {
    const { tableState, total, setTotal } = useContext(PageContext);
    const [designColoumnCost, setdesignColoumnCost] = useState(0);
    useEffect(() => {
        columnCalculator(tableState, STATIC_VARIABLES.PAGE_DESIGN_COLUMN_VAR, setdesignColoumnCost, setTotal, total)
    }, [tableState])

    return (
        <div>
            <StyledCost>${designColoumnCost}</StyledCost>
            <div>Page Design</div>
        </div>

    )
}


export function InteractionAnimationCost() {
    const { tableState, total, setTotal } = useContext(PageContext);
    const [interactionColumnCost, setInteractionColumnCost] = useState(0);
    useEffect(() => {
        columnCalculator(tableState, STATIC_VARIABLES.INTERACTION_COLUMN_VAR, setInteractionColumnCost, setTotal, total)

    }, [tableState])
    return (
        <div>
            <StyledCost>${interactionColumnCost}</StyledCost>
            <div>
                Interaction & AnimationCost
            </div>
        </div>
    )
}

export function IntegerationCost() {
    const { tableState, total, setTotal } = useContext(PageContext);
    const [integerationColumnCost, setIntegerationColumnCost] = useState(0);
    useEffect(() => {
        columnCalculator(tableState, STATIC_VARIABLES.INTEGRATION_COLUMN_VAR, setIntegerationColumnCost, setTotal, total)
    }, [tableState])
    return (
        <div>
            <StyledCost>${integerationColumnCost}</StyledCost>
            <div>CMS/Dynamic Data/ Integeration</div>
        </div>
    )
}
