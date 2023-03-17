import React, { useState} from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        //we still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        //addColor, the function we just built, shoud be available within props.
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="test"
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit !</button>
            </form>
        </div>
    )
}

export default ColorForm;