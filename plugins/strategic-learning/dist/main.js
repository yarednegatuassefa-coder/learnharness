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
  ,{ id: "fde", name: "Forward Deployed Engineer (career pathway)", goal: "Discover a real organisational problem and deliver a secure, reliable, measurable AI-enabled solution in production.", stages: ["Discovery: stakeholder interviews, workflow maps, baseline metrics, scope and problem selection", "LLM platforms: APIs, model behaviour, structured output, tool schemas, errors, latency and cost", "Agents, tools, MCP and skills: bounded loops, permissions, context, prompt-injection defence and human approval", "AI-assisted engineering and integration: coding agents, Git, APIs, databases, auth, webhooks and tests", "Production readiness: deployment, observability, security, evaluations, rollback and incident response", "Field deployment: pilot, onboarding, operational ownership, stakeholder handover and measured impact"], project: "Complete one real deployment case study for MMV Medical, Cloud L, Melat Supermarket or Home, with synthetic/approved data, evaluation evidence, threat model, operating runbook and measured business outcome.", assessment: ["Map a real workflow; identify users, bottlenecks, baseline and reasons not to use AI.", "Build a model API feature with schema validation, safe secrets, error handling and cost/latency measurements.", "Build a bounded agent with at least two tools, least privilege, validated outputs, audit trail and approval boundary.", "Deliver a version-controlled API/database integration with tests and reviewed code.", "Produce a threat model, evaluation dataset/results, monitoring plan, failure drill and rollback runbook.", "Run a controlled pilot and present before/after metrics, guardrails, limitations and stakeholder handover."], diagnostics: ["Describe a real workflow, its users and exceptions. What baseline would prove the problem exists, and when would AI be the wrong solution?", "Explain an LLM API request/response path. How do you validate output and handle timeouts, rate limits, malformed data and secrets?", "Trace an agent loop. How do you constrain tool permissions and stop untrusted tool output from authorizing actions?", "How would you integrate an external API and prevent duplicate side effects from webhook retries?", "Which production metrics and adversarial tests would you use, and how would you roll back a harmful release?", "Define a pilot, primary outcome, guardrail metric and evidence needed to attribute improvement."] }
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
        el("p", "sl-lede", "Twelve disciplines and an applied FDE career pathway. One adaptive learning process. Learn to reason, apply and retain—not merely consume information.")
      );
      const stats = el("div", "sl-stats");
      [["12","disciplines"],["1","FDE career pathway"],["6","FDE stages"]].forEach(([n,l]) => {
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
          top.append(el("span","sl-number",(domain.id==="fde"?"FDE":String(DOMAINS.indexOf(domain)+1).padStart(2,"0"))),el("h2","sl-card-title",domain.name));
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
      const fde = DOMAINS.find(d=>d.id==="fde");
      const fdeSection=el("section","sl-fde");
      fdeSection.append(el("h2","","Forward Deployed Engineer · career pathway"),el("p","sl-fde-lede","A cross-disciplinary route from customer discovery to production deployment. This is not a thirteenth discipline. It draws on business, psychology, economics, healthcare data, supply chain, strategic communication and AI safety."));
      const fdeNotice=el("p","sl-fde-note","Progress is stored in this plugin's local data. Mastery entries are learner-recorded claims supported by evidence notes; LearnHarness does not independently verify an artifact or run external project tests from this tracker."));
      fdeSection.append(fdeNotice);
      const fdeProgress=el("div","sl-fde-progress","Loading saved FDE progress…");
      fdeSection.append(fdeProgress);
      const fdeCards=el("div","sl-fde-grid");
      fde.stages.forEach((stage,index)=>{
        const n=index+1, card=el("article","sl-fde-card");
        card.append(el("p","sl-fde-stage","STAGE "+n+" OF 6"),el("h3","",stage));
        const diagnostic=el("p","sl-fde-diagnostic", "Diagnostic: "+fde.diagnostics[index]);
        const assessment=el("p","sl-fde-assessment","Practical assessment: "+fde.assessment[index]);
        card.append(diagnostic,assessment);
        const evidence=el("textarea","sl-fde-evidence"); evidence.rows=3; evidence.maxLength=4000; evidence.placeholder="Evidence note: explain your reasoning, describe the artifact, record test results and link/reference its location. Do not paste secrets or personal data.";
        const status=el("select","sl-fde-status");
        [["not-started","Not started"],["in-progress","In progress"],["evidence-submitted","Evidence submitted"],["mastered","Mastered (self-recorded with evidence)"]].forEach(([value,label])=>{const option=el("option","",label);option.value=value;status.append(option);});
        const save=el("button","sl-copy","Save progress"); save.type="button";
        const result=el("p","sl-fde-result","");
        save.addEventListener("click",async()=>{
          save.disabled=true; result.textContent="Saving…";
          try {
            const saved=await ctx.call("fde-progress:save",{stage:n,status:status.value,evidence:evidence.value});
            renderFdeProgress(saved); result.textContent="Saved locally.";
          } catch(error) { result.textContent="Could not save: "+String(error?.message||error); }
          finally { save.disabled=false; }
        },{signal});
        card.append(status,evidence,save,result);
        fdeCards.append(card);
      });
      fdeSection.append(fdeCards);
      const fdePrompt=el("p","sl-fde-prompt","Start an FDE session: Diagnose my current competence across the six FDE stages. Ask one diagnostic question at a time. Build a dependency-aware plan with stage deliverables and explicit assessment gates. Do not advance me because I completed a course or feel confident. Require explanation, a novel application, a counterexample/failure mode and inspectable evidence. Teach one reasoning step at a time; use unfamiliar practice cases. Treat my progress tracker as self-reported unless you actually inspect and verify the artifact.");
      const fdeCopy=el("button","sl-copy","Copy FDE diagnostic prompt"); fdeCopy.type="button";
      fdeCopy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(fdePrompt.textContent);fdeCopy.textContent="Copied";}catch{fdeCopy.textContent="Select and copy the prompt";}},{signal});
      fdeSection.append(fdePrompt,fdeCopy);
      function renderFdeProgress(data){
        const entries=Array.isArray(data?.stages)?data.stages:[];
        const byStage=new Map(entries.map(x=>[x.stage,x]));
        const mastered=entries.filter(x=>x.status==="mastered").length;
        fdeProgress.textContent=mastered+" of 6 stages marked mastered · "+entries.length+" stages have saved records.";
        [...fdeCards.children].forEach((card,i)=>{
          const item=byStage.get(i+1); const select=card.querySelector("select"); const area=card.querySelector("textarea");
          if(item){select.value=item.status;area.value=item.evidence||"";}
          else {select.value="not-started";}
          const priorComplete=i===0||Array.from({length:i},(_,j)=>byStage.get(j+1)).every(x=>x?.status==="mastered");
          select.querySelector('option[value="mastered"]').disabled=!priorComplete;
          card.querySelector("button").disabled=!priorComplete;
          const gate=card.querySelector(".sl-fde-result");
          gate.textContent=priorComplete?"Prerequisite gate: open.":"Prerequisite gate: complete and evidence the previous stage first.";
        });
      }
      ctx.call("fde-progress:get").then(renderFdeProgress).catch(error=>{fdeProgress.textContent="Progress storage unavailable: "+String(error?.message||error);});
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
      root.append(intro,search,list,fdeSection,cross,reference,publish);
      container.append(root);
      render();
      return () => { root.remove(); };
    }
  });
  ctx.registerAction({id:"open-curriculum",name:"Open strategic curriculum",run:()=>ctx.app.openView("curriculum")});
  ctx.placeAction({id:"curriculum-sidebar",actionId:"open-curriculum",location:"sidebar"});
}
