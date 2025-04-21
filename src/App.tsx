import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Brain, Camera, Music2, Rocket, Gamepad2, Blocks, Brush, Code2, Cpu, Code2Icon, PaintBucketIcon } from 'lucide-react';
import gsap from 'gsap';
import CryptoTrackerImage from './assets/Crypto-Tracker.png';
import CryptoFigmaImage from './assets/Figma1.png';
import Realestatehub from './assets/Real-estate-hub.png';
import Quizimg from './assets/Quiz-Game.png';
import BitGenx from './assets/BitGenx.png';

function App() {
  const heroRef = useRef(null);
  useScroll();
  
  // Animated cursor
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      api.start({
        x: event.clientX,
        y: event.clientY,
        immediate: false,
        config: { mass: 3, tension: 120, friction: 14 },
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [api]);

  // GSAP animations
  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
      });
    }
  }, []);
  const interests = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gaming",
      description: "Passionate about game development and eSports. I love exploring virtual worlds and understanding game mechanics that create engaging player experiences.",
      tags: ["Game Development", "eSports", "Unity", "Game Design"],
      bgImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1280"
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Blockchain",
      description: "Fascinated by blockchain technology and its potential to revolutionize digital systems. Currently exploring Web3 development and smart contracts.",
      tags: ["Web3", "Smart Contracts", "DeFi", "Cryptocurrency"],
      bgImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1280"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Love crafting beautiful and functional web experiences. Constantly exploring new technologies and frameworks to build better digital solutions.",
      tags: ["Frontend", "Backend", "Full Stack", "UI/UX"],
      bgImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1280"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intrigued by the possibilities of AI and its applications. Exploring machine learning models and their integration with web applications.",
      tags: ["Neural Networks", "Deep Learning", "Data Science", "AI Integration"],
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1280"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Digital Art",
      description: "Enjoy creating digital art and exploring the intersection of technology and creativity. Passionate about generative art and creative coding.",
      tags: ["Creative Coding", "Generative Art", "Digital Design", "3D Modeling"],
      bgImage: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&q=80&w=1280"
    }
  ];

  // Intersection Observer for scroll animations
  const [] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  // State for active journey index
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);

  // Achievements data

  // Journey steps data
 // Intersection Observer for scroll animations
 const [skillsRef, skillsInView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

const [aboutRef, aboutInView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

const skills = {
  frontend: [
    { 
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      level: 95,
      description: 'Semantic HTML5, Accessibility, SEO best practices'
    },
    { 
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      level: 90,
      description: 'Modern CSS3, Flexbox, Grid, Animations'
    },
    { 
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 95,
      description: 'ES6+, DOM manipulation, Async programming'
    },
    { 
      name: 'React.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 92,
      description: 'Hooks, Context, Redux, Next.js'
    },
    { 
      name: 'Vue.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      level: 85,
      description: 'Vue 3, Composition API, Vuex, Vue Router'
    },
    { 
      name: 'Tailwind CSS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      level: 88,
      description: 'Utility-first CSS, Custom configurations'
    },
    { 
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      level: 85,
      description: 'UI/UX Design, Prototyping, Design Systems'
    }
  ],
  backend: [
    { 
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 90,
      description: 'Server-side JavaScript, Event-driven architecture'
    },
    { 
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      level: 88,
      description: 'RESTful APIs, Middleware, Authentication'
    },
    { 
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      level: 85,
      description: 'NoSQL Database, Aggregation, Atlas'
    },
    { 
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      level: 82,
      description: 'OOP, Spring Boot, Enterprise Applications'
    }
  ]
};


  const projects = [
    {
      id: 1,
      title: 'Crypto-Tracker',
      description: 'Track prices, monitor market trends, and manage your crypto portfolio with ease. Stay informed with real-time updates and customizable alerts.',
      image: CryptoTrackerImage,
      projectLink: 'https://crypto-tracker-pink-nu.vercel.app/',
      githubLink: 'https://github.com/Pranjal6955/Crypto-Tracker'
    },
    {
      id: 2,
      title: 'Real-Estate-Hub',
      description: 'Secure and verified properties with DigiLocker integration ensure trusted document storage, enabling easy access to authentic property records and legal verification.',
      image: Realestatehub,
      projectLink: 'https://real-estate-hub.netlify.app/',
      githubLink: 'https://github.com/Pranjal6955/RealEstate'
    },
    {
      id: 3,
      title: 'God of War Quiz',
      description: 'The God of War Quiz is an immersive, web-based trivia game designed for fans of the legendary God of War series and mythology enthusiasts',
      image: Quizimg,
      projectLink: 'https://quiz-game-eight-wheat.vercel.app/',
      githubLink: 'https://github.com/Pranjal6955/Quiz-Game'
    },
  ];
  

  // State for active interest index
  const [activeInterest, setActiveInterest] = useState<number | null>(null);

  const projects1 = [
    {
      title: 'CryptOPlay',
      description: 'TCryptOPlay is a sleek app design for managing cryptocurrency. It allows users to buy, sell, stake, and stay updated with the latest crypto news—all in one place.',
      image: CryptoFigmaImage,
      projectLink: 'https://www.figma.com/proto/D2pM3nNVbybvl19Vu1M7hE/CryptoPlay?node-id=27-869&t=DgFYI5WhXQWeggij-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A805&show-proto-sidebar=1',
      githubLink: 'https://www.figma.com/design/D2pM3nNVbybvl19Vu1M7hE/CryptoPlay?node-id=26-805&t=GbyN9SIJ7B4ZKKj4-1'
    },
    {
      title: 'BitGenx',
      description: 'Our automated trading software ensures 24/7 liquidity for 170+ crypto assets across 25+ centralized spot and derivative exchanges.',
      image: BitGenx,
      projectLink: 'https://www.figma.com/proto/Xmk8bpEXxZziEohxnBJ3F1/Crypto-Website?node-id=35-2&p=f&t=EAVX0ZJOtbrjg0pW-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      githubLink: 'https://www.figma.com/design/Xmk8bpEXxZziEohxnBJ3F1/Crypto-Website?node-id=0-1&t=RxtowZd625J3ZmVG-1'
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black text-white">
      {/* Custom Cursor */}
      <animated.div
        className="fixed w-8 h-8 rounded-full bg-blue-500/30 mix-blend-screen pointer-events-none z-50 backdrop-blur-sm"
        style={{
          left: x,
          top: y,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-lg bg-black/30 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.span 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              whileHover={{ scale: 1.05 }}
            >
              Pranjal Negi
            </motion.span>
            <div className="flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

   {/* Hero Section with Animated Text */}
   <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated background dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl space-y-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in">
                Hi, I'm Pranjal Negi
              </span>
              <span className="block text-gray-300 mt-2 animate-slide-up text-2xl sm:text-4xl md:text-5xl">
                Full Stack Developer
              </span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-gray-400 text-sm sm:text-lg md:mt-8 md:text-xl md:max-w-3xl animate-fade-in-delay">
              Passionate about creating beautiful web experiences with the MERN stack and designing intuitive interfaces with Figma.
            </p>
            <div className="mt-8 flex justify-center space-x-6 sm:space-x-8">
              <a href="https://github.com/Pranjal6955" className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all">
                <Github className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
              <a href="https://www.linkedin.com/in/pranjal-negi555?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all">
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
              <a href="negipranjal555@gmail.com" className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Passions & Interests */}
      <section id="about" className="py-16 sm:py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Passions & Interests
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Exploring the intersection of technology, creativity, and innovation. Here's what drives my curiosity and fuels my creative journey.
            </p>
          </div>

          {/* Interest Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
                onMouseEnter={() => setActiveInterest(index)}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={interest.bgImage}
                    alt={interest.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                      {interest.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {interest.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 flex-grow">
                    {interest.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {interest.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full backdrop-blur-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Facts */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm group hover:border-purple-500/50 transition-all">
              <Brain className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="mt-4">
                <div className="text-3xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-400">Years Learning</div>
              </div>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm group hover:border-purple-500/50 transition-all">
              <Rocket className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="mt-4">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400">Side Projects</div>
              </div>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm group hover:border-purple-500/50 transition-all">
              <Code2Icon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="mt-4">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400">Programming Language</div>
              </div>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm group hover:border-purple-500/50 transition-all">
              <PaintBucketIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="mt-4">
                <div className="text-3xl font-bold text-purple-400">4+</div>
                <div className="text-sm text-gray-400">Figma Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        ref={skillsRef}
        id="skills"
        className="py-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
        <motion.div
          className="container mx-auto relative"
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Skills & Expertise
          </h2>

          {/* Frontend Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-300">Frontend Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center mb-4">
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mr-4" />
                      <div>
                        <h4 className="text-xl font-semibold">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.description}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-300">Backend Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center mb-4">
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mr-4" />
                      <div>
                        <h4 className="text-xl font-semibold">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.description}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
        <div className="container mx-auto relative">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex space-x-4 mt-4">
                      <motion.a 
                        href={project.projectLink} target="_blank" rel="noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300"
                        whileHover={{ x: 5 }}
                      >
                        View Project <ExternalLink className="ml-2" size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubLink} target="_blank"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300"
                        whileHover={{ x: 5 }}
                      >
                        View Github <ExternalLink className="ml-2" size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects1" className="px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
        <div className="container mx-auto relative">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Figma Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects1.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex space-x-4 mt-4">
                      <motion.a
                        href={project.projectLink} target="_blank" rel="noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300"
                        whileHover={{ x: 5 }}
                      >
                        View Project <ExternalLink className="ml-2" size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubLink} target="_blank"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300"
                        whileHover={{ x: 5 }}
                      >
                        View in Figma<ExternalLink className="ml-2" size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
        <div className="container mx-auto max-w-4xl relative">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Get in Touch
          </h2>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 focus:border-blue-500"
                    />
                  </motion.div>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 focus:border-blue-500"
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 focus:border-blue-500"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
              <div className="mt-8 flex justify-center space-x-6">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/pranjal-negi555?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;