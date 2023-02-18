// Getting Input Element Function
function getInputValueById(elementId){
    const inputField=document.getElementById(elementId);
    const inputFieldString=inputField.value;
    const inputValue=parseFloat(inputFieldString);
    inputField.value='';
    if(isNaN(inputValue) || inputValue==''){
        alert('Please Enter Number.');
    }
    
    return inputValue;
}


// Showing The Data
function  displayData(name,area){

    const tr=document.createElement('tr');
    const container=document.getElementById('table-body');

    tr.innerHTML=`
    <td><ol><li>$. ${name}</li></ol></td>
    <td>${area}cm<sup>2</sup></td>
    <td><button id="btn-convert"
    class="w-10/12 bg-sky-400 text-white text-xl rounded">m<sup>2</sup></button></td></>
    `;
    tr.style.marginBottom="100px";
   
    container.appendChild(tr);

}


// Color Change Function
function colorChange(elementId){
    const hover=document.getElementById(elementId);
    hover.style.backgroundColor='rgb('+Math.round(Math.random() *255) +
    ','+Math.round(Math.random() *255) +
    ',' +Math.round(Math.random() *255) + ')';
}



