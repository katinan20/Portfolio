import { Code, Mail, Phone, MapPin, ExternalLink, Menu, X, ChevronDown, Briefcase, GraduationCap, Award } from 'lucide-react';
import {useEffect, useState} from "react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Application de Génération de Bulletins de Paie",
      link: "https://github.com/katinan20/front-atlantis-paie",
      description: "Automatisation complète du processus de paie avec interface intuitive",
      tech: ["Spring Boot", "React", "PostgreSQL"],
      category: "Full Stack",
      year: "2024-2025"
    },
    {
      title: "Application de Gestion Médicale",
      /*link: "",*/
      description: "Interface moderne pour la gestion des dossiers patients",
      tech: ["React", "Tailwind CSS"],
      category: "Full Stack",
      year: "2024-2025"
    },
    {
      title: "Système de Notifications en Temps Réel",
      link: "https://github.com/katinan20/front-notification",
      description: "Architecture scalable et performante pour notifications",
      tech: ["Java", "Spring Boot", "React"],
      category: "Full Stack",
      year: "2024-2025"
    },
    {
      title: "ATLANTIS-LCBFT",
     /* link: "",*/
      description: "Application de conformité réglementaire contre le blanchiment",
      tech: ["Java", "Angular", "PostgreSQL"],
      category: "Full Stack",
      year: "2024-2025"
    },
    {
      title: "API Flot - Location de Véhicules Électriques",
      link: "https://github.com/Flot-Africa/api-core/tree/katinan-test-develop",
      description: "API complète avec intégration de services tiers",
      tech: ["Spring Boot", "MySQL", "Danaya", "Minio", "Fineract"],
      category: "Backend",
      year: "2023-2024"
    },
    {
      title: "Application de Gestion de Bibliothèque",
     /* link: "",*/
      description: "Système complet de gestion des livres et emprunts",
      tech: ["Java", "JavaFX", "MySQL"],
      category: "Desktop",
      year: "2023-2024"
    },

    {
      title: "Groupe Prosuma",
      link: "https://groupeprosuma.com",
      description: "Acteur majeur de la grande distribution en Côte d’Ivoire, gérant supermarchés, hypermarchés et centres commerciaux.",
      tech: ["Gestion de point de vente", "Logistique", "Supply Chain"],
      category: "Backend/Maintenace",
      year: "2024-2025"
    }



  ];

  const skills = {
    "Backend": ["Java", "Spring Boot", "Quarkus"],
    "Frontend": ["React", "Angular", "Next.js", "JavaFX"],
    "Styling": ["Tailwind CSS", "CSS"],
    "Database": ["MySQL", "PostgreSQL"],
    "DevOps": ["Docker", "Git"],
    "Conception": ["UML", "Merise"]
  };

  const experiences = [
    {
      company: "INEXA",
      role: "Développeur Full Stack Java, Angular et React",
      period: "2024 - Actuellement",
      description: "Développement d'applications métiers complexes et systèmes de conformité"
    },
    {
      company: "Startup Flot",
      role: "Concepteur et Développeur API",
      period: "2023 - 2024",
      description: "Conception et développement d'API pour plateforme de location de véhicules électriques"
    },
    {
      company: "Université Félix Houphouët-Boigny",
      role: "Développeur & Chef d'équipe",
      period: "2019 - 2022",
      description: "Leadership d'équipe et développement d'applications web"
    }
  ];

  const scrollToSection = (sectionId:any) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Code className="w-8 h-8 text-purple-400" />
                <span className="text-xl font-bold">Katinan Touré</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
                    >
                      {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'skills' ? 'Compétences' : section === 'projects' ? 'Projets' : section === 'experience' ? 'Expérience' : 'Contact'}
                    </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                      <button
                          key={section}
                          onClick={() => scrollToSection(section)}
                          className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded"
                      >
                        {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'skills' ? 'Compétences' : section === 'projects' ? 'Projets' : section === 'experience' ? 'Expérience' : 'Contact'}
                      </button>
                  ))}
                </div>
              </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Katinan Touré
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Développeur Full Stack | Management des Projets Informatiques
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Plus de 2 ans d'expérience dans la conception et le développement d'applications web innovantes.
                Spécialisé en Java, React et Angular.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all transform hover:scale-105">
                Voir mes projets
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 rounded-full font-semibold transition-all">
                Me contacter
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="mailto:katine.toure95@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+22507584643261" className="hover:text-purple-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">À propos de moi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Profil</h3>
                <p className="text-gray-300 leading-relaxed">
                  Développeur Full Stack passionné avec une solide formation en MIAGE.
                  Je combine expertise technique et compétences en gestion de projets pour créer
                  des solutions innovantes répondant aux besoins métiers complexes.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Points forts</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" />
                    <span>Polyvalence technique : Maîtrise complète Java/Angular/React</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" />
                    <span>Leadership d'équipe et gestion de projets</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" />
                    <span>Développement de solutions innovantes et sur mesure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Compétences Techniques</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Projets Réalisés</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                    <div className="flex justify-between items-start mb-4">
                      <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-purple-400 hover:underline flex items-center gap-1"
                      >
                      <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                      </a>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-purple-600/20 rounded text-xs">
                      {tech}
                    </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span className="bg-pink-600/20 px-2 py-1 rounded">{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Expérience Professionnelle</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-purple-400">{exp.role}</h3>
                        <p className="text-xl text-gray-300 mt-1">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 mt-2 md:mt-0 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                        {exp.period}
                  </span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Formation</h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <div className="flex items-start">
                    <GraduationCap className="w-6 h-6 mr-3 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400">Master 2 MIAGE-GI</h3>
                      <p className="text-gray-300">Université Félix Houphouët-Boigny d'Abidjan Cocody</p>
                      <p className="text-gray-400 text-sm">2022 - 2024</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                  <div className="flex items-start">
                    <GraduationCap className="w-6 h-6 mr-3 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400">Licence MIAGE-GI</h3>
                      <p className="text-gray-300">Université Félix Houphouët-Boigny d'Abidjan Cocody</p>
                      <p className="text-gray-400 text-sm">2019 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Me Contacter</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <p className="text-xl text-gray-300 mb-8">
                Je suis disponible pour de nouvelles opportunités et collaborations
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="mailto:katine.toure95@gmail.com" className="flex flex-col items-center p-6 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-all">
                  <Mail className="w-8 h-8 mb-3 text-purple-400" />
                  <span className="text-sm text-gray-300">katine.toure95@gmail.com</span>
                </a>
                <a href="tel:+22507584643261" className="flex flex-col items-center p-6 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-all">
                  <Phone className="w-8 h-8 mb-3 text-purple-400" />
                  <span className="text-sm text-gray-300">+225 07 58 46 43 61</span>
                </a>
                <div className="flex flex-col items-center p-6 bg-purple-600/20 rounded-lg">
                  <MapPin className="w-8 h-8 mb-3 text-purple-400" />
                  <span className="text-sm text-gray-300">Abidjan, Côte d'Ivoire</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-purple-500/20 text-center text-gray-400">
          <p>&copy; 2025 Katinan Touré. Tous droits réservés.</p>
        </footer>
      </div>
  );
};

export default Portfolio;