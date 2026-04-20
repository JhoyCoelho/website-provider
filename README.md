# FyberLink - Site de Provedor de Internet

Um site moderno e responsivo para uma empresa provedora de internet (FyberLink) com design limpo e intuitivo.

## 📁 Estrutura do Projeto

```
provider-site/
├── index.html       # Arquivo principal HTML
├── style.css        # Estilos CSS
├── script.js        # JavaScript para interatividade
└── README.md        # Este arquivo
```

## ✨ Características

- ✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Seção Hero** - Apresentação impactante com estatísticas
- ✅ **Planos de Internet** - Showcase de 4 planos diferentes com card destacado
- ✅ **Diferenciais** - 6 cards destacando os benefícios da empresa
- ✅ **CTA Section** - Chamada para ação destacada
- ✅ **Formulário de Contato** - Com validações e formatação de telefone
- ✅ **Footer** - Com informações de contato
- ✅ **Navegação Suave** - Links com scroll suave
- ✅ **Animações** - Efeitos visuais elegantes e performance otimizada

## 🎨 Cores Principais

- **Primária**: Roxo (#7c3aed)
- **Secundária**: Rosa (#ec4899)
- **Acentuada**: Laranja (#f97316)
- **Texto**: Cinza escuro (#1f2937)
- **Fundo**: Branco e tons leves

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador
1. Localize o arquivo `index.html`
2. Clique com o botão direito e selecione "Abrir com" → seu navegador preferido
3. Ou simplesmente arraste o arquivo `index.html` para a janela do navegador

### Opção 2: Usar um Servidor Local (Recomendado)

Se tiver Python instalado:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Se tiver Node.js e http-server instalado:
```bash
npx http-server
```

Depois acesse em seu navegador: `http://localhost:8000`

## 📱 Seções do Site

### 1. **Header/Navbar**
- Logo com ícone
- Menu de navegação
- Botão "Portal do Cliente"
- Sticky no topo com elevação em scroll

### 2. **Hero Section**
- Título principal chamativo
- Descrição do serviço
- Dois botões de ação (Ver Planos, Fale Conosco)
- Estatísticas animadas (99,9% Estabilidade, 24h Atendimento)
- Ilustração com ícones flutuantes

### 3. **Planos Section**
- 4 cards de planos diferentes:
  - Plano Básico (250 Mbps)
  - Plano Ultra (600 Mbps) - **Destaque com badge "MAIS POPULAR"**
  - Plano Gamer (800 Mbps)
  - Infinity (Banda Livre)
- Hover effect com elevação
- Botões de ação

### 4. **Diferenciais Section**
- 6 cards com benefícios:
  - Alta Velocidade
  - 99,9% de Estabilidade
  - Suporte Segunda à Sábado
  - Instalação em 24h
  - WiFi 6 Disponível
  - Sem Fidelidade

### 5. **CTA Section**
- Gradiente colorido
- Chamada para ação
- Botão destacado

### 6. **Contato Section**
- Formulário com campos:
  - Nome
  - Email
  - Telefone (com máscara automática)
  - Mensagem
- Informações de contato (Telefone, Email, Endereço, Horário)

### 7. **Footer**
- Links rápidos
- Informações da empresa
- Dados de contato
- Copyright

## 🔧 Personalizações

### Mudar Cores
Edite as variáveis CSS no início do arquivo `style.css`:
```css
:root {
    --primary-color: #7c3aed;    /* Roxo */
    --secondary-color: #ec4899;  /* Rosa */
    --accent-color: #f97316;     /* Laranja */
    /* ... outras cores ... */
}
```

### Atualizar Informações de Contato
No arquivo `index.html`, procure pelas seções comentadas e atualize:
- Número de telefone
- Email
- Endereço
- Horário de atendimento

### Modificar Planos
Edite os cards de planos na seção com id `planos`:
```html
<div class="plano-card">
    <h3>Seu Plano</h3>
    <span class="speed-number">500</span>
    <!-- ... -->
</div>
```

## 📞 Funcionalidades JavaScript

- ✅ Scroll suave ao clicar nos links
- ✅ Animações ao scroll (Reveal)
- ✅ Validação de formulário
- ✅ Máscara automática de telefone
- ✅ Indicador de seção ativa na navegação
- ✅ Animação de contagem para estatísticas
- ✅ Efeitos hover nos cards

## 🌐 Compatibilidade

- Chrome/Chromium (recomendado)
- Firefox
- Safari
- Edge
- Navegadores móveis (iOS Safari, Chrome Mobile)

## 📦 Dependências

**Nenhuma!** O projeto é totalmente vanilla:
- HTML puro
- CSS3 (sem preprocessadores)
- JavaScript ES6 nativo (sem frameworks)

## 🔗 Links Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Compatibilidade de navegadores
- [Google Fonts](https://fonts.google.com/)

## 💡 Melhorias Futuras

- [ ] Adicionar menu hambúrguer para mobile
- [ ] Integração com backend para envio de formulários
- [ ] Chatbot para atendimento
- [ ] Calculadora de velocidade necessária
- [ ] Área do cliente com painel de controle
- [ ] Blog/FAQ
- [ ] Integração com redes sociais
- [ ] Analytics e rastreamento

## 📄 Licença

Projeto livre para uso e modificação.

---

**Desenvolvido com ❤️ para FyberLink**
