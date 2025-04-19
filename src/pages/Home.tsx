import { Atom, BookOpen, Lightbulb, Microscope, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModuleCard from '../components/ModuleCard';
import { modules, introductionData } from '../data/moduleData';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-light to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
              <Atom className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mb-6">Quantenphysik im Unterricht</h1>
            <p className="text-xl text-gray-600 mb-8">
              Eine vierteilige Fortbildungsreihe für Lehrkräfte zur Integration moderner Quantenphysik in den Schulunterricht.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/einfuehrung" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-200 bg-accent text-white hover:bg-accent/90 hover:translate-y-[-2px] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Einführung & Überblick
              </Link>
              <a href="#module" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-200 bg-light text-primary hover:bg-light/80 hover:translate-y-[-2px] shadow-sm hover:shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Module entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-center mb-12">Warum Quantenphysik im Unterricht?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-light">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Moderne Physik vermitteln</h3>
              <p className="text-gray-600">
                Bringen Sie aktuelle Erkenntnisse und Konzepte der Quantenphysik in Ihren Unterricht.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-light">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Didaktisch aufbereitet</h3>
              <p className="text-gray-600">
                Alle Materialien sind didaktisch durchdacht und direkt im Unterricht einsetzbar.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-light">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Rocket className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zukunftsrelevant</h3>
              <p className="text-gray-600">
                Bereiten Sie Ihre Schülerinnen und Schüler auf die Technologien von morgen vor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="module" className="py-16 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h2 className="mb-4">Unsere Module</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unsere vierteilige Fortbildungsreihe mit umfassenden Materialien und didaktischen Konzepten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Introduction Card */}
            <div className="lg:col-span-3">
              <ModuleCard 
                id={0}
                title={introductionData.title}
                description={introductionData.shortDescription}
                isIntroduction={true}
              />
            </div>

            {/* Module Cards */}
            {modules.map((module) => (
              <ModuleCard 
                key={module.id}
                id={module.id}
                title={module.title}
                description={module.shortDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Bereit für moderne Quantenphysik im Unterricht?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Starten Sie jetzt mit unserer Fortbildungsreihe und bringen Sie die faszinierende Welt der Quantenphysik in Ihren Unterricht.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/einfuehrung" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-200 bg-accent text-white hover:bg-accent/90 hover:translate-y-[-2px] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Mit Einführung starten
              </Link>
              <Link to="/kontakt" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-200 bg-white/10 text-white hover:bg-white/20 hover:translate-y-[-2px] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
