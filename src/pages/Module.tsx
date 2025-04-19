import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import DownloadButton from '../components/DownloadButton';
import { modules } from '../data/moduleData';

const Module = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const moduleIndex = Number(moduleId) - 1;
  
  // Check if module exists
  if (moduleIndex < 0 || moduleIndex >= modules.length) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-6">Modul nicht gefunden</h1>
        <p className="text-xl text-gray-600 mb-8">
          Das gesuchte Modul existiert leider nicht.
        </p>
        <Link to="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  const module = modules[moduleIndex];
  const nextModuleId = moduleIndex < modules.length - 1 ? moduleIndex + 2 : null;
  const prevModuleId = moduleIndex > 0 ? moduleIndex : null;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-light py-12">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-primary hover:text-accent mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Zurück zur Übersicht
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">
              {module.id}
            </span>
            <h1 className="m-0">Modul {module.id}: {module.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            {module.fullDescription}
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Learning Objectives */}
            <div className="mb-12 bg-light rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Lernziele</h2>
              <ul className="space-y-3">
                {module.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <h2 className="text-2xl font-semibold mb-4">Video-Material</h2>
            <VideoPlayer 
              videoId={module.videoId} 
              title={module.videoTitle} 
            />

            {/* Module Navigation */}
            <div className="mt-12 flex flex-wrap justify-between gap-4">
              {prevModuleId !== null ? (
                <Link 
                  to={`/module/${prevModuleId}`} 
                  className="btn-secondary"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Vorheriges Modul
                </Link>
              ) : (
                <Link 
                  to="/einfuehrung" 
                  className="btn-secondary"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Zur Einführung
                </Link>
              )}
              
              {nextModuleId ? (
                <Link 
                  to={`/module/${nextModuleId}`} 
                  className="btn-primary"
                >
                  Nächstes Modul
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
              ) : (
                <Link 
                  to="/kontakt" 
                  className="btn-primary"
                >
                  Feedback geben
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-light rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Download className="h-5 w-5 mr-2 text-accent" />
                Materialien herunterladen
              </h3>
              <div className="space-y-3">
                {module.downloads.map((download, index) => (
                  <DownloadButton
                    key={index}
                    fileName={download.name}
                    fileType={download.type}
                    fileSize={download.size}
                  />
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Alle Module</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/einfuehrung"
                      className="flex items-center p-3 rounded-lg hover:bg-white transition-colors"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold mr-3">
                        E
                      </span>
                      <span className="font-medium">Einführung & Überblick</span>
                    </Link>
                  </li>
                  {modules.map((mod) => (
                    <li key={mod.id}>
                      <Link 
                        to={`/module/${mod.id}`}
                        className={`flex items-center p-3 rounded-lg hover:bg-white transition-colors ${mod.id === module.id ? 'bg-white font-semibold' : ''}`}
                      >
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${mod.id === module.id ? 'bg-accent text-white' : 'bg-accent/10 text-accent'} font-semibold mr-3`}>
                          {mod.id}
                        </span>
                        <span className="font-medium">Modul {mod.id}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
