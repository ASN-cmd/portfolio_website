import { words } from "../../constants";
import Button from "../../components/button";
import Navbar from "../../components/navbar";
import Projects from "../projects/projects";

// Hero section as a separate component
const Hero = () => (
  <section id="hero" className="relative overflow-hidden min-h-screen">
    {/* Enhanced Background Layers */}
    <div className="absolute inset-0 z-0">
      {/* Original background image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img src="/images/bg.png" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-black/40"></div>
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      {/* Radial light effect */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div className="hero-layout relative z-10 pt-20">
      {/* LEFT: Hero Content */}
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 min-h-screen">
        <div className="flex flex-col gap-7">
          <div className="hero-text">
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>

          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I'm Aryan Nair, a Computer Engineering student with a passion for
            crafting innovative solutions.
          </p>

          <Button
            text="See My Work"
            className="md:w-80 md:h-16 w-60 h-12"
            id="counter"
          />
        </div>
      </header>
    </div>

    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.05); }
      }
      .bg-gradient-radial {
        background: radial-gradient(circle, var(--tw-gradient-stops));
      }
    `}</style>
  </section>
);

// About section placeholder
const About = () => (
  <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        About
        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Computer Engineering student passionate about creating innovative solutions 
        and turning ideas into reality through code.
      </p>
      {/* Add your about content here */}
    </div>
  </section>
);

// Contact section placeholder
const Contact = () => (
  <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-800 to-black py-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Get In
        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Touch
        </span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Ready to bring your ideas to life? Let's connect and create something amazing together.
      </p>
      {/* Add your contact form/content here */}
    </div>
  </section>
);

// Home component with Navbar and all sections
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section - Now fully integrated */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;