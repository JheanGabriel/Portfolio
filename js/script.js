// /* TURNS THE MENU BARRA INTO A X */
// const menuBarra = document.querySelector('.menu-barra')
// menuBarra.addEventListener('click',() => {
//     toggleMenu(); //LOG
// });
// function toggleMenu() {
//     const nav = document.querySelector('.nav-responsive');
//     menuBarra.classList.toggle('change');

//     if(menuBarra.classList.contains('change')){
//         nav.style.display = 'block';

//     }else {
//         nav.style.display = 'none';

//             }
    
// }

// Função para exibir o conteúdo completo e ocultar o botão "Read More"
function mostrarConteudo() {
    document.getElementById("conteudo-completo").style.display = "block";
    document.getElementById("Read-More").style.display = "none";
}

// Menu de navegação responsivo (preservado do seu código original)
const menuBarra = document.querySelector('.menu-barra');
menuBarra.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuBarra.classList.toggle('change');

    if(menuBarra.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

/* /TURNS THE MENU BARRA INTO A X */