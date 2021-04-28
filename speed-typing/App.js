import React, {useState} from "react"

/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 * 
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */

function App() {
    const [text, setText] = useState("text here");
    console.log(text);
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={(e) => setText(e.target.value)}/>
            <h4>Time remainaing: ???</h4>
            <button>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
