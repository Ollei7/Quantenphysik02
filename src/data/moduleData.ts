export interface Module {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  learningObjectives: string[];
  downloads: {
    name: string;
    type: 'pdf' | 'docx' | 'zip' | 'pptx';
    size: string;
  }[];
  videoId: string;
  videoTitle: string;
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Grundlagen der Quantenphysik",
    shortDescription: "Einführung in die fundamentalen Konzepte und Experimente der Quantenphysik für den Schulunterricht.",
    fullDescription: "Dieses Modul bietet einen umfassenden Einstieg in die Grundlagen der Quantenphysik für den Schulunterricht. Es werden die historische Entwicklung, zentrale Experimente und die wichtigsten Konzepte behandelt, die für das Verständnis der modernen Quantenphysik unerlässlich sind. Der Fokus liegt auf didaktisch aufbereiteten Materialien, die direkt im Unterricht eingesetzt werden können.",
    learningObjectives: [
      "Die historische Entwicklung der Quantenphysik verstehen und im Unterricht vermitteln können",
      "Zentrale Experimente wie den Photoelektrischen Effekt und den Doppelspaltversuch erklären können",
      "Das Welle-Teilchen-Dualismus-Konzept didaktisch aufbereiten können",
      "Schülergerechte Analogien und Modelle zur Quantenphysik entwickeln"
    ],
    downloads: [
      {
        name: "Arbeitsblatt: Grundlagen der Quantenphysik",
        type: "pdf",
        size: "2,4 MB"
      },
      {
        name: "Lehrerhandreichung: Didaktische Hinweise",
        type: "docx",
        size: "1,8 MB"
      },
      {
        name: "Experiment: Photoelektrischer Effekt",
        type: "zip",
        size: "15,6 MB"
      },
      {
        name: "Präsentation: Einführung in die Quantenphysik",
        type: "pptx",
        size: "8,2 MB"
      }
    ],
    videoId: "zNVQfWC_evg",
    videoTitle: "Grundlagen der Quantenphysik für den Unterricht"
  },
  {
    id: 2,
    title: "Quantenmechanische Modelle",
    shortDescription: "Vertiefung der quantenmechanischen Modelle und deren didaktische Aufbereitung für verschiedene Klassenstufen.",
    fullDescription: "In diesem Modul werden verschiedene quantenmechanische Modelle behandelt und deren didaktische Aufbereitung für unterschiedliche Klassenstufen diskutiert. Von einfachen Analogien bis hin zu mathematischen Beschreibungen werden verschiedene Zugänge vorgestellt, die je nach Vorwissen der Schülerinnen und Schüler eingesetzt werden können.",
    learningObjectives: [
      "Verschiedene Modelle zur Beschreibung quantenmechanischer Phänomene kennenlernen",
      "Altersgerechte Zugänge zur Quantenmechanik entwickeln können",
      "Die Grenzen klassischer Modelle erkennen und vermitteln können",
      "Komplexe Konzepte wie Superposition und Verschränkung didaktisch reduzieren können"
    ],
    downloads: [
      {
        name: "Arbeitsblatt: Quantenmechanische Modelle",
        type: "pdf",
        size: "3,1 MB"
      },
      {
        name: "Lehrerhandreichung: Modellbildung in der Quantenphysik",
        type: "docx",
        size: "2,2 MB"
      },
      {
        name: "Experiment: Potentialtopf-Simulation",
        type: "zip",
        size: "12,8 MB"
      },
      {
        name: "Präsentation: Quantenmechanische Modelle",
        type: "pptx",
        size: "7,5 MB"
      }
    ],
    videoId: "zNVQfWC_evg",
    videoTitle: "Quantenmechanische Modelle im Schulunterricht"
  },
  {
    id: 3,
    title: "Moderne Anwendungen der Quantenphysik",
    shortDescription: "Aktuelle Anwendungen der Quantenphysik und deren Bedeutung für Technologie und Gesellschaft.",
    fullDescription: "Dieses Modul stellt moderne Anwendungen der Quantenphysik vor und zeigt deren Bedeutung für Technologie und Gesellschaft. Von Quantencomputern über Quantenkryptographie bis hin zu Quantensensoren werden aktuelle Forschungsgebiete vorgestellt und deren Grundprinzipien erläutert. Dabei wird besonderer Wert auf die Verbindung zur Lebenswelt der Schülerinnen und Schüler gelegt.",
    learningObjectives: [
      "Grundprinzipien moderner Quantentechnologien verstehen und erklären können",
      "Die gesellschaftliche Relevanz von Quantentechnologien einschätzen können",
      "Aktuelle Forschungsthemen der Quantenphysik in den Unterricht integrieren können",
      "Zukunftsperspektiven der Quantentechnologie kritisch reflektieren können"
    ],
    downloads: [
      {
        name: "Arbeitsblatt: Moderne Quantentechnologien",
        type: "pdf",
        size: "2,8 MB"
      },
      {
        name: "Lehrerhandreichung: Quantencomputer im Unterricht",
        type: "docx",
        size: "2,5 MB"
      },
      {
        name: "Experiment: Quantenkryptographie-Simulation",
        type: "zip",
        size: "14,2 MB"
      },
      {
        name: "Präsentation: Quantentechnologien",
        type: "pptx",
        size: "9,1 MB"
      }
    ],
    videoId: "zNVQfWC_evg",
    videoTitle: "Moderne Anwendungen der Quantenphysik"
  },
  {
    id: 4,
    title: "Didaktische Konzepte und Unterrichtsgestaltung",
    shortDescription: "Praktische Methoden zur Integration der Quantenphysik in den Unterricht und Gestaltung von Lernsequenzen.",
    fullDescription: "Das abschließende Modul widmet sich der konkreten Unterrichtsgestaltung und didaktischen Konzepten zur Integration der Quantenphysik in den Schulunterricht. Es werden verschiedene methodische Zugänge, Unterrichtssequenzen und Bewertungsmöglichkeiten vorgestellt und diskutiert. Dabei steht die praktische Umsetzbarkeit im Vordergrund.",
    learningObjectives: [
      "Lernsequenzen zur Quantenphysik für verschiedene Klassenstufen entwickeln können",
      "Geeignete Methoden zur Vermittlung quantenphysikalischer Inhalte auswählen können",
      "Schülervorstellungen zur Quantenphysik erkennen und produktiv nutzen können",
      "Leistungsbewertung im Bereich der Quantenphysik kompetenzorientiert gestalten können"
    ],
    downloads: [
      {
        name: "Arbeitsblatt: Unterrichtsplanung Quantenphysik",
        type: "pdf",
        size: "3,5 MB"
      },
      {
        name: "Lehrerhandreichung: Didaktische Konzepte",
        type: "docx",
        size: "2,9 MB"
      },
      {
        name: "Materialsammlung: Unterrichtseinheiten",
        type: "zip",
        size: "18,7 MB"
      },
      {
        name: "Präsentation: Didaktik der Quantenphysik",
        type: "pptx",
        size: "8,8 MB"
      }
    ],
    videoId: "zNVQfWC_evg",
    videoTitle: "Didaktische Konzepte zur Quantenphysik im Unterricht"
  }
];

export const introductionData = {
  title: "Einführung & Überblick",
  shortDescription: "Umfassender Überblick über die Fortbildungsreihe, didaktische Grundlagen und Lernziele.",
  fullDescription: "Diese Einführung bietet einen umfassenden Überblick über die gesamte Fortbildungsreihe 'Quantenphysik im Unterricht'. Sie erläutert die didaktischen Grundlagen, die Zeitstruktur der Fortbildung und die übergeordneten Lernziele. Zudem werden die einzelnen Module kurz vorgestellt und in einen Gesamtzusammenhang gebracht. Die Einführung dient als Orientierung und Einstieg in die Fortbildungsreihe.",
  content: [
    {
      title: "Didaktischer Hintergrund",
      text: "Die Quantenphysik stellt eine besondere Herausforderung für den Schulunterricht dar, da sie mit vielen intuitiven Vorstellungen bricht und komplexe mathematische Konzepte beinhaltet. Diese Fortbildungsreihe basiert auf aktuellen fachdidaktischen Erkenntnissen zur Vermittlung der Quantenphysik und berücksichtigt typische Schülervorstellungen und Lernhürden. Es werden verschiedene didaktische Zugänge vorgestellt, die je nach Vorwissen und Alter der Schülerinnen und Schüler eingesetzt werden können."
    },
    {
      title: "Zeitstruktur der Fortbildung",
      text: "Die Fortbildungsreihe ist modular aufgebaut und umfasst vier aufeinander aufbauende Module, die jeweils etwa 3-4 Stunden umfassen. Die Module können einzeln oder als Gesamtpaket absolviert werden. Zwischen den Modulen sind Praxisphasen vorgesehen, in denen die Teilnehmenden die erlernten Konzepte im eigenen Unterricht erproben können. Die Gesamtdauer der Fortbildung beträgt etwa 16 Stunden zuzüglich der Praxisphasen."
    },
    {
      title: "Lernziele im Gesamtüberblick",
      text: "Die Fortbildungsreihe verfolgt das übergeordnete Ziel, Lehrkräfte zu befähigen, moderne Quantenphysik kompetent und schülergerecht in den Unterricht zu integrieren. Nach Abschluss der Fortbildung sollen die Teilnehmenden in der Lage sein, grundlegende Konzepte der Quantenphysik zu verstehen und zu erklären, geeignete didaktische Zugänge für verschiedene Klassenstufen auszuwählen, moderne Anwendungen der Quantenphysik in den Unterricht einzubinden und eigene Unterrichtssequenzen zur Quantenphysik zu entwickeln."
    },
    {
      title: "Überblick über die Module",
      text: "Die Fortbildungsreihe umfasst vier aufeinander aufbauende Module: 'Grundlagen der Quantenphysik', 'Quantenmechanische Modelle', 'Moderne Anwendungen der Quantenphysik' und 'Didaktische Konzepte und Unterrichtsgestaltung'. Jedes Modul baut auf dem vorherigen auf, kann aber auch einzeln bearbeitet werden. Die Module kombinieren fachliche Inhalte mit didaktischen Überlegungen und praktischen Unterrichtsmaterialien."
    }
  ],
  videoId: "zNVQfWC_evg",
  videoTitle: "Überblick: Quantenphysik im Unterricht",
  downloads: [
    {
      name: "Gesamtüberblick: Fortbildungsreihe",
      type: "pdf",
      size: "4,2 MB"
    },
    {
      name: "Ablaufplan: Alle Module",
      type: "pdf",
      size: "1,5 MB"
    },
    {
      name: "Präsentation: Einführung in die Fortbildung",
      type: "pptx",
      size: "6,8 MB"
    },
    {
      name: "Materialsammlung: Alle Module",
      type: "zip",
      size: "45,3 MB"
    }
  ]
};
