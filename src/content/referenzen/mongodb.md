---
titel: "MongoDB: die Datenbankinfrastruktur hinter EVANA"
kunde: "MongoDB"
anonym: false
branche: "Technologie"
kurz: "Seit 2023 setzt EVANA auf MongoDB Atlas als zentrale Datenbank. Die Plattform verarbeitet heute über 30.000 Dokumente pro Stunde und liefert bis zu acht Releases am Tag aus."
datum: 2026-04-02
kennzahlen:
  - wert: "30.000"
    label: "Dokumente pro Stunde"
  - wert: "95 %"
    label: "Genauigkeit über 38 Millionen gescannte Seiten"
  - wert: "bis zu 8"
    label: "Releases pro Tag statt einem alle zwei Monate"
zitat:
  text: "With MongoDB, we’ve evolved into EVANA 2.0. It helps us keep up with the rate of change and deliver a great customer experience."
  person: "Martin Teiber"
  rolle: "CEO, EVANA"
produkte:
  - "EVANA AI"
  - "EVA"
anwendungsfaelle:
  - "dokumente-befragen"
  - "ki-und-systeme-anbinden"
zielgruppen: []
altUrl: "/mongo-db/"
bild: "https://evana.ai/wp-content/uploads/2026/04/Mongo-DB.png"
seoTitle: "MongoDB Atlas: die Datenbank hinter EVANA"
seoDescription: "Warum EVANA auf MongoDB Atlas setzt: über 30.000 Dokumente pro Stunde, 95 % Genauigkeit und bis zu acht Releases pro Tag."
---

Wer täglich große Mengen an Dokumenten verarbeitet, klassifiziert und durchsuchbar macht, braucht eine Datenbank, die mit den Anforderungen von KI, Skalierung und Geschwindigkeit mithält. Seit 2023 setzt EVANA deshalb auf MongoDB Atlas als zentrale Datenbankinfrastruktur.

## Ausgangslage

In den ersten Jahren nach der Gründung wuchs die EVANA Infrastruktur organisch, und mit ihr die Komplexität. PostgreSQL, Azure SQL, Elasticsearch und MongoDB existierten nebeneinander. Daten wurden mehrfach repliziert, und die Teams arbeiteten mit unterschiedlichen Datenbanklogiken. Die Folgen waren steigende Kosten und Instabilität. Die Grenzen relationaler Datenbanken bremsten Geschwindigkeit und Skalierbarkeit, und die Plattform konnte mit den wachsenden Anforderungen an die KI-Verarbeitung kaum Schritt halten.

## Lösung

2023 migrierte EVANA auf MongoDB Atlas als Single Source of Truth. Den Ausschlag gaben drei Kriterien: operative Einfachheit, Flexibilität und Entwicklereffizienz. MongoDB Atlas minimiert den DevOps-Aufwand, ermöglicht schnelle Iteration und deckt mit einer einheitlichen Query Language alles ab, von einfachen CRUD-Operationen bis zu Vektorisierung und komplexen Pipelines.

Das dokumentenbasierte, schemaflexible Datenmodell passt zu den heterogenen Datenmengen der Immobilienwirtschaft: Verträge, Gutachten, Grundbücher, technische Pläne und ESG-Dokumente. Alle Inhalte landen in einer einheitlichen, vollständig durchsuchbaren Datenbasis. Neue Dokumenttypen kommen ohne aufwendige Schemadefinitionen hinzu.

Mit MongoDB Atlas Search durchsuchen EVANA Kunden ihre Dokumentenbestände in natürlicher Sprache. Abfragen wie „alle Heizkostenprotokolle der letzten drei Jahre“ oder „Zusammenfassung aller Mietverträge“ laufen direkt auf den Originaldokumenten, ohne manuelle Vorbereitung.

## Ergebnis

EVANA verarbeitet heute über 30.000 Dokumente pro Stunde und hat Kapazitäten für knapp eine Million Dateien pro Tag. Über 38 Millionen gescannte Seiten liegt die Genauigkeit bei 95 %. Instabilitäten und Performance-Probleme gehören der Vergangenheit an. Früher erschien alle zwei Monate ein Release, heute liefert das Team bis zu acht Mal täglich neue Features aus, ohne bestehende Funktionen zu beeinträchtigen. Ein einziger DevOps-Mitarbeiter überwacht Performance und Metriken.

## Ausblick

Die Flexibilität der Plattform erlaubt es, neue Dokumenttypen und KI-Modelle schnell einzubinden und neue Märkte zu erschließen. Da die KI sprachunabhängig arbeitet, kann EVANA seine Lösungen in neue Regionen und Branchen übertragen, etwa in medizinische, juristische oder öffentliche Anwendungsfälle. OpenID Connect für sichere Authentifizierung und eine offene API runden die Infrastruktur ab.
