import React, { useEffect } from "react";
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // import the css theme
import 'prismjs/components/prism-javascript'; // import the javascript component





export default function Previewer({editText}) {
 
  const options = {
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: true,
    highlight: function (code, lang = 'javascript') {
      return Prism.highlight(code, Prism.languages.javascript, lang);
    }
  };
 



 const html = marked(editText, options);

 useEffect(() => {
  Prism.highlightAll();
}, [html]);

  return (
    <div>
      <div className="holder-previewer">
        <div className="header-box">Previewer</div>
        <div id="preview" className="previewer__div language-javascript" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
} 
