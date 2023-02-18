// Getting Input Element Function
function getInputElementById(elementId){
    const inputField=document.getElementById(elementId);
    const inputFieldString=inputField.value;
    const inputValue=parseFloat(inputFieldString);
    return inputValue;
}

// getting Text Element Function