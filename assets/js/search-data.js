// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/danilo-portfolio/";
    },
  },{id: "nav-insights-amp-articles",
          title: "Insights &amp; Articles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/danilo-portfolio/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/danilo-portfolio/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/danilo-portfolio/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Resumo da minha experiência profissional, formação, projetos e competências técnicas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/danilo-portfolio/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/danilo-portfolio/teaching/";
          },
        },{id: "nav-people",
          title: "People",
          description: "People I worked with or connected with through professional experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/danilo-portfolio/people/";
          },
        },{id: "post-git-e-github-para-quem-está-começando-em-ciência-de-dados",
        
          title: "Git e GitHub para quem está começando em ciência de dados",
        
        description: "Introdução prática a Git e GitHub para versionamento, colaboração e maturidade técnica em dados.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/danilo-portfolio/blog/2026/git-intro/";
          
        },
      },{id: "post-docker-para-quem-está-começando-em-ciência-de-dados",
        
          title: "Docker para quem está começando em ciência de dados",
        
        description: "Introdução prática a Docker para reprodutibilidade e profissionalização em projetos de dados.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/danilo-portfolio/blog/2026/docker-intro/";
          
        },
      },{id: "post-terminal-linux-básico-comandos-essenciais-para-trabalhar-com-mais-velocidade",
        
          title: "Terminal Linux básico: comandos essenciais para trabalhar com mais velocidade",
        
        description: "Uma base prática para navegar, inspecionar e operar sistemas Linux com segurança.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/danilo-portfolio/blog/2026/terminal_linux_basic/";
          
        },
      },{id: "post-transformação-de-dados-em-ciência-de-dados-do-básico-ao-avançado",
        
          title: "Transformação de dados em ciência de dados: do básico ao avançado",
        
        description: "Como eu estruturo transformação de dados para reduzir ruído analítico e aumentar qualidade de decisão.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/danilo-portfolio/blog/2026/transf_dados_basico_avancado/";
          
        },
      },{id: "post-detecção-de-anomalias-sem-fadiga-de-alerta-o-que-realmente-funciona",
        
          title: "Detecção de anomalias sem fadiga de alerta: o que realmente funciona",
        
        description: "Como usar modelos não supervisionados para risco sem inundar a operação com falsos positivos.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/danilo-portfolio/blog/2026/anomalia-sem-fadiga-de-alerta/";
          
        },
      },{id: "post-etl-para-decisão-como-reduzir-atrito-entre-dado-e-operação",
        
          title: "ETL para decisão: como reduzir atrito entre dado e operação",
        
        description: "Uma estrutura prática para pipelines que realmente suportam decisão no tempo certo.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/danilo-portfolio/blog/2026/etl-para-decisao-operacional/";
          
        },
      },{id: "post-kpi-bonito-não-paga-conta-como-escolher-indicadores-que-movem-resultado",
        
          title: "KPI bonito não paga conta: como escolher indicadores que movem resultado",
        
        description: "Um guia prático para transformar dashboards em decisões operacionais melhores.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/danilo-portfolio/blog/2026/kpi-bonito-nao-paga-conta/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/danilo-portfolio/books/the_godfather/";
            },},{id: "projects-auditoria-financeira-com-detecção-de-anomalias",
          title: 'Auditoria Financeira com Detecção de Anomalias',
          description: "Pipeline de risco para priorizar transações suspeitas e reduzir ruído de investigação.",
          section: "Projects",handler: () => {
              window.location.href = "/danilo-portfolio/projects/10_auditoria-financeira-anomalias/";
            },},{id: "projects-dashboard-estratégico-de-kpis-hierárquicos",
          title: 'Dashboard Estratégico de KPIs Hierárquicos',
          description: "Arquitetura de indicadores para conectar operação, tática e estratégia em um único fluxo decisório.",
          section: "Projects",handler: () => {
              window.location.href = "/danilo-portfolio/projects/11_dashboard-kpis-hierarquicos/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/danilo-portfolio/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/danilo-portfolio/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/danilo-a-fig", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Zolinad", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("https://lattes.cnpq.br/9122429239132988", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%69%6C%6F%7A.%66%69%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },];
