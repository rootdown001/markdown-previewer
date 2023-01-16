import React from "react";
import { marked } from 'marked';




export default function Previewer() {
 
  const options = {
    gfm: true
  };
 


 const html = marked('# Hello world', options);

  return (
    <div>
      <div className="holder-previewer">
        <div>Previewer</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
} 
