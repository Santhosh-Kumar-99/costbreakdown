import React from 'react'
import styled from 'styled-components';
import { Info } from '../Global/Icons';


const StyledHeader = styled.div`
.designHeader{
    width: 16rem;
}
.header{
    display: flex;
    align-items: center;
}
display: flex;
justify-content: space-between;
width: 100%;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
p{
    display: flex;
}
`;
function Header() {
    return (
        <StyledHeader>
            <div className='designHeader header'><p>Pages</p><Info /></div>

            <div className='header'><p>Design</p><Info /></div>

            <div className='header'><p>Interactions & Animations</p><Info /></div>

            <div className='header'><p>Integeration</p><Info /></div>

            <div className='header'><p>Cost</p><Info /></div>

        </StyledHeader>
    )
}

export default Header;