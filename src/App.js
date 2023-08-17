import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Button
        css={css({ backgroundColor: 'yellow', color: 'black', width: '1000px' })}
        type="button">
        버튼
      </Button>
    </div>
  );
}

export default App;
