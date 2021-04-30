import React, {useState} from "react"

/**
 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

function App() {
    const [text, setText] = useState("")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function wordCount(str) {
        // str = str.replace(/(^\s*)|(\s*$)/gi,""); regex expression will remove the start and end spaces of the given string.
        //  str = str.replace(/[ ]{2,}/gi," "); multiple spaces to a single space.
        //  str = str.replace(/\n /,"\n"); exclude a new line with a start spacing.
        //  console.log(str.split(' ').length);
        //  return str.split(' ').length;
        const wordsArr = text.trim().split(" ")
        console.log(wordsArr.filter(word => word !== "").length);
        return wordsArr.filter(word => word !== "").length;
    }
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: ???</h4>
            <button onClick={() => wordCount(text)} >Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
