import React, { useState } from 'react'

export default function Textforms(props) {


    const changeToUpper = () => {
        // console.log("Upper Case Clicked!")
        // setText("Ok text is changed now!");
        const req = text.toUpperCase();
        setText(req);
        props.showAlert("Converted to Uppercase!", "success");

    }
    const changeToLower = () => {
        // console.log("Upper Case Clicked!")
        // setText("Ok text is changed now!");
        const req = text.toLowerCase();
        setText(req);
        props.showAlert("Converted to Lowercase!", "success");


    }
    const changeToClear = () => {
        // console.log("Upper Case Clicked!")
        // setText("Ok text is changed now!");
        setText("");
        props.showAlert("Text has been cleared", "success");


    }
    const def = (event) => {
        console.log("Def Clicked!")
        setText(event.target.value);
    }

    const copyToClipboard = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!", "success");
    }

    const removeExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");


    }
    const [text, setText] = useState("");


    return (
        <div>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Enter the text to analyze below</h2> </label>
                <textarea className="form-control my-3" value={text} onChange={def} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={changeToUpper}>Conver to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={changeToLower}>Conver to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={changeToClear}>Reset</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Sapces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary </h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>

            </div>

        </div >
        )
        
}