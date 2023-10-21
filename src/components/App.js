import React from 'react';
import styled from 'styled-components';
import './App.css';
import Board from './Board';
import Result from './Result';

function App({className}) {
  return (
    <div className={className}>
      <Result/>
      <Board/>
    </div>
  );
}


export default styled(App)`
  font-family: Courier New, Courier, monospace;
  font-weight: bolder;
  margin: 0 auto;
  width: 200px;
`;
