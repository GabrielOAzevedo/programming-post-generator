import React, { useState } from 'react';
import './App.css';
import { initialText } from './application/code.context';
import Design from './components/design/Design';
import TextEditor from './components/texteditor/TextEditor';

function App() {
  const [text, setText] = useState(initialText);
  return (
    <div className="App">
      <TextEditor text={text} onChange={setText}></TextEditor>
      <Design text={text}></Design>
    </div>
  );
}

export default App;
