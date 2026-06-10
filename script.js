/* ============================================================
   HYPATIA — script.js (Versão Adaptada)
   ============================================================ */

/* ── 1. TRADUÇÕES ── */
const i18n = {
  pt: {
    onboarding_title: "Bem-vindo à Hypatia",
    onboarding_subtitle: "Sua mentora de IA para estudos. Vamos personalizar sua experiência.",
    onboarding_name: "Seu nome",
    onboarding_email: "Seu e-mail (opcional)",
    onboarding_cta: "Começar agora →",
    nav_dashboard: "Dashboard",
    nav_learn: "Aprender",
    nav_projects: "Projetos",
    nav_chat: "Chat IA",
    nav_hackathons: "Hackathons",
    nav_settings: "Configurações",
    nav_support: "Suporte",
    user_role: "Estudante",
    dashboard_hello: "Olá,",
    dashboard_subtitle: "Pronto para estudar hoje? Sua jornada de conhecimento continua.",
    streak_days: "dias seguidos",
    stat_lessons: "Aulas concluídas",
    stat_progress: "Progresso geral",
    stat_projects: "Projetos ativos",
    section_explore: "Explorar",
    card_learn_title: "Aprender",
    card_learn_desc: "Trilhas de estudos personalizadas com IA adaptativa para seu nível.",
    card_projects_title: "Projetos",
    card_projects_desc: "Desenvolva projetos reais e multidisciplinares guiados pela Hypatia.",
    card_chat_title: "Chat com IA",
    card_chat_desc: "Tire suas dúvidas e receba mentoria educacional 24/7 com a Hypatia.",
    card_hackathons_title: "Hackathons",
    card_hackathons_desc: "Participe de desafios escolares e acadêmicos para acelerar sua evolução.",
    chat_online: "Online agora",
    learn_subtitle: "Trilhas de estudos completas para o Ensino Médio com IA adaptativa.",
    filter_all: "Todos",
    btn_continue: "▶ Continuar Aprendendo",
    btn_new_project: "+ Novo Projeto",
    projects_subtitle: "Seus projetos reais com código, estrutura e preview.",
    chat_welcome_msg: "Olá! Sou a Hypatia, sua mentora de estudos. Como posso te ajudar hoje? Pode me perguntar sobre matérias, organização, projetos ou qualquer dúvida escolar. 🚀",
    chat_placeholder: "Pergunte algo para a Hypatia...",
    chat_disclaimer: "Hypatia pode cometer erros. Verifique informações importantes.",
    settings_profile: "Perfil",
    settings_preferences: "Preferências",
    settings_theme: "Tema",
    settings_theme_desc: "Claro ou escuro",
    settings_lang: "Idioma",
    settings_lang_desc: "PT-BR ou EN",
    btn_manage: "Gerenciar",
    nav_community: "Comunidade",
    comm_ranking: "Ranking Global",
    btn_send_support: "Enviar mensagem",
    support_subtitle: "Estamos aqui para ajudar. Descreva sua dúvida ou problema.",
    support_subject: "Assunto",
    support_message: "Mensagem",
  },
  en: {
    onboarding_title: "Welcome to Hypatia",
    onboarding_subtitle: "Your AI study mentor. Let's personalize your experience.",
    onboarding_name: "Your name",
    onboarding_email: "Your e-mail (optional)",
    onboarding_cta: "Get started →",
    nav_dashboard: "Dashboard",
    nav_learn: "Learn",
    nav_projects: "Projects",
    nav_chat: "AI Chat",
    nav_hackathons: "Hackathons",
    nav_settings: "Settings",
    nav_support: "Support",
    user_role: "Student",
    dashboard_hello: "Hello,",
    dashboard_subtitle: "Ready to study today? Your knowledge journey continues.",
    streak_days: "days in a row",
    stat_lessons: "Lessons completed",
    stat_progress: "Overall progress",
    stat_projects: "Active projects",
    section_explore: "Explore",
    card_learn_title: "Learn",
    card_learn_desc: "Personalized study paths with adaptive AI for your level.",
    card_projects_title: "Projects",
    card_projects_desc: "Develop real and multidisciplinary projects guided by Hypatia.",
    card_chat_title: "AI Chat",
    card_chat_desc: "Ask your questions and receive educational mentoring 24/7 with Hypatia.",
    card_hackathons_title: "Hackathons",
    card_hackathons_desc: "Participate in school and academic challenges to accelerate your evolution.",
    chat_online: "Online now",
    learn_subtitle: "Complete study paths for High School with adaptive AI.",
    filter_all: "All",
    btn_continue: "▶ Continue Learning",
    btn_new_project: "+ New Project",
    projects_subtitle: "Your real projects with code, structure and preview.",
    chat_welcome_msg: "Hello! I'm Hypatia, your study mentor. How can I help you today? You can ask me about subjects, organization, projects, or any school question. 🚀",
    chat_placeholder: "Ask Hypatia something...",
    chat_disclaimer: "Hypatia can make mistakes. Check important info.",
    settings_profile: "Profile",
    settings_preferences: "Preferences",
    settings_theme: "Theme",
    settings_theme_desc: "Light or dark",
    settings_lang: "Language",
    settings_lang_desc: "PT-BR or EN",
    btn_manage: "Manage",
    nav_community: "Community",
    comm_ranking: "Global Ranking",
    btn_send_support: "Send message",
    support_subtitle: "We're here to help. Describe your question or problem.",
    support_subject: "Subject",
    support_message: "Message",
  }
};

/* ── 2. DADOS INICIAIS (MOCK) ── */
let userData = {
  name: "Usuário",
  email: "",
  xp: 1250,
  level: 3,
  streak: 7,
  lessonsCompleted: 24,
  projectsActive: 5,
  theme: 'light',
  lang: 'pt'
};

const courses = [
  { id: 1, title: "Matemática: Equação do 1º grau", desc: "Domine os fundamentos das equações lineares e suas aplicações.", level: "Iniciante", category: "exatas", icon: "📐", duration: "5h", lessons: 10 },
  { id: 2, title: "Física: Cinemática", desc: "Entenda o movimento dos corpos, velocidade e aceleração.", level: "Iniciante", category: "exatas", icon: "🏎️", duration: "8h", lessons: 12 },
  { id: 3, title: "Química: Ligações Químicas", desc: "Como os átomos se unem para formar tudo ao nosso redor.", level: "Intermediário", category: "exatas", icon: "🧪", duration: "10h", lessons: 15 },
  { id: 4, title: "Biologia: Genética", desc: "Descubra os segredos do DNA e a hereditariedade.", level: "Avançado", category: "biologicas", icon: "🧬", duration: "12h", lessons: 20 },
  { id: 5, title: "Português: Redação ENEM", desc: "Técnicas para alcançar a nota 1000 na sua redação.", level: "Avançado", category: "linguagens", icon: "✍️", duration: "15h", lessons: 25 },
  { id: 6, title: "História: Revolução Industrial", desc: "As transformações que moldaram o mundo moderno.", level: "Intermediário", category: "humanas", icon: "🏭", duration: "6h", lessons: 10 }
];

const projects = [
  { id: 1, title: "Sistema de Gamificação para Agricultura", desc: "Aplicação de conceitos matemáticos para otimizar plantios.", tech: ["Matemática", "Biologia", "Lógica"], status: "active", icon: "🌱", date: "Hoje" },
  { id: 2, title: "App para Neurodivergentes", desc: "Ferramenta de suporte focada em inclusão e acessibilidade.", tech: ["Psicologia", "Design", "Programação"], status: "progress", icon: "🧠", date: "Ontem" },
  { id: 3, title: "Robô com IA para Educação", desc: "Protótipo de assistente para auxiliar em sala de aula.", tech: ["Robótica", "Física", "IA"], status: "progress", icon: "🤖", date: "3 dias atrás" },
  { id: 4, title: "Energia Sustentável", desc: "Projeto de sistema solar para comunidades isoladas.", tech: ["Física", "Geografia", "Engenharia"], status: "done", icon: "☀️", date: "1 semana atrás" },
  { id: 5, title: "Plataforma de Reciclagem Inteligente", desc: "Sistema de gestão de resíduos com incentivos gamificados.", tech: ["Química", "Educação Ambiental"], status: "done", icon: "♻️", date: "2 semanas atrás" }
];

const hackathons = [
  { id: 1, title: "Hackathon de Inclusão e Acessibilidade", area: "Educação Inclusiva", deadline: "12 dias", status: "live", badge: "🔴 Ao Vivo", rec: "Compatível com seu projeto 'App para Neurodivergentes'" },
  { id: 2, title: "Hackathon de Clima e Meio Ambiente", area: "Sustentabilidade", deadline: "25 dias", status: "upcoming", badge: "📅 Em breve", rec: "Ideal para seu projeto de 'Energia Sustentável'" },
  { id: 3, title: "Olimpíada de Inovação Escolar", area: "Multidisciplinar", deadline: "Encerrado", status: "done", badge: "✅ Encerrado", rec: "Veja os projetos premiados" }
];

/* ── 3. CORE APP LOGIC ── */
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  checkLogin();
  setupNavigation();
  setupTheme();
  setupLanguage();
  renderCourses();
  renderProjects();
  renderHackathons();
  setupEventListeners();
  updateUI();
}

function checkLogin() {
  const savedUser = localStorage.getItem('hypatia_user_v2');
  if (savedUser) {
    userData = JSON.parse(savedUser);
    document.getElementById('onboarding-overlay').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
  }
}

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item, .bottom-nav-item, .feature-card');
  const pages = document.querySelectorAll('.page');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const pageId = item.getAttribute('data-page') || item.getAttribute('data-page-target');
      if (!pageId) return;

      // Update active state
      document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(n => n.classList.remove('active'));
      document.querySelectorAll(`[data-page="${pageId}"]`).forEach(n => n.classList.add('active'));

      // Show page
      pages.forEach(p => p.classList.add('hidden'));
      document.getElementById(`page-${pageId}`).classList.remove('hidden');

      // Update Header
      document.getElementById('page-title').textContent = i18n[userData.lang][`nav_${pageId}`] || pageId;

      // Mobile: close sidebar
      document.getElementById('sidebar').classList.remove('mobile-open');
      document.getElementById('sidebar-overlay').classList.add('hidden');
    });
  });

  // Mobile Menu Toggle
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('mobile-open');
    document.getElementById('sidebar-overlay').classList.remove('hidden');
  });

  document.getElementById('sidebar-overlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('mobile-open');
    document.getElementById('sidebar-overlay').classList.add('hidden');
  });

  // Sidebar Collapse
  document.getElementById('sidebar-collapse-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
}

function setupTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Load saved theme
  const savedTheme = localStorage.getItem('hypatia_theme') || 'light';
  userData.theme = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    userData.theme = userData.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', userData.theme);
    localStorage.setItem('hypatia_theme', userData.theme);
  });
}

function setupLanguage() {
  const langToggle = document.getElementById('lang-toggle');
  
  // Load saved lang
  const savedLang = localStorage.getItem('hypatia_lang') || 'pt';
  userData.lang = savedLang;
  applyLanguage(savedLang);

  langToggle.addEventListener('click', () => {
    userData.lang = userData.lang === 'pt' ? 'en' : 'pt';
    applyLanguage(userData.lang);
    localStorage.setItem('hypatia_lang', userData.lang);
  });
}

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.getElementById('lang-text').textContent = lang.toUpperCase();
  document.getElementById('lang-flag').textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
  document.getElementById('chat-input').placeholder = i18n[lang].chat_placeholder;
}

function updateUI() {
  // Update names
  document.getElementById('header-user-name').textContent = userData.name;
  document.getElementById('spc-name').textContent = userData.name;
  document.getElementById('welcome-name').textContent = userData.name;
  document.getElementById('avatar-initials').textContent = userData.name.charAt(0).toUpperCase();
  document.getElementById('spc-avatar').textContent = userData.name.charAt(0).toUpperCase();
  document.getElementById('settings-user-name').textContent = userData.name;

  // Update stats
  document.getElementById('stat-xp').textContent = userData.xp;
  document.getElementById('spc-xp').textContent = `${userData.xp} / ${userData.level * 500}`;
  document.getElementById('xp-current-display').textContent = `${userData.xp} XP`;
  document.getElementById('xp-level-badge').textContent = `Nível ${userData.level}`;
  document.getElementById('spc-level').textContent = `Nível ${userData.level}`;

  const progress = (userData.xp % 500) / 5;
  document.getElementById('xp-bar-fill').style.width = `${progress}%`;
  document.getElementById('spc-xp-fill').style.width = `${progress}%`;
}

function renderCourses(filter = 'all') {
  const grid = document.getElementById('courses-grid');
  if (!grid) return;
  
  const filtered = filter === 'all' ? courses : courses.filter(c => c.category === filter);
  
  grid.innerHTML = filtered.map(course => `
    <div class="course-card" data-category="${course.category}">
      <div class="course-image">${course.icon}</div>
      <div class="course-content">
        <span class="course-badge">${course.level}</span>
        <h4>${course.title}</h4>
        <p>${course.desc}</p>
        <div class="course-footer">
          <div class="course-meta">
            <div class="meta-item">⏱ ${course.duration}</div>
            <div class="meta-item">📚 ${course.lessons} aulas</div>
          </div>
          <button class="btn-course" onclick="startLesson(${course.id})">Começar →</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(proj => `
    <div class="project-card">
      <div class="project-card-header">
        <div class="project-icon">${proj.icon}</div>
        <span class="project-status-badge status-${proj.status}">${proj.status}</span>
      </div>
      <h4 class="project-title">${proj.title}</h4>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-tech">
        ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div class="project-footer">
        <span class="project-date">📅 ${proj.date}</span>
        <button class="project-open-btn">Abrir →</button>
      </div>
    </div>
  `).join('');
}

function renderHackathons() {
  const grid = document.getElementById('hackathons-grid');
  if (!grid) return;
  grid.innerHTML = hackathons.map(hack => `
    <div class="hack-card">
      <div class="hack-banner">
        <span class="hack-badge">${hack.badge}</span>
        <h3>${hack.title}</h3>
      </div>
      <div class="hack-content">
        <div class="hack-info-row">
          <div class="hack-info-item">
            <span class="hii-label">Área</span>
            <span class="hii-value">${hack.area}</span>
          </div>
          <div class="hack-info-item">
            <span class="hii-label">Prazo</span>
            <span class="hii-value">${hack.deadline}</span>
          </div>
        </div>
        <div class="hack-recommendation">
          <div class="rec-title">✨ Recomendação IA</div>
          <p class="rec-text">${hack.rec}</p>
        </div>
        <div class="hack-footer">
          <button class="btn-primary btn-full" onclick="participateHack(${hack.id})">Inscrever-se</button>
        </div>
      </div>
    </div>
  `).join('');
}

function setupEventListeners() {
  // Onboarding
  document.getElementById('btn-onboarding-start').addEventListener('click', () => {
    const nameInput = document.getElementById('input-name').value;
    if (!nameInput) return;
    
    userData.name = nameInput;
    userData.email = document.getElementById('input-email').value;
    
    localStorage.setItem('hypatia_user_v2', JSON.stringify(userData));
    document.getElementById('onboarding-overlay').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    updateUI();
    showXPToast(50);
  });

  // Chat
  const chatInput = document.getElementById('chat-input');
  const btnSend = document.getElementById('btn-send');
  
  const sendMessage = () => {
    const text = chatInput.value.trim();
    if (!text) return;
    
    appendMessage('user', text);
    chatInput.value = '';
    
    setTimeout(() => {
      let response = "Estou aqui para te ajudar com seus estudos! Como posso auxiliar nessa matéria?";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('fração')) {
        response = "Vamos resolver juntos. Primeiro vamos revisar numerador e denominador. O numerador é a parte de cima e o denominador a de baixo.";
      } else if (lowerText.includes('neurodivergente')) {
        response = "Esse projeto possui potencial para aplicações em educação inclusiva e acessibilidade. Como você pretende estruturar o suporte principal?";
      } else if (lowerText.includes('organizar')) {
        response = "Posso criar um cronograma personalizado para você. Quais são suas matérias mais difíceis no momento?";
      }
      
      appendMessage('ai', response);
      showXPToast(10);
    }, 1000);
  };

  btnSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCourses(btn.getAttribute('data-filter'));
    });
  });

  // Modal Novo Projeto
  const btnNewProject = document.getElementById('btn-new-project');
  const modalNewProject = document.getElementById('new-project-modal');
  const btnCloseModal = document.getElementById('close-new-project-modal');
  const btnCancelProject = document.getElementById('cancel-new-project');
  const btnConfirmProject = document.getElementById('confirm-new-project');

  btnNewProject.addEventListener('click', () => modalNewProject.classList.remove('hidden'));
  btnCloseModal.addEventListener('click', () => modalNewProject.classList.add('hidden'));
  btnCancelProject.addEventListener('click', () => modalNewProject.classList.add('hidden'));
  
  btnConfirmProject.addEventListener('click', () => {
    const title = document.getElementById('proj-title').value;
    if (!title) return;
    
    showXPToast(50);
    modalNewProject.classList.add('hidden');
  });

  // Tags selection
  document.querySelectorAll('.tag-option').forEach(tag => {
    tag.addEventListener('click', () => tag.classList.toggle('selected'));
  });
}

function appendMessage(type, text) {
  const container = document.getElementById('chat-messages');
  const msg = document.createElement('div');
  msg.className = `chat-message ${type}-message`;
  
  msg.innerHTML = `
    <div class="message-avatar">${type === 'ai' ? '<img src="logo.jpeg">' : userData.name.charAt(0).toUpperCase()}</div>
    <div class="message-bubble">
      <p>${text}</p>
      <span class="message-time">Agora</span>
    </div>
  `;
  
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function showXPToast(amount) {
  const toast = document.getElementById('xp-toast');
  const text = document.getElementById('xp-toast-text');
  
  text.textContent = `+${amount} XP`;
  toast.classList.remove('hidden');
  
  userData.xp += amount;
  updateUI();
  
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.4s forwards';
    setTimeout(() => {
      toast.classList.add('hidden');
      toast.style.animation = '';
    }, 4000);
  }, 3000);
}

window.startLesson = function(id) {
  showXPToast(10);
};

window.participateHack = function(id) {
  showXPToast(100);
};
