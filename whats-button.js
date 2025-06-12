document.addEventListener('DOMContentLoaded', function() {
    const whatsappAbrir = document.querySelector('.whatsapp-abrir');
    const whatsappFechar = document.querySelector('.whatsapp-fechar');
    const whatsappAberto = document.querySelector('.whatsapp-aberto');

    // **DEFINIR OS ESTADOS INICIAIS VIA JS QUANDO O DOM ESTIVER PRONTO**
    // Isso ajuda a evitar "flash" de conteúdo desalinhado se o CSS for lento para aplicar.
    whatsappAbrir.style.opacity = '1';
    whatsappAbrir.style.pointerEvents = 'all';
    whatsappAbrir.style.display = 'flex'; // Usar 'flex' para manter a centralização do ícone

    whatsappFechar.style.opacity = '0';
    whatsappFechar.style.pointerEvents = 'none';
    whatsappFechar.style.display = 'none'; // Inicia escondido

    whatsappAberto.classList.remove('aberto'); // Garante que a classe 'aberto' não esteja presente no início


    whatsappAbrir.addEventListener('click', function() {
        // Esconde o botão de abrir
        whatsappAbrir.style.opacity = '0';
        whatsappAbrir.style.pointerEvents = 'none';
        // A transição de opacidade pode fazer parecer que o botão ainda está lá.
        // O display 'none' deve ser aplicado após a transição, mas para este caso,
        // ocultar imediatamente o display após o clique é aceitável.
        whatsappAbrir.style.display = 'none';

        // Mostra o botão de fechar
        whatsappFechar.style.opacity = '1';
        whatsappFechar.style.pointerEvents = 'all';
        whatsappFechar.style.display = 'flex'; // Usar 'flex' para manter a centralização do 'X'

        // Abre o pop-up
        whatsappAberto.classList.add('aberto');
    });

    whatsappFechar.addEventListener('click', function() {
        // Esconde o botão de fechar
        whatsappFechar.style.opacity = '0';
        whatsappFechar.style.pointerEvents = 'none';
        // Similar ao de abrir, esconder display após transição idealmente.
        whatsappFechar.style.display = 'none';

        // Mostra o botão de abrir
        whatsappAbrir.style.opacity = '1';
        whatsappAbrir.style.pointerEvents = 'all';
        whatsappAbrir.style.display = 'flex';

        // Fecha o pop-up
        whatsappAberto.classList.remove('aberto');
    });
});