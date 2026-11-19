/*
 * ============================================================
 *  ALLE INHALTE DER WEBSITE STEHEN HIER.
 *  Du musst nur diese Datei bearbeiten – HTML/CSS bleiben gleich.
 *  Alles in [eckigen Klammern] ist noch offen / bitte prüfen.
 * ============================================================
 */
window.SITE = {
  name: "Lukas Gross",
  role: "Software Engineer · Data & Cloud",
  location: "Leopoldshafen, Baden-Württemberg",
  tagline:
    "Ich komme aus der Logistik und baue heute Software, Datenplattformen und Cloud-Lösungen – für Prozesse, die ich von innen kenne.",
  availability: "", // z. B. "Offen für neue Positionen" – leer = ausgeblendet
  focus: ["Cloud", "Platform Engineering", "AI Engineering"],

  about: [
    "Angefangen habe ich dort, wo Waren tatsächlich bewegt werden: als Werkstudent in der Lagerlogistik bei Daimler, in der Logistikplanung der BASF und mit meiner Bachelorarbeit zu nachhaltigen Logistikzentren bei BSH. Im Studium der Logistik und des Supply Chain Managements habe ich gelernt, wie eng Lager, Einkauf, Transport und Produktion zusammenhängen.",
    "Dabei wurde mir schnell klar: Die spannendsten Hebel stecken in den Daten und in der Software dahinter. Also bin ich für den Master in Data Science and Advanced Analytics nach Lissabon gegangen, habe nebenher bei LECARE Prozesse automatisiert und BI aufgebaut und bin danach als Software-Entwickler bei Infor gelandet – einem Anbieter von Unternehmenssoftware, unter anderem für Supply Chain und Produktion.",
    "Für mich gehören beide Welten zusammen. Wer versteht, wie eine Lieferkette funktioniert, baut bessere Datenmodelle, Schnittstellen und Tools für sie. Genau das zeigt auch mein Supply-Chain-Dashboard, das Handels-, Schiffs- und Marktdaten zu einem Lagebild für Einkäufer verbindet.",
    "Als Nächstes zieht es mich tiefer in Cloud, Platform Engineering und AI Engineering: Plattformen bauen, auf denen Daten- und KI-Anwendungen zuverlässig laufen. Die Grundlage dafür ist die Zertifizierung als AWS Solutions Architect – Associate.",
  ],

  stats: [
    { value: "AWS", label: "Certified Solutions Architect" },
    { value: "M.Sc.", label: "Data Science · NOVA IMS" },
    { value: "5", label: "Unternehmen – von Logistik bis Software" },
  ],

  experience: [
    {
      period: "Okt 2024 – heute",
      title: "Software-Entwickler",
      company: "Infor",
      location: "Remote (Leipzig)",
      points: [
        "Entwicklung und Betreuung von API-Schnittstellen",
        "Mitarbeit am Umzug in die AWS European Sovereign Cloud",
        "Komponenten mit Amazon Kiro (KI-gestützte Entwicklungsumgebung) für die neue Cloud-Umgebung nutzbar machen",
      ],
      tags: ["APIs", "AWS", "Sovereign Cloud", "Kiro"],
    },
    {
      period: "Jul 2023 – Apr 2025",
      title: "Werkstudent Automation & Business Intelligence",
      company: "LECARE",
      location: "Remote (Hamburg)",
      points: [
        "Automatisierung von Geschäftsprozessen und Aufbau von BI-Auswertungen mit Airtable und Make",
      ],
      tags: ["Airtable", "Make", "Automation", "BI"],
    },
    {
      period: "Sep 2022 – Jul 2024",
      title: "M.Sc. Data Science and Advanced Analytics",
      company: "NOVA IMS Information Management School",
      location: "Lissabon, Portugal",
      points: [
        "Masterarbeit: „Improving Trustworthiness in DeFi: Anomaly Detection for Blockchain Oracle Price Feed Data“ (Betreuer: Prof. Fernando Bação)",
        "Schwerpunkte: Machine Learning, Data Mining, Business Intelligence, Datenvisualisierung, MLOps",
        "Bestnoten (18–19/20) u. a. in Programmierung für Data Science, Machine Learning, Data Mining und Business Process Management",
      ],
      tags: ["Python", "Machine Learning", "Power BI", "SQL"],
    },
    {
      period: "Nov 2021 – Jan 2022",
      title: "Bachelorand – Nachhaltige Gebäudeplanung",
      company: "BSH Hausgeräte AG",
      location: "Fürth",
      points: [
        "Bachelorarbeit „Sustainable Warehouse“: nachhaltige Gestaltung von Logistikzentren am Beispiel des zentralen Lagers der BSH",
      ],
      tags: ["Logistik", "Nachhaltigkeit"],
    },
    {
      period: "2018 – 2022",
      title: "B.A. Logistics, Materials and Supply Chain Management",
      company: "Hochschule für Wirtschaft und Gesellschaft Ludwigshafen",
      location: "Ludwigshafen",
      points: ["Logistik, Materialwirtschaft und Supply Chain Management mit SAP ERP"],
      tags: ["SAP ERP", "Supply Chain"],
    },
    {
      period: "Nov 2019 – Apr 2020",
      title: "Werkstudent Logistikplanung",
      company: "BASF SE",
      location: "Ludwigshafen",
      points: [
        "Mitarbeit an Lagerumzug und Inbetriebnahme eines neuen Lagers – von der Auswahl der Lagerhilfsmittel bis zur Bestandsaufnahme",
        "Eigenverantwortliches Einholen und Verhandeln von Angeboten bei Lieferanten",
        "Erstellung der Sicherheitsunterweisung für das neue Lagergebäude",
      ],
      tags: ["Logistik", "Beschaffung", "Projektarbeit"],
    },
    {
      period: "Dez 2018 – Mai 2019",
      title: "Werkstudent Lagerlogistik",
      company: "Daimler AG",
      location: "Wörth am Rhein",
      points: ["Werkstudententätigkeit im Kommissions- und Produktionsbereich"],
      tags: ["Logistik"],
    },
  ],

  projects: [
    {
      title: "Polyethylen Supply Chain Monitor",
      summary:
        "Was passiert mit den Polyethylen-Strömen nach Europa, wenn das Rote Meer schließt – und wer gewinnt Marktanteile? Ich habe den Welthandel mit Polyethylen aus offiziellen Handelsstatistiken (CEPII BACI, UN Comtrade) rekonstruiert und ein Dashboard für Einkäufer gebaut: Lagebild mit Ampeln, Preistreiber, Bezugsquellen mit Risiko durch gesperrte Meerengen, Landed Cost inkl. EU-Zöllen und ein Bestellplaner. Dazu kommen tägliche Transits durch 28 Meerengen (IMF PortWatch) und Szenarien wie »Rotes Meer gesperrt« oder »Hormus gesperrt«.",
      tags: ["Python", "Dash", "dbt", "DuckDB", "Pyomo"],
      images: [
        { src: "images/dashboard_situation.jpg", caption: "Lagebild: Preis, Versorgung und Logistik als Ampeln, dazu die Änderungen der letzten 7 Tage" },
        { src: "images/dashboard_prices.jpg", caption: "Preise & Treiber: Rohstoff- vs. Kunststoffpreise, Fracht, Währungen und Lieferketten-Druckindex" },
        { src: "images/dashboard_sourcing.jpg", caption: "Bezugsquellen: woher Europas Importe kommen und welcher Anteil durch gestörte Meerengen läuft" },
        { src: "images/dashboard_landed_cost.jpg", caption: "Landed Cost: Preis und EU-Zoll je Lieferland im gewählten Routen-Szenario" },
        { src: "images/dashboard_planner.jpg", caption: "Bestellplaner: Kosten gegen Ankunftsdatum, wenn heute bestellt wird" },
        { src: "images/dashboard_classes.jpg", caption: "Welthandel nach Warenklassen: wo Polyethylen im globalen Handel steht" },
        { src: "images/dashboard_ports.jpg", caption: "Häfen: Anläufe und geschätzte Handelsmengen von elf relevanten Häfen" },
        { src: "images/dashboard_flows.jpg", caption: "Handelsströme: das Hafen-zu-Hafen-Netz der Schifffahrt" },
        { src: "images/dashboard_seamarks.jpg", caption: "Seekarten-Ebene (OpenSeaMap) über den Meerengen" },
      ],
      pipeline: {
        title: "So funktioniert es im Hintergrund",
        steps: [
          { title: "Datenquellen", text: "Rund zehn öffentliche Quellen: Handelsstatistiken, Schiffsverkehr durch Meerengen, Energie- und Frachtpreise, Zölle, Seewetter.", tech: "CEPII BACI · IMF PortWatch · FRED" },
          { title: "Pipeline", text: "Python-Jobs laden die Daten automatisch und inkrementell und legen sie als Rohdaten ab.", tech: "Python · Parquet" },
          { title: "Data Warehouse", text: "SQL-Modelle bereinigen und verknüpfen alles in Schichten (roh → bereinigt → Modell), mit automatischen Datentests.", tech: "dbt · DuckDB" },
          { title: "Analyse & Modell", text: "Ein Optimierungsmodell erklärt die Warenströme über Transportkosten; Szenarien zeigen, was bei gesperrten Routen passiert.", tech: "Pyomo · HiGHS" },
          { title: "Dashboard", text: "Eine interaktive Web-App bündelt alles zu einem Lagebild für Einkäufer.", tech: "Dash · Plotly" },
        ],
        note: "Betrieb & Qualität: läuft in Docker-Containern; jede Änderung durchläuft eine CI-Pipeline mit Tests (≥ 85 % Abdeckung), Typprüfung und Architekturregeln. Es werden nur Werte genutzt, die durch eine Datenquelle belegt sind.",
      },
      links: [
        { label: "GitHub", url: "" }, // Repo ist privat – URL eintragen, sobald es öffentlich ist: https://github.com/LukasGross1998/polymer-trade-flows
      ],
      featured: true,
    },
    {
      title: "Anomalieerkennung in Blockchain-Oracle-Preisfeeds",
      summary:
        "Masterarbeit: DeFi-Plattformen verlassen sich auf Preisfeeds von Blockchain-Oracles – fehlerhafte Feeds haben bereits Schäden in zweistelliger Millionenhöhe verursacht. Ich habe zehn Verfahren auf dem ETH/USD-Feed von Chainlink verglichen: klassisches ML (u. a. Isolation Forest, One-Class SVM, DBSCAN, LSTM-Autoencoder) gegen Streaming-Algorithmen (Half-Space Trees, Sliding-Window-kNN, Robust Random Cut Forest). Ergebnis: Streaming-Verfahren schneiden besser ab (F1 0,24 vs. 0,20; Recall bis 0,84), aber die Volatilität von Kryptomärkten hält die Gesamtleistung noch unter dem, was für den produktiven Einsatz nötig wäre.",
      tags: ["Python", "scikit-learn", "TensorFlow", "Streaming ML", "Blockchain"],
      links: [],
    },
  ],

  skills: [
    { group: "Programmierung", items: ["Python", "SQL", "pandas", "Git"] },
    { group: "Data Science", items: ["Machine Learning", "Anomalieerkennung", "scikit-learn", "TensorFlow / Keras", "Optimierung (LP)"] },
    { group: "Data Engineering & BI", items: ["dbt", "DuckDB", "Power BI", "Dash / Plotly", "Airtable", "Make"] },
    { group: "Cloud & Plattform", items: ["AWS", "Sovereign Cloud", "APIs", "Docker", "CI/CD (GitHub Actions)", "Kiro"] },
    { group: "Domäne", items: ["Supply Chain", "Logistik", "SAP ERP", "Beschaffung", "Welthandel"] },
    { group: "Sprachen", items: ["Deutsch (Muttersprache)", "Englisch (verhandlungssicher)"] },
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "Nov 2026" },
  ],

  contact: {
    text: "Du suchst jemanden, der Daten, Lieferketten und Cloud zusammenbringt? Ich freue mich über deine Nachricht.",
    email: "lukas.s.gross@web.de",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/lukas-gross-03b983209/" },
      { label: "GitHub", url: "https://github.com/LukasGross1998" },
    ],
    cv: "", // z. B. "lebenslauf.pdf" – Datei in denselben Ordner legen
  },
};
