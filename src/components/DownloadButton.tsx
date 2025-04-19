import { FileText, FileArchive, FileImage } from 'lucide-react';

interface DownloadButtonProps {
  fileName: string;
  fileType: 'pdf' | 'docx' | 'zip' | 'pptx';
  fileSize: string;
  license?: string;
}

const DownloadButton = ({ fileName, fileType, fileSize, license = "CC BY-SA 4.0" }: DownloadButtonProps) => {
  const getIcon = () => {
    switch (fileType) {
      case 'pdf':
      case 'docx':
      case 'pptx':
        return <FileText className="h-5 w-5 text-accent" />;
      case 'zip':
        return <FileArchive className="h-5 w-5 text-accent" />;
      default:
        return <FileImage className="h-5 w-5 text-accent" />;
    }
  };

  const getFileTypeLabel = () => {
    switch (fileType) {
      case 'pdf':
        return 'PDF';
      case 'docx':
        return 'Word';
      case 'zip':
        return 'ZIP';
      case 'pptx':
        return 'PowerPoint';
      default:
        return fileType.toUpperCase();
    }
  };

  return (
    <a 
      href="#" 
      className="download-button"
      onClick={(e) => {
        e.preventDefault();
        alert(`Download von ${fileName} würde starten.`);
      }}
      aria-label={`${fileName} herunterladen (${fileSize}, ${fileType.toUpperCase()})`}
    >
      <div className="flex items-center gap-3">
        {getIcon()}
        <div>
          <p className="font-medium">{fileName}</p>
          <p className="text-xs text-gray-500">{getFileTypeLabel()} • {fileSize} • {license}</p>
        </div>
      </div>
    </a>
  );
};

export default DownloadButton;
