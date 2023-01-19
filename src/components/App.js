import React, { useState } from 'react';
import '../css/App.css';
import Editor from './Editor';
import Previewer from './Previewer';


function App() {
 
  const initialText = 
    '\r\n'
    + '# Markdown Previewer\r\n'

    + '## GitHub Flavored Markdown\r\n'
    + 'You can checkout [markedjs](https://github.com/markedjs/marked) on GitHub.\r\n'
    + '>⚖️ light-weight while implementing all markdown features\r\n'
    + '\r\nYou can show **code blocks...**\r\n'
    + '```\r\nconst = example(e => (e^2))\r\n```\r\n'
    + '\r\nYou can also make inline code, like `<p>Hello World</p>`\r\n'
    + '1. You can make numbered lists like this.\r\n2. As you keep adding, they show up below\r\n'
    + '\r\nThis is a project for: ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) '

  
  const [editText, setEditText] = useState(initialText);

  function handleChange(e) {
    setEditText(e.target.value);
  }


  return (
    <>
      <Editor 
        editText={editText}
        handleChange={handleChange}        
      />
      <Previewer 
        editText={editText}
      />
    </>
  );
} 

export default App;
