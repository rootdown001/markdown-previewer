import React from "react";
import { marked } from 'marked';




export default function Previewer({editText}) {
 
  const options = {
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: true
  };
 


 const html = marked(editText, options);

  return (
    <div>
      <div className="holder-previewer">
        <div className="header-box">Previewer</div>
        <div id="preview" className="previewer__div" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
} 
