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
  { id: "influence", name: "Propaganda, Strategic Communication and Influence", goal: "Understand how narratives shape public perception and communicate persuasively while resisting manipulation.", stages: ["Rhetoric, argument, framing and agenda-setting", "Propaganda history and media ecosystems", "Social psychology, persuasion and group behaviour", "Strategic communication, public relations and crisis response", "Disinformation analysis, verification and OSINT", "Information operations, media literacy and ethical influence"], project: "Deconstruct a historical campaign and design a transparent, evidence-based public information campaign." }
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
        el("p", "sl-lede", "Eleven connected disciplines. One adaptive learning process. Learn to reason, apply and retain—not merely consume information.")
      );
      const stats = el("div", "sl-stats");
      [["11","disciplines"],["6","stages per domain"],["1","integrated system"]].forEach(([n,l]) => {
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
          const quote=el("p","sl-prompt-text",`Diagnose my current understanding of ${domain.name}. My goal: ${domain.goal} Build a prerequisite-aware learning path, teach me one reasoning step at a time, and assess transfer through unfamiliar cases. Use Lastbook as my separate offline reference: tell me what keyword or topic to search there; when I return with a source title and page number or video timestamp, use that source explicitly. Do not pretend you can browse my local Lastbook library or invent citations.`);
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
      cross.append(el("h2","","Interdisciplinary connections"),el("p","","Geopolitics + economics + logistics: strategic dependencies and trade. Psychology + philosophy + influence: belief, reasoning and persuasion. Healthcare data + business: quality, productivity and operating decisions. History + politics: institutions, legitimacy and succession. Screenwriting + cinematography + psychology: character, image and audience response."));
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
      const homebrew=el("p","sl-publish-note","Homebrewery is a specialized Markdown-to-styled-page tool for D&D / fantasy sourcebook presentation. Use it when that visual language fits; for business, healthcare, research or operations, use clean project-appropriate document templates instead. This plugin does not embed or automatically publish to Homebrewery.");
      publish.append(homebrew);
      root.append(intro,search,list,cross,reference,publish);
      container.append(root);
      render();
      return () => { root.remove(); };
    }
  });
  ctx.registerAction({id:"open-curriculum",name:"Open strategic curriculum",run:()=>ctx.app.openView("curriculum")});
  ctx.placeAction({id:"curriculum-sidebar",actionId:"open-curriculum",location:"sidebar"});
}
