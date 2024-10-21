// Troca de formulário entre Cliente e Barbeiro
document.addEventListener('DOMContentLoaded', function() {
    const clienteFormBtn = document.getElementById('cliente-form-btn');
    const barbeiroFormBtn = document.getElementById('barbeiro-form-btn');
    const clienteForm = document.getElementById('cliente-form');
    const barbeiroForm = document.getElementById('barbeiro-form');

    clienteFormBtn.addEventListener('click', function() {
        clienteForm.style.display = 'block';
        barbeiroForm.style.display = 'none';
        clienteFormBtn.classList.add('active');
        barbeiroFormBtn.classList.remove('active');
    });

    barbeiroFormBtn.addEventListener('click', function() {
        barbeiroForm.style.display = 'block';
        clienteForm.style.display = 'none';
        barbeiroFormBtn.classList.add('active');
        clienteFormBtn.classList.remove('active');
    });
});

// Validação de login simples (mock)
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    alert('Login bem-sucedido!');
    return true;
}

// Função para agendar (mock)
function agendarServico() {
    alert("Serviço agendado com sucesso!");
}
