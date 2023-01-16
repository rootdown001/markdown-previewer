import React from "react";



export default function Editor() {
  return (
    <div>
        
        <div className="holder-editor">
          <div>Editor</div>
          <textarea
            name="editor"
            id="editor"
            className="editor__textarea"
            value="Starting value"
          />
        </div> 
    </div>
  )
}
 