import { legend, title } from "framer-motion/client";

export const translations = {
  pt: {
    navbar: {
      home: "Home",
      about: "Sobre",
      work: "Experiências",
      projects: "Projetos",
      contact: "Contato",
    },
    home: {
      greeting: "Oi, eu sou o Felipe",
      role1: "DESENVOLVEDOR",
      role2: "BACK-END",
    },
    about: {
      title: "SOBRE MIM",
      p1: "Olá! Me chamo Felipe, tenho 18 anos e sou um desenvolvedor apaixonado de São Paulo. Minha jornada começou cedo, movida pela curiosidade de entender como os softwares funcionavam por trás dos panos.",
      p2: "Hoje, transformo essa curiosidade em código. Estou focado no ecossistema .NET, me aprofundando na robustez do C# e ASP.NET no backend.",
      p3: "Meu objetivo é criar aplicações que não sejam apenas funcionais, mas que ofereçam uma experiência visual única e fluida. Estou sempre estudando novas tecnologias e buscando o próximo desafio para elevar minha capacidade técnica.",
      tools: "FERRAMENTAS",
      database: "BANCO DE DADOS",
    },
    experience: {
      title: "CARREIRA",
      jobs: [
        {
          role: "Desenvolvedor Full-Stack",
          company: "VidaPet.Tech",
          period: "Setembro 2025 - Abril 2026",
          description: [
            "Desenvolvimento End-to-End: Desenvolvi e mantive o ecossistema digital da VidaPet.Tech focado em saúde animal (teleconsulta, prontuário e marketplace), atuando em todo o ciclo de vida do produto, desde a concepção até a sustentação em produção.",
            "Backend & Banco de Dados: Projetei e construí APIs RESTful com PHP e MySQL, garantindo a persistência, segurança e integridade dos dados para dar suporte às plataformas web e mobile.",
            "Desenvolvimento Mobile: Criei o aplicativo do zero utilizando React Native e Expo, traduzindo regras de negócio complexas do ambiente web em uma experiência mobile nativa e intuitiva.",
            "Plataforma Web & UX: Mantive e evoluí a plataforma web em React.js, focando em melhorias de UI/UX, resolução de bugs críticos e estabilidade contínua do sistema.",
            "Cultura Startup & Agilidade: Colaborei em um ambiente de startup ágil, entregando novas funcionalidades com rapidez, autonomia e foco em gerar valor desde o primeiro dia."
          ],
        },
        {
          role: "Desenvolvedor de Sistemas",
          company: "Timeware",
          period: "Abril 2026 - Presente",
          description: [
            "Desenvolvimento Backend & APIs: Desenvolvo e mantenho APIs RESTful e sistemas backend robustos com C#, .NET Core e Entity Framework, garantindo alta disponibilidade e arquitetura escalável para a aplicação.",
            "Segurança & Autenticação: Implemento mecanismos de autenticação e autorização com ASP.NET Core Identity, protegendo endpoints críticos e reforçando a segurança no acesso aos dados.",
            "Infraestrutura em Nuvem: Integro e gerencio serviços em nuvem na Microsoft Azure, otimizando o deploy e a confiabilidade da infraestrutura do sistema.",
            "Automação de Dados: Crio rotas automatizadas de web scraping e scripts de extração em Python, reduzindo o esforço manual e acelerando a coleta de dados estratégicos.",
            "Integrações & Frontend: Atuo na modernização de projetos legados em IBM ACE e no desenvolvimento de interfaces dinâmicas em React, garantindo a integração fluida entre diferentes camadas da aplicação.",
            "Metodologia Ágil: Colaboro diariamente em squad ágil via Kanban, priorizando demandas no Jira/Azure DevOps para garantir entregas contínuas e alinhadas às metas do produto."
          ],
        },
      ],
    },
    projects: {
      title: "MEUS",
      subtitle: "PROJETOS",
      instruction: "< CLIQUE PARA VER GALERIA />",
      buttons: {
        demo: "VER DEMO",
        clickOpen: "CLIQUE PARA ABRIR",
      },
      cards: [
        {
          title: "Sistema de Estacionamento",
          legend:
            "Um painel administrativo que permite gerenciar de forma simples e eficiente os veículos cadastrados, as vagas disponíveis e a atribuição de vagas para cada veículo",
        },
        {
          title: "Metas Financeiras",
          legend:
            "API para gerenciamento de metas financeiras, podendo gerenciar metas a serem batidas e metas atingidas.",
        },
        {
          title: "Portfólio",
          legend: "Este portfólio que você está vendo!",
        },
        {
          title: "FoodDash",
          legend:
            "API para cadastro de pratos em um cardápio e criação de pedidos usando arquitetura Minimal API.",
        },
      ],
    },
    contact: {
      title: "PRONTO PARA",
      subtitle: "COMEÇAR?",
      text: "Estou sempre aberto a novos projetos e parcerias.",
      buttons: {
        linkedin: "CONECTAR NO LINKEDIN",
        copy: "CLIQUE PARA COPIAR",
        copied: "COPIADO!",
      },
    },
  },
  en: {
    navbar: {
      home: "Home",
      about: "About",
      work: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Hi, I'm Felipe",
      role1: "BACK-END",
      role2: "DEVELOPER",
    },
    about: {
      title: "ABOUT ME",
      p1: "Hello! My name is Felipe, I’m 18 years old, and I’m a passionate developer from São Paulo. My journey started early, fueled by a curiosity to understand how software works behind the scenes.",
      p2: "Today, I’m turning that curiosity into code. I am focusing on the .NET ecosystem, deepening my expertise in the robustness of C# and ASP.NET for backend development.",
      p3: "My goal is to create applications that are not only functional, but also deliver a unique and seamless visual experience. I am always studying new technologies and seeking the next challenge to elevate my technical skills.",
      tools: "TOOLS",
      database: "DATABASE",
    },
    experience: {
      title: "CAREER",
      jobs: [
        {
          role: "Full-Stack Developer",
          company: "Startup VidaPet.Tech",
          period: "September 2025 - April 2026",
          description: [
            "End-to-End Development: I built and maintained the VidaPet.Tech digital ecosystem, focused on animal health (teleconsultation, medical records, and marketplace), working across the entire product lifecycle, from concept to production support.",
            "Backend & Database: I designed and built RESTful APIs with PHP and MySQL, ensuring data persistence, security, and integrity to support both the web and mobile platforms.",
            "Mobile Development: I built the app from scratch using React Native and Expo, translating complex business rules from the web environment into an intuitive, native mobile experience.",
            "Web Platform & UX: I maintained and evolved the React.js web platform, focusing on UI/UX improvements, fixing critical bugs, and keeping the system stable.",
            "Startup Culture & Agility: I collaborated in a fast-paced startup environment, delivering new features quickly and autonomously, with a focus on creating value from day one."
          ],
        },
        {
          role: "System Developer",
          company: "Timeware",
          period: "April 2026 - Present",
          description: [
            "Backend & API Development: I build and maintain RESTful APIs and robust backend systems with C#, .NET Core, and Entity Framework, ensuring high availability and a scalable architecture for the application.",
            "Security & Authentication: I implement authentication and authorization with ASP.NET Core Identity, protecting critical endpoints and strengthening data access security.",
            "Cloud Infrastructure: I integrate and manage Microsoft Azure cloud services, improving deployment and infrastructure reliability.",
            "Data Automation: I create automated web scraping routes and extraction scripts in Python, cutting manual effort and speeding up the collection of strategic data.",
            "Integrations & Frontend: I work on modernizing legacy projects in IBM ACE and building dynamic interfaces in React, ensuring smooth integration between the different layers of the application.",
            "Agile Methodology: I collaborate daily in an agile squad using Kanban, prioritizing tasks in Jira/Azure DevOps to keep deliveries continuous and aligned with product goals."
          ],
        },
      ],
    },
    projects: {
      title: "MY",
      subtitle: "PROJECTS",
      instruction: "< CLICK TO VIEW GALLERY />",
      buttons: {
        demo: "VIEW DEMO",
        clickOpen: "CLICK TO OPEN",
      },
      cards: [
        {
          title: "Parking Management System",
          legend:
            "An administrative dashboard that allows simple and efficient management of registered vehicles and parking spaces.",
        },
        {
          title: "Financial Goals",
          legend:
            "An API for user registration and management of financial goals.",
        },
        {
          title: "Portfolio",
          legend: "The portfolio you’re looking at right now!",
        },
        {
          title: "FoodDash",
          legend:
            "API for menu item registration and order creation using Minimal API architecture.",
        },
      ],
    },
    contact: {
      title: "READY TO",
      subtitle: "START?",
      text: "I'm always open to new projects and partnerships.",
      buttons: {
        linkedin: "CONNECT ON LINKEDIN",
        copy: "CLICK TO COPY",
        copied: "COPIED!",
      },
    },
  },
};
