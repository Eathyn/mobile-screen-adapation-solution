const htmlEle = document.documentElement
const screenWidth = htmlEle.clientWidth
htmlEle.style.fontSize = `${screenWidth / 100}px`
