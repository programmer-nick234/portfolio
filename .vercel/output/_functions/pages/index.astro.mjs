/* empty css                                */
import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, f as createAstro, l as renderScript, k as renderComponent } from '../chunks/astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_VnVRUUcK.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_COnq7bgZ.mjs';
import { $ as $$About } from '../chunks/About_w-7qhV9i.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Timeline } from '../chunks/Timeline_DsXu5iuy.mjs';
export { renderers } from '../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    {
      category: "Programming Languages",
      description: "Core languages I use for building applications and solving problems",
      items: [
        { name: "Python", icon: "fab fa-python", color: "text-yellow-400", description: "Data science, ML, web development" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-300", description: "Frontend & backend development" },
        { name: "Dart", icon: "fas fa-code", color: "text-blue-400", description: "Cross-platform mobile development" },
        { name: "C", icon: "fas fa-microchip", color: "text-blue-500", description: "System programming & algorithms" },
        { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", description: "Semantic web markup" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-400", description: "Modern styling & animations" }
      ]
    },
    {
      category: "Web Technologies",
      description: "Frameworks and tools for building modern web applications",
      items: [
        { name: "React.js", icon: "fab fa-react", color: "text-blue-400", description: "Component-based UI development" },
        { name: "Next.js", icon: "fas fa-code", color: "text-white", description: "Full-stack React framework" },
        { name: "Tailwind CSS", icon: "fas fa-palette", color: "text-cyan-400", description: "Utility-first CSS framework" },
        { name: "Django", icon: "fab fa-python", color: "text-green-600", description: "Python web framework" },
        { name: "Express.js", icon: "fab fa-node-js", color: "text-green-500", description: "Node.js web framework" },
        { name: "RESTful APIs", icon: "fas fa-server", color: "text-purple-400", description: "API design & development" },
        { name: "JWT Auth", icon: "fas fa-shield-alt", color: "text-red-400", description: "Secure authentication" }
      ]
    },
    {
      category: "Machine Learning",
      description: "AI/ML tools and techniques for data analysis and prediction",
      items: [
        { name: "Supervised Learning", icon: "fas fa-brain", color: "text-purple-400", description: "Classification & regression" },
        { name: "Unsupervised Learning", icon: "fas fa-network-wired", color: "text-blue-400", description: "Clustering & dimensionality" },
        { name: "Scikit-learn", icon: "fas fa-chart-line", color: "text-orange-500", description: "ML algorithms library" },
        { name: "Pandas", icon: "fas fa-table", color: "text-blue-500", description: "Data manipulation & analysis" },
        { name: "NumPy", icon: "fas fa-calculator", color: "text-green-500", description: "Numerical computing" },
        { name: "Matplotlib", icon: "fas fa-chart-bar", color: "text-blue-400", description: "Data visualization" },
        { name: "Seaborn", icon: "fas fa-chart-pie", color: "text-red-400", description: "Statistical visualization" }
      ]
    },
    {
      category: "Databases",
      description: "Data storage solutions for different application needs",
      items: [
        { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-400", description: "NoSQL document database" },
        { name: "Firebase", icon: "fas fa-fire", color: "text-orange-500", description: "Real-time database & auth" },
        { name: "MySQL", icon: "fas fa-database", color: "text-blue-500", description: "Relational database" },
        { name: "SQLite", icon: "fas fa-database", color: "text-blue-400", description: "Lightweight SQL database" }
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Development tools and platforms I use daily",
      items: [
        { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500", description: "Version control system" },
        { name: "GitHub", icon: "fab fa-github", color: "text-gray-400", description: "Code collaboration platform" },
        { name: "Postman", icon: "fas fa-paper-plane", color: "text-orange-400", description: "API testing & documentation" },
        { name: "Docker", icon: "fab fa-docker", color: "text-blue-500", description: "Containerization platform" },
        { name: "VS Code", icon: "fas fa-code", color: "text-blue-400", description: "Primary code editor" },
        { name: "Linux (Kali)", icon: "fab fa-linux", color: "text-yellow-400", description: "Security & development OS" },
        { name: "Jupyter", icon: "fas fa-book", color: "text-orange-400", description: "Interactive data analysis" }
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Cloud platforms and DevOps practices for scalable applications",
      items: [
        { name: "AWS", icon: "fab fa-aws", color: "text-yellow-500", description: "Cloud infrastructure & services" },
        { name: "Google Cloud", icon: "fab fa-google", color: "text-blue-500", description: "Cloud computing platform" },
        { name: "Docker", icon: "fab fa-docker", color: "text-blue-500", description: "Container orchestration" },
        { name: "Prometheus", icon: "fas fa-chart-line", color: "text-red-400", description: "Monitoring & alerting" },
        { name: "Grafana", icon: "fas fa-chart-area", color: "text-orange-400", description: "Data visualization & monitoring" }
      ]
    },
    {
      category: "Soft Skills",
      description: "Professional skills that complement technical expertise",
      items: [
        { name: "Problem Solving", icon: "fas fa-puzzle-piece", color: "text-green-400", description: "Analytical thinking & solutions" },
        { name: "Critical Thinking", icon: "fas fa-lightbulb", color: "text-yellow-400", description: "Logical analysis & evaluation" },
        { name: "Leadership", icon: "fas fa-users", color: "text-blue-400", description: "Team management & guidance" },
        { name: "Time Management", icon: "fas fa-clock", color: "text-purple-400", description: "Efficient project planning" },
        { name: "Agile Collaboration", icon: "fas fa-sync", color: "text-cyan-400", description: "Iterative development & teamwork" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20 bg-dark-bg" data-astro-cid-ab4ihpzs> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ab4ihpzs> <div class="text-center mb-16" data-astro-cid-ab4ihpzs> <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4" data-astro-cid-ab4ihpzs>
Skills & <span class="text-neon-cyan" data-astro-cid-ab4ihpzs>Technologies</span> </h2> <div class="w-24 h-1 bg-neon-cyan mx-auto mb-6" data-astro-cid-ab4ihpzs></div> <p class="text-text-secondary text-lg max-w-3xl mx-auto" data-astro-cid-ab4ihpzs>
A comprehensive toolkit for building modern applications, from frontend interfaces to machine learning models and cloud infrastructure
</p> </div> <div class="space-y-12" data-astro-cid-ab4ihpzs> ${skills.map((category) => renderTemplate`<div class="skill-category" data-astro-cid-ab4ihpzs> <div class="text-center mb-8" data-astro-cid-ab4ihpzs> <h3 class="text-2xl font-bold text-text-primary mb-2" data-astro-cid-ab4ihpzs> ${category.category} </h3> <p class="text-text-secondary text-sm max-w-xl mx-auto" data-astro-cid-ab4ihpzs> ${category.description} </p> <div class="w-12 h-0.5 bg-neon-cyan mx-auto mt-3" data-astro-cid-ab4ihpzs></div> </div> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" data-astro-cid-ab4ihpzs> ${category.items.map((skill) => renderTemplate`<div class="group" data-astro-cid-ab4ihpzs> <div class="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/10 text-center" data-astro-cid-ab4ihpzs> <!-- Icon --> <div${addAttribute(`text-2xl ${skill.color} mb-2`, "class")} data-astro-cid-ab4ihpzs> <i${addAttribute(skill.icon, "class")} data-astro-cid-ab4ihpzs></i> </div> <!-- Skill Name --> <h4 class="text-text-primary font-medium text-sm group-hover:text-neon-cyan transition-colors duration-300" data-astro-cid-ab4ihpzs> ${skill.name} </h4> <!-- Tooltip with description --> <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded px-2 py-1 -mt-8 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap z-10" data-astro-cid-ab4ihpzs> ${skill.description} </div> </div> </div>`)} </div> </div>`)} </div> <!-- Experience Level --> <div class="mt-16" data-astro-cid-ab4ihpzs> <div class="text-center mb-8" data-astro-cid-ab4ihpzs> <h3 class="text-2xl font-bold text-text-primary mb-2" data-astro-cid-ab4ihpzs>
Experience Level
</h3> <p class="text-text-secondary text-sm max-w-xl mx-auto" data-astro-cid-ab4ihpzs>
My proficiency levels across different technology domains
</p> <div class="w-12 h-0.5 bg-neon-cyan mx-auto mt-3" data-astro-cid-ab4ihpzs></div> </div> <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-astro-cid-ab4ihpzs> <div class="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-cyan transition-all duration-300" data-astro-cid-ab4ihpzs> <div class="text-neon-cyan text-2xl mb-3" data-astro-cid-ab4ihpzs> <i class="fas fa-star" data-astro-cid-ab4ihpzs></i> </div> <h4 class="text-text-primary font-bold mb-2 text-lg" data-astro-cid-ab4ihpzs>Expert Level</h4> <p class="text-text-secondary text-xs leading-relaxed mb-3" data-astro-cid-ab4ihpzs>
Technologies I've mastered through extensive project work
</p> <div class="space-y-1" data-astro-cid-ab4ihpzs> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>Python</span> <span class="text-neon-cyan text-xs" data-astro-cid-ab4ihpzs>95%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>JavaScript</span> <span class="text-neon-cyan text-xs" data-astro-cid-ab4ihpzs>90%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>React.js</span> <span class="text-neon-cyan text-xs" data-astro-cid-ab4ihpzs>88%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>Machine Learning</span> <span class="text-neon-cyan text-xs" data-astro-cid-ab4ihpzs>85%</span> </div> </div> </div> <div class="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-purple transition-all duration-300" data-astro-cid-ab4ihpzs> <div class="text-neon-purple text-2xl mb-3" data-astro-cid-ab4ihpzs> <i class="fas fa-star-half-alt" data-astro-cid-ab4ihpzs></i> </div> <h4 class="text-text-primary font-bold mb-2 text-lg" data-astro-cid-ab4ihpzs>Advanced Level</h4> <p class="text-text-secondary text-xs leading-relaxed mb-3" data-astro-cid-ab4ihpzs>
Technologies I'm proficient in and actively use
</p> <div class="space-y-1" data-astro-cid-ab4ihpzs> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>Next.js</span> <span class="text-neon-purple text-xs" data-astro-cid-ab4ihpzs>80%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>Django</span> <span class="text-neon-purple text-xs" data-astro-cid-ab4ihpzs>75%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>MongoDB</span> <span class="text-neon-purple text-xs" data-astro-cid-ab4ihpzs>78%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>AWS</span> <span class="text-neon-purple text-xs" data-astro-cid-ab4ihpzs>72%</span> </div> </div> </div> <div class="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-green transition-all duration-300" data-astro-cid-ab4ihpzs> <div class="text-neon-green text-2xl mb-3" data-astro-cid-ab4ihpzs> <i class="fas fa-star" data-astro-cid-ab4ihpzs></i> </div> <h4 class="text-text-primary font-bold mb-2 text-lg" data-astro-cid-ab4ihpzs>Intermediate Level</h4> <p class="text-text-secondary text-xs leading-relaxed mb-3" data-astro-cid-ab4ihpzs>
Technologies I'm learning and expanding knowledge in
</p> <div class="space-y-1" data-astro-cid-ab4ihpzs> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>Dart</span> <span class="text-neon-green text-xs" data-astro-cid-ab4ihpzs>65%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>C Programming</span> <span class="text-neon-green text-xs" data-astro-cid-ab4ihpzs>60%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>Google Cloud</span> <span class="text-neon-green text-xs" data-astro-cid-ab4ihpzs>55%</span> </div> <div class="flex justify-between items-center" data-astro-cid-ab4ihpzs> <span class="text-text-primary text-xs" data-astro-cid-ab4ihpzs>Prometheus</span> <span class="text-neon-green text-xs" data-astro-cid-ab4ihpzs>50%</span> </div> </div> </div> </div> </div> </div> </section> `;
}, "E:/portfolio-web/nick-devfolio/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "OpenWeather API", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark theme, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
      link: "#",
      github: "#"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with features like message encryption, file sharing, and video calling capabilities.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      tech: ["Socket.io", "Express", "React", "WebRTC"],
      link: "#",
      github: "#"
    },
    {
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking app with workout planning, progress analytics, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["React Native", "Node.js", "PostgreSQL", "GraphQL"],
      link: "#",
      github: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-20 bg-dark-card"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
Featured <span class="text-neon-cyan">Projects</span> </h2> <div class="w-24 h-1 bg-neon-cyan mx-auto mb-6"></div> <p class="text-text-secondary text-lg max-w-2xl mx-auto">
Here are some of my recent projects that showcase my skills and passion for development
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`<div class="group bg-dark-bg border border-dark-border rounded-lg overflow-hidden hover:border-neon-cyan transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-neon-cyan/20"> <!-- Project Image --> <div class="relative overflow-hidden h-48"> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"> <div class="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </div> <!-- Project Content --> <div class="p-6"> <h3 class="text-xl font-semibold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300"> ${project.title} </h3> <p class="text-text-secondary text-sm leading-relaxed mb-4"> ${project.description} </p> <!-- Tech Stack --> <div class="flex flex-wrap gap-2 mb-6"> ${project.tech.map((tech) => renderTemplate`<span class="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-xs text-text-muted hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"> ${tech} </span>`)} </div> <!-- Project Links --> <div class="flex gap-4"> <a${addAttribute(project.link, "href")} class="flex-1 bg-neon-cyan text-dark-bg px-4 py-2 rounded-lg text-center font-semibold hover:bg-neon-purple transition-all duration-300 transform hover:scale-105"> <i class="fas fa-external-link-alt mr-2"></i>
View Project
</a> <a${addAttribute(project.github, "href")} class="px-4 py-2 border border-dark-border text-text-secondary rounded-lg hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"> <i class="fab fa-github"></i> </a> </div> </div> </div>`)} </div> <!-- View All Projects Button --> <div class="text-center mt-12"> <a href="#" class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan rounded-lg font-semibold text-lg hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 transform hover:scale-105"> <span>View All Projects</span> <i class="fas fa-arrow-right ml-2"></i> </a> </div> </div> </section>`;
}, "E:/portfolio-web/nick-devfolio/src/components/Projects.astro", void 0);

const education = [
  {
    title: "Bachelor of Engineering - BE, Artificial Intelligence and Data Science",
    company: "Srinivas Institute of Technology, Mangalore",
    period: "Aug 2024 - Aug 2028",
    description: "Skills: Python (Programming Language), Team Building, Team Management, Research Skills, Team Leadership, Startup Development, AutoCAD",
    icon: "fas fa-graduation-cap",
    type: "education"
  },
  {
    title: "High School",
    company: "MGSK Gujarati Highschool",
    period: "2023 - 2024",
    description: "Completed higher secondary education with focus on science and mathematics.",
    icon: "fas fa-school",
    type: "education"
  }
];
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      icon: "fas fa-code",
      type: "work"
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built scalable web applications and APIs. Collaborated with cross-functional teams to deliver high-quality products on time.",
      icon: "fas fa-rocket",
      type: "work"
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications using modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect designs.",
      icon: "fas fa-palette",
      type: "work"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 bg-dark-bg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
Experience & <span class="text-neon-cyan">Education</span> </h2> <div class="w-24 h-1 bg-neon-cyan mx-auto mb-6"></div> <p class="text-text-secondary text-lg max-w-2xl mx-auto">
My professional journey and academic background
</p> </div> <div class="grid lg:grid-cols-2 gap-12"> <!-- Work Experience --> <div> <h3 class="text-2xl font-semibold text-text-primary mb-8 flex items-center"> <i class="fas fa-briefcase text-neon-cyan mr-3"></i>
Work Experience
</h3> <div class="space-y-8"> ${experience.map((item, index) => renderTemplate`<div class="relative"> <!-- Timeline line --> ${index < experience.length - 1 && renderTemplate`<div class="absolute left-6 top-12 w-0.5 h-16 bg-dark-border"></div>`} <div class="flex items-start space-x-4 group"> <!-- Icon --> <div class="flex-shrink-0 w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center group-hover:border-neon-cyan transition-all duration-300"> <i${addAttribute(`${item.icon} text-neon-cyan`, "class")}></i> </div> <!-- Content --> <div class="flex-1 bg-dark-card border border-dark-border rounded-lg p-6 group-hover:border-neon-cyan transition-all duration-300"> <div class="flex justify-between items-start mb-2"> <h4 class="text-lg font-semibold text-text-primary group-hover:text-neon-cyan transition-colors duration-300"> ${item.title} </h4> <span class="text-sm text-neon-cyan font-medium"> ${item.period} </span> </div> <p class="text-neon-purple font-medium mb-3"> ${item.company} </p> <p class="text-text-secondary text-sm leading-relaxed"> ${item.description} </p> </div> </div> </div>`)} </div> </div> <!-- Education --> <div> <h3 class="text-2xl font-semibold text-text-primary mb-8 flex items-center"> <i class="fas fa-graduation-cap text-neon-green mr-3"></i>
Education
</h3> <div class="space-y-8"> ${education.map((item, index) => renderTemplate`<div class="relative"> <!-- Timeline line --> ${index < education.length - 1 && renderTemplate`<div class="absolute left-6 top-12 w-0.5 h-16 bg-dark-border"></div>`} <div class="flex items-start space-x-4 group"> <!-- Icon --> <div class="flex-shrink-0 w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center group-hover:border-neon-green transition-all duration-300"> <i${addAttribute(`${item.icon} text-neon-green`, "class")}></i> </div> <!-- Content --> <div class="flex-1 bg-dark-card border border-dark-border rounded-lg p-6 group-hover:border-neon-green transition-all duration-300"> <div class="flex justify-between items-start mb-2"> <h4 class="text-lg font-semibold text-text-primary group-hover:text-neon-green transition-colors duration-300"> ${item.title} </h4> <span class="text-sm text-neon-green font-medium"> ${item.period} </span> </div> <p class="text-neon-purple font-medium mb-3"> ${item.company} </p> <p class="text-text-secondary text-sm leading-relaxed"> ${item.description} </p> </div> </div> </div>`)} </div> </div> </div> <!-- Certifications --> <div class="mt-16"> <h3 class="text-2xl font-semibold text-text-primary mb-8 text-center">
Certifications
</h3> <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"> <div class="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-neon-cyan transition-all duration-300"> <div class="text-neon-cyan text-3xl mb-4"> <i class="fab fa-aws"></i> </div> <h4 class="text-text-primary font-semibold mb-2">AWS Certified Developer</h4> <p class="text-text-muted text-sm">2023</p> </div> <div class="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-neon-purple transition-all duration-300"> <div class="text-neon-purple text-3xl mb-4"> <i class="fab fa-google"></i> </div> <h4 class="text-text-primary font-semibold mb-2">Google Cloud Professional</h4> <p class="text-text-muted text-sm">2022</p> </div> <div class="bg-dark-card border border-dark-border rounded-lg p-6 text-center hover:border-neon-green transition-all duration-300"> <div class="text-neon-green text-3xl mb-4"> <i class="fas fa-certificate"></i> </div> <h4 class="text-text-primary font-semibold mb-2">React Advanced Certification</h4> <p class="text-text-muted text-sm">2021</p> </div> </div> </div> </div> </section>`;
}, "E:/portfolio-web/nick-devfolio/src/components/Experience.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/programmer-nick234/", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/nikhil-bajantri-dev", color: "hover:text-blue-400" },
    { name: "X (Twitter)", icon: "fab fa-x-twitter", url: "https://x.com/nikkkkhil_2604", color: "hover:text-blue-500" },
    { name: "Email", icon: "fas fa-envelope", url: "mailto:nikhilbajantri86@gmail.com", color: "hover:text-red-400" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-dark-card"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
Get In <span class="text-neon-cyan">Touch</span> </h2> <div class="w-24 h-1 bg-neon-cyan mx-auto mb-6"></div> <p class="text-text-secondary text-lg max-w-2xl mx-auto">
Let's work together on your next project. I'm always open to discussing new opportunities.
</p> </div> <div class="grid lg:grid-cols-2 gap-12"> <!-- Contact Form --> <div class="bg-dark-bg border border-dark-border rounded-lg p-8"> <h3 class="text-2xl font-semibold text-text-primary mb-6">
Send me a message
</h3> <form class="space-y-6" id="contactForm" method="post"> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="email" class="block text-text-secondary text-sm font-medium mb-2">
Email
</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:border-neon-cyan focus:outline-none transition-colors duration-300" placeholder="developer@domain.com" required> </div> <div> <label for="name" class="block text-text-secondary text-sm font-medium mb-2">
Name
</label> <input type="text" id="name" name="name" class="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:border-neon-cyan focus:outline-none transition-colors duration-300" placeholder="Developer X" required> </div> </div> <div> <label for="message" class="block text-text-secondary text-sm font-medium mb-2">
Message
</label> <textarea id="message" name="message" rows="3" class="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none" placeholder="What's up?" required></textarea> </div> <button type="submit" id="submitBtn" class="w-full bg-neon-cyan text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-purple transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed"> <i class="fas fa-paper-plane mr-2" id="submitIcon"></i> <span id="submitText">Send Message</span> </button> </form> <!-- Message Container --> <div id="messageContainer" class="mt-4 hidden"> <div id="successMessage" class="hidden p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400"> <i class="fas fa-check-circle mr-2"></i> <span id="successText"></span> </div> <div id="errorMessage" class="hidden p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400"> <i class="fas fa-exclamation-circle mr-2"></i> <span id="errorText"></span> </div> </div> </div> <!-- Contact Info --> <div class="space-y-8"> <div> <h3 class="text-2xl font-semibold text-text-primary mb-6">
Let's connect
</h3> <p class="text-text-secondary text-lg leading-relaxed mb-8">
I'm currently available for freelance work and full-time opportunities. 
            If you have a project that needs some creative thinking, I'd love to hear about it.
</p> </div> <!-- Contact Details --> <div class="space-y-6"> <div class="flex items-center space-x-4 group"> <div class="w-12 h-12 bg-dark-bg border border-dark-border rounded-full flex items-center justify-center group-hover:border-neon-cyan transition-all duration-300"> <i class="fas fa-envelope text-neon-cyan"></i> </div> <div> <p class="text-text-secondary text-sm">Email</p> <p class="text-text-primary font-medium">nikhilbajantri86@gmail.com</p> </div> </div> <div class="flex items-center space-x-4 group"> <div class="w-12 h-12 bg-dark-bg border border-dark-border rounded-full flex items-center justify-center group-hover:border-neon-purple transition-all duration-300"> <i class="fas fa-map-marker-alt text-neon-purple"></i> </div> <div> <p class="text-text-secondary text-sm">Location</p> <p class="text-text-primary font-medium">San Francisco, CA</p> </div> </div> <div class="flex items-center space-x-4 group"> <div class="w-12 h-12 bg-dark-bg border border-dark-border rounded-full flex items-center justify-center group-hover:border-neon-green transition-all duration-300"> <i class="fas fa-clock text-neon-green"></i> </div> <div> <p class="text-text-secondary text-sm">Availability</p> <p class="text-text-primary font-medium">Open to opportunities</p> </div> </div> </div> <!-- Social Links --> <div> <h4 class="text-lg font-semibold text-text-primary mb-4">
Follow me
</h4> <div class="flex space-x-4"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} class="w-12 h-12 bg-dark-bg border border-dark-border rounded-full flex items-center justify-center text-text-secondary hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-neon-cyan/25"${addAttribute(social.name, "title")}> <i${addAttribute(`${social.icon} text-xl`, "class")}></i> </a>`)} </div> </div> </div> </div> </div> </section> ${renderScript($$result, "E:/portfolio-web/nick-devfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/portfolio-web/nick-devfolio/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const timelineData = [
    {
      title: "Community Involvement",
      items: [
        {
          logo: "/community/DK24.png",
          title: "DK24 Cluster",
          organization: "DK24",
          startDate: "2025-02-25",
          isPresent: true
        },
        {
          logo: "/community/SSOSC.LOGO-WHITE.png",
          title: "Srinivas Student Open Source Community",
          organization: "Srinivas Student Open Source Community (SSOSC)",
          startDate: "2023-01-01",
          isPresent: true
        }
      ]
    },
    {
      title: "Education",
      items: [
        {
          logo: "/college/college-logo.jpg",
          title: "Srinivas Institute of Technology",
          organization: "Srinivas Institute of Technology",
          startDate: "2024-08-24",
          isPresent: true
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nikhil Bajantri - Full Stack Developer" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Timeline", $$Timeline, { "sections": timelineData })} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/portfolio-web/nick-devfolio/src/pages/index.astro", void 0);

const $$file = "E:/portfolio-web/nick-devfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
