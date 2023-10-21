import React from 'react';
import styled from 'styled-components';
import './App.css';
import Board from './Board';
import Result from './Result';

function App({className}) {
  return (
    <center>
    <div className={className}>
      <Result/>
      <Board/>
    </div>
    </center>
  );
}


export default styled(App)`
  font-family: Courier New, Courier, monospace;
  font-weight: bolder;
  font-size: larger;
  margin: 0 auto;
  width: 300px;
`;
