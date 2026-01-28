import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  }, [project.images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gb-bg border-4 border-gb-dim rounded-xl p-2 w-full max-w-4xl relative shadow-[0_0_50px_rgba(15,56,15,0.5)]"
      >
        <div className="flex justify-between items-center mb-2 px-2">
          <h3 className="text-xl font-pixel text-gb-text">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gb-dim hover:text-red-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative aspect-video bg-black rounded-lg overflow-hidden group border-2 border-gb-dim/30">
          <motion.img
            key={currentIndex}
            src={project.images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full object-contain"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-gb-accent transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-gb-accent transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 rounded-full text-xs font-pixel text-white">
            {currentIndex + 1} / {project.images.length}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body 
  );
};

export default function Projects({ setModalOpen }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.cards[0].title,
      description: t.projects.cards[0].legend,
      techs: ["React.js", "C#", "ASP.NET", "SQL Server", "Git"],
      github: "https://github.com/FelipeCostaq/car-parking-app",
      deploy: null,
      clickable: true,
      images: [
        "/images/project/car-parking/car-parking-image-1.png",
        "/images/project/car-parking/car-parking-image-2.png",
        "/images/project/car-parking/car-parking-image-3.png",
      ],
    },
    {
      title: t.projects.cards[1].title,
      description: t.projects.cards[1].legend,
      techs: ["C#", "ASP.NET", "Entity Framework", "JWT", "Swagger"],
      github: "https://github.com/FelipeCostaq/financial-goals-api",
      deploy: null,
      clickable: true,
      images: [
        "/images/project/financial-goal/financial-goal-image-1.png",
      ],
    },
    {
      title: t.projects.cards[2].title,
      description: t.projects.cards[2].legend,
      techs: ["React", "Tailwind", "R3F", "Git"],
      github: "https://github.com/FelipeCostaq/portfolio-website",
      deploy: null,
      clickable: false,
      images: [],
    },
  ];

  useEffect(() => {
    if (setModalOpen) {
      setModalOpen(!!selectedProject);
    }
  }, [selectedProject, setModalOpen]);

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
          <span className="text-gb-accent">{t.projects.title}</span>{" "}
          {t.projects.subtitle}
        </h2>
        <p className="text-gb-dim font-pixel text-sm md:text-base animate-pulse">
          {t.projects.instruction}
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
            onClick={() => project.clickable && setSelectedProject(project)}
            className={`
              group relative bg-gb-bg border-4 border-gb-dim rounded-xl overflow-hidden flex flex-col 
              shadow-[8px_8px_0px_#0f380f] transition-all duration-300
              ${project.clickable ? "cursor-pointer hover:border-gb-accent hover:shadow-[12px_12px_0px_#0f380f]" : "cursor-default"}
            `}
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
                {project.clickable ? (
                  <ImageIcon
                    className="text-gb-dim group-hover:text-gb-accent transition-colors animate-pulse"
                    size={24}
                  />
                ) : (
                  <Folder
                    className="text-gb-dim group-hover:text-gb-accent transition-colors"
                    size={24}
                  />
                )}
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
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm font-bold font-pixel text-gb-dim hover:text-gb-text transition-colors z-10"
                >
                  <Github size={18} /> Github
                </a>

                {project.clickable && (
                  <span className="ml-auto text-[10px] font-pixel text-gb-accent self-center animate-pulse hidden md:block">
                    {t.projects.buttons.clickOpen}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}