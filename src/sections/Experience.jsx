import { motion } from "framer-motion";

const experiences = [
  {
    role: "Desenvolvedor Full-Stack",
    company: "Startup VidaPet.Tech",
    period: "Setembro 2025 - Presente",
    description: [
      "Desenvolvimento e manutenção de interfaces modernas e responsivas utilizando React.js e React Native, com foco total na experiência do usuário (UX).",
      "Construção de APIs em PHP, garantindo a comunicação eficiente com bancos de dados MySQL para consulta e gestão de informações vitais do ecossistema.",
      "Colaboração em equipe para resolução de bugs e melhorias.",
    ],
    techs: ["React", "React Native", "Typescript", "Expo", "PHP", "MySQL", "Git"],
  },
];

export default function Experience() {
  return (
    <section
      id="trabalhos"
      className="min-h-[50vh] flex items-center justify-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-pixel text-gb-text">
            <span className="text-gb-dim mr-3">::</span>
            CARREIRA
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-gb-dim/30 ml-4 md:ml-8 space-y-12">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 md:pl-12" 
            >
              <span className="absolute -left-2.75 top-0 h-5 w-5 bg-gb-accent rotate-45 border-2 border-gb-bg shadow-[0_0_10px_rgba(139,29,70,0.5)] z-10"></span>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h3 className="text-2xl font-bold text-gb-text font-pixel tracking-wide">
                  {exp.role}
                </h3>
                <span className="px-2 py-0.5 rounded text-xs font-pixel bg-gb-accent-hover/40 text-gb-dim border border-gb-dim/50 w-fit">
                  @ {exp.company}
                </span>
              </div>

              <div className="text-sm font-pixel text-gb-dim mb-4 flex items-center gap-2">
                <span>🕒</span> {exp.period}
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-gb-text/80 font-sans text-base leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-gb-accent mt-1.5 text-xs">►</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-pixel px-2 py-1 bg-gb-surface rounded text-gb-dim border border-gb-dim/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative pl-8 md:pl-12 pt-2"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}