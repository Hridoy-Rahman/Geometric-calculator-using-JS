
// Triangle Area
document.getElementById('triangle-calculate').addEventListener('click',function(){
    const triangleBredth=getInputElementById('triangle-bredth');
    const triangleHeight=getInputElementById('triangle-height');
    const triangleArea = 0.5 * triangleBredth * triangleHeight;
    console.log(triangleArea);
    
})

