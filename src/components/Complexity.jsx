import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const StyledComplexity = styled.div`
    /* var(--color-basic) */
    background-color: ${(props) => props.level === 0 ? `var(--color-none)}` : props.level === 1 ? `var(--color-basic)` : props.level === 2 ? `var(--color-advanced)` : `var(--color-complex)`};
    font-size: small;
    justify-content: center;
    height: 2em;
    padding: .1em;
    border-radius: 1em;
    display: flex;
    align-items: center;
`;



function Complexity({ level, name }) {
    return (
        <motion.div
            animate={{
                width: level === 0 ? '25%' : `${33 * level}% `
            }}
        >
            <StyledComplexity level={level}>
                {name}
            </StyledComplexity>
        </motion.div >
    )
}

export default Complexity