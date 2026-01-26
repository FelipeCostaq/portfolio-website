import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sistema Estacionamento",
    description:
      "Um painel administrativo que permite gerenciar de forma simples e eficiente os veículos cadastrados, as vagas disponíveis e a atribuição de vagas para cada veículo.",
    techs: [
      "React.js",
      "Bootstrap",
      "C#",
      "ASP.NET",
      "EntityFramework",
      "Swagger",
      "SQL Server",
      "Git",
    ],
    github: "https://github.com/FelipeCostaq/car-parking-app",
    deploy: null,
  },
  {
    title: "Metas Financeiras",
    description:
      "API para cadastro de usuários e gerenciamento de metas financeiras, podendo gerenciar metas a serem batidas e metas atingidas",
    techs: [
      "C#",
      "ASP.NET",
      "EntityFramework",
      "JWT",
      "Swagger",
      "SQL Server",
      "Git",
    ],
    github: "https://github.com/FelipeCostaq/financial-goals-api",
    deploy: null,
  },
  {
    title: "Portfólio",
    description: "Este portfólio que você está vendo!",
    techs: ["React.js", "Tailwind CSS", "Three Fiber", "Git"],
    github: "https://github.com/FelipeCostaq/portfolio-website",
    deploy: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="min-h-screen py-20 px-6 md:px-12 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-pixel text-gb-text mb-4">
          <span className="text-gb-accent">MEUS</span> PROJETOS
        </h2>
        <p className="text-gb-dim font-pixel text-sm md:text-base animate-pulse">
          &lt; CLIQUE PARA VER MAIS+ /&gt;
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-gb-bg border-4 border-gb-dim rounded-xl overflow-hidden flex flex-col shadow-[8px_8px_0px_#0f380f] hover:shadow-[12px_12px_0px_#0f380f] hover:border-gb-accent transition-all duration-300"
          >
            <div className="h-6 bg-gb-dim/20 border-b-4 border-gb-dim flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-gb-dim/50"></div>
              <div className="w-2 h-2 rounded-full bg-gb-dim/50"></div>
              <div className="ml-auto text-[10px] font-pixel text-gb-dim">
                CRT-0{index + 1}
              </div>
            </div>

            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-pixel text-gb-text group-hover:text-gb-accent transition-colors">
                  {project.title}
                </h3>
                <Folder
                  className="text-gb-dim group-hover:text-gb-accent transition-colors"
                  size={24}
                />
              </div>

              <p className="text-gb-text/80 font-sans text-sm leading-relaxed mb-6 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-pixel px-2 py-1 bg-gb-surface/50 text-gb-dim rounded border border-gb-dim/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t-2 border-gb-dim/10 border-dashed">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold font-pixel text-gb-dim hover:text-gb-text transition-colors"
                >
                  <Github size={18} /> Github
                </a>

                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold font-pixel text-gb-accent hover:text-gb-accent-hover transition-colors ml-auto"
                  >
                    VER DEMO <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
