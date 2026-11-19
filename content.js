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
    "Dabei wurde mir schnell klar: Die spannendsten Hebel stecken in den Daten und in der Software dahinter. Also bin ich für den Master in Data Science and Advanced Analytics nach Lissabon gegangen, habe nebenher bei LECARE Dashboards und datengetriebene Software-Lösungen entwickelt und bin danach als Software-Entwickler bei Infor gelandet – einem Anbieter von ERP- und Unternehmenssoftware, unter anderem für Supply Chain und Produktion. Dort binde ich Systeme an die Infor CloudSuite an und arbeite täglich mit SQL auf Oracle-Datenbanken.",
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
        "Modulverantwortlicher für das Modul Schnittstellen – fachlich und technisch zuständig für die Anbindung von Drittsystemen",
        "Entwicklung und Betreuung von REST-Schnittstellen mit JSON und XML, über die Drittsysteme an das ERP Infor CloudSuite angebunden werden",
        "Intensive Arbeit mit Oracle-Datenbanken: SQL-Abfragen für Datenanalyse, Fehlersuche und Datenabgleich zwischen ERP und angebundenen Systemen",
        "Mitarbeit am Umzug in die AWS European Sovereign Cloud",
        "Komponenten mit Amazon Kiro (KI-gestützte Entwicklungsumgebung) für die neue Cloud-Umgebung nutzbar machen",
      ],
      tags: ["Modulverantwortung", "Infor CloudSuite", "ERP", "REST APIs", "JSON / XML", "Oracle SQL", "AWS", "Kiro"],
    },
    {
      period: "Jul 2023 – Apr 2025",
      title: "Werkstudent Business Intelligence & Software Engineering",
      company: "LECARE",
      location: "Remote (Hamburg)",
      points: [
        "Konzeption und Entwicklung von Power-BI-Dashboards, die Kennzahlen aus dem operativen Geschäft für Management und Fachbereiche sichtbar machen",
        "Aufbau einer zentralen PostgreSQL-Datenbank als Reporting-Schicht: Datenmodellierung, SQL-Views und Abfragen als Grundlage für die Dashboards",
        "Prozessautomatisierung mit Make und Airtable: Daten aus den operativen Tools per API und Webhooks erfassen, aufbereiten und automatisiert in PostgreSQL laden",
      ],
      tags: ["Power BI", "PostgreSQL", "SQL", "Make", "Airtable", "APIs"],
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
        { label: "GitHub", url: "https://github.com/LukasGross1998/polymer-trade-flows" },
      ],
      featured: true,
    },
    {
      title: "Masterarbeit: Anomalieerkennung in Blockchain-Preisfeeds",
      summary:
        "DeFi-Anwendungen verlassen sich auf Preisfeeds von Blockchain-Oracles. Fehlerhafte Feeds haben bereits Schäden in zweistelliger Millionenhöhe verursacht. In meiner Masterarbeit an der NOVA IMS habe ich die stündliche ETH/USD-Zeitreihe von Chainlink über zwei Jahre analysiert und zehn Verfahren der Anomalieerkennung verglichen: klassisches Machine Learning gegen Streaming-Algorithmen, die Daten in Echtzeit verarbeiten. Ergebnis: Die Streaming-Verfahren schneiden am besten ab (F1 0,24, Recall bis 0,84), aber die hohe Volatilität von Kryptomärkten hält die Leistung noch unter dem, was für den produktiven Einsatz nötig wäre.",
      tags: ["Zeitreihenanalyse", "Anomalieerkennung", "Python", "scikit-learn", "TensorFlow", "Streaming ML"],
      images: [
        { src: "images/thesis_eth_anomalies.jpg", caption: "ETH/USD-Kurs (stündlich, Chainlink) mit den eingefügten Test-Anomalien (rot), die die Modelle finden mussten" },
      ],
      results: {
        title: "Ergebnis: Welches Verfahren findet die Anomalien am besten?",
        metrics: [
          { key: "f1", label: "F1-Score", hint: "Balance aus Treffsicherheit und Vollständigkeit (Hauptkennzahl)" },
          { key: "recall", label: "Recall", hint: "Anteil der echten Anomalien, die gefunden wurden" },
        ],
        groups: [
          { label: "Streaming (Echtzeit)", highlight: true, rows: [
            { label: "Half-Space Trees", f1: 0.24, recall: 0.25 },
            { label: "Sliding-Window-kNN", f1: 0.23, recall: 0.84 },
            { label: "Robust Random Cut Forest", f1: 0.13, recall: 0.22 },
          ] },
          { label: "Klassisches ML", rows: [
            { label: "Isolation Forest", f1: 0.20, recall: 0.62 },
            { label: "Self-Organizing Map", f1: 0.19, recall: 0.27 },
            { label: "k-Nearest Neighbors", f1: 0.18, recall: 0.11 },
            { label: "LSTM-Autoencoder", f1: 0.18, recall: 0.18 },
            { label: "One-Class SVM", f1: 0.17, recall: 0.40 },
            { label: "DBSCAN", f1: 0.16, recall: 0.34 },
            { label: "K-Means", f1: 0.14, recall: 0.28 },
          ] },
        ],
      },
      pipeline: {
        title: "So bin ich vorgegangen",
        steps: [
          { title: "Zeitreihe", text: "Stündliche ETH/USD-Preise des Chainlink-Oracles, Mai 2021 bis Mai 2023: rund 17.300 Datenpunkte.", tech: "Chainlink · pandas" },
          { title: "Vorverarbeitung", text: "Auf ein festes Stundenraster gebracht, Lücken interpoliert und 1 % künstliche Anomalien als Testfälle eingefügt.", tech: "pandas · NumPy" },
          { title: "Feature Engineering", text: "Zwölf Finanzindikatoren berechnet (u. a. gleitende Mittel, Volatilität, RSI, Bollinger-Bänder, MACD) und die aussagekräftigsten ausgewählt.", tech: "scikit-learn" },
          { title: "Modelle", text: "Sieben klassische Verfahren und drei Streaming-Algorithmen trainiert und ihre Parameter per Kreuzvalidierung für Zeitreihen optimiert.", tech: "scikit-learn · Keras · river" },
          { title: "Bewertung", text: "Alle Verfahren auf ungesehenen Testdaten verglichen, mit F1-Score als Hauptkennzahl und Recall als zweiter.", tech: "F1 · Recall" },
        ],
        note: "Betreuer: Prof. Fernando Bação, NOVA IMS Lissabon.",
      },
      links: [],
      featured: true,
    },
  ],

  skills: [
    { group: "Programmierung", items: ["Python", "SQL", "Oracle SQL", "PostgreSQL", "pandas", "Git"] },
    { group: "Data Science", items: ["Machine Learning", "Anomalieerkennung", "scikit-learn", "TensorFlow / Keras", "Optimierung (LP)"] },
    { group: "Data Engineering & BI", items: ["dbt", "DuckDB", "Power BI", "Dash / Plotly", "Airtable", "Make"] },
    { group: "Cloud & Plattform", items: ["AWS", "Sovereign Cloud", "REST APIs", "JSON / XML", "Docker", "CI/CD (GitHub Actions)", "Kiro"] },
    { group: "Domäne", items: ["ERP (Infor CloudSuite, SAP)", "Supply Chain", "Logistik", "Beschaffung", "Welthandel"] },
    { group: "Sprachen", items: ["Deutsch (Muttersprache)", "Englisch (verhandlungssicher)"] },
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "Nov 2026", url: "https://www.credly.com/badges/e82d01ac-7ec3-4d2d-b878-cfb8985330de" },
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
