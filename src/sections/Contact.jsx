import { motion } from "framer-motion";
import { Linkedin, Mail, Check, Github } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "felipecostasiqu@gmail.com";
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);

    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="contato"
      className="min-h-[80vh] flex flex-col justify-between pt-20 pb-10 px-6 md:px-12 relative"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-pixel text-gb-text mb-6">
            {t.contact.title} <span className="text-gb-accent">{t.contact.subtitle}</span>
          </h2>
          <p className="text-gb-dim text-lg max-w-xl mx-auto font-sans leading-relaxed">
            {t.contact.text}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 w-full max-w-2xl">
          <motion.a
            href="https://www.linkedin.com/in/felipecostasiq/"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center gap-3 px-8 py-4 
              bg-blue-600 border-2 border-gb-dim rounded-lg shadow-[4px_4px_0px_#0f380f]
              text-white font-pixel text-xl tracking-wide
              hover:bg-blue-700 transition-all
            "
          >
            <Linkedin size={24} />
            {t.contact.buttons.linkedin}
          </motion.a>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 text-left justify-center"
          >
            <motion.div
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex-1 bg-gb-bg border-2 p-6 rounded-lg flex items-center gap-4 
                cursor-pointer transition-all duration-300 group select-none
                ${isCopied ? "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]" : "border-gb-dim/30 hover:border-gb-accent"}
              `}
            >
              <div
                className={`
                p-3 rounded-full transition-colors duration-300
                ${isCopied ? "bg-green-500/20 text-green-500" : "bg-gb-surface text-gb-dim group-hover:text-gb-accent"}
              `}
              >
                {isCopied ? <Check size={24} /> : <Mail size={24} />}
              </div>

              <div className="flex-1">
                <span
                  className={`
                  block text-xs font-pixel uppercase transition-colors
                  ${isCopied ? "text-green-500" : "text-gb-dim/50"}
                `}
                >
                  {isCopied ? t.contact.buttons.copied : t.contact.buttons.copy}
                </span>

                <span className="text-gb-text font-sans text-lg">{email}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <footer className="w-full text-center border-t-2 border-gb-dim/10 pt-8 mt-12 flex flex-col gap-2">
        <p className="text-gb-dim font-pixel text-xs md:text-sm">
          {new Date().getFullYear()} FELIPE COSTA.
        </p>
        <p className="text-gb-dim/40 text-[10px] font-sans">
          Modelo 3D: "Gameboy" por{" "}
          <a
            href="https://sketchfab.com/3d-models/gameboy-4a1da0cefa904c4eae895338bd6f3334"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gb-accent underline decoration-dotted"
          >
            grimmorf
          </a>{" "}
          via Sketchfab (CC Attribution)
        </p>

        <div className="flex justify-center items-center ">
          <a
            href="https://github.com/FelipeCostaq"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm font-bold font-pixel text-gb-dim hover:text-gb-text transition-colors z-10"
          >
            <Github size={18} /> Github
          </a>
        </div>
      </footer>
    </section>
  );
}
