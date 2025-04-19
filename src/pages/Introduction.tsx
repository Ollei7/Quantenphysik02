import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import DownloadButton from '../components/DownloadButton';
import { introductionData } from '../data/moduleData';

const Introduction = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-light py-12">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-primary hover:text-accent mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Zurück zur Übersicht
          </Link>
          <h1 className="mb-4">{introductionData.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {introductionData.fullDescription}
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <VideoPlayer 
              videoId={introductionData.videoId} 
              title={introductionData.videoTitle} 
            />

            {introductionData.content.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-light rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Download className="h-5 w-5 mr-2 text-accent" />
                Materialien herunterladen
              </h3>
              <div className="space-y-3">
                {introductionData.downloads.map((download, index) => (
                  <DownloadButton
                    key={index}
                    fileName={download.name}
                    fileType={download.type}
                    fileSize={download.size}
                  />
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Module der Fortbildung</h3>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((moduleId) => (
                    <li key={moduleId}>
                      <Link 
                        to={`/module/${moduleId}`}
                        className="flex items-center p-3 rounded-lg hover:bg-white transition-colors"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold mr-3">
                          {moduleId}
                        </span>
                        <span className="font-medium">Modul {moduleId}</span>
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

export default Introduction;
