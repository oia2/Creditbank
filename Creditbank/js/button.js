document.getElementById('button__top').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("products")
element.scrollIntoView(true);
}