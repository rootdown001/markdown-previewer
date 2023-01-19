import React from "react";
import { marked } from 'marked';




export default function Previewer({editText}) {
 
  const options = {
    gfm: true
  };
 


 const html = marked(editText, options);

  return (
    <div>
      <div className="holder-previewer">
        <div className="header-box">Previewer</div>
        <div className="previewer__div" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
} 
