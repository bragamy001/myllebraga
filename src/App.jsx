import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('pt');

  // Função para gerar a visualização do currículo completo em Inglês
  const openEnglishResume = () => {
    const win = window.open('', '_blank');
    win.document.write(`
      <html>
        <head>
          <title>Resume - Mylle Braga</title>
          <style>
            body { font-family: 'Inter', sans-serif; line-height: 1.4; color: #1a1a1a; max-width: 900px; margin: 20px auto; padding: 20px; font-size: 12px; }
            h1 { margin-bottom: 2px; text-transform: uppercase; border-bottom: 2px solid #dc2626; display: inline-block; font-size: 24px; }
            h2 { border-bottom: 1px solid #e5e7eb; padding-bottom: 3px; margin-top: 15px; color: #dc2626; font-size: 14px; text-transform: uppercase; font-weight: bold; }
            .header { text-align: center; margin-bottom: 20px; }
            .contact { font-size: 11px; color: #4b5563; margin-top: 5px; }
            .job { margin-bottom: 15px; }
            .job-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 12px; }
            .job-role { font-style: italic; color: #4b5563; margin-bottom: 4px; display: block; font-weight: 600; }
            ul { padding-left: 15px; margin-top: 2px; }
            li { margin-bottom: 2px; }
            .skills-container { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            @media print { .no-print { display: none; } body { margin: 0; padding: 10px; } }
          </style>
        </head>
        <body>
          <div class="no-print" style="background: #111; color: white; padding: 10px; text-align: center; border-radius: 4px; margin-bottom: 20px;">
            <button onclick="window.print()" style="background: #dc2626; color: white; border: none; padding: 8px 16px; cursor: pointer; font-weight: bold; border-radius: 4px;">PRINT / SAVE AS PDF</button>
          </div>
          
          <div class="header">
            <h1>Mylle Christyann Souza Braga</h1>
            <div class="contact">
              Software Engineer & Data Specialist<br/>
              Feira de Santana - BA, Brazil | +55 75 98351-9119 | bragamy001@gmail.com<br/>
              linkedin.com/in/myllebraga | github.com/bragamy001
            </div>
          </div>

          <h2>Academic Background</h2>
          <p><strong>IT Technician</strong> – IFBA, 2015 - 2019</p>
          <p><strong>Information Systems</strong> – IFBA, 2019 - 2023</p>

          <h2>Professional Experience</h2>
          
          <div class="job">
            <div class="job-header"><span>Grupo Boticário</span> <span>Jun/2024 – Present</span></div>
            <span class="job-role">Senior Data & Planning Analyst | Key User</span>
            <ul>
              <li>Definition and evolution of data-oriented solution architecture, ensuring scalability, resilience, and interoperability between SAP, WMS, WCS (Knapp), and OSR.</li>
              <li>Establishment of technical standards and data governance, ensuring consistency, traceability, and reliability in critical environments.</li>
              <li>Design and implementation of a logistic balancing SaaS platform, structuring business rules, operational flows, and distributed integrations.</li>
              <li>Strategic product direction as Product Owner, with roadmap definition, value-based prioritization, and alignment with business objectives.</li>
              <li>Conducting Root Cause Analysis (RCA) and resolving critical production incidents, focusing on stability and operational continuity.</li>
              <li>Orchestration of automations and integrations (RPA, AppSheet, Access, GCP) to increase efficiency and reduce systemic failures.</li>
            </ul>
          </div>

          <div class="job">
            <div class="job-header"><span>Pirelli</span> <span>Mar/2023 – Jun/2024</span></div>
            <span class="job-role">Industrial IT | IoT & Industrial Systems</span>
            <ul>
              <li>Technical reference in IoT and integration between PLCs and cloud data environments.</li>
              <li>Integration of industrial data with microservices architectures.</li>
              <li>Configuration and maintenance of PLCs, industrial networks, and data capture devices.</li>
              <li>Implementation of solutions for monitoring and automation of production processes.</li>
              <li>Infrastructure administration: servers, switches, IIoT firewalls.</li>
            </ul>
          </div>

          <div class="job">
            <div class="job-header"><span>Ford Motor Company (South America)</span> <span>Oct/2022 – Mar/2023</span></div>
            <span class="job-role">Data Analyst II</span>
            <ul>
              <li>Extraction and processing of connected vehicle data.</li>
              <li>Development of data pipelines.</li>
              <li>Statistical analysis with Python and R.</li>
              <li>Strategic project leadership focused on generating insights for R&D.</li>
            </ul>
          </div>

          <div class="job">
            <div class="job-header"><span>Ford Motor Company (North America)</span> <span>Jul/2021 – Oct/2022</span></div>
            <span class="job-role">Software Developer I</span>
            <ul>
              <li>Design and evolution of data-driven corporate applications supporting different business areas.</li>
              <li>Structuring analytical solutions and strategic reports for Finance, Engineering, and Controlling.</li>
              <li>Modeling and implementation of relational databases, ensuring integrity, performance, and scalability.</li>
              <li>Business rules definition and systemic integrations, ensuring consistency between applications and data flows.</li>
              <li>Technical leadership in product development projects, directing decisions and deliveries.</li>
              <li>Industrial process automation implementation, integrating data from machines and production systems.</li>
            </ul>
          </div>

          <h2>Languages</h2>
          <p><strong>English:</strong> Advanced (Reading/Writing) | Intermediate Conversation (EFSET C2 - 74/100)</p>

          <h2>Skills & Technologies</h2>
          <div class="skills-container">
            <div><strong>Architecture & Engineering:</strong> Monoliths, Microservices, Distributed Systems, SOLID, Clean Architecture, RESTful APIs.</div>
            <div><strong>Development:</strong> JavaScript, TypeScript, Node.js, Python, R, Git (GitFlow).</div>
            <div><strong>Data:</strong> SQL Server, Oracle (PL/SQL), NoSQL, Big Data (GCP).</div>
            <div><strong>BI & Automation:</strong> Power BI, Qlik, Tableau, Looker, RPA, Alteryx, AppSheet.</div>
          </div>
        </body>
      </html>
    `);
    win.document.close();
  };

  const content = {
    pt: {
      about: "Sobre", career: "Trajetória", cv: "Currículo", hi: "OLÁ, EU SOU",
      role: "Software Engineer & Data Specialist",
      desc: "Engenheira de Software focada em sistemas escaláveis. Atualmente, transformo dados em inteligência no ",
      aboutTitle: "01. SOBRE MIM",
      aboutText: (
        <>
          Unindo a robustez da <b>Engenharia de Software</b> com a inteligência da <b>Ciência de Dados</b>. 
          Especialista em <b>AI-Augmented Development</b>, Java, Kotlin e ecossistemas Spring.
        </>
      ),
      engLabel: "ENGINEERING", dataLabel: "DATA & ANALYTICS", careerTitle: "02. TRAJETÓRIA",
      history: [
        {
          tag: "Atualmente",
          title: "Analista Sênior de Dados e Planejamento @ Grupo Boticário",
          text: (
            <div className="space-y-4">
              <p>Atualmente, sou Analista Sênior de Dados e Planejamento no Grupo Boticário, além de atuar como Key User. Sou responsável por propor e desenvolver melhorias sistêmicas, automações com RPA e soluções integradas ao SAP, incluindo interface com sistemas internacionais (Áustria e Alemanha).</p>
              <p>Também lidero iniciativas de padronização e otimização de processos no centro de distribuição mais tecnológico da companhia. Desenvolvi o principal SaaS responsável pelo balanceamento de demanda entre CDs — solução que, por mais de 10 anos, foi alvo de tentativas sem sucesso envolvendo empresas e pesquisadores. Após minha entrada, a ferramenta foi concebida e implementada em cerca de 1 ano, com rollout iniciado em São Gonçalo dos Campos e expansão para operações B2C em estados como São Paulo, Minas Gerais e Paraná.</p>
              <p>Atualmente, lidero essa frente como Product Owner, utilizando metodologias ágeis como Scrum e XP, garantindo evolução contínua, eficiência operacional e geração de valor para o negócio.</p>
            </div>
          )
        },
        {
          tag: "Industrial IT", title: "Industrial IT @ Pirelli",
          text: "Referência em IoT e arquitetura de microserviços. Atuei na integração de lógica de PLC com ambientes de dados em cloud, resolvendo problemas complexos em máquinas industriais de alta performance."
        },
        {
          tag: "Automotivo & Global", title: "Analista de Software II @ Ford Motor Company",
          text: "Atuei como desenvolvedora de software I na Ford Motor Company, colaborando com o time da América do Norte. Fui promovida a Analista II na operação da América do Sul, com forte atuação em dados conectados de veículos. Nesse período, liderei um projeto estratégico voltado à transformação de dados em insights para o time de Pesquisa e Desenvolvimento (P&D)."
        }
      ]
    },
    en: {
      about: "About", career: "Experience", cv: "Resume", hi: "HELLO, I AM",
      role: "Software Engineer & Data Specialist",
      desc: "Software Engineer focused on scalable systems. Currently transforming data into intelligence at ",
      aboutTitle: "01. ABOUT ME",
      aboutText: (
        <>
          Merging the robustness of <b>Software Engineering</b> with the intelligence of <b>Data Science</b>. 
          Specialist in <b>AI-Augmented Development</b>, Java, Kotlin, and Spring ecosystems.
        </>
      ),
      engLabel: "ENGINEERING", dataLabel: "DATA & ANALYTICS", careerTitle: "02. CAREER PATH",
      history: [
        {
          tag: "Current", title: "Senior Data & Planning Analyst @ Grupo Boticário",
          text: (
            <div className="space-y-4">
              <p>Currently, I am a Senior Data and Planning Analyst at Grupo Boticário, also acting as a Key User. I am responsible for proposing and developing systemic improvements, RPA automations, and SAP-integrated solutions, including interfacing with international systems (Austria and Germany).</p>
              <p>I also lead process standardization and optimization initiatives in the company's most technological distribution center. I developed the main SaaS responsible for demand balancing between DCs — a solution that, for over 10 years, was the target of unsuccessful attempts involving companies and researchers. After my arrival, the tool was conceived and implemented in about 1 year, with rollout initiated in São Gonçalo dos Campos and expansion for operations B2C in states such as São Paulo, Minas Gerais and Paraná.</p>
              <p>Currently, I lead this front as Product Owner, using agile methodologies such as Scrum and XP, ensuring continuous evolution, operational efficiency, and business value generation.</p>
            </div>
          )
        },
        {
          tag: "Industrial IT", title: "Industrial IT @ Pirelli",
          text: "Reference in IoT and microservices architecture. Worked on integrating PLC logic with cloud data environments, solving complex problems in high-performance industrial machinery."
        },
        {
          tag: "Automotive & Global", title: "Software Analyst II @ Ford Motor Company",
          text: "I worked as a Software Developer I at Ford Motor Company, collaborating with the North American team. I was promoted to Analyst II in the South American operation, with a strong focus on connected vehicle data. During this period, I led a strategic project aimed at transforming data into insights for the R&D team."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-600 font-sans">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 px-6 md:px-16 py-6 flex justify-between items-center border-b border-white/5">
        <div className="text-2xl font-bold tracking-tighter italic">MB<span className="text-red-600">.</span></div>
        <div className="flex items-center space-x-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          <a href="#sobre" className="hover:text-red-600 hidden md:block">{t.about}</a>
          <a href="#trajetoria" className="hover:text-red-600 hidden md:block">{t.career}</a>
          <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="bg-red-600 px-3 py-1 text-white font-black hover:bg-white hover:text-red-600 transition-all">
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          
          {lang === 'pt' ? (
            <a href="/CV - MBRAGA.pdf" target="_blank" rel="noreferrer" className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">
              {t.cv}
            </a>
          ) : (
            <button onClick={openEnglishResume} className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all uppercase">
              {t.cv}
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        <section className="min-h-[70vh] flex flex-col justify-center pt-20">
          <p className="text-red-600 font-bold tracking-[0.4em] mb-6 text-sm italic">{t.hi}</p>
          <h1 className="text-7xl md:text-[10rem] font-bold mb-4 tracking-tighter uppercase leading-[0.8]">Mylle <br/> Braga<span className="text-red-600">.</span></h1>
          <div className="max-w-xl mt-10">
            <h2 className="text-xl md:text-2xl font-light mb-6 text-gray-400 italic">{t.role}</h2>
            <p className="text-lg text-gray-400">
              {t.desc} <span className="text-red-600 font-black underline italic">@GrupoBoticário</span>.
            </p>
          </div>
        </section>

        <section id="sobre" className="py-32 border-t border-white/5">
          <h2 className="text-5xl font-bold mb-20 tracking-tighter uppercase italic">{t.aboutTitle}</h2>
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="md:col-span-2 space-y-12">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">{t.aboutText}</p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h3 className="text-red-600 font-black mb-6 text-xs tracking-[0.2em] underline">ENGINEERING</h3>
                  <p className="text-gray-500 text-sm font-mono leading-tight">+ JAVA / KOTLIN / SPRING<br/>+ NODE.JS / REACT<br/>+ DOCKER / APIS / RPA</p>
                </div>
                <div>
                  <h3 className="text-red-600 font-black mb-6 text-xs tracking-[0.2em] underline">DATA & ANALYTICS</h3>
                  <p className="text-gray-500 text-sm font-mono leading-tight">+ SQL SERVER / PYTHON<br/>+ BIG DATA (GCP) / SAP<br/>+ BI TOOLS / LOOKER</p>
                </div>
              </div>
            </div>
            <div className="relative group">
               {/* Efeito de luz vermelha */}
               <div className="absolute -inset-2 bg-red-600 opacity-10 group-hover:opacity-30 transition duration-500 blur-xl"></div>
               <img src="mbraga.jpeg" className="relative aspect-[4/5] object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="Mylle Braga" />
            </div>
          </div>
        </section>

        <section id="trajetoria" className="py-32 border-t border-white/5">
          <h2 className="text-5xl font-bold mb-20 tracking-tighter uppercase italic">{t.careerTitle}</h2>
          <div className="space-y-24">
            {t.history.map((item, i) => (
              <div key={i} className="group relative pl-8 border-l-2 border-white/10 hover:border-red-600 transition-all">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-red-600 transition-all"></div>
                <p className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 italic">{item.tag}</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight group-hover:text-red-600 transition-colors uppercase italic">{item.title}</h3>
                <div className="text-xl text-gray-400 font-light leading-relaxed max-w-4xl">{item.text}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="text-[10px] tracking-[0.8em] uppercase italic font-mono">Mylle Braga // Software Engineer & Data Specialist // 2026</p>
      </footer>
    </div>
  );
}