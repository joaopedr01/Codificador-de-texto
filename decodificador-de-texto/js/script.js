//Adicionando eventos
document.getElementById('copy-button').addEventListener('click', copyToClipboard);

// Função para criptografar o texto
function encrypt() {
    const imageMessage = document.getElementById('image-message');
    var copyButton = document.getElementById('copy-button');
    const messageSection = document.getElementById('message');
    const inputText = document.getElementById('input-text').value;
    const errorNF = document.getElementById('error-not-found');
    // Verificar se o texto de entrada está vazio
    if (!inputText) {
        showError(errorNF, "Texto não encontrado");
        showMessage(messageSection, "Digite um texto que você deseja criptografar ou descriptografar.");
        imageMessage.style.display = 'block';
        copyButton.style.display = 'none';
        return;
    }

    // Criptografia simples: deslocar cada letra por 1
    let encryptedText = inputText.replace(/[a-z]/g, function(c) {
        return String.fromCharCode((c.charCodeAt(0) - 97 + 1) % 26 + 97);
    });

    // Exibir o texto criptografado
    clearMessage(errorNF, "Texto não encontrado")
    clearMessage(messageSection);
    messageSection.innerHTML = `${encryptedText}`;
    imageMessage.style.display = 'none';
    copyButton.style.display = 'block';
}
// Função para descriptografar o texto
function decrypt() {
    var copyButton = document.getElementById('copy-button');
    const messageSection = document.getElementById('message');
    const inputText = document.getElementById('input-text').value;
    const errorNF = document.getElementById('error-not-found');
    // Verificar se o texto de entrada está vazio
    if (!inputText) {
        showError(errorNF, "Texto não encontrado");
        showMessage(messageSection, "Digite um texto que você deseja criptografar ou descriptografar.");
        copyButton.style.display = 'none';
        return;
    }

    // Descriptografia simples: deslocar cada letra por -1
    let decryptedText = inputText.replace(/[a-z]/g, function(c) {
        return String.fromCharCode((c.charCodeAt(0) - 97 - 1 + 26) % 26 + 97);
    });

    // Exibir o texto descriptografado
    clearMessage(errorNF, "Texto não encontrado")
    clearMessage(messageSection);
    messageSection.innerHTML = `${decryptedText}`;
    copyButton.style.display = 'block';
}

function copyToClipboard() {
    var messageText = document.getElementById('message').innerText;
    navigator.clipboard.writeText(messageText).then(function() {
        alert('Texto copiado para a área de transferência');
    }, function(err) {
        alert('Erro ao copiar texto: ', err);
    });
}

// Função para exibir erros
function showError(error, message) {
    error.innerHTML = message;
}
// Função para exibir mensagens informativas
function showMessage(variable, message) {
    variable.innerHTML = message;
}
// Função para limpar mensagens
function clearMessage(variable) {
    variable.innerHTML = "";
}

