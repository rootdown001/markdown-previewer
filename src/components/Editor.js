import React from "react";



export default function Editor({editText, handleChange, handleEditorClear}) {



  return (
    <div>
        
        <div className="holder-editor">
          <div className='header-box'>Editor</div>
          <textarea
            name="editor"
            id="editor"
            className="editor__textarea"
            value={editText}
            onChange={(e) => handleChange(e)}
          />
        </div> 
        <div className="editor__clear-button-container">
          <button 
            className="btn editor__clear-button"
            onClick={() => handleEditorClear()}
          >
            Clear Editor
          </button>
        </div>
    </div>
  )
}
 