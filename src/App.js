import React from 'react';

// Componente de Cartão de Projeto para reutilização
const ProjectCard = ({ title, desc, tech, link }) => (
  <div class="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 transition-all border border-transparent hover:border-[#64ffda]">
    <h3 class="text-[#ccd6f6] text-xl font-bold mb-2">{title}</h3>
    <p class="text-sm mb-4">{desc}</p>
    <div class="flex flex-wrap gap-2">
      {tech.map(t => <span class="text-[#64ffda] text-xs font-mono">#{t}</span>)}
    </div>
  </div>
);

function App() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="min-h-[70vh] flex flex-col justify-center">
        <p className="text-[#64ffda] font-mono mb-4">Olá, meu nome é</p>
        <h1 className="text-6xl md:text-8xl font-black text-[#ccd6f6] mb-4">Mylle Braga.</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">Software Engineer & Data Specialist.</h2>
        <p className="max-w-xl text-lg mb-8">
          Desenvolvedora Full Stack com foco em construir aplicações escaláveis e 
          soluções inteligentes orientadas a dados. Atualmente transformando processos no @Boticário.
        </p>
        <a href="#projetos" className="border-2 border-[#64ffda] text-[#64ffda] px-8 py-4 rounded w-fit hover:bg-[#64ffda1a] transition-all">
          Veja meus projetos
        </a>
      </header>

      {/* Sobre (Focado em Carreira) */}
      <section id="sobre" className="py-20">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2 text-xl">01.</span> Sobre mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p>
            Minha jornada começou na análise de dados, o que me deu uma base sólida para entender 
            a importância da integridade e performance do software. Hoje, como <b>Engenheira de Software</b>, 
            foco em criar sistemas onde o código e o dado trabalham em harmonia. <br/><br/>
            No Grupo Boticário, atuo na automação de processos e desenvolvimento de ferramentas internas 
            utilizando JavaScript, Node.js e SQL Server.
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-[#64ffda]">
            <li>▹ JavaScript (ES6+)</li>
            <li>▹ React.js</li>
            <li>▹ Node.js</li>
            <li>▹ SQL Server</li>
            <li>▹ Python (Data)</li>
            <li>▹ Alteryx</li>
          </ul>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8 flex items-center">
          <span className="text-[#64ffda] font-mono mr-2 text-xl">02.</span> Projetos em Destaque
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Data Intelligence Dashboard" 
            desc="Interface de monitoramento de dados em tempo real integrada com APIs de análise."
            tech={['React', 'Tailwind', 'Node.js']}
          />
          <ProjectCard 
            title="E-commerce Engine" 
            desc="Desenvolvimento de lógica de checkout e integração de banco de dados relacional."
            tech={['JavaScript', 'SQL Server', 'REST API']}
          />
        </div>
      </section>
    </div>
  );
}

export default App;