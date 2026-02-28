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
  },{id: "nav-insights",
          title: "Insights",
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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
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
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/danilo-portfolio/people/";
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
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
