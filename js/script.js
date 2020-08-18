let $ = document;
let css = $.querySelector("h3");
let c1 = $.querySelector(".color1");
let c2 = $.querySelector(".color2");
let  bd = $.getElementById("gradient");
function setGradient(){
        let styled = `linear-gradient(to right,${c1.value},${c2.value})`;
        bd.style.background=styled;
        css.textContent = styled;
}
c1.addEventListener("input",setGradient);
c2.addEventListener("input",setGradient);