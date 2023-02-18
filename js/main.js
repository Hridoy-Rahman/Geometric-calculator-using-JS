
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
