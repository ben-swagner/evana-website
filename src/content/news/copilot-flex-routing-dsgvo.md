---
titel: "Copilot Flex Routing: Das DSGVO-Problem. Marc Arndt im Interview"
datum: 2026-04-29
kategorie: Interview
kurz: "Microsoft leitet Copilot-Anfragen bei Kapazitätsengpässen in Rechenzentren außerhalb der EU um. Marc Arndt, VP Software Engineering und Architecture bei EVANA, erklärt, was das für regulierte Unternehmen bedeutet und wie EVANA Daten in der EU hält."
altUrl: /copilot-flex-routing-dsgvo/
bild: https://evana.ai/wp-content/uploads/2026/04/Marc-Arndt-Interview-1.png
seoTitle: "Copilot Flex Routing und DSGVO: Interview mit Marc Arndt"
seoDescription: "Was ist Copilot Flex Routing? EVANA erklärt das DSGVO-Risiko und was (regulierte) Unternehmen jetzt wissen müssen."
---

Microsoft hat mit Copilot Flex Routing (live seit 17. April 2026) eine Funktion eingeführt, die Unternehmensdaten bei Kapazitätsengpässen automatisch in die USA, nach Kanada oder Australien umleitet. Ein Opt-in, einen Hinweis oder eine Wahlmöglichkeit gibt es dabei nicht.

Wir haben Marc Arndt, unseren VP Software Engineering und Architecture, gefragt, was das konkret für Unternehmen in Europa bedeutet, was regulierte Organisationen heute von einer KI-Lösung verlangen müssen und wie EVANA sicherstellt, dass Ihre Daten die EU nie verlassen.

## Viele Unternehmen setzen derzeit auf KI-Assistenten wie Microsoft Copilot. Warum wird die Frage der Datenverarbeitung und des Datenspeicherorts gerade jetzt so kritisch diskutiert?

Das ist derzeit aus mehreren miteinander verbundenen Gründen ein hochaktuelles Thema.

### 1. DSGVO und Datentransfers

Wenn Mitarbeitende KI-Assistenten wie Copilot nutzen, werden Anfragen häufig auf Servern verarbeitet, die sich in den USA befinden. Für Unternehmen mit Sitz in der EU löst das DSGVO-Bedenken aus: Personenbezogene Daten, die ohne angemessene Schutzmaßnahmen außerhalb der EU verarbeitet werden, verstoßen gegen das Datenschutzrecht. Die EU hat hier zuletzt erheblichen Druck gemacht, insbesondere nach dem Schrems-II-Urteil, das den Privacy-Shield-Rahmen gekippt hat.

### 2. Datenhoheit

Unternehmen wollen wissen, wo ihre Daten physisch gespeichert werden und welcher Rechtsordnung sie damit unterliegen. US-amerikanische Cloud-Anbieter sind dem CLOUD Act unterworfen, das heißt, US-Behörden können unter Umständen auf Daten zugreifen, die auf US-Servern liegen. Das ist für europäische Unternehmen mit sensiblen Daten ein erhebliches Risiko.

### 3. Vertrauliche Datenlecks

Mitarbeitende fügen in KI-Assistenten ganz selbstverständlich sensible Informationen ein: Verträge, Quellcode, personenbezogene Daten, Unternehmensstrategien. Viele KI-Anbieter

- speichern Eingaben für das Modelltraining (sofern kein Opt-out explizit konfiguriert wurde),
- halten Daten vorübergehend zur Verarbeitung vor,
- geben Daten unter Umständen an Dritte weiter.

### 4. Regulatorischer Druck

Europäische Datenschutzbehörden wie der BfDI in Deutschland oder die CNIL in Frankreich haben begonnen, Leitlinien zu erlassen und Untersuchungen zum Einsatz von KI-Assistenten in Unternehmen einzuleiten. Italien hat ChatGPT 2023 vorübergehend verboten, weil datenschutzrechtliche Bedenken bestanden.

### 5. Das „Microsoft-Copilot-Problem“

Copilot ist tief in Microsoft 365 integriert und kann auf E-Mails, Dokumente und Teams-Chats zugreifen. Das ist einerseits extrem leistungsfähig, bedeutet aber gleichzeitig, dass noch mehr sensible Daten durch Microsofts Infrastruktur fließen. IT-Sicherheitsverantwortliche (CISOs) in Unternehmen fragen sich zunehmend: „Was macht Microsoft eigentlich mit diesen Daten?“

Es ist die Kombination aus tiefer Integration (KI sieht mehr von Ihren Daten als je zuvor), grenzüberschreitender Verarbeitung (häufig in die USA) und der Ungewissheit darüber, wie Anbieter mit diesen Daten umgehen und sie absichern. Und das alles, während Regulierungsbehörden aktiv beobachten und Bußgelder verhängen.

## Was bedeutet Microsoft Flex Routing konkret für Unternehmen in Europa, und warum ist es aus Sicht von Datenschutz, Compliance und Risikomanagement mehr als ein technisches Detail?

Microsoft Flex Routing wurde am 17. April 2026 live geschaltet. Das bedeutet:

- Wenn die Copilot-Kapazität in der EU knapp ist, können Ihre Daten (Prompts, E-Mails, Dateien) automatisch und standardmäßig zur KI-Inferenz in die USA, nach Kanada oder Australien übertragen werden.
- Ruhende Daten verbleiben in der EU, die Inferenz und Verarbeitung kann die EU jedoch verlassen.

### Warum das ein echtes Compliance-Problem ist

- DSGVO: Inferenz ist Verarbeitung. Eine grenzüberschreitende Übertragung erfordert eine Rechtsgrundlage.
- NIS2 und DORA: Stille Routing-Änderungen sind ein Anbieterrisiko, das unter Umständen offengelegt werden muss.
- Microsoft hat Flex Routing als Opt-out eingeführt. Die meisten Administratoren werden die Standardeinstellung nicht ändern.
- Die Verantwortung, das zu erkennen, zu bewerten und zu handeln, liegt bei Ihrem Unternehmen.

Bei herkömmlichen Softwarebereitstellungen prüfen IT-Administratoren neue Funktionen und geben sie explizit frei. Copilot Flex scheint dagegen als automatische Standardfunktion eingeführt worden zu sein. Viele Organisationen sind damit unwissentlich einer ausgeweiteten Datenverarbeitung ausgesetzt, der sie niemals bewusst zugestimmt haben.

Gemäß Art. 6 DSGVO ist eine gültige Rechtsgrundlage erforderlich, in der Regel Einwilligung oder berechtigtes Interesse, bevor personenbezogene Daten verarbeitet werden dürfen. Eine Einwilligung muss freiwillig, spezifisch, informiert und eindeutig sein. Indem Kunden standardmäßig eingeschrieben werden, hat Microsoft diese Anforderung nach Ansicht von Kritikern umgangen. Das betrifft insbesondere Organisationen in der EU, deren Mitarbeiter-E-Mails, Dokumente und Konversationen nun durch KI-Verarbeitungspipelines fließen. Das Argument „es stand in den Nutzungsbedingungen“ gilt nicht als informierte, bewusste Einwilligung, zumal der Opt-out tief in Admin-Panels vergraben ist und die Änderungen nicht proaktiv kommuniziert wurden.

Mehrere europäische Datenschutzbehörden prüfen, ob das Einführungsmodell von Copilot Flex gegen die Einwilligungs- und Transparenzpflichten der DSGVO verstößt. In Deutschland und Frankreich wurden Sammelklagen eingereicht, die Schadensersatz wegen unbefugter Datenverarbeitung fordern. Microsofts Position, dass Copilot Flex eine legitime Erweiterung bestehender Vertragsbeziehungen sei, dürfte regulatorisch schwer zu halten sein, da Behörden zunehmend klarstellen, dass vertragliche Praktikabilität die datenschutzrechtlichen Grundrechte nicht überwiegt.

## Welche Anforderungen stellen regulierte oder datensensible Unternehmen heute an eine KI-Lösung, wenn sie DSGVO-konform arbeiten und die Kontrolle über ihre Daten behalten wollen?

Das ist eine komplexe Frage, die sich angesichts des Wettlaufs zwischen Gesetzgebung und Technologie rasant weiterentwickelt. Eine kurze Übersicht über die aktuelle Lage zeigt, warum es bei Ihren Daten entscheidend ist, den richtigen Partner zu wählen.

### Rechtsgrundlage und vertragliche Basis

| Anforderung | Bedeutung |
| --- | --- |
| Art. 28 DSGVO (AV-Vertrag) | Ein unterzeichneter Auftragsverarbeitungsvertrag mit dem KI-Anbieter, der Zweck, Umfang und Grenzen der Verarbeitung explizit festlegt |
| Kein automatisches Onboarding | Explizites Opt-in statt Opt-out. Eine stille oder automatische Aktivierung von KI-Funktionen ist für viele EU-Organisationen ein sofortiges Ausschlusskriterium |
| Klare Zweckbestimmung | Die KI darf Daten nur für den spezifisch angegebenen Zweck verwenden. Modelltraining, Verbesserung oder „Service-Optimierung“ erfordern eine gesonderte Einwilligung |
| Datensparsamkeit | Die KI verarbeitet nur das, was für den jeweiligen Zweck unbedingt erforderlich ist. Komplette E-Mail-Archive, alle Dokumente oder vollständige Chat-Historien gehören standardmäßig nicht dazu |

### Datenspeicherort und Datenhoheit

- EU-Datenspeicherort: Alle Daten werden ausschließlich innerhalb von EU und EWR verarbeitet und gespeichert. Eine Weiterleitung in Drittländer erfolgt nur mit expliziter Genehmigung.
- Keine Abhängigkeit von US-Hyperscalern als Standard: Anbieter müssen EU-native Bereitstellungsoptionen (zum Beispiel deutsche oder französische Rechenzentren) oder On-Premises-Betrieb anbieten.
- Mechanismen für grenzüberschreitende Übertragungen: Standardvertragsklauseln (SCC), Angemessenheitsbeschlüsse oder gleichwertige Rechtsinstrumente für jede notwendige Datenübertragung ins Ausland.
- CLOUD-Act-Bewusstsein: US-Anbieter sind gesetzlich verpflichtet, Daten an US-Behörden herauszugeben, unabhängig vom Speicherort. Für sensible EU-Daten ist das ein erhebliches Warnsignal.

### Datenaufbewahrung, Löschung und Portabilität

- Definierte Aufbewahrungsfristen: Klare, vertraglich festgelegte Fristen, nach denen Daten gelöscht werden, ohne vage Formulierungen.
- Recht auf Löschung: Der Anbieter muss Löschanfragen ohne unangemessene Verzögerung nachkommen und den Nachweis erbringen.
- Datenportabilität: Der Kunde kann jederzeit alle seine Daten in einem nutzbaren, portablen Format abrufen (Art. 20 DSGVO).
- Kein Training mit Kundendaten: Ein explizites vertragliches Verbot der Nutzung von Kundendaten für das Training von KI-Modellen. Für die meisten regulierten Unternehmen ist das nicht verhandelbar.

### Sicherheit und technische Maßnahmen (Art. 32 DSGVO)

- Verschlüsselung im Ruhezustand und bei der Übertragung: Mindeststandard AES-256 und TLS 1.2+
- Zugangskontrollen: Rollenbasierte Zugriffskontrolle (RBAC) und Audit-Logging mit Nachweis, wer wann worauf zugegriffen hat
- Pseudonymisierung und Anonymisierung: Sensible Daten sollten, soweit möglich, vor der Verarbeitung de-identifiziert werden
- Meldung von Zwischenfällen: Der Anbieter muss den Kunden innerhalb von 72 Stunden nach Bekanntwerden über Datenpannen informieren (Art. 33 DSGVO)
- Penetrationstests und Zertifizierungen: SOC 2 Typ II, ISO 27001 und unabhängige Sicherheitsaudits werden zunehmend vorausgesetzt

### Transparenz, Erklärbarkeit und menschliche Kontrolle

- Erklärbarkeit: Unternehmen müssen nachvollziehen können, warum eine KI eine bestimmte Ausgabe erzeugt hat.
- Keine Black-Box-Verarbeitung: Bei folgenreichen Entscheidungen (Einstellung, Kreditvergabe, medizinische Triage) erfordert die automatisierte Entscheidungsfindung gemäß Art. 22 DSGVO eine menschliche Prüfung und die Möglichkeit, die Entscheidung anzufechten.
- Audit-Trails: Vollständige Protokollierung aller KI-Prompts, Eingaben und Ausgaben zur Gewährleistung der Nachvollziehbarkeit.
- Bias- und Genauigkeitsüberwachung: Laufende Prüfung, ob KI-Ausgaben diskriminieren oder bei geschützten Gruppen wesentlich fehlerhafte Ergebnisse liefern.

### Branchenspezifische Anforderungen

Für Gesundheitswesen und Medizintechnik gelten zusätzliche Anforderungen:

| Thema | Anforderung |
| --- | --- |
| Art. 9 DSGVO | Gesundheitsdaten sind „besonders schützenswerte“ Daten. Die Hürde für eine rechtmäßige Verarbeitung ist sehr hoch, in der Regel sind eine explizite Einwilligung und ein spezifischer Zweck nötig. |
| HIPAA (bei US-Bezug) | Wenn US-Stellen die Daten berühren, können HIPAA Business Associate Agreements erforderlich sein. |
| Medizinprodukteverordnung | Trägt die KI zu klinischen Entscheidungen bei, kann sie als reguliertes Medizinprodukt unter die MDR (EU) oder die FDA (USA) fallen. |
| Audit-Bereitschaft | Regulierungsbehörden (BfArM, FDA, Krankenkassen) können jederzeit Nachweise zur Daten-Governance verlangen. |

Für den Finanzsektor gilt ebenfalls:

- BaFin- und EBA-Leitlinien zur KI-Governance
- Aufzeichnungsaufbewahrung für Aufsichtsprüfungen
- Keine KI-generierte Beratung ohne menschliche Prüfebene

### Anbieter-Governance und Sorgfaltspflichten

- DSFA (Datenschutz-Folgenabschätzung): Regulierte Unternehmen führen vor dem Einsatz einer KI-Lösung eine DSFA durch. Anbieter müssen die dafür notwendigen technischen Informationen bereitstellen.
- Anbieter-Risikobewertung: Sicherheitsfragebögen (SIG, VSA), Penetrationstestergebnisse, SOC-2-Berichte
- Unterauftragsverarbeiter: Alle Unterauftragsverarbeiter müssen offengelegt werden. Kunden haben das Recht, neuen Unterauftragsverarbeitern zu widersprechen.
- Austrittsregelungen: Klare Bedingungen für Datenmigration und Löschung bei Vertragsende
- Versicherungsschutz: Anforderungen an Cyber-Haftpflicht und Berufshaftpflicht werden zunehmend häufiger gestellt

### Die Checkliste, die ein CISO oder DSB vor der Unterschrift durchläuft

- AV-Vertrag unterzeichnet (gemäß Art. 28 DSGVO)
- Datenspeicherort bestätigt (ausschließlich EU-Verarbeitung)
- Kein Training mit unseren Daten (vertragliche und technische Garantie)
- Aufbewahrungs- und Löschrichtlinie definiert und prüfbar
- SCC oder Angemessenheitsbeschluss für grenzüberschreitende Übertragungen vorhanden
- Meldefrist bei Datenpannen: maximal 72 Stunden
- SOC 2, ISO 27001 oder unabhängiges Audit verfügbar
- DSFA mit Unterstützung des Anbieters durchführbar
- Menschliche Prüfebene für folgenreiche Entscheidungen vorhanden
- Kein automatisches Onboarding, keine stille KI-Aktivierung
- Vollständiger Audit-Trail der KI-Verarbeitung verfügbar
- Datenportabilität gewährleistet (Art. 20 DSGVO)
- Liste der Unterauftragsverarbeiter offengelegt, Widerspruchsrecht gewährt
- Austritts- und Kündigungsklauseln schützen unsere Daten

Das Kernprinzip lautet: Kontrolle und Verantwortlichkeit. Regulierte Unternehmen müssen drei Fragen gegenüber ihrer Datenschutzbehörde klar beantworten können:

- Wo genau gehen unsere Daten hin?
- Wer verarbeitet sie und zu welchem Zweck?
- Wie können wir das überprüfen und notfalls den Stecker ziehen?

Kann ein KI-Anbieter diese drei Fragen nicht klar und vertraglich beantworten, belegt durch technische Nachweise, werden seriöse, regulierte Organisationen das Geschäft nicht eingehen. Das Reputations- und finanzielle Risiko eines DSGVO-Verstoßes (bis zu 20 Mio. EUR oder 4 % des weltweiten Jahresumsatzes, je nachdem, was höher ist) überwiegt schlicht den Produktivitätsgewinn eines KI-Assistenten.

## Wie stellt EVANA technisch sicher, dass Unternehmensdaten gemäß den europäischen Datenschutzvorschriften verarbeitet werden und Kunden maximale Transparenz über ihre Datenflüsse erhalten?

EVANA ist ein European-First-Unternehmen, vollständig im Eigentum und Betrieb innerhalb der EU.

### Datenspeicherort: Alles bleibt in der EU

Speicherung: Alle Kundendokumente und Metadaten werden im Ruhezustand ausschließlich in Frankfurt am Main gespeichert. Zu keinem Zeitpunkt der Speicherung verlassen die Daten die deutsche Rechtsordnung.

KI-Verarbeitung: Wir arbeiten aktuell mit Mistral in Frankreich zusammen. Entscheidend dabei:

- Mistral erhält Daten ausschließlich vorübergehend: Die Daten werden übertragen, im Arbeitsspeicher verarbeitet und das Ergebnis zurückgegeben. Mistral speichert kein einziges Byte.
- Mistral agiert als reiner Rechendienstleister unter einem unterzeichneten AV-Vertrag (Art. 28 DSGVO), der jede Form der Datenspeicherung, des Loggings oder der Nutzung für das Modelltraining explizit untersagt.
- Die Daten verlassen zu keinem Zeitpunkt EU und EWR und erfüllen damit den räumlichen Anwendungsbereich der DSGVO (Art. 3) sowie die Anforderungen an ein angemessenes Schutzniveau innerhalb der Union.

Für den Kunden bedeutet das: Auch wenn Mistral in den Verarbeitungsprozess eingebunden ist, bleiben Ihre Daten innerhalb der EU, werden ausschließlich in Deutschland gespeichert und sind nach Abschluss der Inferenz für Mistral nicht mehr zugänglich.

### Technische Architektur: Defense in Depth

| Schicht | Maßnahme |
| --- | --- |
| Verschlüsselung im Ruhezustand | AES-256-Verschlüsselung aller gespeicherten Dokumente und Metadaten |
| Verschlüsselung bei der Übertragung | TLS 1.2+ für alle internen und externen Datenflüsse |
| Zugangskontrollen | Rollenbasierte Zugriffskontrolle (RBAC) mit Granularität auf Nutzer- und Dokumentenebene |
| Audit-Logging | Unveränderliches Protokoll jedes Zugriffs, jeder Anfrage und jedes Verarbeitungsvorgangs mit Zeitstempel und Zurechenbarkeit |
| Netzwerkisolierung | Private-VPC-Topologie, keine öffentliche Internetexposition der Verarbeitungspipelines |
| Kein Training mit Kundendaten | Vertragliches und technisches Verbot: Weder EVANA noch Mistral nutzen Kundendaten für das Training oder die Verbesserung von Modellen |
| Datensparsamkeit | Die KI-Verarbeitung arbeitet mit dem für den jeweiligen Vorgang minimal erforderlichen Datensatz. Komplette Dokumentenarchive werden standardmäßig nicht verarbeitet |

### DSGVO-Rechtsrahmen

- Art.-28-AV-Vertrag mit Mistral, unterzeichnet und auf Anfrage verfügbar. Er definiert Zweckbindung, Nicht-Speicherungsklausel und Beschränkungen für Unterauftragsverarbeiter.
- Standardvertragsklauseln sind nicht erforderlich, da die Daten die EU nicht verlassen. Das ist ein erheblicher Compliance-Vorteil gegenüber US-amerikanischen KI-Anbietern.
- Verarbeitungsverzeichnis (Art. 30 DSGVO): EVANA führt ein vollständiges Verzeichnis von Verarbeitungstätigkeiten, das alle KI-Verarbeitungspfade, Datenkategorien und Rechtsgrundlagen umfasst.
- DSFA-ready: Wir stellen die technischen und organisatorischen Informationen bereit, die Kunden für die Durchführung einer eigenen Datenschutz-Folgenabschätzung vor dem Einsatz benötigen.

### Kundentransparenz und Kontrolle

Kunden können ihre Daten in jeder Phase überprüfen und steuern:

- Echtzeit-Sichtbarkeit der Datenflüsse: Kunden haben Zugriff auf ein Verarbeitungs-Dashboard, das zeigt, welche Dokumente konkret verarbeitet wurden.
- Aufbewahrungssteuerung: Kunden definieren Aufbewahrungsrichtlinien. EVANA setzt die automatische Löschung planmäßig um und stellt einen kryptografischen Löschnachweis bereit.
- Recht auf Vergessenwerden: Löschanfragen werden innerhalb von 72 Stunden mit Bestätigungszertifikat erfüllt.
- Datenportabilität: Alle Kundendaten sind jederzeit in offenen, strukturierten Formaten exportierbar (Art. 20 DSGVO).
- Keine stille Verarbeitung: KI-Verarbeitung findet ausschließlich bei explizit ausgewählten Dokumenten statt. Eine automatische Durchsuchung oder Hintergrundverarbeitung ohne Nutzerabsicht gibt es nicht.

### Zertifizierungen und Compliance-Status

- ISO 27001 zertifiziert: Das Informationssicherheits-Managementsystem wurde unabhängig auditiert.
- TÜV-auditiert: Technische Sicherheitsmaßnahmen wurden unabhängig verifiziert.
- DSGVO-konform: Die Verarbeitung erfolgt vollständig nach europäischem Datenschutzrecht.

## Was ist aus Ihrer Sicht der entscheidende Unterschied zwischen einer allgemein eingesetzten KI-Lösung und einer spezialisierten, sicherheitsorientierten Plattform wie EVANA, insbesondere für Unternehmen, die sensible Dokumente und Prozesse digitalisieren wollen?

Der grundlegende Unterschied liegt in der Frage, wessen Interessen mit Ihren übereinstimmen.

### Das eigentliche Risiko, über das selten gesprochen wird

Bei einer allgemeinen KI-Lösung liegt das Problem selten in böswilligem Handeln des Anbieters. Das Problem ist, dass Ihre Daten und die Modellverbesserung des Anbieters strukturell in seinem Geschäftsmodell miteinander verbunden sind. Er muss Ihre Eingaben vorhalten und verarbeiten, um wettbewerbsfähig zu bleiben. Das schafft eine dauerhafte Spannung zwischen dem, was er im AV-Vertrag verspricht, und dem, was seine technischen Anreize ihn tun lassen.

Bei einer Plattform wie EVANA ist die Anreizstruktur umgekehrt: Ihre Daten stellen für uns eine Verbindlichkeit dar. EVANA kann nur gewinnen, indem es Daten privat, sicher und compliant hält. Wenn das scheitert, verliert das Unternehmen regulierte Kunden und damit die Existenzgrundlage.

| | Allgemeine KI-Lösung | Sicherheitsorientierte Plattform (EVANA) |
| --- | --- | --- |
| Kernanreiz des Anbieters | Modell verbessern, dafür braucht er Ihre Daten | Kunden schützen, Daten müssen sicher und privat bleiben |
| Datenbehandlung | Gespeichert, häufig für Training genutzt (sofern kein Opt-out) | Ephemer oder nie gespeichert, kein Training |
| Datenspeicherort | US-Verarbeitung gängig, grenzüberschreitend als Standard | Ausschließlich EU, Daten verlassen die Rechtsordnung nicht |
| Risiko automatischen Onboardings | Hoch: Funktionen aktivieren sich still (Copilot Flex) | Keines: Verarbeitung nur bei expliziter Nutzeraktion |
| Compliance-Last | Kunde erbt die Compliance-Lücken des Anbieters | Anbieter liefert Compliance-Nachweise proaktiv |
| Audit-Trail | Begrenzt, anbieterseitig kontrolliert | Vollständig, unveränderlich, kundenseitig abrufbar |
| DSGVO-Rechtsgrundlage | „Vertragliches berechtigtes Interesse“, rechtlich umstritten | Saubere EU-interne Verarbeitung, keine Übertragungsmechanismen erforderlich |
| Regulierte Branchen | Erfordert aufwendige AV-Vertragsverhandlungen | Integriert: BaFin, DORA, ISO 27001, sofort auditierbar |
| Transparenz | Black Box: Kunde kann nicht nachprüfen, was mit seinen Daten passiert | Offene Architektur: Kunde sieht genau, wohin die Daten fließen |

## Die drei Fragen, die jeder CISO stellen sollte

Bei der Bewertung eines KI-Anbieters helfen drei Fragen:

- Wo gehen meine Daten physisch hin? Lautet die Antwort „wir können EU-only nicht garantieren“, haben Sie für jeden sensiblen Anwendungsfall bereits die DSGVO verletzt.
- Können Sie beweisen, dass unsere Daten nicht zum Training genutzt werden? Gefragt ist ein vertraglicher und zusätzlich ein technischer Nachweis: ephemere Verarbeitung, keine Persistenz, kein Logging von Eingaben.
- Was passiert, wenn wir den Vertrag kündigen? Kann der Anbieter die Löschung nachweisen, ein Löschzertifikat ausstellen und vollständige Datenportabilität ermöglichen? Andernfalls sitzen Sie auf einem verschlüsselten Datenbestand, den Sie nicht prüfen können.
