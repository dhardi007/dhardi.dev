export interface Project {
  id: number;
  title: string;
  description: string;
  descriptionLarge: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string;
  year: number;
  category: string;
  teamSize: string;
  featured?: boolean;
  private?: boolean;
}

export const projects: Project[] = [
  {
    id: 3, title: 'Dotfiles · Arch Linux',
    description: 'Configuración completa de Arch Linux con Hyprland, Neovim (LazyVim), Waybar, EWW widgets y Rofi.',
    descriptionLarge: 'Entorno de escritorio completo desde cero: Hyprland como WM, Neovim con LazyVim como editor, Kitty como terminal, Zsh con plugins, Waybar, EWW widgets y Rofi. Incluye scripts de instalación automatizada.',
    technologies: ['Lua', 'Python', 'Shell'],
    image: '/modal-tech-dotfiles.png',
    github: 'https://github.com/dizzi1222/dotfiles-dizzi',
    year: 2025, category: 'System Config', teamSize: 'Solo', featured: true,
  },
  {
    id: 2, title: 'PTD-Talento',
    description: 'Marketplace de talento para Cincinnatus Institute con autenticación Google OAuth, catálogo, watch list y panel admin.',
    descriptionLarge: 'MVP completo de marketplace de talento conectando estudiantes con reclutadores. Frontend en React + TypeScript, backend Node.js/Express + PostgreSQL, Docker para contenerización y Google Cloud para despliegue.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Figma'],
    image: '/modal-tech-ptd-talento.png',
    github: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-back',
    live: 'https://ptd-talento-front.vercel.app',
    year: 2025, category: 'Marketplace', teamSize: 'Team', featured: true, private: true,
  },
  {
    id: 1, title: 'Terminal Portfolio',
    description: 'Portfolio interactivo estilo terminal con Svelte, i18n (ES/EN/DE), HUD tipo Neovim, reproductor musical y temas.',
    descriptionLarge: 'Portfolio interactivo con estética de terminal Linux. Incluye HUD de navegación tipo Neovim (h/j/k/l, gg, G, /), reproductor musical integrado, cambio de idioma en vivo, efectos glitch y temas claro/oscuro.',
    technologies: ['Svelte', 'TypeScript', 'Vite', 'CSS'],
    image: '/modal-tech-portfolio-terminal.png',
    github: 'https://github.com/dizzi1222/portfolio-terminal-dhardi',
    live: 'https://portfolio-terminal-dhardi.vercel.app',
    year: 2025, category: 'Portfolio', teamSize: 'Solo',
  },
  {
    id: 0, title: 'Dashboard React',
    description: 'Panel de administración con gráficos, calculadora, contador y TO-DO list. Construido con React y react-router-dom.',
    descriptionLarge: 'Dashboard completo con múltiples herramientas integradas: gráficos interactivos, calculadora funcional, sistema de contador y TO-DO list persistente. Demuestra el uso de componentes reutilizables, hooks (useState, useEffect) y navegación con react-router-dom.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    image: '/modal-tech-Dashboard-REACT.png',
    github: 'https://github.com/dizzi1222/REACT-Diego-Dizzi-Dashboard',
    live: 'https://reactdashboarddh-one.vercel.app/',
    year: 2024, category: 'SPA', teamSize: 'Solo',
  },
  {
    id: 4, title: 'Nvim · WSL + Linux',
    description: 'Configuración universal de Neovim con LazyVim para Windows (WSL) y Linux. Sincronización multiplataforma.',
    descriptionLarge: 'Configuración de Neovim que funciona en Windows (WSL) y Linux (Hyprland) con LSP completo para TS/JS, Telescope, treesitter y keymaps personalizados. Experiencia consistente en ambas plataformas.',
    technologies: ['Lua', 'Neovim', 'LazyVim'],
    image: '/modal-tech-nvim.png',
    github: 'https://github.com/dizzi1222/nvim',
    live: 'https://github.com/dizzi1222/nvim-wsl',
    year: 2025, category: 'Editor Config', teamSize: 'Solo',
  },
  {
    id: 5, title: 'PCE-Agencia',
    description: 'App de finanzas y viajes con gestión de presupuestos, planificación de itinerarios y seguimiento de gastos.',
    descriptionLarge: 'Aplicación web para gestión de finanzas y viajes: cálculo automático de presupuestos, conversión de divisas y visualización de gastos categorizados. CRUD completo con persistencia local.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Tailwind'],
    image: '/modal-tech-pce-agencia-reskyt.png',
    github: 'https://github.com/dhardi007/PCE-Agencia',
    live: 'https://pce-agencia.vercel.app/',
    year: 2024, category: 'Web App', teamSize: 'Solo',
  },
  {
    id: 7, title: 'Tics Service',
    description: 'Web corporativa para papelería y centro de internet. Diseño responsive con Bootstrap, galería de productos y servicios.',
    descriptionLarge: 'Sitio web profesional para Papelería Tics Service Centro de Internet, desarrollado durante mi pasantía. \n\nFue mi primera experiencia real construyendo un sitio completo para un negocio local: catálogo de productos (memorias USB, cables, auriculares), servicios (fotografía, reparación, recargas), mapa de ubicación y formulario de contacto. \n\nAquí aprendí el uso de plantillas Bootstrap, componentes CSS reutilizables, drag scroll nativo con JavaScript y conceptos fundamentales de diseño web responsive. Una etapa prehistórica pero formativa donde cada línea de código era un descubrimiento.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '/modal-ticservice.png',
    github: 'https://github.com/dizzi1222/FCTicService.github.6c-Diego-05',
    live: 'https://dizzi1222.github.io/FCTicService.github.6c-Diego-05/',
    year: 2024, category: 'Web Page', teamSize: 'Solo',
  },
  {
    id: 8, title: 'MCSD · Manual Conducción',
    description: 'App educativa sobre conducción y seguridad vial dominicana. Proyecto final de grado con diseño moderno y glassmorphism.',
    descriptionLarge: 'Manual de Conducción y Seguridad Dominicana — mi proyecto final para graduarme en Sistemas Informáticos. \n\nFue un proyecto en grupo donde, spoiler, terminé haciéndolo prácticamente solo. Mis compañeros aportaron con el diseño en Canvas de los mockups (un concepto que ni siquiera estaba bien definido en ese tiempo, pero que el profesor supo indicarnos correctamente). \n\nCon nula experiencia y siendo un completo novato, fue una experiencia horrible para el inexperto Dieguito que no era Vibe Coder Pro. Aprobé, pero el proceso fue un dolor de cabeza. \n\nAños después, modernicé el proyecto a Vite 5 + Tailwind CSS v4 + glassmorphism, con 8 páginas completas, splash screen, animaciones scroll-based y diseño responsive. Una redención técnica para aquel novato que sobrevivió a base de café y madrugadas.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Canvas'],
    image: '/modal-mcsd.png',
    github: 'https://github.com/dizzi1222/Proyecto-App-MCSD',
    live: 'https://apps.volt.build/1d496dbf-1137-4fec-92d0-29c05aac9a3e/android.debug.apk',
    year: 2024, category: 'Educational', teamSize: 'Team',
  },
  {
    id: 6, title: 'Proyección Astral',
    description: 'Página melancólica y romántica. Tipografía cuidada, atmósfera onírica y animaciones sutiles.',
    descriptionLarge: 'Página web con carga emocional y atmósfera onírica. Demuestra versatilidad creando experiencias significativas más allá de aplicaciones convencionales.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/modal-proyeccion-astral.png',
    github: 'https://github.com/dizzi1222/proyeccion-astral-disculpa',
    live: 'https://proyeccion-astral.vercel.app/',
    year: 2025, category: 'Personal', teamSize: 'Solo',
  },
];
