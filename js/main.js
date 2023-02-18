
// Triangle Area
document.getElementById('triangle-calculate').addEventListener('click',function(){
    const triangleBredth=getInputValueById('triangle-bredth');
    const triangleHeight=getInputValueById('triangle-height');
    const triangleArea = (0.5 * triangleBredth * triangleHeight).toFixed(2);
    
    const name=document.getElementById('triangle').innerText;
    const area=triangleArea;
   
    displayData(name,area,)

    
})


// Rectangle Area
document.getElementById('rectangle-calculate').addEventListener('click',function(){
    const rectangleWidth=getInputValueById('rectangle-width');
    const rectangleHeight=getInputValueById('rectangle-height');
    const rectangleArea = (rectangleHeight * rectangleWidth).toFixed(2);
    
    const name=document.getElementById('rectangle').innerText;
    const area=rectangleArea;
   

    displayData(name,area,)

})
// parallelogram Area
document.getElementById('parallelogram-calculate').addEventListener('click',function(){
    const parallelogramBredth=getInputValueById('parallelogram-width');
    const parallelogramHeight=getInputValueById('parallelogram-height');
    const parallelogramArea = (parallelogramBredth * parallelogramHeight).toFixed(2);
    
    const name=document.getElementById('parallelogram').innerText;
    const area=parallelogramArea;
   

    displayData(name,area,)

})
// Rhombus Area

document.getElementById('rhombus-calculate').addEventListener('click',function(){
    const rhombusCorner1=getInputValueById('rhombus-d1');
    const rhombusCorner2=getInputValueById('rhombus-d2');
    const rhombusArea = (0.5 * rhombusCorner1 * rhombusCorner2).toFixed(2);
   
    const name=document.getElementById('rhombus').innerText;
    const area=rhombusArea;
   

    displayData(name,area,)

})

// pentagon
document.getElementById('pentagon-calculate').addEventListener('click',function(){
    const pentagonP=getInputValueById('pentagon-p');
    const pentagonB=getInputValueById('pentagon-b');
    const pentagonArea =( 0.5 * pentagonP * pentagonB).toFixed(2);
   
    const name=document.getElementById('pentagon').innerText;
    const area=pentagonArea;
   

    displayData(name,area,)

})

// Ellipse
document.getElementById('ellipse-calculate').addEventListener('click',function(){
    const pi=3.14;
    const ellipseA=getInputValueById('ellipse-a');
    const ellipseB=getInputValueById('ellipse-b');
    const ellipseArea = (pi * ellipseA * ellipseB).toFixed(2);
    
    const name=document.getElementById('ellipse').innerText;
    const area=ellipseArea;
   

    displayData(name,area,)

})

