
// Triangle Area
document.getElementById('triangle-calculate').addEventListener('click',function(){
    const triangleBredth=getInputElementById('triangle-bredth');
    const triangleHeight=getInputElementById('triangle-height');
    const triangleArea = 0.5 * triangleBredth * triangleHeight;
    console.log(triangleArea);
    
})

// Rectangle Area
document.getElementById('rectangle-calculate').addEventListener('click',function(){
    const rectangleWidth=getInputElementById('rectangle-width');
    const rectangleHeight=getInputElementById('rectangle-height');
    const rectangleArea = rectangleHeight * rectangleWidth;
    console.log(rectangleArea);
})
// parallelogram Area
document.getElementById('parallelogram-calculate').addEventListener('click',function(){
    const parallelogramBredth=getInputElementById('parallelogram-width');
    const parallelogramHeight=getInputElementById('parallelogram-height');
    const parallelogramArea = parallelogramBredth * parallelogramHeight;
    console.log(parallelogramArea);
})
// Rhombus Area

document.getElementById('rhombus-calculate').addEventListener('click',function(){
    const rhombusCorner1=getInputElementById('rhombus-d1');
    const rhombusCorner2=getInputElementById('rhombus-d2');
    const rhombusArea = 0.5 * rhombusCorner1 * rhombusCorner2;
    console.log(rhombusArea);
})

// pentagon
document.getElementById('pentagon-calculate').addEventListener('click',function(){
    const pentagonP=getInputElementById('pentagon-p');
    const pentagonB=getInputElementById('pentagon-b');
    const pentagonArea = 0.5 * pentagonP * pentagonB;
    console.log(pentagonArea);
})
