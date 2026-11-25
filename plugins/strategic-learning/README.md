# Strategic Learning Programme

A LearnHarness Community plugin that adds an integrated curriculum across eleven disciplines. It does not replace the native teaching, practice, planning or knowledge-graph systems. It contributes curriculum-aware instructions to the Prober, Teacher and Practice agents and provides a browsable curriculum view.

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

The plugin instructs the native agents to diagnose prerequisites, build a staged plan, teach one reasoning step at a time, and test transfer through unfamiliar cases. Practice sessions are instructed to use retrieval and varied problems. The host knowledge graph remains the durable record.

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
