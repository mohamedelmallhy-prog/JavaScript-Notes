

if(localStorage.length > 0) {
    document.body.style.backgroundColor = localStorage.color;
}
function setColor(color)
{
    localStorage.setItem('color', color);
    document.body.style.backgroundColor = color;
}