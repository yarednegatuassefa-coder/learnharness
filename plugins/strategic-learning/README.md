# Strategic Learning Programme

A LearnHarness Community plugin that adds an integrated curriculum across twelve disciplines. It does not replace the native teaching, practice, planning or knowledge-graph systems. It contributes curriculum-aware instructions to the Prober, Teacher and Practice agents and provides a browsable curriculum view.

## Install

1. Open LearnHarness → Settings → Community plugins.
2. Copy the plugins directory path.
3. Copy the entire `strategic-learning/` folder into that directory.
4. Refresh the plugin list and enable **Strategic Learning Programme**.
5. Restart LearnHarness after updating plugin code.

The package is prebuilt JavaScript; no npm install or build is required. It makes no model request merely by being enabled or by opening its catalogue. Model usage follows normal LearnHarness sessions and your configured provider billing.

## How to use

Start a normal teaching session with a goal such as:

- "Diagnose my current understanding of political realism and build a path to analyse state power."
- "Teach me supply chain management from first principles, with a practical retail distribution case."
- "Build a healthcare data analysis path using hospital operations and patient-experience examples."
- "Teach me propaganda and strategic influence, including how to identify and resist manipulation."
- "Teach me mechanistic interpretability and show me how to audit an AI system's safety claims."

The plugin instructs the native Prober, Teacher and Practice agents to diagnose prerequisites, build a staged plan, teach one reasoning step at a time, and test transfer through unfamiliar cases. Discipline 12 connects to the AI Engineering Learning Path and includes applied audits for Cloud L, Melat Supermarket, MMV Medical and Home. Use synthetic or approved de-identified data; consequential actions remain subject to deterministic controls and human approval. Practice sessions are instructed to use retrieval and varied problems. The host knowledge graph remains the durable record.

## Curriculum domains

1. Political Science and Power
2. Geopolitics
3. Economics and Wealth
4. Business and Entrepreneurship
5. Psychology and Human Behaviour
6. History and Dynastic Systems
7. Supply Chain and Logistics
8. Philosophy
9. Healthcare Data Analysis
10. Cinematography, Filmmaking and Screenwriting
11. Propaganda, Strategic Communication and Influence
12. Mechanistic Interpretability, AI Safety and Model Auditing

See `dist/main.js` for the navigable domain catalogue and `dist/backend.cjs` for the additive teaching policy.

## Lastbook offline reference companion

This plugin includes a manual source workflow for [Lastbook](https://github.com/Immortal-Protocols/lastbook), an offline desktop reference library. It does **not** embed Lastbook, access its local files, or transfer data between the applications.

Use the loop: LearnHarness teaches or diagnoses a concept → search the concept in Lastbook → bring back the source title and exact page number or video timestamp → LearnHarness explains the source and tests your understanding. The plugin's teaching instructions prohibit invented Lastbook sources or page citations.

Install Lastbook separately from its official project and complete its first-run library setup while online. Once its library is downloaded, Lastbook can be used offline. Both applications remain independent.

## Safety and scope

- Propaganda and influence content is framed for analysis, media literacy, ethical persuasion and lawful strategic communication—not covert manipulation, targeted deception or coercive exploitation.
- Healthcare data exercises use synthetic or properly de-identified examples. Do not upload identifiable patient records.
- The plugin does not claim mastery from exposure or graph presence; learners must demonstrate retention and transfer.
- This plugin is trusted local code, like all LearnHarness plugins. Review source before enabling.

## Universal publishing workflow and engine routing

The curriculum view includes a reusable publishing workflow for turning learning and project work into structured artifacts. It provides patterns for research/strategy briefs, business operating documents, healthcare/data reports, SOPs/field manuals, film development packs and learning dossiers.

The **Publishing engine router** keeps one source-first workflow while directing different artifacts to appropriate output routes:

| Route | Best fit | Typical output |
| --- | --- | --- |
| Homebrewery | D&D and fantasy sourcebooks | Themed, multi-column web pages |
| Professional documents | Business, healthcare, research and operations | Markdown / DOCX / PDF / slide decks |
| Film production | Screenplays and production planning | Screenplay-formatted script, shot list, storyboard and schedule |
| Data outputs | Analysis and decision support | CSV / XLSX, charts and dashboards |

### Homebrewery is a separate specialist tool

[Open Homebrewery](https://homebrewery.naturalcrit.com/) · [Source code](https://github.com/naturalcrit/homebrewery)

Use Homebrewery when the Player's Handbook-style visual language is appropriate for a D&D or fantasy publication. It is **not** the default renderer for business, healthcare, research or operating documents.

LearnHarness does not install, embed, host, sync with or automatically publish to Homebrewery. The plugin links to the independent service and documents when to use it. You open it separately and move your prepared Markdown into it when appropriate.

### Standard publishing handoff

1. Preserve the canonical editable source (Markdown, screenplay text or structured data).
2. Select the output route based on audience, task and required format.
3. Render or export with the appropriate specialist tool.
4. Review evidence, calculations, citations, privacy, layout and the final deliverable before distribution.

This is a **workflow and routing layer**, not a universal document renderer. The point is to keep the central process consistent without forcing every project into the same design or application.


## Investor Intelligence Research Library

The optional **Investor Intelligence Library** is part of the Strategic Learning Programme view. It catalogues 50 submitted sources for institutional disclosures, investor letters, valuation, macroeconomic data, portfolio construction, research and investor psychology. It is a research index, not a trading signal service or mandatory reading list.

- Open the curriculum view and scroll to **Investor Intelligence Library**.
- Search by source, topic or use case; filter by editorial source tier (A/B/C) and learning priority (P1/P2/P3).
- Follow the five optional pathways and the 12-week sequence, adapting the pace to diagnostic results.
- Use primary filings and official datasets as the source of record; aggregators and commentary are discovery and interpretation layers.
- 13F filings are delayed and incomplete. Insider and politician disclosures are not automatic signals. Backtests and valuation models require explicit assumptions and bias checks.
- Entry 50, “Our Finite World,” remains unverified because the submitted URL was incomplete.

The canonical structured catalogue and its editorial methodology live in `reading-library/`. See [the library guide](reading-library/README.md). No external data is fetched automatically, no account is required, and no source content is redistributed by the plugin.
