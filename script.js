// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulação de envio de formulário
        formResponse.textContent = 'Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.';
        form.reset();
    });
});
