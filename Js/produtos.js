        // Filtro de produtos
        document.querySelectorAll('.filtro-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
                // Adiciona a classe active apenas no botão clicado
                this.classList.add('active');
                
                const categoria = this.getAttribute('data-categoria');
                const produtos = document.querySelectorAll('.produto-card');
                
                produtos.forEach(produto => {
                    if (categoria === 'todos') {
                        produto.style.display = 'block';
                    } else {
                        const categoriasProduto = produto.getAttribute('data-categoria').split(' ');
                        if (categoriasProduto.includes(categoria)) {
                            produto.style.display = 'block';
                        } else {
                            produto.style.display = 'none';
                        }
                    }
                });
            });
        });

// Script para preencher o nome do produto no link do WhatsApp
document.addEventListener('DOMContentLoaded', () => { // Garante que o script roda após o HTML ser carregado
    const whatsappButtons = document.querySelectorAll('.produto-btn'); // Seleciona todos os botões de orçamento

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (abrir imediatamente)

            // Pega o elemento pai do botão para encontrar o título do produto
            const produtoCard = this.closest('.produto-card');
            let produtoNome = '';

            if (produtoCard) {
                // Tenta pegar o título do produto dentro do card
                const tituloElement = produtoCard.querySelector('.produto-titulo');
                if (tituloElement) {
                    produtoNome = tituloElement.textContent.trim(); // Pega o texto e remove espaços extras
                }
            }

            // Pega o URL base do WhatsApp do href do botão
            let whatsappUrl = this.getAttribute('href');

            // Substitui o placeholder [PRODUTO] pelo nome real do produto
            // Usa encodeURIComponent para garantir que o nome do produto seja seguro para URL
            if (produtoNome) {
                whatsappUrl = whatsappUrl.replace('[PRODUTO]', encodeURIComponent(produtoNome));
            } else {
                // Se não encontrar o nome do produto, substitui por uma mensagem genérica ou vazia
                whatsappUrl = whatsappUrl.replace('[PRODUTO]', 'um%20produto');
            }

            // Abre o link do WhatsApp modificado
            window.open(whatsappUrl, '_blank');
        });
    });
});