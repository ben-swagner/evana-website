// Anwendungsfälle: Kern der neuen Website.
// Speisen den Umschalter auf der Startseite und die Seiten /anwendungsfaelle/[slug]/.
// Beispieldaten in "demo" sind illustrativ und werden als Beispiel gekennzeichnet.

export type Dokument = { name: string; typ: string };
export type Fundstelle = { datei: string; stelle: string };

export type Demo =
  | { art: 'antwort'; frage: string; antwort: string[]; fundstellen: Fundstelle[] }
  | { art: 'zuordnung'; eingang: Dokument[]; ziel: { objekt: string; ordner: string; neuerName: string }[] }
  | { art: 'extraktion'; dokument: string; seiten: string; felder: { feld: string; wert: string }[] }
  | { art: 'report'; objekt: string; kennzahlen: { label: string; wert: string }[]; vertragsenden: { jahr: string; anzahl: number }[] }
  | { art: 'qa'; frage: string; bieter: string; entwurf: string; quelle: string }
  | { art: 'anbindung'; modelle: string[]; schnittstellen: string[] };

export type Anwendungsfall = {
  slug: string;
  titel: string;
  tab: string;
  kurz: string;
  vorher: string;
  mitEvana: string;
  details: { titel: string; text: string }[];
  fuerWen: string[];
  produkte: string[];
  referenz?: { name: string; ergebnis: string };
  demo: Demo;
  // Animierte Szene aus der Messe-Animation statt statischer Demo (siehe src/components/Szene.astro)
  szene?: 'router' | 'qa' | 'mcp' | 'report';
  fragen?: string[];
  schritte?: { titel: string; text: string }[];
  abgrenzung?: { titel: string; text: string; link: { label: string; href: string } };
  faq?: { frage: string; antwort: string }[];
  seo: { title: string; description: string };
};

export const anwendungsfaelle: Anwendungsfall[] = [
  {
    slug: 'dokumente-befragen',
    tab: 'Dokumente befragen',
    titel: 'Fragen an den ganzen Bestand stellen',
    kurz: 'Sie fragen in normaler Sprache, EVA durchsucht alle Verträge, Gutachten und Scans und antwortet mit der genauen Fundstelle.',
    vorher: 'Für eine Frage zu Fristen oder Konditionen öffnet Ihr Team Dutzende PDFs, blättert Nachträge durch und gleicht Tabellen von Hand ab. Bei einem Portfolio dauert das Tage.',
    mitEvana: 'EVA wertet den gesamten Datenraum in einem Durchgang aus und antwortet mit Fundstelle je Dokument. Jede Aussage lässt sich mit einem Klick im Original prüfen.',
    details: [
      { titel: 'Belegt statt geraten', text: 'Jede Antwort verweist auf Datei, Seite und Absatz im Originaldokument.' },
      { titel: 'Ganze Fragenkataloge', text: 'Due-Diligence-Checklisten beantwortet EVA in einem Durchgang über alle Unterlagen.' },
      { titel: 'Jede Sprache, auch Scans', text: 'EVA liest fremdsprachige Verträge, gescannte Protokolle und Bildinhalte mit.' },
    ],
    fuerWen: ['Asset Management', 'Property Management', 'Transaktionsteams'],
    produkte: ['EVA', 'EVANA 360'],
    demo: {
      art: 'antwort',
      frage: 'Welche Wartungsmängel sind im Bürozentrum Mainufer offen, und wie dringend sind sie?',
      antwort: [
        'Brandschutzklappe im 3. OG: hohe Dringlichkeit, Frist laut Protokoll bis 30.11.2026',
        'Notbeleuchtung Treppenhaus B: mittlere Dringlichkeit',
        'Dichtung Dachentwässerung: mittlere Dringlichkeit, Angebot liegt vor',
      ],
      fundstellen: [
        { datei: 'Wartungsprotokoll_2026.pdf', stelle: 'S. 7' },
        { datei: 'Maengelliste_Q3.pdf', stelle: 'S. 2' },
        { datei: 'Angebot_Dach_0926.pdf', stelle: 'S. 1' },
      ],
    },
    fragen: [
      'Welche Mietverträge haben Verlängerungsoptionen, die in den nächsten 24 Monaten auslaufen?',
      'Bei welchen Objekten fehlt ein gültiger Energieausweis?',
      'Welche Wartungsmängel sind offen, und wie dringend sind sie?',
      'Gibt es Sonderkündigungsrechte einzelner Mieter?',
      'Welche Indexklauseln führen im nächsten Jahr zu einer Mietanpassung?',
      'Fasse mir das Bewertungsgutachten in fünf Sätzen zusammen.',
    ],
    schritte: [
      { titel: 'Frage stellen', text: 'Sie fragen in normaler Sprache, zu einem Dokument, einem Objekt oder dem ganzen Bestand.' },
      { titel: 'EVA sucht', text: 'EVA durchsucht alle Unterlagen, auch Scans, Bilder und fremdsprachige Verträge.' },
      { titel: 'Antwort mit Fundstelle', text: 'Sie erhalten die Antwort mit Datei, Seite und Absatz, auf Wunsch als Tabelle.' },
      { titel: 'Prüfen und weiterarbeiten', text: 'Ein Klick führt zur Stelle im Original. Ergebnisse exportieren Sie als Excel oder übernehmen sie in den Report.' },
    ],
    faq: [
      { frage: 'Welche Dokumente kann EVA befragen?', antwort: 'Alle Unterlagen in EVANA 360 und EVANA TDR, etwa Mietverträge, Nachträge, Grundbuchauszüge, Gutachten, Energieausweise und Wartungsprotokolle, auch als Scan, Bild oder in fremder Sprache.' },
      { frage: 'Woher weiß ich, dass eine Antwort stimmt?', antwort: 'Jede Antwort nennt die Fundstelle im Originaldokument mit Datei und Seite. Ein Klick führt direkt zur Stelle, sodass Sie jede Aussage prüfen können.' },
      { frage: 'Kann EVA mehrere Fragen auf einmal beantworten?', antwort: 'Ja. Sie können ganze Fragenkataloge übergeben, etwa eine Due-Diligence-Checkliste. EVA beantwortet jede Frage aus dem gesamten Datenraum, jeweils mit Fundstellen.' },
    ],
    seo: {
      title: 'Immobiliendokumente mit KI befragen, mit Fundstelle | EVANA',
      description: 'Mit der KI-Assistentin EVA fragen Sie Mietverträge, Gutachten und Protokolle in normaler Sprache ab. Jede Antwort mit Fundstelle im Originaldokument.',
    },
  },
  {
    slug: 'dokumente-automatisch-ablegen',
    tab: 'Automatisch ablegen',
    titel: 'Eingehende Dokumente landen von selbst am richtigen Ort',
    kurz: 'EVANA erkennt Dokumenttyp und Objekt, benennt die Datei sinnvoll um und legt sie in der richtigen Akte ab. Auch E-Mail-Anhänge.',
    vorher: 'Rechnungen, Protokolle und Nachträge kommen per Mail, Post und Portal. Jemand muss jede Datei öffnen, zuordnen, umbenennen und ablegen. Über 40 Stunden pro Asset und Jahr gehen allein dafür verloren.',
    mitEvana: 'Der Document Router liest jedes eingehende Dokument, ordnet es dem richtigen Objekt zu und legt es strukturiert ab. Was unsicher ist, landet zur Prüfung bei Ihrem Team.',
    details: [
      { titel: 'Dokumenttyp erkannt', text: `Über 460 Dokumenttypen der Immobilienwirtschaft, mit einer Erkennungsrate von 95 %.` },
      { titel: 'Sie bestimmen die Schwelle', text: 'Ein einstellbarer Confidence-Threshold legt fest, was automatisch abgelegt und was geprüft wird.' },
      { titel: 'Dubletten erkannt', text: 'Doppelte Dateien und Versionen werden erkannt, bevor sie die Akte füllen.' },
    ],
    fuerWen: ['Property Management', 'Facility Management', 'Asset Management'],
    produkte: ['EVANA 360', 'Document Router'],
    referenz: { name: 'Wirtgen Invest', ergebnis: 'Rund 25.000 Dokumente aus vier Objekten klassifiziert und umbenannt, in wenigen Tagen statt Monaten.' },
    demo: {
      art: 'zuordnung',
      eingang: [
        { name: 'Scan_0412.pdf', typ: 'Wartungsprotokoll' },
        { name: 'AW_Rechnung_Juni.pdf', typ: 'Rechnung' },
        { name: 'IMG_2231.jpg', typ: 'Energieausweis' },
      ],
      ziel: [
        { objekt: 'Bürozentrum Mainufer', ordner: 'Technik / Wartung', neuerName: '2026-04-12_Wartungsprotokoll_Aufzug.pdf' },
        { objekt: 'Wohnanlage Lindenhof', ordner: 'Kaufmännisch / Rechnungen', neuerName: '2026-06_Rechnung_Gebaeudereinigung.pdf' },
        { objekt: 'Bürozentrum Mainufer', ordner: 'Energie / Ausweise', neuerName: 'Energieausweis_Verbrauch_2024.pdf' },
      ],
    },
    szene: 'router',
    abgrenzung: {
      titel: 'Anwendungsfall und Document Router',
      text: 'Der Anwendungsfall beschreibt die Aufgabe: Ordnung in Ihre Dokumente bringen, ob einmalig beim Übernehmen eines ganzen Bestands oder laufend im Alltag. Der Document Router ist das Werkzeug für den laufenden Posteingang. Für die Übernahme großer Bestände klassifiziert EVANA AI tausende Dokumente in einem Durchgang, wie bei Wirtgen Invest.',
      link: { label: 'Document Router ansehen', href: '/produkte/document-router/' },
    },
    faq: [
      { frage: 'Wie erkennt EVANA, zu welchem Objekt ein Dokument gehört?', antwort: 'EVANA liest Dokumenttyp, Adresse, Mieter und weitere Angaben aus dem Inhalt und ordnet das Dokument dem passenden Objekt zu. Was unsicher ist, landet zur Prüfung bei Ihrem Team.' },
      { frage: 'Was passiert mit doppelten Dateien?', antwort: 'EVANA erkennt Dubletten und Versionen, bevor sie die Akte füllen, und sortiert sie aus.' },
      { frage: 'Funktioniert das auch für bestehende Bestände?', antwort: 'Ja. Bei Wirtgen Invest hat EVANA rund 25.000 Dokumente aus vier Objekten klassifiziert und umbenannt, in wenigen Tagen statt Monaten.' },
    ],
    seo: {
      title: 'Dokumente automatisch klassifizieren und ablegen | EVANA',
      description: 'EVANA erkennt Dokumenttyp und Objekt, benennt Dateien um und legt sie automatisch ab. KI-Dokumentenmanagement für die Immobilienwirtschaft.',
    },
  },
  {
    slug: 'daten-extrahieren',
    tab: 'Daten extrahieren',
    titel: 'Aus langen Dokumenten werden saubere Datenfelder',
    kurz: 'Ob Bewertungsgutachten mit 300 Seiten, Grundbuchauszug oder Energieausweis: EVANA liest die relevanten Felder aus und liefert sie strukturiert weiter.',
    vorher: 'Kennzahlen aus Gutachten und Grundbuchauszügen werden abgetippt, geprüft und in Tabellen übertragen. Das kostet Zeit und schafft Fehlerquellen.',
    mitEvana: 'EVANA AI extrahiert die definierten Felder automatisch und gibt sie als Tabelle, Excel oder per API an Ihre Systeme weiter, etwa an SAP RE-FX.',
    details: [
      { titel: 'Auch bei langen Dokumenten', text: 'Gutachten mit bis zu 300 Seiten und rund 40 Bewertungsfeldern, vollautomatisch.' },
      { titel: 'Direkt weiterverarbeiten', text: 'Export als CSV oder Excel, Übergabe per REST- oder GraphQL-API.' },
      { titel: 'Nachvollziehbar', text: 'Jeder Wert bleibt mit seiner Stelle im Dokument verknüpft.' },
    ],
    fuerWen: ['Bewertung', 'Asset Management', 'Banken und Versicherer'],
    produkte: ['EVANA AI'],
    referenz: { name: 'TÜV Saarland', ergebnis: 'Bewertungsgutachten mit bis zu 300 Seiten werden automatisch ausgewertet, rund 40 Felder je Gutachten.' },
    demo: {
      art: 'extraktion',
      dokument: 'Verkehrswertgutachten_Mainufer.pdf',
      seiten: '286 Seiten',
      felder: [
        { feld: 'Verkehrswert', wert: '18.400.000 €' },
        { feld: 'Bewertungsstichtag', wert: '30.06.2026' },
        { feld: 'Mietfläche', wert: '7.940 m²' },
        { feld: 'Liegenschaftszins', wert: '4,25 %' },
        { feld: 'Restnutzungsdauer', wert: '41 Jahre' },
      ],
    },
    faq: [
      { frage: 'Welche Dokumente kann EVANA auslesen?', antwort: 'Zum Beispiel Bewertungsgutachten, Grundbuchauszüge, Energieausweise, Mietverträge und Wartungsprotokolle, auch als Scan oder Bild und in fremder Sprache.' },
      { frage: 'Wie kommen die Daten weiter?', antwort: 'Als CSV oder Excel oder per REST- und GraphQL-API, etwa an SAP RE-FX oder Ihre BI-Tools.' },
      { frage: 'Kann ich prüfen, woher ein Wert stammt?', antwort: 'Ja. Jeder extrahierte Wert bleibt mit seiner Stelle im Dokument verknüpft.' },
    ],
    seo: {
      title: 'KI-Datenextraktion aus Immobiliendokumenten | EVANA',
      description: 'Gutachten, Grundbuchauszüge und Energieausweise automatisch auslesen. EVANA extrahiert Datenfelder und übergibt sie an Excel, API oder SAP.',
    },
  },
  {
    slug: 'transaktion-due-diligence',
    tab: 'Transaktion und Q&A',
    titel: 'Due Diligence mit Antwortentwürfen aus dem Datenraum',
    kurz: 'Im Transaktionsdatenraum schreibt EVA Antwortentwürfe auf Bieterfragen, mit Quelle und in der Sprache der Frage. Ihr Team prüft und gibt frei.',
    vorher: 'In heißen Phasen kommen Hunderte Bieterfragen. Das Team sucht für jede Frage die passenden Unterlagen und formuliert Antworten unter Zeitdruck, oft doppelt.',
    mitEvana: 'EVA findet die Belege im Datenraum, schlägt eine Antwort vor und beantwortet gleiche Fragen konsistent. Findet sie nichts Belastbares, sagt sie das offen.',
    details: [
      { titel: 'Freigabe bleibt beim Team', text: 'EVA liefert Entwürfe, die Ihr Team bearbeitet und freigibt.' },
      { titel: 'Konsistent über alle Bieter', text: 'Gleiche Fragen bekommen gleiche Antworten, auch in verschiedenen Sprachen.' },
      { titel: 'Volle Transparenz', text: 'Rollen, Rechte und jede Aktivität im Datenraum sind nachvollziehbar.' },
    ],
    fuerWen: ['Transaktionsteams', 'Kanzleien', 'Asset Management'],
    produkte: ['EVANA TDR', 'EVA'],
    demo: {
      art: 'qa',
      bieter: 'Bieter B, Frage 37',
      frage: 'Are there any special termination rights for tenants in building C?',
      entwurf: 'Yes. Two lease agreements in building C contain special termination rights: the tenant on floor 3 may terminate as of 31.12.2027 with six months notice, the tenant on floor 5 in the event of a change of control.',
      quelle: 'MV_Gebaeude-C_OG3.pdf, § 9 · MV_Gebaeude-C_OG5.pdf, § 11',
    },
    szene: 'qa',
    faq: [
      { frage: 'Gibt EVA Antworten automatisch an Bieter weiter?', antwort: 'Nein. EVA schreibt Antwortentwürfe mit Quelle, Ihr Team bearbeitet und gibt sie frei.' },
      { frage: 'Was passiert, wenn EVA keine passende Stelle findet?', antwort: 'Dann sagt EVA das offen und meldet die Lücke, damit Ihr Team gezielt nachliefern kann.' },
      { frage: 'Kann EVA Fragen in anderen Sprachen beantworten?', antwort: 'Ja. EVA antwortet in der Sprache der Frage und beantwortet gleiche Sachverhalte konsistent, auch wenn sie unterschiedlich formuliert sind.' },
    ],
    seo: {
      title: 'KI im Transaktionsdatenraum: Q&A und Due Diligence | EVANA',
      description: 'EVANA TDR mit der KI-Assistentin EVA: Antwortentwürfe auf Bieterfragen mit Quelle, ganze Fragenkataloge in einem Durchgang.',
    },
  },
  {
    slug: 'reports-und-fristen',
    tab: 'Reports und Fristen',
    titel: 'Alle Daten eines Objekts auf einer Seite',
    kurz: 'Der Objektreport fasst zusammen, was in den Dokumenten steckt: Kennzahlen, Vertragsenden, fällige Prüfungen. Fertig zum Export.',
    vorher: 'Für einen Objektüberblick werden Zahlen aus Verträgen, Protokollen und Abrechnungen in Excel zusammengetragen. Bis der Bericht fertig ist, ist er schon wieder alt.',
    mitEvana: 'EVANA erstellt den Report direkt aus den abgelegten Dokumenten und hält ihn aktuell. Fristen und Handlungsbedarf sind farblich markiert.',
    details: [
      { titel: 'Immer aktuell', text: 'Neue Dokumente fließen automatisch in den Report ein.' },
      { titel: 'Fristen im Blick', text: 'Auslaufende Verträge und fällige Prüfungen erscheinen, bevor sie kritisch werden.' },
      { titel: 'Export auf Knopfdruck', text: 'CSV, Excel oder API für Ihre weiteren Auswertungen.' },
    ],
    fuerWen: ['Asset Management', 'Property Management', 'Corporate Real Estate'],
    produkte: ['EVANA 360', 'Report'],
    demo: {
      art: 'report',
      objekt: 'Bürozentrum Mainufer',
      kennzahlen: [
        { label: 'Mietfläche', wert: '7.940 m²' },
        { label: 'Mietverträge', wert: '23' },
        { label: 'Fällige Prüfungen', wert: '3' },
      ],
      vertragsenden: [
        { jahr: '2027', anzahl: 4 },
        { jahr: '2028', anzahl: 7 },
        { jahr: '2029', anzahl: 2 },
        { jahr: '2030', anzahl: 6 },
      ],
    },
    szene: 'report',
    faq: [
      { frage: 'Woher kommen die Daten im Report?', antwort: 'Aus Ihren eigenen Dokumenten, etwa Mietverträgen, Prüfprotokollen und Energieausweisen. Zu jedem Wert sehen Sie die Quelle.' },
      { frage: 'Wie bleibt der Report aktuell?', antwort: 'Neue Dokumente fließen automatisch ein. Fristen und fällige Prüfungen erscheinen, bevor sie kritisch werden.' },
      { frage: 'Kann ich die Daten exportieren?', antwort: 'Ja, als CSV oder Excel oder per API, etwa für Ihre BI-Tools.' },
    ],
    seo: {
      title: 'Objektreport aus Immobiliendokumenten | EVANA',
      description: 'EVANA erstellt Objektreports direkt aus Ihren Dokumenten: Kennzahlen, Vertragsenden und Fristen auf einen Blick, mit Export als CSV, Excel oder API.',
    },
  },
  {
    slug: 'ki-und-systeme-anbinden',
    tab: 'KI und Systeme anbinden',
    titel: 'Ihre KI und Ihre Systeme arbeiten mit denselben Dokumenten',
    kurz: 'Binden Sie Claude, Microsoft Copilot oder Ihr eigenes Modell über MCP an Ihre Immobiliendokumente an. Daten fließen per API in SAP und Ihre Fachsysteme.',
    vorher: 'Allgemeine KI-Assistenten kennen Ihre Dokumente nicht, und Fachsysteme werden von Hand befüllt. Jede neue Anwendung braucht eine eigene Datenaufbereitung.',
    mitEvana: 'EVANA schafft die strukturierte Datenbasis einmal und stellt sie allen Werkzeugen bereit: Ihrer KI über MCP, Ihren Systemen über REST, GraphQL und Power Automate.',
    details: [
      { titel: 'Modelloffen', text: 'Claude, ChatGPT, Microsoft Copilot, DeutschlandGPT oder ein eigenes Modell.' },
      { titel: 'SAP integriert', text: 'Zertifizierte Anbindung an SAP S/4HANA und SAP RE-FX.' },
      { titel: 'Kein Vendor-Lock-in', text: 'Sie behalten die Kontrolle über Modellwahl und Datenfluss.' },
    ],
    fuerWen: ['IT und Digitalisierung', 'Corporate Real Estate', 'Asset Management'],
    produkte: ['EVANA AI', 'Schnittstellen'],
    demo: {
      art: 'anbindung',
      modelle: ['Claude', 'Microsoft Copilot', 'ChatGPT', 'Eigenes LLM'],
      schnittstellen: ['MCP-Server', 'REST und GraphQL', 'Power Automate', 'SAP RE-FX'],
    },
    szene: 'mcp',
    faq: [
      { frage: 'Welche KI-Modelle lassen sich anbinden?', antwort: 'Claude, ChatGPT, Microsoft Copilot, DeutschlandGPT oder Ihr eigenes Sprachmodell, über den MCP-Server von EVANA.' },
      { frage: 'Wie kommen Daten in SAP und andere Systeme?', antwort: 'Über REST- und GraphQL-APIs, den Power-Automate-Connector und die zertifizierte Anbindung an SAP S/4HANA und SAP RE-FX.' },
      { frage: 'Binden wir uns damit an einen KI-Anbieter?', antwort: 'Nein. EVANA ist modelloffen, Sie behalten die Kontrolle über Modellwahl und Datenfluss.' },
    ],
    seo: {
      title: 'Claude, Copilot und SAP an Immobiliendokumente anbinden | EVANA',
      description: 'EVANA stellt Ihre Immobiliendokumente als strukturierte Datenbasis bereit: per MCP für Claude und Copilot, per API für SAP und Fachsysteme.',
    },
  },
];
