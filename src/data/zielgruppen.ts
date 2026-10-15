// Landingpages nach Rolle: speisen /loesungen/ und /loesungen/[slug]/.
// Alle Zahlen kommen aus fakten.ts oder sind in den Referenzen bzw. Pressemitteilungen belegt.
// "fragen" sind typische Beispielfragen der Rolle an EVA (keine Kundendaten).
import { zahlen } from './fakten';

export type Zielgruppe = {
  slug: string;
  bereich: 'immobilien' | 'erweiterung';
  navLabel: string;
  kurz: string;
  titel: string;
  lead: string;
  seo: { title: string; description: string };
  fragen: string[];
  herausforderungen: { titel: string; text: string; dokumente?: string[] }[];
  anwendungsfaelle: { slug: string; satz: string }[];
  dokumente: string[];
  produkte: string[];
  wissen?: string[];
  hinweis?: { eyebrow: string; titel: string; text: string; href: string; label: string };
  zitat?: { text: string; person: string; rolle: string; href?: string };
  faq: { frage: string; antwort: string }[];
};

export const zielgruppen: Zielgruppe[] = [
  {
    slug: 'asset-management',
    bereich: 'immobilien',
    navLabel: 'Asset Management',
    kurz: 'Kennzahlen, Mietverträge und Fristen objektübergreifend abfragen und berichten.',
    titel: 'Asset Management mit Antworten aus jedem Dokument',
    lead: 'Sie verantworten Vermietung, Rendite und die Berichte an Ihre Investoren. EVANA liest Mietverträge, Gutachten und Protokolle Ihres gesamten Bestands und liefert Ihnen Kennzahlen, Fristen und Antworten mit Fundstelle.',
    seo: {
      title: 'KI für das Asset Management von Immobilien | EVANA',
      description: 'EVANA liest Mietverträge, Gutachten und Protokolle Ihres Portfolios und liefert Asset Managern Kennzahlen, Fristen und Antworten mit Fundstelle.',
    },
    fragen: [
      'Welche Mietverträge im Portfolio laufen bis Ende 2028 aus, und welche Optionen haben die Mieter?',
      'Bei welchen Objekten fehlt ein gültiger Energieausweis?',
      'Welche Indexklauseln führen im nächsten Jahr zu einer Mietanpassung?',
    ],
    herausforderungen: [
      {
        titel: 'Berichte an Investoren und Fonds',
        text: 'Quartalsberichte und Investorenanfragen brauchen belastbare Zahlen. Diese stecken in Mietverträgen, Nachträgen und Abrechnungen, verteilt über viele Objekte.',
        dokumente: ['Mietverträge', 'Nachträge', 'Nebenkostenabrechnungen'],
      },
      {
        titel: 'Vertragsenden und Optionen steuern',
        text: 'Auslaufende Mietverträge, Verlängerungsoptionen und Indexklauseln entscheiden über den Cashflow. Wer sie spät sieht, verliert Spielraum in der Verhandlung.',
        dokumente: ['Mietverträge', 'Nachträge', 'Optionsschreiben'],
      },
      {
        titel: 'Ankäufe schnell in den Bestand holen',
        text: 'Mit jedem Ankauf kommen Tausende Dateien in fremder Struktur. Bis sie sauber beim Objekt liegen, vergehen oft Monate.',
        dokumente: ['Datenraum-Exporte', 'Grundbuchauszüge', 'Bewertungsgutachten'],
      },
      {
        titel: 'ESG- und Energiedaten erfassen',
        text: 'Für ESG-Berichte brauchen Sie die Energiedaten aller Objekte. Häufig liegen Energieausweise nur auf Papier oder als Scan vor.',
        dokumente: ['Energieausweise', 'Verbrauchsabrechnungen'],
      },
    ],
    anwendungsfaelle: [
      { slug: 'reports-und-fristen', satz: 'Der Objektreport zeigt Ihnen Kennzahlen und Vertragsenden je Objekt, direkt aus den Dokumenten.' },
      { slug: 'dokumente-befragen', satz: 'EVA beantwortet Ihre Fragen über das ganze Portfolio, mit Fundstelle für das Investorengespräch.' },
      { slug: 'daten-extrahieren', satz: 'Werte aus Gutachten, Grundbuchauszügen und Energieausweisen fließen ohne Abtippen in Ihre Auswertungen.' },
      { slug: 'dokumente-automatisch-ablegen', satz: 'Neue Dokumente und ganze Ankaufsbestände landen automatisch beim richtigen Objekt.' },
    ],
    dokumente: ['Mietverträge und Nachträge', 'Bewertungsgutachten', 'Grundbuchauszüge', 'Energieausweise', 'Nebenkostenabrechnungen', 'Teilungserklärungen', 'Wartungsprotokolle', 'Exposés'],
    produkte: ['EVA', 'Report', 'EVANA 360', 'EVANA AI'],
    wissen: ['kosten-manueller-dokumentenarbeit', 'ki-dokumentenanalyse-immobilien'],
    faq: [
      {
        frage: 'Welche Zeitersparnis ist im Asset Management realistisch?',
        antwort: `Beim Ablegen von Dokumenten spart EVANA im Durchschnitt ${zahlen.stundenProAsset} pro Asset und Jahr. Über die gesamte Dokumentenarbeit sparen Teams bis zu ${zahlen.zeitersparnis} Zeit.`,
      },
      {
        frage: 'Wie schnell übernimmt EVANA einen bestehenden Bestand?',
        antwort: 'Ampega, der Vermögensverwalter des Talanx-Konzerns, hat die Dokumente von über 100 Objekten in zwei Wochen in EVANA 360 übernommen. Für Wirtgen Invest hat EVANA rund 25.000 Dateien aus vier übernommenen Objekten in wenigen Tagen klassifiziert, benannt und strukturiert.',
      },
      {
        frage: 'Wie prüfe ich, ob eine Antwort von EVA stimmt?',
        antwort: 'Jede Antwort verweist auf Datei, Seite und Absatz im Originaldokument. Sie prüfen jede Aussage mit einem Klick, bevor sie in einen Bericht geht.',
      },
      {
        frage: 'Muss ich mein bestehendes DMS ablösen?',
        antwort: 'Das ist nicht nötig. EVANA lässt sich als KI-Schicht über ein bestehendes DMS, SharePoint oder Netzlaufwerke legen. Alternativ nutzen Sie EVANA 360 als Dokumentenmanagement für den Bestand.',
      },
    ],
  },
  {
    slug: 'property-facility-management',
    bereich: 'immobilien',
    navLabel: 'Property und Facility Management',
    kurz: 'Protokolle auswerten, Mängel und Prüffristen im Blick behalten, Eingangspost automatisch ablegen.',
    titel: 'Property und Facility Management mit allen Fristen im Blick',
    lead: 'Ihr Tagesgeschäft lebt von Protokollen, Rechnungen und Mieteranfragen, die per Mail, Post und Portal eintreffen. EVANA ordnet jedes Dokument dem richtigen Objekt zu, findet offene Mängel in Wartungsprotokollen und zeigt Ihnen fällige Prüfungen, bevor sie kritisch werden.',
    seo: {
      title: 'KI für Property und Facility Management | EVANA',
      description: 'Eingangspost automatisch ablegen, Mängel aus Wartungsprotokollen erkennen, Prüffristen im Blick: EVANA für Property und Facility Manager.',
    },
    fragen: [
      'Welche Mängel aus den Wartungsprotokollen sind im Objekt noch offen?',
      'Wann ist die nächste Prüfung der Aufzugsanlage fällig?',
      'Welche Kündigungsfrist gilt für den Reinigungsvertrag?',
    ],
    herausforderungen: [
      {
        titel: 'Eingangspost zuordnen',
        text: 'Rechnungen, Angebote und Protokolle kommen jeden Tag über viele Kanäle. Jemand muss jede Datei öffnen, dem Objekt zuordnen, umbenennen und ablegen.',
        dokumente: ['Rechnungen', 'Angebote', 'E-Mail-Anhänge'],
      },
      {
        titel: 'Mängel und Wartung nachhalten',
        text: 'Mängel stehen verstreut in den Protokollen verschiedener Dienstleister. Für eine Entscheidung über Reparatur oder Erneuerung fehlt der Gesamtüberblick.',
        dokumente: ['Wartungsprotokolle', 'Prüfberichte', 'Mängellisten'],
      },
      {
        titel: 'Betreiberpflichten und Prüffristen',
        text: 'Brandschutz, Aufzüge und technische Anlagen haben feste Prüfintervalle. Eine versäumte Prüfung wird schnell zum Haftungsthema.',
        dokumente: ['Prüfberichte', 'Brandschutznachweise', 'Dienstleisterverträge'],
      },
      {
        titel: 'Mieteranfragen beantworten',
        text: 'Mieter fragen nach Konditionen, Flächen und Nebenkosten. Die Antwort steht im Vertrag, oft versteckt in einem Nachtrag.',
        dokumente: ['Mietverträge', 'Nachträge', 'Nebenkostenabrechnungen'],
      },
    ],
    anwendungsfaelle: [
      { slug: 'dokumente-befragen', satz: 'EVA findet offene Mängel und Fristen über alle Protokolle eines Objekts, mit Fundstelle.' },
      { slug: 'dokumente-automatisch-ablegen', satz: 'Der Document Router legt Rechnungen, Protokolle und Angebote automatisch beim richtigen Objekt ab.' },
      { slug: 'reports-und-fristen', satz: 'Fällige Prüfungen und auslaufende Verträge erscheinen im Objektreport, bevor sie kritisch werden.' },
      { slug: 'daten-extrahieren', satz: 'Werte aus Protokollen und Energieausweisen gehen strukturiert an Ihre Fachsysteme.' },
    ],
    dokumente: ['Wartungsprotokolle', 'Prüfberichte', 'Mängellisten', 'Rechnungen', 'Angebote', 'Dienstleisterverträge', 'Mietverträge', 'Energieausweise', 'Brandschutznachweise'],
    produkte: ['Document Router', 'EVA', 'EVANA 360', 'Report'],
    wissen: ['ki-integration-bestehende-dms', 'kosten-manueller-dokumentenarbeit'],
    faq: [
      {
        frage: 'Kann EVANA E-Mail-Anhänge automatisch ablegen?',
        antwort: 'Ja. EVANA erkennt bei eingehenden Dokumenten und E-Mail-Anhängen Dokumenttyp und Objekt und legt die Datei umbenannt in der richtigen Akte ab. Was unter der von Ihnen festgelegten Schwelle liegt, landet zur Prüfung bei Ihrem Team.',
      },
      {
        frage: 'Erkennt EVANA Mängel in Wartungsprotokollen?',
        antwort: 'Ja. Für einen technischen Property Manager hat EVANA verstreute Wartungsprotokolle ausgewertet und alle dokumentierten Mängel zentral erfasst. Das Team konnte so schneller über Reparaturen und Erneuerungen entscheiden.',
      },
      {
        frage: 'Welche Dokumente erkennt EVANA?',
        antwort: `EVANA erkennt ${zahlen.dokumenttypen} Dokumenttypen der Immobilienwirtschaft mit einer Erkennungsrate von ${zahlen.erkennungsrate}, darunter Wartungsprotokolle, Prüfberichte, Rechnungen, Mietverträge und Energieausweise. Auch Scans und Fotos werden gelesen.`,
      },
    ],
  },
  {
    slug: 'transaktion-due-diligence',
    bereich: 'immobilien',
    navLabel: 'Transaktion und Due Diligence',
    kurz: 'Datenräume aufsetzen, Unterlagen prüfen und Bieterfragen mit Belegen beantworten.',
    titel: 'Transaktionen mit einem Datenraum, der Fragen beantwortet',
    lead: 'Im Ankauf und Verkauf zählt jeder Tag. Mit EVANA TDR steht Ihr Datenraum schnell, die Unterlagen sind klassifiziert, und unsere KI-Assistentin EVA schreibt Antwortentwürfe auf Bieterfragen mit Quelle. Die Freigabe bleibt bei Ihrem Team.',
    seo: {
      title: 'KI für Transaktion und Due Diligence | EVANA',
      description: 'Datenraum schnell aufsetzen, Due-Diligence-Checklisten prüfen, Bieterfragen mit Beleg beantworten: EVANA TDR mit der KI-Assistentin EVA.',
    },
    fragen: [
      'Welche Mietverträge enthalten Sonderkündigungsrechte oder Change-of-Control-Klauseln?',
      'Welche Lasten sind in Abteilung II der Grundbuchauszüge eingetragen?',
      'Welche Unterlagen aus unserer Checkliste fehlen noch im Datenraum?',
    ],
    herausforderungen: [
      {
        titel: 'Verkaufsdatenraum aufsetzen',
        text: 'Vor dem ersten Bieterzugang müssen Tausende Dateien gesichtet, sortiert und einheitlich benannt werden.',
        dokumente: ['Mietverträge', 'Grundbuchauszüge', 'Baugenehmigungen'],
      },
      {
        titel: 'Due Diligence auf Käuferseite',
        text: 'Sie arbeiten lange Checklisten über alle Unterlagen ab, unter Zeitdruck und oft in mehreren Sprachen.',
        dokumente: ['Due-Diligence-Checklisten', 'Mietverträge', 'Gutachten'],
      },
      {
        titel: 'Die Q&A-Phase steuern',
        text: 'In heißen Phasen kommen Hunderte Bieterfragen. Gleiche Fragen sollen gleich beantwortet werden, jede Antwort mit Beleg.',
        dokumente: ['Bieterfragen', 'Q&A-Listen'],
      },
      {
        titel: 'Rechte und Nachvollziehbarkeit',
        text: 'Verkäufer, Käufer und Berater brauchen unterschiedliche Rechte. Jede Aktivität im Datenraum soll dokumentiert sein.',
      },
    ],
    anwendungsfaelle: [
      { slug: 'transaktion-due-diligence', satz: 'EVA schlägt Antworten auf Bieterfragen vor, mit Quelle und in der Sprache der Frage.' },
      { slug: 'dokumente-befragen', satz: 'Ganze Due-Diligence-Checklisten beantwortet EVA in einem Durchgang über den Datenraum.' },
      { slug: 'dokumente-automatisch-ablegen', satz: 'Für den Verkaufsdatenraum klassifiziert und benennt EVANA alle Unterlagen automatisch.' },
      { slug: 'daten-extrahieren', satz: 'Grundbuchauszüge und Gutachten werden zu Datenfeldern für Ihr Bewertungsmodell.' },
    ],
    dokumente: ['Mietverträge und Nachträge', 'Grundbuchauszüge', 'Bewertungsgutachten', 'Baugenehmigungen', 'Teilungserklärungen', 'Energieausweise', 'Due-Diligence-Checklisten', 'Bieterfragen'],
    produkte: ['EVANA TDR', 'EVA', 'EVANA AI'],
    wissen: ['ki-dokumentenanalyse-immobilien'],
    faq: [
      {
        frage: 'Kann ich EVANA TDR ohne EVANA 360 nutzen?',
        antwort: 'Ja. EVANA TDR gibt es als Add-on zu EVANA 360 oder eigenständig als SaaS-Anwendung.',
      },
      {
        frage: 'Wer gibt die Antworten von EVA frei?',
        antwort: 'Die Freigabe liegt immer bei Ihrem Team. EVA liefert Entwürfe mit Quelle, die Ihr Team bearbeitet und freigibt. Findet EVA nichts Belastbares im Datenraum, sagt sie das offen.',
      },
      {
        frage: 'Funktioniert EVA auch mit englischen Bieterfragen?',
        antwort: 'Ja. EVA antwortet in der Sprache der Frage und beantwortet gleiche Fragen konsistent, auch wenn Bieter sie in verschiedenen Sprachen stellen.',
      },
      {
        frage: 'Wie sicher ist der Datenraum?',
        antwort: 'EVANA ist nach ISO 27001 zertifiziert und läuft in der EVANA Secure-Cloud auf Microsoft Azure in der EU. Ein Rollen- und Rechtesystem steuert den Zugriff von Käufern, Verkäufern und Beratern, jede Aktivität ist nachvollziehbar.',
      },
    ],
  },
  {
    slug: 'finanzwirtschaft',
    bereich: 'immobilien',
    navLabel: 'Banken, Versicherer und KVGs',
    kurz: 'Immobilienbestände prüffähig dokumentieren, mit BaFin- und DORA-Anforderungen.',
    titel: 'Prüffähige Immobiliendaten für Banken, Versicherer und KVGs',
    lead: 'Als reguliertes Unternehmen brauchen Sie Daten, die jeder Prüfung standhalten, und einen Dienstleister, der Ihre aufsichtsrechtlichen Pflichten mitträgt. EVANA ist nach ISO 27001 zertifiziert, DORA-konform und BaFin-ready. Jeder ausgelesene Wert bleibt mit seiner Stelle im Originaldokument verknüpft.',
    seo: {
      title: 'KI für Banken, Versicherer und KVGs | EVANA',
      description: 'ISO 27001, DORA-konform, BaFin-ready: EVANA macht Immobiliendokumente für Banken, Versicherer und KVGs prüffähig auswertbar, mit Fundstelle.',
    },
    fragen: [
      'Welche Bewertungsgutachten im Sondervermögen sind älter als zwölf Monate?',
      'Welche Mietverträge im Fonds enthalten eine Indexklausel?',
      'Welche Objekte haben Grundpfandrechte in Abteilung III?',
    ],
    herausforderungen: [
      {
        titel: 'Bewertung und Beleihung',
        text: 'Kennzahlen aus Gutachten mit Hunderten Seiten fließen in Bewertung und Beleihungsprüfung. Jeder Wert muss bis zur Quelle nachvollziehbar sein.',
        dokumente: ['Bewertungsgutachten', 'Grundbuchauszüge'],
      },
      {
        titel: 'Aufsicht und Revision',
        text: 'Aufsicht und interne Revision erwarten eine vollständige, nachvollziehbare Dokumentation des Bestands. Lücken fallen spätestens bei der Prüfung auf.',
        dokumente: ['Mietverträge', 'Gutachten', 'Versicherungspolicen'],
      },
      {
        titel: 'IKT-Dienstleister steuern',
        text: 'Nach DORA steuern und überwachen Sie Ihre IKT-Dienstleister. Ein KI-Anbieter muss diese Anforderungen mittragen können.',
      },
      {
        titel: 'Internationale Bestände',
        text: 'Fonds halten Objekte in mehreren Ländern, mit Dokumenten in verschiedenen Sprachen und Formaten.',
        dokumente: ['Fremdsprachige Mietverträge', 'Energieunterlagen', 'Wertgutachten'],
      },
    ],
    anwendungsfaelle: [
      { slug: 'daten-extrahieren', satz: 'Kennzahlen aus Gutachten und Grundbuchauszügen gehen als Datenfelder in Ihre Bewertungs- und Risikosysteme.' },
      { slug: 'dokumente-befragen', satz: 'EVA beantwortet Prüfungsfragen über den ganzen Bestand, jede Aussage mit Fundstelle.' },
      { slug: 'reports-und-fristen', satz: 'Objektreports liefern den aktuellen Stand je Objekt für Fondsreporting und Aufsicht.' },
      { slug: 'ki-und-systeme-anbinden', satz: 'Die Daten fließen per API in SAP und Ihre Fachsysteme, Ihre KI greift über MCP darauf zu.' },
    ],
    dokumente: ['Bewertungsgutachten', 'Grundbuchauszüge', 'Mietverträge', 'Energieausweise', 'Versicherungspolicen', 'Teilungserklärungen'],
    produkte: ['EVANA AI', 'EVANA 360', 'EVA'],
    wissen: ['ki-dokumentenanalyse-immobilien'],
    faq: [
      {
        frage: 'Ist EVANA für BaFin-regulierte Unternehmen geeignet?',
        antwort: 'Ja. EVANA ist BaFin-ready und auf Banken, Versicherer und KVGs mit aufsichtsrechtlichen Pflichten ausgelegt. Grundlage ist ein nach ISO 27001 zertifiziertes Informationssicherheits-Managementsystem, auditiert durch TÜV Saarland. Dazu kommen jährliche Penetrationstests durch TÜV Austria.',
      },
      {
        frage: 'Erfüllt EVANA die Anforderungen aus DORA?',
        antwort: 'Ja. EVANA erfüllt die Anforderungen des Digital Operational Resilience Act für Finanzunternehmen und ihre IKT-Dienstleister. Die Plattform läuft in der EVANA Secure-Cloud auf Microsoft Azure, Ihre Daten bleiben in der EU.',
      },
      {
        frage: 'Wer darf welche Dokumente sehen?',
        antwort: 'Rollen und Zugriffsrechte vergeben Sie granular von der Gesellschaft bis zum einzelnen Dokument. Anmeldung und Benutzerverwaltung laufen per SSO und SCIM über Ihre bestehende Identity-Lösung.',
      },
      {
        frage: 'Welche Finanzunternehmen arbeiten mit EVANA?',
        antwort: 'Zu unseren Kunden gehören unter anderem Ampega, der Vermögensverwalter des Talanx-Konzerns, die Aachener Grundvermögen KVG und PATRIZIA. Ampega hat die Dokumente von über 100 Objekten in zwei Wochen in EVANA 360 übernommen.',
      },
    ],
  },
  {
    slug: 'oeffentliche-hand',
    bereich: 'immobilien',
    navLabel: 'Öffentliche Hand',
    kurz: 'Gewachsene Bau- und Liegenschaftsakten erschließen und Auskünfte schneller geben.',
    titel: 'Öffentliche Liegenschaften mit erschlossenen Akten verwalten',
    lead: 'Kommunen, Länder und öffentliche Unternehmen verwalten Liegenschaften mit Akten aus Jahrzehnten, oft auf Papier oder als Scan. EVANA klassifiziert diese Bestände, macht sie durchsuchbar und beantwortet Fragen mit Fundstelle. Die Daten werden DSGVO-konform in der EU verarbeitet.',
    seo: {
      title: 'KI für Liegenschaften der öffentlichen Hand | EVANA',
      description: 'EVANA erschließt gewachsene Bau- und Liegenschaftsakten, beantwortet Anfragen mit Fundstelle und verarbeitet Daten DSGVO-konform in der EU.',
    },
    fragen: [
      'Bei welchen Liegenschaften läuft der Energieausweis in den nächsten zwei Jahren ab?',
      'Welche Mietverträge für angemietete Verwaltungsflächen enden 2027?',
      'Welche Auflagen enthält die Baugenehmigung für das Schulgebäude?',
    ],
    herausforderungen: [
      {
        titel: 'Gewachsene Aktenbestände erschließen',
        text: 'Bauakten, Grundbuchauszüge und Verträge liegen in Archiven, auf Netzlaufwerken und in Fachverfahren. Wer eine Information sucht, braucht oft Tage.',
        dokumente: ['Bauakten', 'Grundbuchauszüge', 'Verträge'],
      },
      {
        titel: 'Anfragen belegbar beantworten',
        text: 'Gremien, Rechnungsprüfung und Öffentlichkeit erwarten schnelle und belegbare Auskünfte zu Gebäuden und Flächen.',
        dokumente: ['Mietverträge', 'Prüfberichte', 'Gutachten'],
      },
      {
        titel: 'Sanierung und Förderung vorbereiten',
        text: 'Für Sanierungsfahrpläne und Förderanträge brauchen Sie Zustand und Energiedaten jedes Gebäudes.',
        dokumente: ['Energieausweise', 'Wartungsprotokolle', 'Gutachten'],
      },
      {
        titel: 'Datenhoheit wahren',
        text: 'Öffentliche Daten gehören in eine sichere europäische Infrastruktur, mit klaren Rechten und einem Löschkonzept.',
      },
    ],
    anwendungsfaelle: [
      { slug: 'dokumente-automatisch-ablegen', satz: 'EVANA klassifiziert gescannte Altakten und legt sie je Liegenschaft geordnet ab.' },
      { slug: 'dokumente-befragen', satz: 'EVA beantwortet Anfragen zu Gebäuden und Flächen mit Fundstelle in der Akte.' },
      { slug: 'daten-extrahieren', satz: 'Energie- und Flächendaten stehen für Sanierungsplanung und Förderanträge strukturiert bereit.' },
      { slug: 'ki-und-systeme-anbinden', satz: 'Auch DeutschlandGPT oder Ihr eigenes Sprachmodell binden Sie über MCP an Ihre Dokumente an.' },
    ],
    dokumente: ['Bauakten und Baugenehmigungen', 'Grundbuchauszüge', 'Mietverträge', 'Energieausweise', 'Wartungs- und Prüfprotokolle', 'Gutachten', 'Brandschutznachweise'],
    produkte: ['EVANA 360', 'EVA', 'EVANA AI'],
    wissen: ['foerdermittelpruefung-mit-ki', 'ki-integration-bestehende-dms'],
    faq: [
      {
        frage: 'Wo werden unsere Daten verarbeitet?',
        antwort: 'EVANA läuft in der EVANA Secure-Cloud auf Microsoft Azure, Ihre Daten bleiben in der EU. Die Verarbeitung folgt dem europäischen Datenschutzrecht, mit Rechte- und Löschkonzept.',
      },
      {
        frage: 'Kann EVANA alte Scans und Papierakten auswerten?',
        antwort: 'Ja. EVANA liest gescannte Dokumente und Bildinhalte mit. Für die Aachener Grundvermögen hat EVANA zum Beispiel 800 physische Grundbücher in 48 Stunden ausgewertet.',
      },
      {
        frage: 'Können wir ein eigenes Sprachmodell nutzen?',
        antwort: 'Ja. Über den MCP-Server binden Sie Claude, Microsoft Copilot, DeutschlandGPT oder ein eigenes Modell an Ihre Dokumente an. Sie behalten die Kontrolle über Modellwahl und Datenfluss.',
      },
    ],
  },
  {
    slug: 'corporate-real-estate',
    bereich: 'erweiterung',
    navLabel: 'Corporate Real Estate',
    kurz: 'Standorte, Mietverträge und Betreiberpflichten im Konzern zentral steuern.',
    titel: 'Corporate Real Estate mit einer Datenbasis für alle Standorte',
    lead: 'Im Konzern liegen Immobiliendokumente verteilt über Standorte, Gesellschaften und Dienstleister. EVANA führt sie in einer Struktur zusammen, erkennt Dubletten und stellt die Daten Ihren Systemen bereit, von SAP RE-FX bis zum Reporting.',
    seo: {
      title: 'KI-Dokumentenmanagement für Corporate Real Estate | EVANA',
      description: 'Standortdokumente im Konzern zentral strukturieren, Fristen steuern und Daten an SAP RE-FX und Reporting übergeben: EVANA für Corporate Real Estate.',
    },
    fragen: [
      'Welche Standortmietverträge laufen in den nächsten 18 Monaten aus?',
      'An welchen Standorten fehlt der aktuelle Prüfbericht der Brandmeldeanlage?',
      'Welche Verträge enthalten Verlängerungsoptionen zu festen Konditionen?',
    ],
    herausforderungen: [
      {
        titel: 'Viele Standorte, viele Ablagen',
        text: 'Jeder Standort führt seine eigene Ablage, oft in unterschiedlichen Strukturen und Sprachen.',
        dokumente: ['Mietverträge', 'Kaufverträge', 'Grundbuchauszüge'],
      },
      {
        titel: 'Betreiberverantwortung',
        text: 'Als Betreiber verantworten Sie Prüfungen und Wartung. Die Nachweise kommen von vielen externen Dienstleistern.',
        dokumente: ['Prüfberichte', 'Wartungsprotokolle', 'Dienstleisterverträge'],
      },
      {
        titel: 'Daten für Controlling und ERP',
        text: 'Flächen, Kosten und Laufzeiten sollen in SAP und im Reporting stimmen, ohne dass jemand sie abtippt.',
        dokumente: ['Mietverträge', 'Nebenkostenabrechnungen'],
      },
      {
        titel: 'Zukäufe integrieren',
        text: 'Mit jeder Übernahme kommen ganze Dokumentenbestände dazu, die schnell nutzbar sein müssen.',
        dokumente: ['Datenraum-Exporte', 'Baugenehmigungen'],
      },
    ],
    anwendungsfaelle: [
      { slug: 'ki-und-systeme-anbinden', satz: 'Die Daten fließen zertifiziert in SAP S/4HANA und SAP RE-FX und per API in Ihr Reporting.' },
      { slug: 'reports-und-fristen', satz: 'Vertragsenden und fällige Prüfungen aller Standorte erscheinen auf einen Blick.' },
      { slug: 'dokumente-automatisch-ablegen', satz: 'Dokumente aus allen Standorten landen geordnet in einer gemeinsamen Struktur.' },
      { slug: 'dokumente-befragen', satz: 'EVA beantwortet Fragen über alle Standorte hinweg, mit Fundstelle.' },
    ],
    dokumente: ['Mietverträge', 'Kaufverträge', 'Grundbuchauszüge', 'Baugenehmigungen', 'Prüfberichte', 'Wartungsprotokolle', 'Dienstleisterverträge', 'Energieausweise'],
    produkte: ['EVANA 360', 'EVANA AI', 'Report', 'EVA'],
    wissen: ['dokumentenmanagement-corporate-real-estate', 'ki-integration-bestehende-dms'],
    faq: [
      {
        frage: 'Lässt sich EVANA an SAP anbinden?',
        antwort: 'Ja. EVANA verfügt über eine zertifizierte Anbindung an SAP S/4HANA und SAP RE-FX. Weitere Systeme binden Sie über REST- und GraphQL-APIs oder Power Automate an.',
      },
      {
        frage: 'Wie läuft die Einführung über viele Standorte?',
        antwort: 'Bei einem globalen Technologiekonzern erfolgte die Einführung schrittweise pro Standort. Das Team sammelte die Dokumente zentral, EVANA klassifizierte und bereinigte sie und erkannte Dubletten automatisch.',
      },
      {
        frage: 'Können externe Dienstleister mit EVANA arbeiten?',
        antwort: 'Ja. Über Rollen und Rechte bis auf das einzelne Dokument erhalten Dienstleister genau den Zugriff, den sie brauchen. Im Projekt des Technologiekonzerns rufen externe Dienstleister Unterlagen selbstständig ab und legen sie eigenständig ab.',
      },
    ],
  },
  {
    slug: 'filialnetze-franchise',
    bereich: 'erweiterung',
    navLabel: 'Filialnetze und Franchise',
    kurz: 'Mietverträge, Genehmigungen und Nachweise vieler Standorte im Griff, mit dem ROI-Sprint als Einstieg.',
    titel: 'Filialnetze und Franchise-Systeme mit jeder Frist im Blick',
    lead: 'Mit jedem Standort wachsen Mietverträge, Genehmigungen und Prüfnachweise. EVANA liest diese Unterlagen, erkennt Fristen und Indexklauseln und meldet sich, bevor etwas abläuft. Im ROI-Sprint testen Sie das 14 Tage lang an Ihren eigenen Standorten.',
    seo: {
      title: 'KI für Filialnetze und Franchise-Systeme | EVANA',
      description: 'Mietverträge, Genehmigungen und Nachweise aller Standorte automatisch auswerten. Testen Sie EVANA im ROI-Sprint an Ihren eigenen Unterlagen.',
    },
    hinweis: {
      eyebrow: 'ROI-Sprint',
      titel: 'Testen Sie EVANA 14 Tage an Ihren eigenen Standorten',
      text: 'Im ROI-Sprint arbeitet EVANA zwei Wochen lang mit Ihren echten Mietverträgen und Nachweisen. Sie erhalten Onboarding-Support und am Ende einen Messreport, der zeigt, was EVANA gefunden hat und was in Ihren Unterlagen fehlt. Ihre IT muss dafür nicht eingebunden werden.',
      href: '/roi-sprint/',
      label: 'Zum ROI-Sprint',
    },
    fragen: [
      'Welche Verträge haben eine Indexklausel ohne Kappungsgrenze?',
      'Welche Standortmietverträge verlängern sich automatisch, wenn wir bis Jahresende nicht kündigen?',
      'An welchen Standorten läuft die Betriebsgenehmigung in diesem Jahr ab?',
    ],
    herausforderungen: [
      {
        titel: 'Mietkonditionen aller Standorte',
        text: 'Nettokaltmiete, Indexklausel, Laufzeit und Verlängerungsoptionen stehen in Hunderten Verträgen und Nachträgen. Eine Übersicht entsteht meist von Hand.',
        dokumente: ['Gewerbemietverträge', 'Nachträge'],
      },
      {
        titel: 'Genehmigungen und Nachweise',
        text: 'Baugenehmigung, Nutzungsänderung, Betriebsgenehmigung und Brandschutznachweis haben Fristen. Eine abgelaufene Genehmigung kostet Bußgeld, im schlechten Fall die Schließung des Standorts.',
        dokumente: ['Betriebsgenehmigungen', 'Brandschutznachweise', 'Energieausweise'],
      },
      {
        titel: 'Vollständig zur Revision',
        text: 'Vor jeder Revision müssen Wartungsprotokolle, Prüfberichte und Versicherungspolicen je Standort vorliegen. Fehlende Unterlagen fallen oft erst in der Prüfung auf.',
        dokumente: ['Wartungsprotokolle', 'Prüfberichte', 'Versicherungspolicen'],
      },
      {
        titel: 'Zentrale und Partner zusammenbringen',
        text: 'Im Franchise-System liegen die Verträge bei den Partnern. Die Zentrale braucht Transparenz, die Partner brauchen einen eigenen Nutzen.',
        dokumente: ['Gewerbemietverträge'],
      },
    ],
    anwendungsfaelle: [
      { slug: 'reports-und-fristen', satz: 'Auslaufende Verträge und Genehmigungen aller Standorte erscheinen rechtzeitig im Report.' },
      { slug: 'dokumente-befragen', satz: `EVA beantwortet Fragen zu jedem Standort in ${zahlen.evaAntwortzeit}, mit Fundstelle im Vertrag.` },
      { slug: 'daten-extrahieren', satz: 'Miete, Indexklausel, Laufzeiten und Kündigungsfristen werden aus jedem Vertrag strukturiert ausgelesen.' },
      { slug: 'dokumente-automatisch-ablegen', satz: 'Neue Nachweise landen automatisch beim richtigen Standort.' },
    ],
    dokumente: ['Gewerbemietverträge und Nachträge', 'Baugenehmigungen', 'Nutzungsänderungen', 'Betriebsgenehmigungen', 'Energieausweise', 'Brandschutznachweise', 'Wartungsprotokolle', 'Prüfberichte', 'Versicherungspolicen'],
    produkte: ['EVA', 'Report', 'EVANA 360', 'EVANA AI'],
    faq: [
      {
        frage: 'Wir haben SharePoint oder ein DMS. Wozu brauchen wir EVANA?',
        antwort: 'EVANA liest die Inhalte Ihrer Dokumente und arbeitet parallel zu Ihrer bestehenden Ablage. Welche Verträge in 60 Tagen auslaufen und zu welchen Konditionen sie sich verlängern, beantwortet Ihnen EVA direkt aus den Verträgen. Ersetzen müssen Sie dafür nichts.',
      },
      {
        frage: 'Müssen Franchisenehmer ihre Konditionen offenlegen?',
        antwort: 'Das müssen sie nicht. Franchisenehmer laden ihre Verträge für sich selbst hoch und haben sofort einen eigenen Nutzen: Fristenwarnung, Vollständigkeit und Zeitersparnis. Der Nehmer bestimmt selbst, was die Zentrale sieht. So entsteht Transparenz freiwillig und ohne Anweisung.',
      },
      {
        frage: 'Muss unsere IT eingebunden werden?',
        antwort: 'Für den ROI-Sprint ist das nicht nötig. EVANA ist eine Cloud-Lösung ohne Server, Installation oder Schnittstelle. Erst wenn Sie später Systeme anbinden wollen, kommt die IT ins Spiel.',
      },
      {
        frage: 'Wie zuverlässig liest EVANA alte Scans?',
        antwort: `Die Erkennungsrate liegt bei ${zahlen.erkennungsrate}, auch bei eingescannten Altverträgen. Jeder ausgelesene Wert ist mit der Fundstelle im Originaldokument verbunden, Sie können ihn also in Sekunden prüfen und korrigieren.`,
      },
    ],
  },
  {
    slug: 'kanzleien-beratung',
    bereich: 'erweiterung',
    navLabel: 'Kanzleien und Beratung',
    kurz: 'Legal Due Diligence für Immobilientransaktionen mit Daten aus Grundbuch und Vertrag.',
    titel: 'Legal Due Diligence für Immobilien mit KI',
    lead: 'In der Legal Due Diligence prüfen Sie Grundbuchauszüge, Miet- und Dienstleistungsverträge unter engem Zeitplan. EVANA extrahiert die relevanten Angaben automatisch, erkennt auch handschriftliche Streichungen im Grundbuch und liefert die Daten strukturiert für Ihren Bericht. EVANA ist seit mehreren Jahren auf der Legal Tech Map Germany vertreten.',
    seo: {
      title: 'KI für Legal Due Diligence bei Immobilien | EVANA',
      description: 'Grundbuchauszüge, Miet- und Dienstleistungsverträge automatisch auswerten. Gemeinsam mit Noerr entwickelt, für Kanzleien und Berater.',
    },
    hinweis: {
      eyebrow: 'Kooperation',
      titel: 'Gemeinsam mit Noerr entwickelt',
      text: 'EVANA und die Real Estate Investment Group der Wirtschaftskanzlei Noerr haben das KI-Tool für die Legal Due Diligence gemeinsam entwickelt und auf die Extraktion von Grundbuchauszügen trainiert. Noerr war der erste Pilotkunde.',
      href: '/news/noerr-kooperation-legal-due-diligence/',
      label: 'Zur Pressemitteilung',
    },
    zitat: {
      text: 'Die KI-gestützte Transaktionsberatung bildet ein zentrales Zukunftsfeld, zu der das neue Tool von EVANA einen wesentlichen Beitrag leisten kann. Zudem ist die automatisierte Gewinnung einer belastbaren Datenbasis elementare Grundlage der fortschreitenden Digitalisierung der Immobilienwirtschaft.',
      person: 'Christoph Brenzinger',
      rolle: 'Rechtsanwalt und Partner, Noerr',
      href: '/news/noerr-kooperation-legal-due-diligence/',
    },
    fragen: [
      'Welche Belastungen sind in Abteilung II und III der Grundbuchauszüge eingetragen?',
      'Welche Mietverträge enthalten Change-of-Control-Klauseln?',
      'Auf welche Nachträge verweisen die Mietverträge, und liegen sie im Datenraum vor?',
    ],
    herausforderungen: [
      {
        titel: 'Grundbuchauszüge auswerten',
        text: 'Eigentümer, Belastungen und Rechte Dritter müssen aus jedem Auszug übernommen werden, einschließlich handschriftlicher Streichungen.',
        dokumente: ['Grundbuchauszüge', 'Teilungserklärungen'],
      },
      {
        titel: 'Mietverträge im Paket prüfen',
        text: 'Bei Portfoliotransaktionen sind Hunderte Mietverträge samt Nachträgen auf Laufzeiten, Optionen und Sonderkündigungsrechte zu prüfen.',
        dokumente: ['Mietverträge', 'Nachträge'],
      },
      {
        titel: 'Red-Flag-Report unter Zeitdruck',
        text: 'Mandanten erwarten schnelle und belastbare Ergebnisse. Jede Feststellung braucht ihren Beleg im Datenraum.',
        dokumente: ['Dienstleistungsverträge', 'Baugenehmigungen'],
      },
      {
        titel: 'Gutachten für Beratung und Bewertung',
        text: 'Berater und Gutachter übernehmen Kennzahlen aus umfangreichen Gutachten in ihre Modelle.',
        dokumente: ['Bewertungsgutachten'],
      },
    ],
    anwendungsfaelle: [
      { slug: 'daten-extrahieren', satz: 'Angaben aus Grundbuchauszügen, Miet- und Dienstleistungsverträgen werden per Knopfdruck zu Datenfeldern.' },
      { slug: 'transaktion-due-diligence', satz: 'Im Transaktionsdatenraum entwirft EVA Antworten auf Fragen, jede mit Quelle.' },
      { slug: 'dokumente-befragen', satz: 'Prüffragen beantwortet EVA über alle Unterlagen, jede Aussage mit Fundstelle.' },
    ],
    dokumente: ['Grundbuchauszüge', 'Mietverträge und Nachträge', 'Dienstleistungsverträge', 'Teilungserklärungen', 'Baugenehmigungen', 'Bewertungsgutachten'],
    produkte: ['EVANA AI', 'EVANA TDR', 'EVA'],
    wissen: ['ki-dokumentenanalyse-immobilien'],
    faq: [
      {
        frage: 'Können Kanzleien EVANA ohne weitere Produkte nutzen?',
        antwort: 'Ja. Das KI-Tool für die Legal Due Diligence ist als Software as a Service unabhängig von weiteren Angeboten von EVANA buchbar.',
      },
      {
        frage: 'Welche Dokumente wertet EVANA in der Legal Due Diligence aus?',
        antwort: `Gemeinsam mit Noerr wurde das System zunächst auf Grundbuchauszüge trainiert, einschließlich handschriftlicher Streichungen. Dazu kommen Miet- und Dienstleistungsverträge. Insgesamt erkennt EVANA ${zahlen.dokumenttypen} Dokumenttypen.`,
      },
      {
        frage: 'Werden Mandantendaten zwischengespeichert?',
        antwort: 'Die Extraktion erfolgt ISO-konform und ohne Zwischenspeicherung der Daten. EVANA ist nach ISO 27001 zertifiziert und verarbeitet Daten DSGVO-konform in der EU.',
      },
      {
        frage: 'Wie prüfe ich die extrahierten Angaben?',
        antwort: 'Jeder extrahierte Wert bleibt mit seiner Stelle im Dokument verknüpft. Ihr Team prüft jede Angabe mit einem Klick im Original, bevor sie in den Bericht geht.',
      },
    ],
  },
  {
    slug: 'healthcare-pflege',
    bereich: 'erweiterung',
    navLabel: 'Healthcare und Pflege',
    kurz: 'Betriebsgenehmigungen, Verträge und Wartungsnachweise von Kliniken und Einrichtungen im Blick.',
    titel: 'Gesundheitsimmobilien mit allen Nachweisen im Griff',
    lead: 'Kliniken und Pflegeeinrichtungen sind Immobilien mit besonders vielen Pflichten. Betriebsgenehmigungen, Verträge und Wartungsnachweise müssen aktuell und schnell auffindbar sein. EVANA bringt seine Erfahrung mit Immobiliendokumenten in dieses Umfeld. Zu unseren Kunden gehört das Universitätsklinikum Schleswig-Holstein (UKSH).',
    seo: {
      title: 'Dokumentenmanagement für Kliniken und Pflege | EVANA',
      description: 'Betriebsgenehmigungen, Verträge und Wartungsnachweise von Kliniken und Pflegeeinrichtungen automatisch erfassen und Fristen im Blick behalten.',
    },
    fragen: [
      'Welche Betriebsgenehmigungen laufen in den nächsten zwölf Monaten ab?',
      'Welche Wartungsverträge der Gebäudetechnik verlängern sich automatisch?',
      'Für welche Anlagen fehlt der aktuelle Prüfbericht?',
    ],
    herausforderungen: [
      {
        titel: 'Genehmigungen und Auflagen',
        text: 'Betriebsgenehmigungen und Auflagen bestimmen, wie ein Haus betrieben werden darf. Ihre Fristen müssen jederzeit bekannt sein.',
        dokumente: ['Betriebsgenehmigungen', 'Baugenehmigungen', 'Brandschutznachweise'],
      },
      {
        titel: 'Verträge mit Vermietern und Dienstleistern',
        text: 'Mietverträge, Wartungs- und Dienstleistungsverträge haben unterschiedliche Laufzeiten und Kündigungsfristen.',
        dokumente: ['Mietverträge', 'Wartungsverträge', 'Dienstleistungsverträge'],
      },
      {
        titel: 'Wartung und Prüfungen der Gebäudetechnik',
        text: 'Für technische Anlagen gelten feste Prüfintervalle. Die Nachweise kommen von vielen verschiedenen Dienstleistern.',
        dokumente: ['Wartungsprotokolle', 'Prüfberichte'],
      },
    ],
    anwendungsfaelle: [
      { slug: 'dokumente-befragen', satz: 'EVA findet offene Mängel und Fristen in Protokollen und Verträgen, mit Fundstelle.' },
      { slug: 'reports-und-fristen', satz: 'Ablaufende Genehmigungen und Verträge erscheinen rechtzeitig im Report.' },
      { slug: 'dokumente-automatisch-ablegen', satz: 'Neue Nachweise landen automatisch beim richtigen Gebäude.' },
    ],
    dokumente: ['Betriebsgenehmigungen', 'Baugenehmigungen', 'Brandschutznachweise', 'Mietverträge', 'Wartungsverträge', 'Dienstleistungsverträge', 'Wartungsprotokolle', 'Prüfberichte'],
    produkte: ['EVANA 360', 'EVA', 'Report'],
    faq: [
      {
        frage: 'Ist EVANA im Gesundheitswesen im Einsatz?',
        antwort: 'Ja. Das Universitätsklinikum Schleswig-Holstein (UKSH) gehört zu den Kunden von EVANA.',
      },
      {
        frage: 'Wie sind sensible Daten geschützt?',
        antwort: 'EVANA ist nach ISO 27001 zertifiziert, wird regelmäßig durch unabhängige Penetrationstests geprüft und verarbeitet Daten DSGVO-konform in der EU. Rollen und Rechte lassen sich bis auf das einzelne Dokument vergeben.',
      },
      {
        frage: 'Welche Dokumente kann EVANA verarbeiten?',
        antwort: `EVANA ist auf Immobiliendokumente spezialisiert und erkennt ${zahlen.dokumenttypen} Dokumenttypen, darunter Genehmigungen, Verträge, Prüfberichte und Wartungsprotokolle. Welche Ihrer Unterlagen EVANA bereits kennt, klären wir gemeinsam in der Demo.`,
      },
    ],
  },
];

export const zielgruppeNach = (slug: string) => zielgruppen.find((z) => z.slug === slug);
