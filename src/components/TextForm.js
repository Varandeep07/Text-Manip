import React, {useState} from 'react';


export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Text converted to upper case!",'success');
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text box!",'success');
    }
    const handleOnchange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }
    const handleLowClick = () =>{
        setText(text.toLowerCase());
        props.showAlert("Text converted to lower case!",'success');
    }
    const countWords = (s) => {
        let count = 0; 
        let ok = true;
        let i = 0; 
        while(i<s.length && s[i]===' '){
            console.log("hi"); 
            i = i + 1;
        } 
        for(; i<s.length-1; ++i){
            if(ok){
                ok = false; count++; 
            }
            if(s[i]===' ' && s[i+1]!==' '){
                count = count + 1;
            }
        }
        // console.log(count); 
        return count;
    }

    return (
    <>
        <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style = {{color: props.mode==='dark'?'white':'black'}}>
                <textarea className="form-control" value={text} style = {{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnchange} id="myBox" rows="8"></textarea> 
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}} >
            <h2>Your text Summary</h2>  
            <p>{countWords(text)} words and {text.length} characters  </p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
        </div>
    </>
  )
}
