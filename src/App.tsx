import ChildWithProps from './components/ChildWithProps';
import ChildWithContext from './components/ChildWithContext';
import { createContext } from 'react';

// Step 1: Creating the 'context outside of App
export const TextContext = createContext("")

function App() {
  const text = "hello, world!"

  return <>
    <ChildWithProps text={text}/> 
    <hr />

    {/* Step 2: 'Provide' the context with a value */}
    <TextContext.Provider value={text}>
      <ChildWithContext />
    </TextContext.Provider>
  </>
}

export default App;
