import React from 'react'

const MyButton = (props) => {
    return (
        <button className="bg-black w-full text-yellow-300 text-2xl py-2 rounded-xl">
            {props.text}
        </button>
    )
}

export default MyButton