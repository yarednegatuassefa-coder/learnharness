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
      root.append(intro,search,list,cross,reference,publish);
      container.append(root);
      render();
      return () => { root.remove(); };
    }
  });

  // Optional external reading library. These records are reference material, not assignments.
  const READING_BOOKS = [{"title":"The Machiavellians: Defenders of Freedom","author":"James Burnham","genre":"Arts and culture","subgenre":"How ideas spread and shape culture","score":4.65,"disciplines":["Political Science and Power","Philosophy","History and Dynastic Systems"]},{"title":"Status and Culture: How Our Desire for Social Rank Creates Taste, Identity, Art, Fashion, and Constant Change","author":"W. David Marx","genre":"Arts and culture","subgenre":"How ideas spread and shape culture","score":4.25,"disciplines":["Psychology and Human Behaviour","Business and Entrepreneurship","Propaganda, Strategic Communication and Influence"]},{"title":"Antimemetics: Why Some Ideas Resist Spreading","author":"Nadia Asparouhova","genre":"Arts and culture","subgenre":"How ideas spread and shape culture","score":4.25,"disciplines":["Propaganda, Strategic Communication and Influence","Psychology and Human Behaviour"]},{"title":"Not According to Plan: Filmmaking Under Stalin","author":"Maria Belodubrovskaya","genre":"Arts and culture","subgenre":"The process of creativity","score":4.4,"disciplines":["Cinematography, Filmmaking and Screenwriting","Propaganda, Strategic Communication and Influence","History and Dynastic Systems"]},{"title":"The Nolan Variations: The Movies, Mysteries, and Marvels of Christopher Nolan","author":"Tom Shone","genre":"Arts and culture","subgenre":"The process of creativity","score":3.25,"disciplines":["Cinematography, Filmmaking and Screenwriting"]},{"title":"Unreasonable Hospitality: The Remarkable Power of Giving People More Than You Expect","author":"Will Guidara","genre":"Arts and culture","subgenre":"The process of creativity","score":4.2,"disciplines":["Business and Entrepreneurship","Psychology and Human Behaviour"]},{"title":"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones","author":"James Clear","genre":"Business and economics","subgenre":"Building better work habits","score":3.95,"disciplines":["Psychology and Human Behaviour"]},{"title":"Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential","author":"Tiago Forte","genre":"Business and economics","subgenre":"Building better work habits","score":4.2,"disciplines":["Business and Entrepreneurship","Philosophy"]},{"title":"Apple in China","author":"Patrick McGee","genre":"Business and economics","subgenre":"Company, industry, and founder histories","score":5,"disciplines":["Geopolitics","Supply Chain and Logistics","Business and Entrepreneurship"]},{"title":"Chip War: The Fight for the World’s Most Critical Technology","author":"Chris Miller","genre":"Business and economics","subgenre":"Company, industry, and founder histories","score":5,"disciplines":["Geopolitics","Supply Chain and Logistics","Business and Entrepreneurship"]},{"title":"Focus: The ASML Way – Inside the Power Struggle Over the Most Complex Machine on Earth","author":"Marc Hijink","genre":"Business and economics","subgenre":"Company, industry, and founder histories","score":4.25,"disciplines":["Supply Chain and Logistics","Geopolitics","Business and Entrepreneurship"]},{"title":"7 Powers: The Foundations of Business Strategy","author":"Hamilton Helmer","genre":"Business and economics","subgenre":"How to build competitive advantage","score":5,"disciplines":["Business and Entrepreneurship","Economics and Wealth"]},{"title":"The Hard Thing About Hard Things","author":"Ben Horowitz","genre":"Business and economics","subgenre":"How to build competitive advantage","score":3.95,"disciplines":["Business and Entrepreneurship"]},{"title":"Understanding Michael Porter: The Essential Guide to Competition and Strategy","author":"Joan Magretta","genre":"Business and economics","subgenre":"How to build competitive advantage","score":4.6,"disciplines":["Business and Entrepreneurship","Economics and Wealth"]},{"title":"Zero to One: Notes on Startups, or How to Build the Future","author":"Peter Thiel with Blake Masters","genre":"Business and economics","subgenre":"How to build competitive advantage","score":3.6,"disciplines":["Business and Entrepreneurship","Economics and Wealth"]},{"title":"A Man for All Markets: From Las Vegas to Wall Street, How I Beat the Dealer and the Market","author":"Edward O. Thorp","genre":"Business and economics","subgenre":"Understanding financial systems","score":4.4,"disciplines":["Economics and Wealth","Psychology and Human Behaviour"]},{"title":"Never Split the Difference: Negotiating As If Your Life Depended on It","author":"Chris Voss with Tahl Raz","genre":"Business and economics","subgenre":"Communication and negotiation","score":4.2,"disciplines":["Business and Entrepreneurship","Psychology and Human Behaviour"]},{"title":"Outlive: The Science and Art of Longevity","author":"Peter Attia, MD, with Bill Gifford","genre":"Health, endurance, and longevity","subgenre":"Exercise and longevity","score":3.35,"disciplines":["Healthcare Data Analysis","Psychology and Human Behaviour"]},{"title":"Exercised: Why Something We Never Evolved to Do Is Healthy and Rewarding","author":"Daniel E. Lieberman","genre":"Health, endurance, and longevity","subgenre":"Exercise and longevity","score":3.75,"disciplines":["Healthcare Data Analysis"]},{"title":"Endurance: Shackleton’s Incredible Voyage","author":"Alfred Lansing","genre":"Adventure, sport, and memoir","subgenre":"Expeditions","score":4,"disciplines":["History and Dynastic Systems","Psychology and Human Behaviour"]},{"title":"Sea People: The Puzzle of Polynesia","author":"Christina Thompson","genre":"Adventure, sport, and memoir","subgenre":"Expeditions","score":4.05,"disciplines":["History and Dynastic Systems","Geopolitics"]},{"title":"The Wager: A Tale of Shipwreck, Mutiny and Murder","author":"David Grann","genre":"Adventure, sport, and memoir","subgenre":"Expeditions","score":3.65,"disciplines":["History and Dynastic Systems","Psychology and Human Behaviour"]},{"title":"Boyd: The Fighter Pilot Who Changed the Art of War","author":"Robert Coram","genre":"History and politics","subgenre":"Lessons from war","score":4.25,"disciplines":["Political Science and Power","Geopolitics","Psychology and Human Behaviour"]},{"title":"Postwar","author":"Tony Judt","genre":"History and politics","subgenre":"Lessons from war","score":4.05,"disciplines":["History and Dynastic Systems","Geopolitics","Political Science and Power"]},{"title":"The Power Broker: Robert Moses and the Fall of New York","author":"Robert A. Caro","genre":"History and politics","subgenre":"On government as builder: city, state, policy","score":4.65,"disciplines":["Political Science and Power","History and Dynastic Systems"]},{"title":"Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed","author":"James C. Scott","genre":"History and politics","subgenre":"On government as builder: city, state, policy","score":5,"disciplines":["Political Science and Power","History and Dynastic Systems","Supply Chain and Logistics"]},{"title":"Against the Grain","author":"James C. Scott","genre":"History and politics","subgenre":"The rise and fall of ancient empires","score":4.65,"disciplines":["History and Dynastic Systems","Political Science and Power"]},{"title":"SPQR: A History of Ancient Rome","author":"Mary Beard","genre":"History and politics","subgenre":"The rise and fall of ancient empires","score":4.3,"disciplines":["History and Dynastic Systems","Political Science and Power"]},{"title":"Alan Turing: The Enigma","author":"Andrew Hodges","genre":"Science and technology","subgenre":"Computing and the internet","score":4.05,"disciplines":["Mechanistic Interpretability, AI Safety and Model Auditing","History and Dynastic Systems"]},{"title":"Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems","author":"Martin Kleppmann","genre":"Science and technology","subgenre":"Computing and the internet","score":4.75,"disciplines":["Business and Entrepreneurship","Mechanistic Interpretability, AI Safety and Model Auditing"]},{"title":"Working in Public: The Making and Maintenance of Open Source Software","author":"Nadia Eghbal","genre":"Science and technology","subgenre":"Computing and the internet","score":4,"disciplines":["Business and Entrepreneurship","Psychology and Human Behaviour"]},{"title":"Algorithms to Live By: The Computer Science of Human Decisions","author":"Brian Christian and Tom Griffiths","genre":"Science and technology","subgenre":"Models, systems, and decisions","score":4.6,"disciplines":["Psychology and Human Behaviour","Economics and Wealth"]},{"title":"Superforecasting: The Art and Science of Prediction","author":"Philip E. Tetlock and Dan Gardner","genre":"Science and technology","subgenre":"Models, systems, and decisions","score":5,"disciplines":["Psychology and Human Behaviour","Geopolitics","Economics and Wealth"]},{"title":"Thinking in Systems: A Primer","author":"Donella Meadows","genre":"Science and technology","subgenre":"Models, systems, and decisions","score":5,"disciplines":["Business and Entrepreneurship","Supply Chain and Logistics","Healthcare Data Analysis"]},{"title":"The Beginning of Infinity: Explanations That Transform the World","author":"David Deutsch","genre":"Science and technology","subgenre":"From idea to reality","score":4.4,"disciplines":["Philosophy","History and Dynastic Systems"]},{"title":"The Idea Factory: Bell Labs and the Great Age of American Innovation","author":"Jon Gertner","genre":"Science and technology","subgenre":"From idea to reality","score":4.4,"disciplines":["Business and Entrepreneurship","History and Dynastic Systems"]},{"title":"The Structure of Scientific Revolutions","author":"Thomas Kuhn","genre":"Science and technology","subgenre":"From idea to reality","score":4.65,"disciplines":["Philosophy","Healthcare Data Analysis","Mechanistic Interpretability, AI Safety and Model Auditing"]},{"title":"Project Hail Mary","author":"Andy Weir","genre":"Fiction","subgenre":"Science fiction","score":3.4,"disciplines":["Mechanistic Interpretability, AI Safety and Model Auditing","Philosophy"]},{"title":"Remembrance of Earth’s Past (Three-Body) trilogy","author":"Cixin Liu","genre":"Fiction","subgenre":"Science fiction","score":3.65,"disciplines":["Geopolitics","Philosophy","History and Dynastic Systems"]},{"title":"The Invincible","author":"Stanisław Lem","genre":"Fiction","subgenre":"Science fiction","score":3.4,"disciplines":["Philosophy","Mechanistic Interpretability, AI Safety and Model Auditing"]}];
  ctx.registerView({
    id: "reading-library",
    name: "External reading library",
    mount(container, signal) {
      const root = el("div", "sl-root");
      const intro = el("section", "sl-intro");
      intro.append(
        el("p", "sl-eyebrow", "OPTIONAL REFERENCE COLLECTION"),
        el("h1", "sl-title", "a16z Frontier reading library"),
        el("p", "sl-lede", "Browse a provisional 40-record seed for the a16z Frontier 300+ book collection. Source validation and full extraction are outstanding. These are optional references, not required lessons or completion tasks.")
      );
      const stats = el("div", "sl-stats");
      [["40","provisional seed records"],["8","publisher genres"],["12","curriculum disciplines"]].forEach(([n,l]) => {
        const item=el("div","sl-stat"); item.append(el("strong","",n),el("span","",l)); stats.append(item);
      });
      intro.append(stats);
      const source = el("p","sl-reference-link","Source: a16z Frontier · 24 November 2026 · Full publisher collection: a16zfrontier.com");
      const sourceLink=el("a","sl-engine-link","Open original collection");
      sourceLink.href="https://a16zfrontier.com/posts/article/300-books-to-read-gift-guide/";
      sourceLink.target="_blank"; sourceLink.rel="noopener noreferrer";
      const search=el("input","sl-search");
      search.type="search"; search.placeholder="Search title, author, genre or discipline…";
      search.setAttribute("aria-label","Search the external reading library");
      const list=el("div","sl-grid");
      const render=(filter="")=>{
        list.replaceChildren();
        const q=filter.toLowerCase();
        const matches=READING_BOOKS.filter(b=>(b.title+" "+b.author+" "+b.genre+" "+b.subgenre+" "+b.disciplines.join(" ")).toLowerCase().includes(q));
        if(!matches.length){list.append(el("p","sl-empty","No matching title. Try another search."));return;}
        matches.forEach(book=>{
          const card=el("article","sl-card");
          const top=el("div","sl-card-top");
          top.append(el("h2","sl-card-title",book.title));
          card.append(top,el("p","sl-goal","by "+book.author));
          card.append(el("p","sl-engine-audience",book.genre+" · "+book.subgenre));
          card.append(el("p","sl-goal","Mapped disciplines: "+book.disciplines.join(" · ")));
          card.append(el("p","sl-prompt-label","Priority score: "+book.score.toFixed(2)+" / 5 · Editorial triage, not a quality rating"));
          const prompt=el("p","sl-prompt-text","Use this book as an optional reference for my current learning goal. First ask what I want to understand, then help me read critically. Separate the author's claims, supporting evidence, interpretation and limitations. Do not assume I have read it or claim I have mastered a topic because I finished it. Book: "+book.title+" — "+book.author+". Original source: https://a16zfrontier.com/posts/article/300-books-to-read-gift-guide/");
          const copy=el("button","sl-copy","Copy reading prompt"); copy.type="button";
          copy.addEventListener("click",async()=>{
            try{await navigator.clipboard.writeText(prompt.textContent);copy.textContent="Copied";}
            catch{copy.textContent="Select and copy the prompt";}
          },{signal});
          card.append(copy); list.append(card);
        });
      };
      search.addEventListener("input",()=>render(search.value),{signal});
      const note=el("p","sl-publish-note","Import status: provisional 40-record seed. Publisher-page validation and extraction of all 300+ titles are still pending. Duplicate matching against Lastbook is not complete because its local library is separate and inaccessible to this plugin.");
      root.append(intro,source,sourceLink,search,list,note);
      container.append(root); render();
      return ()=>{root.remove();};
    }
  });
  ctx.registerAction({id:"open-reading-library",name:"Open external reading library",run:()=>ctx.app.openView("reading-library")});
  ctx.placeAction({id:"reading-library-sidebar",actionId:"open-reading-library",location:"sidebar"});

  ctx.registerAction({id:"open-curriculum",name:"Open strategic curriculum",run:()=>ctx.app.openView("curriculum")});
  ctx.placeAction({id:"curriculum-sidebar",actionId:"open-curriculum",location:"sidebar"});
}
