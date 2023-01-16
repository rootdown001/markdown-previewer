import React from "react";
import { marked } from 'marked';




export default function Previewer() {
 

 const toMark = marked.parse('#Hello world');

  return (
    <div>
      <div className="holder-previewer">
        <div>Previewer</div>
        <textarea
          name="previewer"
          id="previewer"
          className="previewer__textarea"
          value={toMark}
        /> 
      </div>
    </div>
  )
}
