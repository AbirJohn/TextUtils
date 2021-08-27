import React,{useState} from 'react'


export default function TextFrom(props) {


// that work in text convart In Uparcase
const handleUpClick =() =>{
    setText("You have Click handleUpclick");
    let newText  = Text.toUpperCase();// that work in text convart In Uparcase vale;
    setText(newText);

}

// that work in text convart In Lowecase
const handleloClick =() =>{

    setText("You have Click handleloclick");
    let newText  = Text.toLowerCase();// that work in text convart In Lowecase vale;
    setText(newText);
    
}


const handleClClick =() =>{

    setText("You have Click handleClclick");
    let newText  = ""  // that work in text Clearing Text;
    setText(newText);
    
}


//that work  text To Clearing 
const handleCopyClick =() =>{
    var Text = document.getElementById("Mybox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    
}






const handleonChange =(event)=>{
setText(event.target.value);

}


const [Text, setText] = useState('Enter Text Hear');

    // setText("new Text");

    return (
        <>
        <div className= "container" style ={{Color:props.mode==='dark'?'white':'gray'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={Text} onChange={handleonChange} style ={{backgroundColor:props.mode==='light'?'gray':'white',Color:props.mode==='dark'?'gray':'white'}}   id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 " onClick={handleUpClick} >Convart To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick} >Convart To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClClick} > ClearText</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick} > CopyText</button>
        </div>
        <div className ="container my-3" >
            <h2>Counter in Word character</h2>
            <p>{Text.split(" ").length} word {Text.length} character</p>
            <p>{0.008 * Text.split(" ").length}Minute</p>
            <h2>Preview</h2>
            <p>{Text}</p>
        </div>
        
        </>
    )
}
