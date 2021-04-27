import React, {FC} from 'react';
import styled from 'styled-components'
import { ActionButton } from './atoms/action-button';
import { ActionButtons } from './molecules/action-buttons/action-buttons';


export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

`


const App: FC = () => {
 return (
 <MainContent>
  <h1>hello world</h1>
  <ActionButtons />
 </MainContent>
 )
 
}

export default App;
