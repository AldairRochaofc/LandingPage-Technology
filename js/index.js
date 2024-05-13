function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}
// Função para rolar suavemente até a seção desejada
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        // Opção de scroll suave para navegadores modernos
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Elemento alvo não encontrado.');
    }
}

// Adiciona evento de clique aos links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const depoimentosLink = document.querySelector('.nav-link[href="#showcase-deploiment"]');
    if (depoimentosLink) {
        depoimentosLink.addEventListener('click', scrollToSection);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const NossosServicosLink = document.querySelector('.nav-link[href="#nossos-servicos"]');
    if (NossosServicosLink) {
        NossosServicosLink.addEventListener('click', scrollToSection);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contatos = document.querySelector('.nav-link[href="#contatos"]');
    if (contatos) {
        contatos.addEventListener('click', scrollToSection);
    }
});
