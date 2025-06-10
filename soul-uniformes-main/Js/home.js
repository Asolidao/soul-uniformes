         document.querySelectorAll('.categoria-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelector('.categoria-btn.active').classList.remove('active');
                this.classList.add('active');
                const categoria = this.dataset.categoria;

                document.querySelectorAll('.produto').forEach(produto => {
                    if (categoria === 'todos' || produto.dataset.categoria === categoria) {
                        produto.style.display = 'block';
                    } else {
                        produto.style.display = 'none';
                    }
                });
            });
        });

        // SCRIPT PARA O CARROSSEL DE IMAGENS NA SEÇÃO HERO
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.carousel-image');
            const dots = document.querySelectorAll('.dot');
            let currentIndex = 0;
            const intervalTime = 5000; // 5 segundos

            function showImage(index) {
                // Remove a classe 'active' de todas as imagens e bolinhas
                images.forEach(img => img.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));

                // Adiciona a classe 'active' à imagem e bolinha correspondente
                if (images[index]) { // Verifica se a imagem existe
                    images[index].classList.add('active');
                }
                if (dots[index]) { // Verifica se a bolinha existe
                    dots[index].classList.add('active');
                }
            }

            function nextImage() {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }

            // Inicia a troca automática de imagem a cada X segundos
            let carouselInterval = setInterval(nextImage, intervalTime);

            // Adiciona funcionalidade às bolinhas (clique)
            dots.forEach(dot => {
                dot.addEventListener('click', (event) => {
                    // Pega o índice da bolinha clicada
                    const index = parseInt(event.target.dataset.index);
                    showImage(index);
                    currentIndex = index; // Atualiza o índice atual

                    // Reinicia o intervalo para a troca automática (para não pular a próxima imagem logo após o clique)
                    clearInterval(carouselInterval);
                    carouselInterval = setInterval(nextImage, intervalTime);
                });
            });

            // Chama showImage uma vez para garantir que o carrossel inicie corretamente,
            // caso a classe 'active' não esteja na primeira imagem por algum motivo.
            showImage(currentIndex);
        });

    document.addEventListener('DOMContentLoaded', () => {
        const swiperClientes = new Swiper(".mySwiperClientes", {
            slidesPerView: 4, // Quantos logos visíveis por vez em desktop
            spaceBetween: 30, // Espaçamento entre os logos
            loop: true, // Faz o carrossel ser contínuo/infinito
            autoplay: {
                delay: 2000, // Tempo de espera entre os slides (2 segundos)
                disableOnInteraction: false, // Continua o autoplay mesmo se o usuário interagir
            },
            pagination: {
                el: ".swiper-pagination-clientes", // Seletor para as bolinhas
                clickable: true, // Permite clicar nas bolinhas para navegar
            },
            breakpoints: { // Configurações para diferentes tamanhos de tela
                0: { // Telas menores que 480px (celulares)
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                480: { // Telas entre 480px e 768px (celulares maiores/tablets retrato)
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: { // Telas entre 768px e 1200px (tablets paisagem/desktops pequenos)
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                1200: { // Telas maiores que 1200px (desktops)
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            },
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const swiperDepoimentos = new Swiper(".mySwiperDepoimentos", {
            effect: "coverflow", // Efeito de "passar slides" como na imagem
            grabCursor: true, // Muda o cursor ao arrastar
            centeredSlides: true, // Centraliza o slide ativo
            slidesPerView: "auto", // Swiper calcula o número de slides visíveis
            coverflowEffect: {
                rotate: 50, // Rotação dos slides laterais
                stretch: 0,
                depth: 100, // Profundidade dos slides laterais
                modifier: 1,
                slideShadows: true, // Sombra nos slides (como na imagem)
            },

            loop: true, // Faz o carrossel ser contínuo/infinito
            pagination: {
                el: ".swiper-pagination-depoimentos", // Seletor para as bolinhas
                clickable: true, // Permite clicar nas bolinhas
            },
            navigation: { // Configura as setas
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: { // Ajustes para telas menores
                0: {
                    slidesPerView: 1, // Apenas 1 slide visível em celulares
                    coverflowEffect: {
                        rotate: 0, // Desativa rotação em celulares
                        stretch: 0,
                        depth: 0,
                        slideShadows: false,
                    },
                },
                768: {
                    slidesPerView: 1.5, // 1 slide central e um pedaço dos laterais em tablets/desktops pequenos
                },
                1024: {
                    slidesPerView: 2.5, // Mais slides visíveis em telas maiores
                },
            },
        });
    });