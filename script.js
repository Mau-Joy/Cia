function typewrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
   textoArray.forEach((letra, i) => {
   setTimeout(function(){
   elemento.innerHTML += letra;	
   }, 85*i)
})

}
const titulo = document.querySelector('h1');
typewrite(titulo)

function typewhite(element){
    const textoArray1 = element.innerHTML.split('li')
    element.innerHTML = 'li';
    textoArray1.forEach((letr, i) => {
        setTimeout(function(){
            element.innerHTML += letr;
        }, 65*i)
    })
}
const submenu = document.querySelectorAll('ul ul li');
console.log(textoArray1)