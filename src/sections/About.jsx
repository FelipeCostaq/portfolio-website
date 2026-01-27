import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "FRONTEND",
      color: "text-gb-accent-hover",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "BACKEND",
      color: "text-gb-dim",
      skills: ["C#", "ASP.NET", "Entity Framework", "API REST"],
    },
    {
      title: t.about.database,
      color: "text-yellow-400",
      skills: ["SQL Server", "MySQL"],
    },
    {
      title: t.about.tools,
      color: "text-blue-400",
      skills: ["Git", "GitHub"],
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  const age = new Date().getFullYear() - 2008;

  return (
    <section
      id="sobre"
      className="flex items-center justify-center px-6 md:px-12 py-30 -mt-12"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2">
          <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3
                  className={`font-pixel text-xl mb-3 ${category.color} flex items-center gap-2`}
                >
                  <span className="opacity-50">::</span> {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVars}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-gb-surface/50 border border-gb-dim/30 rounded-md text-gb-text text-sm font-medium font-pixel tracking-wide hover:bg-gb-dim hover:text-gb-bg hover:border-transparent transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 md:pl-10 border-l-0 md:border-l-2 border-gb-dim/20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold font-pixel text-gb-accent-hover mt-2">
                {t.about.title}
              </h2>
            </div>

            <div className="space-y-4 text-gb-text text-lg leading-relaxed font-sans">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
