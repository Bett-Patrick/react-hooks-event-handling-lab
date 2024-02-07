// Code EyesOnMe Component Here

function handleOnFocus(){
    console.log("Good!")
}

function handleOnBlur(){
    console.log("Hey! Eyes on me!")
}

function EyesOnMe(){
    return <div>
        <button 
            onFocus={handleOnFocus} 
            onBlur={handleOnBlur}
            style={{
                // backgroundColor: handleOnFocus? "antiquewhite":"blue"
                height:25,
                borderRadius:5
            }}
        >
            Eyes on me
        </button>
    </div>
}

export default EyesOnMe;
