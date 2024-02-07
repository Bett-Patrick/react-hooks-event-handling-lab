// Code Keypad Component Here

function handleChange(){
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input style={{height:25, marginBottom:10}} type="password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;