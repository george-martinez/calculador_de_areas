let esTriangulo = false;
let esRectangulo = false;

const baseInput = document.getElementById("base");
const alturaInput = document.getElementById("altura");
const rectanguloBtn = document.getElementById("rectangulo");
const trianguloBtn = document.getElementById("triangulo");
const barraError = document.getElementById("barraError");
const areaTotalNumero = document.getElementById("areaTotal");
const iconRectangulo = document.querySelector(".iconRectangulo");
const iconTriangulo = document.querySelector(".iconTriangulo");


function actualizarArea(){
    if(isNaN(baseInput.value) || isNaN(alturaInput.value)){
        barraError.innerHTML = "La base y la altura deben ser numeros.";
        barraError.classList.replace("transparente","visible");
    }else if((baseInput.value <= 0) || (alturaInput.value <= 0) && (esRectangulo || esTriangulo)){
        barraError.innerHTML = "Para que exista una figura geometrica en dos dimensiones su base y altura deben ser superiores a 0.";
        barraError.classList.replace("transparente","visible");
        areaTotalNumero.innerHTML = 0;
    }else if(esTriangulo || esRectangulo){
        barraError.innerHTML = "";
        barraError.classList.replace("visible","transparente");
        if(esRectangulo){
            areaTotalNumero.innerHTML = (baseInput.value)*(alturaInput.value);
        }else if(esTriangulo){
            areaTotalNumero.innerHTML = ((baseInput.value)*(alturaInput.value))/2;
        }
    }else{
        barraError.innerHTML = "Selecciona una figura para saber su area.";
        barraError.classList.replace("transparente","visible");
    }
}

baseInput.onkeyup = () => actualizarArea();

alturaInput.onkeyup = () => actualizarArea();

trianguloBtn.onclick = () => {
    esTriangulo = true
    esRectangulo = false;
    barraError.classList.replace("visible","transparente");
    trianguloBtn.style.backgroundColor = "#a1d3f3";
    rectanguloBtn.style.backgroundColor = "#ffffff";
    iconRectangulo.classList.replace("visible","transparente");
    iconTriangulo.classList.replace("transparente","visible");
    actualizarArea();
}

rectanguloBtn.onclick = () => {
    esRectangulo = true;
    esTriangulo = false
    barraError.classList.remove("visible");
    barraError.classList.add("transparente");
    rectanguloBtn.style.backgroundColor = "#a1d3f3";
    trianguloBtn.style.backgroundColor = "#ffffff";
    iconRectangulo.classList.replace("transparente","visible");
    iconTriangulo.classList.replace("visible","transparente");
    actualizarArea();
}

