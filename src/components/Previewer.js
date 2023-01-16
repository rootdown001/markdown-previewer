import React from "react";



export default function Previewer() {
  return (
    <div>
      <div className="holder-previewer">
        <div>Previewer</div>
        <textarea
          name="previewer"
          id="previewer"
          className="previewer__textarea"
          value="Starting value"
        /> 
      </div>
    </div>
  )
}
