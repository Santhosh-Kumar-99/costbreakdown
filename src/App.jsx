
import React, { useState } from 'react';
import { createContext } from 'react';
import styled from 'styled-components';
import Row from './components/Row';
import Summary from './components/Summary';
import Header from './components/Header';


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;

  padding: 40px;
  position: relative;
  //width: 1495px;
  min-width: 90vw;
  min-height: 80vh;

  background: var(--color-background);
  border-radius: 40px 40px 0px 0px;

  hr{
    width: 100%;
    border: 2px solid black;
  }

  .Button{
    padding-top: 25rem;
    display: flex;
    justify-content: space-between;
    width: 45rem;
    button{
      border-radius: 1rem;
      padding: 1rem;
      min-width: 10rem;
      border: transparent;
    }
    .negativeButton{
      background-color: var(--color-complex);
    }
    .positiveButton{

    }
  }

 
`;


export const PageContext = createContext(null);

function App() {
  const [tableState, setTableState] = useState([]);
  const [rowList, setRowList] = useState([]);
  const [total, setTotal] = useState([0, 0, 0]);
  const addRowHandler = () => {
    setRowList(rowList.concat(<Row pageId={rowList.length} />))
  }

  const removeRowHandler = () => {
    setTableState(tableState.slice(0, rowList.length - 1))
    setRowList(rowList.slice(0, rowList.length - 1))
  }
  return (
    <PageContext.Provider value={{ tableState, setTableState, total, setTotal }}>
      <StyledApp>
        <Summary />
        <hr />
        <Header />
        {rowList}
        <div className='Button'>
          <button onClick={removeRowHandler} className='negativeButton'>Remove Page</button>
          <button onClick={addRowHandler} className='positiveButton'>Add Page</button>
        </div>
      </StyledApp>

    </PageContext.Provider>
  );
}

export default App;
