import { INVESTOR_SOURCES } from "../reading-library/catalogue.js";
import { OPEN_EDUCATION_SOURCES, OPEN_EDUCATION_PATHWAYS, OPEN_EDUCATION_SEQUENCE } from "../reading-library/open-education-catalogue.js";

const DOMAINS = [
  { id: "political-science", name: "Political Science and Power", goal: "Understand how power is acquired, institutionalised, legitimised, contested and transferred.", stages: ["Political concepts, authority, sovereignty and the state", "Institutions, constitutions, regimes and legitimacy", "Political realism, interests, incentives and statecraft", "Elites, coalitions, bureaucracy and political economy", "Revolutions, coups, succession and state failure", "Comparative case studies and strategic analysis"], project: "Compare how two states preserve elite coalitions and state capacity under pressure." },
  { id: "geopolitics", name: "Geopolitics", goal: "Analyse how geography, resources, technology and economic dependencies shape international power.", stages: ["Geography, territory, chokepoints and strategic depth", "International relations theories and national interests", "Alliances, deterrence, diplomacy and security dilemmas", "Energy, critical minerals, food and water security", "Sanctions, trade routes, geoeconomics and technology controls", "Regional orders and great-power competition"], project: "Map the strategic dependencies of a major trade corridor." },
  { id: "economics", name: "Economics and Wealth", goal: "Understand incentives, markets, money, capital allocation and the mechanisms of wealth creation.", stages: ["Scarcity, opportunity cost and marginal reasoning", "Supply, demand, prices and market structure", "GDP, inflation, unemployment and monetary systems", "Credit, debt cycles, banking and fiscal policy", "Accounting, cash flow, valuation and risk", "Capital allocation, value investing and compounding"], project: "Analyse a real business using unit economics, cash flow and competitive position." },
  { id: "business", name: "Business and Entrepreneurship", goal: "Design, operate and scale durable businesses with defensible advantages.", stages: ["Customer problems, value propositions and business models", "Market research, segmentation and positioning", "Sales, marketing, pricing and customer retention", "Accounting, working capital and operating finance", "People, processes, incentives and execution", "Competitive advantage, scaling and corporate strategy"], project: "Build an operating plan and measurable growth experiment for a neighborhood retailer." },
  { id: "psychology", name: "Psychology and Human Behaviour", goal: "Explain how people perceive, learn, decide, cooperate and respond to incentives.", stages: ["Cognition, attention, memory and learning", "Biases, heuristics and decision-making", "Motivation, emotion and personality", "Social identity, conformity, groups and status", "Behavioural economics and choice architecture", "Persuasion, negotiation and ethical influence"], project: "Analyse a decision using competing psychological explanations and evidence." },
  { id: "history", name: "History and Dynastic Systems", goal: "Explain historical change through institutions, resources, succession, legitimacy and elite competition.", stages: ["Historical method, evidence and causation", "State formation, administration and taxation", "Imperial expansion, logistics and military organisation", "Dynasties, succession systems and elite factions", "Institutional decay, fiscal crises and fragmentation", "Comparative studies: Roman, Ottoman and Mongol systems"], project: "Compare two succession crises and identify the institutional causes of instability." },
  { id: "supply-chain", name: "Supply Chain and Logistics", goal: "Design resilient, cost-aware systems that source, store, move and deliver goods.", stages: ["End-to-end supply chain and process mapping", "Procurement, sourcing and supplier negotiation", "Demand forecasting, inventory and replenishment", "Warehousing, fulfilment and distribution design", "Transport modes, freight, customs and trade documents", "Risk, resilience, technology and supply chain finance"], project: "Design a replenishment and distribution model for a small supermarket." },
  { id: "philosophy", name: "Philosophy", goal: "Develop rigorous reasoning, a defensible worldview and the ability to evaluate claims.", stages: ["Logic, argument structure and fallacies", "Epistemology, evidence, truth and uncertainty", "Ancient Greek philosophy: Socrates, Plato and Aristotle", "Stoicism: Epictetus, Seneca and Marcus Aurelius", "Political philosophy: Machiavelli, Hobbes and others", "Ethics, existentialism and theories of human nature"], project: "Write and defend an argument about political authority, including its strongest objection." },
  { id: "healthcare-data", name: "Healthcare Data Analysis", goal: "Use reliable data to improve healthcare quality, access, patient experience and operations.", stages: ["Data types, quality, governance and privacy", "Descriptive statistics and visual interpretation", "Study design, sampling and inferential reasoning", "Epidemiology, rates, risk and biostatistics", "Healthcare KPIs, patient flow and quality measurement", "Dashboards, health economics and decision support"], project: "Create a synthetic hospital operations dashboard and explain its limitations." },
  { id: "filmmaking", name: "Cinematography, Filmmaking and Screenwriting", goal: "Develop an idea into a coherent screenplay and a deliberately composed audiovisual story.", stages: ["Story premise, theme, genre and dramatic structure", "Character, motivation, conflict and dialogue", "Screenplay format, scenes and sequence design", "Camera, lenses, exposure, framing and movement", "Lighting, colour, blocking and directing actors", "Editing, sound, production planning and film analysis"], project: "Write and storyboard a 3–5 minute short film with a clear visual point of view." },
  { id: "influence", name: "Propaganda, Strategic Communication and Influence", goal: "Understand how narratives shape public perception and communicate persuasively while resisting manipulation.", stages: ["Rhetoric, argument, framing and agenda-setting", "Propaganda history and media ecosystems", "Social psychology, persuasion and group behaviour", "Strategic communication, public relations and crisis response", "Disinformation analysis, verification and OSINT", "Information operations, media literacy and ethical influence"], project: "Deconstruct a historical campaign and design a transparent, evidence-based public information campaign." },
  { id: "mechanistic-interpretability", name: "Mechanistic Interpretability, AI Safety and Model Auditing", goal: "Understand how neural networks represent and process information, test safety claims, and audit AI behaviour with reproducible evidence.", stages: ["Neural-network and transformer foundations: parameters, activations, embeddings, attention and residual streams", "Representations: neurons, polysemanticity, superposition, features, circuits and distributed information", "Mechanistic investigations: attribution, probing, ablation, activation patching and causal interventions", "AI safety: harmful-capability detection, hidden behaviours, backdoors, fine-tuning, refusal and unlearning limits", "Model auditing: baselines, controls, adversarial tests, precision/recall, calibration, reproducibility and version drift", "Governance: deployment decisions, privacy, monitoring, escalation, residual risk and accountability"], project: "Produce a reproducible AI safety audit dossier. Apply it to Cloud L order/support assistants, Melat forecasting/recommendations, MMV Medical administrative assistants, and Home cross-project agents using synthetic or approved de-identified cases." }
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}


function investorLibraryView() {
  const section = el("section", "sl-investor-library");
  section.id = "investor-intelligence-library";
  section.append(
    el("p", "sl-eyebrow", "OPTIONAL EXTERNAL RESEARCH LIBRARY"),
    el("h2", "sl-library-title", "Investor Intelligence Library"),
    el("p", "sl-library-lede", "A source map for learning how capital is allocated, businesses are valued and financial systems behave. Use it to investigate claims—not to copy trades.")
  );
  const summary = el("div", "sl-library-summary");
  [["50","submitted entries"],["1","unverified URL"],["0","mandatory assignments"]].forEach(([n,label]) => {
    const stat=el("div","sl-stat"); stat.append(el("strong","",n),el("span","",label)); summary.append(stat);
  });
  section.append(summary);
  const controls=el("div","sl-library-controls");
  const search=el("input","sl-search");
  search.type="search"; search.placeholder="Search source, topic or research use…"; search.setAttribute("aria-label","Search investor intelligence sources");
  const topic=el("select","sl-library-select");
  topic.setAttribute("aria-label","Filter by topic");
  const topics=["All topics",...new Set(INVESTOR_SOURCES.map(s=>s.category))].sort((a,b)=>a==="All topics"?-1:b==="All topics"?1:a.localeCompare(b));
  topics.forEach(value=>{const option=el("option","",value);option.value=value;topic.append(option);});
  const quality=el("select","sl-library-select");
  quality.setAttribute("aria-label","Filter by source quality");
  [["All tiers",""],["A · Primary / institutional","A"],["B · Specialist / analytical","B"],["C · Commentary / community","C"]].forEach(([label,value])=>{const option=el("option","",label);option.value=value;quality.append(option);});
  const priority=el("select","sl-library-select");
  priority.setAttribute("aria-label","Filter by learning priority");
  [["All priorities",""],["P1 · Core","P1"],["P2 · Applied","P2"],["P3 · Supplementary","P3"]].forEach(([label,value])=>{const option=el("option","",label);option.value=value;priority.append(option);});
  controls.append(search,topic,quality,priority); section.append(controls);
  const results=el("p","sl-library-count","");
  const list=el("div","sl-library-grid");
  const render=()=>{
    const q=search.value.trim().toLowerCase();
    const matches=INVESTOR_SOURCES.filter(s=>{
      const text=[s.name,s.category,s.notes,s.priority,s.quality].join(" ").toLowerCase();
      return (!q||text.includes(q))&&(topic.value==="All topics"||s.category===topic.value)&&(!quality.value||s.quality===quality.value)&&(!priority.value||s.priority===priority.value);
    });
    results.textContent=`Showing ${matches.length} of ${INVESTOR_SOURCES.length} sources`;
    list.replaceChildren();
    if(!matches.length){list.append(el("p","sl-empty","No sources match these filters."));return;}
    matches.forEach(source=>{
      const card=el("article","sl-source-card");
      const top=el("div","sl-source-top");
      top.append(el("span","sl-source-number",String(source.id).padStart(2,"0")));
      const name=el("h3","sl-source-name",source.name); top.append(name);
      const tags=el("div","sl-source-tags");
      tags.append(el("span","sl-source-tag",`Tier ${source.quality}`),el("span","sl-source-tag",source.priority),el("span","sl-source-tag",source.category));
      card.append(top,tags,el("p","sl-source-notes",source.notes));
      if(source.url){
        const link=el("a","sl-source-link","Open source");
        link.href=source.url;link.target="_blank";link.rel="noopener noreferrer";card.append(link);
      } else {
        card.append(el("span","sl-source-unverified","URL not verified — link withheld"));
      }
      list.append(card);
    });
  };
  [search,topic,quality,priority].forEach(control=>control.addEventListener(control===search?"input":"change",render));
  section.append(results,list);
  const pathways=el("div","sl-library-pathways");
  pathways.append(el("h3","","Five research pathways"));
  const pathwayData=[
    ["1 · Source-of-truth literacy","SEC EDGAR, Berkshire letters, Federal Reserve, ECB, BIS and FRED","Learn to read filings, footnotes, reporting periods, statistical definitions and revisions."],
    ["2 · Business analysis and valuation","Annual reports, SEC filings and Damodaran","Understand economics, cash flow, balance sheets, competitive position and valuation assumptions."],
    ["3 · Macro regime analysis","FRED, Federal Reserve, ECB, BIS and specialist research","Build scenarios for rates, inflation, credit and liquidity; test rather than inherit forecasts."],
    ["4 · Portfolio construction and risk","AQR, CFA Institute, Bogleheads, ETF Database, Portfolio Visualizer and Curvo","Study diversification, fees, factor exposures, drawdowns, taxes and backtest limitations."],
    ["5 · Behaviour and competing theses","Oaktree, Collaborative Fund, Of Dollars and Data and selected theses","Identify incentives, behavioural errors, disconfirming evidence and what would change a conclusion."]
  ];
  const pathwayGrid=el("div","sl-library-pathway-grid");
  pathwayData.forEach(([title,tools,description])=>{const item=el("article","sl-library-pathway");item.append(el("h4","",title),el("p","sl-library-pathway-tools",tools),el("p","",description));pathwayGrid.append(item);});
  pathways.append(pathwayGrid);
  const sequence=el("details","sl-library-sequence");
  sequence.append(el("summary","","Optional 12-week research sequence"));
  const weeks=[
    ["1","Financial statements and filings","SEC EDGAR, Berkshire letters, AnnualReports","Company and filing map"],
    ["2","Accounting quality and cash flow","SEC EDGAR, Damodaran, Stock Analysis","Earnings-to-cash-flow reconciliation"],
    ["3","Business quality and competitive position","Berkshire letters, Oaktree, annual reports","Business-quality memo"],
    ["4","Valuation foundations","Damodaran data and blog, CFI","Valuation model with explicit assumptions"],
    ["5","Rates and inflation","FRED, Federal Reserve, ECB","Macro dashboard with series definitions"],
    ["6","Credit and financial cycles","BIS, Bridgewater, Oaktree","Credit-cycle brief with competing scenarios"],
    ["7","Portfolio theory and diversification","AQR, CFA Institute, Bogleheads","Portfolio exposure and risk map"],
    ["8","Funds, fees and implementation","ETF Database, Morningstar, Curvo","ETF comparison using current issuer factsheets"],
    ["9","Backtesting and model risk","Portfolio Visualizer, AQR","Backtest critique and bias checklist"],
    ["10","Institutional disclosures","SEC 13F filings, Dataroma, WhaleWisdom","Dated holdings comparison—not a copy-trade list"],
    ["11","Investor psychology","Collaborative Fund, Of Dollars and Data, A Wealth of Common Sense","Decision journal and behavioural error analysis"],
    ["12","Independent investment thesis","Primary filings, Damodaran and macro sources","Thesis, valuation range, risks and disconfirming evidence"]
  ];
  const table=el("div","sl-library-week-list");
  weeks.forEach(([week,focus,refs,output])=>{const row=el("div","sl-library-week");const detail=el("div","");detail.append(el("strong","",focus));row.append(el("span","sl-library-week-number",week),detail,el("p","",refs),el("p","sl-library-output",`Output: ${output}`));table.append(row);});
  sequence.append(table);pathways.append(sequence);section.append(pathways);
  const cautions=el("div","sl-library-cautions");
  cautions.append(el("h3","","Interpretation rules"),el("ul","",""));
  const ul=cautions.querySelector("ul");
  [
    "13F filings are delayed, incomplete snapshots—not real-time portfolios or complete strategies.",
    "Politician and insider disclosures are not automatic trading signals; inspect timing, transaction type and original filings.",
    "Aggregators are discovery tools. Verify material claims against original filings, issuers or statistical agencies.",
    "Backtests are sensitive to survivorship, look-ahead bias, costs, taxes, liquidity, currency and benchmark choice.",
    "Valuation is conditional on assumptions. Show sensitivity; do not treat a model output as an objective price.",
    "Research publishers have incentives. Identify the author's perspective, business model and what would disconfirm the thesis."
  ].forEach(item=>ul.append(el("li","",item)));
  cautions.append(el("p","sl-library-disclaimer","Educational research only. This library does not provide personalised financial advice or recommend securities, funds or transactions. Some sources may change their free access, licensing or availability."));
  section.append(cautions);
  const prompt=el("p","sl-library-prompt","Diagnose my understanding of financial statements, business quality, valuation and macroeconomic risk. Use the Investor Intelligence Library as a source map, prioritise primary evidence, and build a staged path from filings to an independent investment thesis. For each material claim identify its source, date, assumptions, incentives, counter-evidence and uncertainty. Do not recommend a trade or treat disclosed holdings as signals.");
  const copy=el("button","sl-copy","Copy investor research starter prompt");copy.type="button";
  copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(prompt.textContent);copy.textContent="Copied";}catch{copy.textContent="Select and copy the prompt";}});
  section.append(prompt,copy);
  return section;
}


function openEducationLibraryView() {
  const section=el("section","sl-open-education");
  section.id="university-open-education-library";
  section.append(el("p","sl-eyebrow","OPTIONAL OPEN EDUCATION LIBRARY"),el("h2","sl-library-title","University & Open Education Library"),el("p","sl-library-lede","A curated map of university courses, open textbooks, research archives and learning tools. Use it to build a coherent syllabus—not to collect tabs."));
  const summary=el("div","sl-library-summary");
  [["50","curated resources"],["6","learning pathways"],["0","mandatory assignments"]].forEach(([n,label])=>{const stat=el("div","sl-stat");stat.append(el("strong","",n),el("span","",label));summary.append(stat);});
  section.append(summary);
  const controls=el("div","sl-library-controls");
  const search=el("input","sl-search");search.type="search";search.placeholder="Search resource, subject or use…";search.setAttribute("aria-label","Search open education resources");
  const topic=el("select","sl-library-select");topic.setAttribute("aria-label","Filter by subject");
  const topics=["All subjects",...new Set(OPEN_EDUCATION_SOURCES.map(s=>s.category))].sort((a,b)=>a==="All subjects"?-1:b==="All subjects"?1:a.localeCompare(b));
  topics.forEach(v=>{const o=el("option","",v);o.value=v;topic.append(o);});
  const tier=el("select","sl-library-select");tier.setAttribute("aria-label","Filter by source quality");
  [["All tiers",""],["A · Institutional / scholarly","A"],["B · Specialist / educational","B"],["C · Commentary / media","C"]].forEach(([l,v])=>{const o=el("option","",l);o.value=v;tier.append(o);});
  const priority=el("select","sl-library-select");priority.setAttribute("aria-label","Filter by learning priority");
  [["All priorities",""],["P1 · Core","P1"],["P2 · Applied","P2"],["P3 · Supplementary","P3"]].forEach(([l,v])=>{const o=el("option","",l);o.value=v;priority.append(o);});
  controls.append(search,topic,tier,priority);section.append(controls);
  const count=el("p","sl-library-count",""),grid=el("div","sl-library-grid");
  const render=()=>{const q=search.value.trim().toLowerCase();const matches=OPEN_EDUCATION_SOURCES.filter(s=>[s.name,s.category,s.access,s.notes,s.priority,s.quality].join(" ").toLowerCase().includes(q)&&(topic.value==="All subjects"||s.category===topic.value)&&(!tier.value||s.quality===tier.value)&&(!priority.value||s.priority===priority.value));
    count.textContent=`Showing ${matches.length} of ${OPEN_EDUCATION_SOURCES.length} resources`;grid.replaceChildren();
    if(!matches.length){grid.append(el("p","sl-empty","No resources match these filters."));return;}
    matches.forEach(s=>{const card=el("article","sl-source-card");const top=el("div","sl-source-top");top.append(el("span","sl-source-number",String(s.id).padStart(2,"0")),el("h3","sl-source-name",s.name));const tags=el("div","sl-source-tags");tags.append(el("span","sl-source-tag",`Tier ${s.quality}`),el("span","sl-source-tag",s.priority),el("span","sl-source-tag",s.category));card.append(top,tags,el("p","sl-source-notes",s.notes));const access=el("p","sl-open-access",s.access);card.append(access);const a=el("a","sl-source-link","Open resource");a.href=s.url;a.target="_blank";a.rel="noopener noreferrer";card.append(a);grid.append(card);});
  };
  [search,topic,tier,priority].forEach(c=>c.addEventListener(c===search?"input":"change",render));section.append(count,grid);
  const pathways=el("div","sl-library-pathways");pathways.append(el("h3","","Six optional learning pathways"));const pg=el("div","sl-library-pathway-grid");
  OPEN_EDUCATION_PATHWAYS.forEach(p=>{const card=el("article","sl-library-pathway");card.append(el("h4","",p.title),el("p","sl-library-pathway-tools",p.focus),el("p","",p.sources),el("p","sl-open-output",`Suggested output: ${p.output}`));pg.append(card);});pathways.append(pg);
  const sequence=el("details","sl-library-sequence");sequence.append(el("summary","","Optional 12-week learning cycle"));const list=el("div","sl-library-week-list");
  OPEN_EDUCATION_SEQUENCE.forEach(([week,focus,sources,output])=>{const row=el("div","sl-library-week");const detail=el("div","");detail.append(el("strong","",focus));row.append(el("span","sl-library-week-number",week),detail,el("p","",sources),el("p","sl-library-output",`Output: ${output}`));list.append(row);});sequence.append(list);pathways.append(sequence);section.append(pathways);
  const notes=el("div","sl-library-cautions");notes.append(el("h3","","Access and evidence rules"));const ul=el("ul","","");
  ["A course catalogue is not proof that every listed course is free. Check the individual course page, region and current terms before enrolling.","Free audit access, open course materials, free textbooks, free certificates and academic credit are different things. Certificates, graded work, extended access and compute may cost money.","Open educational resources can carry different Creative Commons or other licences. Check attribution, adaptation and commercial-use conditions before reusing material.","Preprints on arXiv are not necessarily peer reviewed. Treat journalism, talks and commentary as entry points; trace consequential claims to primary research.","Use one coherent course sequence at a time. Retrieval practice, problem sets and applied projects matter more than accumulating bookmarks."].forEach(x=>ul.append(el("li","",x)));
  notes.append(ul,el("p","sl-library-disclaimer","Educational resource index. Access, pricing, course availability and licensing can change; verify directly with each provider."));section.append(notes);
  const prompt=el("p","sl-library-prompt","Diagnose my current level and design a prerequisite-aware learning path using the University & Open Education Library. Select one primary course, supporting textbook and practice resource. Distinguish free materials from audit access, paid certificates and restricted features. Teach through retrieval, worked examples and unfamiliar problems. End each stage with an applied project, evidence checks and a review of what I can now do independently.");
  const copy=el("button","sl-copy","Copy learning-path starter prompt");copy.type="button";copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(prompt.textContent);copy.textContent="Copied";}catch{copy.textContent="Select and copy the prompt";}});
  section.append(prompt,copy);return section;
}

export function activate(ctx) {
  ctx.registerView({
    id: "curriculum",
    name: "Strategic curriculum",
    mount(container, signal) {
      const root = el("div", "sl-root");
      const intro = el("section", "sl-intro");
      intro.append(
        el("p", "sl-eyebrow", "PERSONAL KNOWLEDGE SYSTEM"),
        el("h1", "sl-title", "Strategic Learning Programme"),
        el("p", "sl-lede", "Twelve connected disciplines. One adaptive learning process. Learn to reason, apply and retain—not merely consume information.")
      );
      const stats = el("div", "sl-stats");
      [["12","disciplines"],["6","stages per domain"],["1","integrated system"]].forEach(([n,l]) => {
        const item=el("div","sl-stat"); item.append(el("strong","",n),el("span","",l)); stats.append(item);
      });
      intro.append(stats);
      const search = el("input","sl-search");
      search.type="search"; search.placeholder="Find a discipline…"; search.setAttribute("aria-label","Find a discipline");
      const list = el("div","sl-grid");
      const render = (filter="") => {
        list.replaceChildren();
        const matches = DOMAINS.filter(d => (d.name+" "+d.goal+" "+d.stages.join(" ")).toLowerCase().includes(filter.toLowerCase()));
        if (!matches.length) { list.append(el("p","sl-empty","No matching discipline. Try another search.")); return; }
        matches.forEach((domain,index) => {
          const card=el("article","sl-card");
          const top=el("div","sl-card-top");
          top.append(el("span","sl-number",String(DOMAINS.indexOf(domain)+1).padStart(2,"0")),el("h2","sl-card-title",domain.name));
          card.append(top,el("p","sl-goal",domain.goal));
          const details=el("details","sl-details");
          const summary=el("summary","","Learning pathway · 6 stages");
          const stages=el("ol","sl-stages");
          domain.stages.forEach(s=>stages.append(el("li","",s)));
          const project=el("p","sl-project"); project.append(el("strong","","Applied project: "),document.createTextNode(domain.project));
          details.append(summary,stages,project);
          const prompt=el("div","sl-prompt");
          prompt.append(el("span","sl-prompt-label","Start a session with this goal"));
          const quote=el("p","sl-prompt-text",`Diagnose my current understanding of ${domain.name}. My goal: ${domain.goal} Build a prerequisite-aware learning path, teach me one reasoning step at a time, and assess transfer through unfamiliar cases. Use the catalogue's applied project as a practical case, and require evidence, baselines, controls, limitations and a reproducible final artifact. Use Lastbook as my separate offline reference: tell me what keyword or topic to search there; when I return with a source title and page number or video timestamp, use that source explicitly. Do not pretend you can browse my local Lastbook library or invent citations.`);
          const copy=el("button","sl-copy","Copy starter prompt");
          copy.type="button";
          copy.addEventListener("click",async()=>{
            try { await navigator.clipboard.writeText(quote.textContent); copy.textContent="Copied"; }
            catch { copy.textContent="Select and copy the prompt"; }
          },{signal});
          prompt.append(quote,copy);
          card.append(details,prompt); list.append(card);
        });
      };
      search.addEventListener("input",()=>render(search.value),{signal});
      const cross=el("section","sl-cross");
      cross.append(el("h2","","Interdisciplinary connections"),el("p","","Geopolitics + economics + logistics: strategic dependencies and trade. Psychology + philosophy + influence: belief, reasoning and persuasion. Healthcare data + business: quality, productivity and operating decisions. History + politics: institutions, legitimacy and succession. Screenwriting + cinematography + psychology: character, image and audience response. Mechanistic interpretability + AI safety + governance: internal evidence, behavioural tests and accountable deployment."));
      const reference=el("section","sl-reference");
      reference.append(
        el("h2","","Lastbook · offline reference companion"),
        el("p","","LearnHarness and Lastbook remain separate desktop apps. This companion workflow connects your study process without network access, an account, or automatic access to your local library."),
        el("ol","sl-reference-steps")
      );
      const steps=reference.querySelector("ol");
      ["LearnHarness diagnoses or teaches one concept.","Search the same concept in Lastbook’s local library; open a relevant manual, encyclopedia page or video.","Bring the source title plus exact page number or video timestamp back into your LearnHarness session.","LearnHarness explains the evidence, checks your reasoning and tests transfer."].forEach(s=>steps.append(el("li","",s)));
      const refPrompt=el("p","sl-reference-prompt","Copy this instruction into a lesson: ‘Use Lastbook as an offline source companion. Give me search terms; wait for me to provide the source title and page/timestamp. Cite only sources I provide, and distinguish source evidence from your own explanation.’");
      const refCopy=el("button","sl-copy","Copy Lastbook workflow");
      refCopy.type="button";
      refCopy.addEventListener("click",async()=>{
        try { await navigator.clipboard.writeText(refPrompt.textContent); refCopy.textContent="Copied"; }
        catch { refCopy.textContent="Select and copy the instruction"; }
      },{signal});
      reference.append(refPrompt,refCopy);
      const repoLink=el("p","sl-reference-link","Lastbook project: github.com/Immortal-Protocols/lastbook · lastbook.org");
      reference.append(repoLink);
      const publish=el("section","sl-publish");
      publish.append(
        el("h2","","Universal publishing workflow"),
        el("p","","Turn what you learn or build into a usable artifact—not just notes. Use the same source-first workflow across your projects, then choose a format that fits the audience and job.")
      );
      const formats=el("div","sl-publish-grid");
      const artifacts=[
        ["Research & strategy brief","Question, thesis, evidence, competing explanations, implications, uncertainties, sources."],
        ["Business operating document","Objective, customer, process, owner, inputs, KPI, cost, risks, next action."],
        ["Healthcare / data report","Purpose, dataset and provenance, methods, findings, limitations, privacy, decision."],
        ["SOP / field manual","Scope, prerequisites, numbered procedure, decision points, exceptions, checklist."],
        ["Film development pack","Logline, theme, characters, beat sheet, screenplay scenes, visual approach, production notes."],
        ["Learning dossier","Core concept, mental models, source notes, worked example, retrieval questions, application."]
      ];
      artifacts.forEach(([name,description])=>{
        const item=el("article","sl-publish-card");
        item.append(el("h3","",name),el("p","",description));
        formats.append(item);
      });
      publish.append(formats);
      const pubPrompt=el("p","sl-publish-prompt","Create a publication-ready Markdown artifact for my project. First identify its intended reader and decision/use. Use a clear title, executive summary when appropriate, descriptive headings, tables only when useful, explicit assumptions, evidence and source notes, limitations, and concrete next steps. Keep facts separate from interpretation; never fabricate data, citations, approvals or results. Make it editable and reusable. Provide the complete Markdown source, then recommend a suitable export format (PDF, DOCX, spreadsheet, presentation or screenplay format) only if it serves the artifact.");
      const pubCopy=el("button","sl-copy","Copy universal publishing prompt");
      pubCopy.type="button";
      pubCopy.addEventListener("click",async()=>{
        try { await navigator.clipboard.writeText(pubPrompt.textContent); pubCopy.textContent="Copied"; }
        catch { pubCopy.textContent="Select and copy the prompt"; }
      },{signal});
      publish.append(pubPrompt,pubCopy);
      const router=el("section","sl-engine-router");
      router.append(
        el("h2","","Publishing engine router"),
        el("p","","One central workflow; specialist output routes. Keep the editable source separate from the renderer so each project uses the right production tool.")
      );
      const routes=el("div","sl-engine-grid");
      const routeData=[
        ["Homebrewery","D&D and fantasy sourcebooks","Use for themed, multi-column fantasy pages and tabletop supplements. It is a specialist renderer, not the default for ordinary business or healthcare documents.","Markdown → Homebrewery page","homebrew"],
        ["Professional documents","Business, healthcare, research and operations","Keep the master copy in Markdown or a document editor; export formal deliverables to PDF or DOCX. Use spreadsheets for operational tables and slide decks for presentations.","Markdown / DOCX → PDF, DOCX or slides","professional"],
        ["Film production","Screenplays and production packs","Separate the screenplay from production planning. Use screenplay-aware formatting for scripts; create shot lists, storyboards, schedules and call sheets as separate production artifacts.","Screenplay source + shot list / storyboard / schedule","film"],
        ["Data outputs","Analysis, reporting and decision support","Keep raw data, calculations and narrative conclusions distinct. Use CSV for portable data, XLSX for working analysis and dashboards for recurring monitoring.","CSV / XLSX → charts and dashboard","data"]
      ];
      routeData.forEach(([name,audience,description,flow,key])=>{
        const card=el("article","sl-engine-card");
        card.append(el("h3","",name),el("p","sl-engine-audience",audience),el("p","",description),el("p","sl-engine-flow",flow));
        if(key==="homebrew"){
          const links=el("div","sl-engine-links");
          const app=el("a","sl-engine-link","Open Homebrewery");
          app.href="https://homebrewery.naturalcrit.com/"; app.target="_blank"; app.rel="noopener noreferrer";
          const source=el("a","sl-engine-link","Source code");
          source.href="https://github.com/naturalcrit/homebrewery"; source.target="_blank"; source.rel="noopener noreferrer";
          links.append(app,source); card.append(links);
        }
        routes.append(card);
      });
      router.append(routes);
      const handoff=el("ol","sl-engine-handoff");
      ["Create and preserve the canonical source (Markdown, screenplay text or structured data).","Select the output route according to the reader, task and required format.","Render or export using the specialist tool; do not force every artifact through one visual template.","Review facts, calculations, citations, privacy, layout and final file before distribution."].forEach(step=>handoff.append(el("li","",step)));
      router.append(el("h3","","Standard handoff"),handoff);
      const homebrewNote=el("p","sl-publish-note","Homebrewery is linked as an independent specialist tool. LearnHarness does not install, embed, host, sync with or automatically publish to it. Open it separately when a D&D / fantasy page layout is appropriate.");
      router.append(homebrewNote);
      publish.append(router);
      root.append(intro,search,list,cross,reference,publish,investorLibraryView(),openEducationLibraryView());
      container.append(root);
      render();
      return () => { root.remove(); };
    }
  });
  ctx.registerAction({id:"open-curriculum",name:"Open strategic curriculum",run:()=>ctx.app.openView("curriculum")});
  ctx.placeAction({id:"curriculum-sidebar",actionId:"open-curriculum",location:"sidebar"});
}
