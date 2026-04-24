/* ============================================
   MENU HAMBURGER MOBILE
   ============================================ */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Fechar menu ao clicar em um link
document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
        document.getElementById('menuToggle').classList.remove('active');
    });
});

// Fechar menu ao redimensionar a tela
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById('navLinks').classList.remove('active');
        document.getElementById('menuToggle').classList.remove('active');
    }
});

/* ============================================
   SCROLL SUAVE E NAVEGAÇÃO
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   FORMULÁRIO DE CONTATO
   ============================================ */
document.getElementById("form-contato")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const contato = document.getElementById("contato")?.value.trim() || "";
    const mensagem = document.getElementById("mensagem")?.value.trim() || "";

    // Validação simples
    if (!nome || !email || !contato || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const numero = "5591986263316";

    const texto = `Olá, me chamo ${nome}.
        Meu email: ${email}
        Meu contato: ${contato}
        Mensagem: ${mensagem}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    // Limpa o formulário depois de enviar
    this.reset();
});

/* ============================================
   ANIMAÇÃO DE BOTÕES DE PLANOS
   ============================================ */
document.querySelectorAll('.plano-card .btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.plano-card').querySelector('h3').textContent;
        console.log(`Plano selecionado: ${planName}`);
        alert(`Você selecionou o plano ${planName}. Redirecionando para contratação...`);
    });
});

function enviarWhatsApp(plano) {
  const numero = "5591986263316";

  const mensagem = `Olá, tenho interesse no ${plano}. Pode me passar mais informações?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}

/* ============================================
   ANIMAÇÃO SCROLL REVEAL
   ============================================ */
const revealElements = () => {
    const reveals = document.querySelectorAll('.diferencial-card, .plano-card');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
};

window.addEventListener('scroll', revealElements);
revealElements(); // Executar na carga

/* ============================================
   ANIMAÇÃO FADEINU P
   ============================================ */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   EFEITO HOVER EM CARDS
   ============================================ */
document.querySelectorAll('.diferencial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ============================================
   CONTADOR ANIMADO (Opcional para estatísticas)
   ============================================ */
const animateCountUp = (element, finalValue) => {
    let currentValue = 0;
    const increment = finalValue / 30;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            element.textContent = finalValue;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, 50);
};

/* ============================================
   FECHAR MENU MOBILE (Se adicionar menu hambúrguer)
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
});

/* ============================================
   BOTÃO "VER PLANOS" DO HERO
   ============================================ */
document.querySelectorAll('.hero-buttons .btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
    });
});

/* ============================================
   VALIDAÇÃO DE TELEFONE
   ============================================ */
const phoneInput = document.querySelector('input[placeholder="(XX) XXXXX-XXXX"]');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        if (value.length > 0) {
            if (value.length <= 2) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            }
        }
        
        e.target.value = value;
    });
}

/* ============================================
   EFEITOS ADICIONAIS
   ============================================ */

// Adicionar classe ativa ao link do navbar baseado no scroll
window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
        }
    });
});
