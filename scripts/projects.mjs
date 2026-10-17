export const projects = [
  {
    slug: 'campaign-outcome-studio', title: 'Campaign Outcome Studio', category: 'business', number: '01', image: 'campaign.jpg', color: '#dfe5f4',
    tags: ['Merchant fintech', 'Agent experience'], label: 'MERCHANT FINTECH / INDEPENDENT CONCEPT',
    summary: 'Turning scattered campaign signals into an investigation, an approved action, and a measurable outcome.',
    lead: 'What if a merchant could understand why a campaign underperformed — and confidently decide what to do next?',
    url: 'https://campaign-outcome-studio.vercel.app', repo: 'campaign-outcome-studio', scope: 'Product concept & interactive prototype', context: 'Independent exploration of Razorpay Engage',
    problem: 'Campaign results leave a merchant with several competing explanations. Was the offer unclear? Did payments fail? Did an incentive simply give away margin? A dashboard can surface a change without helping the merchant decide which action is justified.',
    bet: 'Build the experience around a complete decision loop: investigate the evidence, compare interventions, approve the action, then review the outcome. The merchant stays in control of consequential changes.',
    decisions: [
      'Use one repeatable journey across six scenarios, so the merchant learns a consistent way to investigate and act.',
      'Make the audience, intervention, and limits explicit before approval. An agent recommendation should be inspectable.',
      'Include campaign and profit diagnosis with multiple evidence sources, making alternative explanations visible.',
      'End with results and learning, so execution connects back to the original hypothesis.'
    ],
    try: 'Start with “Offer clarity.” Follow the guided investigation, review the proposed intervention, approve the simulated plan, and inspect the experiment results. Then compare that flow with payment recovery or profit diagnosis.',
    next: 'A useful next test would ask merchants to explain the recommended action and its risks in their own words. I would examine whether the evidence and approval screen improve decision confidence, and where the workflow creates unnecessary effort.',
    limitation: 'Independent concept, not an official Razorpay product. Merchant data, agent activity, execution, and measured results are simulated. The prototype sends no messages and changes no campaigns.'
  },
  {
    slug: 'moneycanvas', title: 'MoneyCanvas', category: 'consumer', number: '02', image: 'moneycanvas.jpg', color: '#e3e8dc',
    tags: ['Fintech', 'Generative UI concept'], label: 'PERSONAL FINANCE / INTERACTIVE PROTOTYPE',
    summary: 'A conversation that becomes the right workspace for your next money decision.',
    lead: 'A personal-finance question rarely needs just a paragraph. Sometimes it needs a comparison, a cash runway, or a plan you can change.',
    url: 'https://moneycanvas-prototype.vercel.app', repo: 'moneycanvas-prototype', scope: 'Conversation design & interactive prototype', context: 'Four everyday financial decisions',
    problem: 'People approach financial decisions through their situation: a bonus, a possible home purchase, an emergency, or their everyday spending. A single generic chat interface makes it difficult to compare the consequences of different choices.',
    bet: 'Let a short guided conversation identify the decision, then produce a purpose-built workspace with transparent assumptions and interactive calculations.',
    decisions: [
      'Give each of the four scenarios a distinct output: an allocation planner, housing comparison, cash-flow dashboard, or credit-card shortlist.',
      'Keep the numerical models deterministic and local, so changing an input produces a traceable result.',
      'Expose model assumptions, previous answers, and restart controls. A user should be able to revise a decision without losing the thread.',
      'Use authored conversations to demonstrate the experience before adding the uncertainty and cost of a live language model.'
    ],
    try: 'Choose “Put my bonus to work,” answer the three guided questions, and compare the allocation choices. Change the investment-return assumption to see how the result changes. Try “Rent or buy a home?” to see a different workspace for a different decision.',
    next: 'I would test whether people can identify the assumptions driving each comparison, explain the trade-off, and comfortably revise an answer. The next validation should focus on comprehension, rather than treating completion as evidence of a good financial decision.',
    limitation: 'A working interface with authored responses and local calculations; no live LLM, bank connection, or financial execution. Scenarios and estimates are illustrative, and the prototype is not evidence of completed user testing or financial advice.'
  },
  {
    slug: 'myra', title: 'MYRA Travel Autopilot', category: 'consumer', number: '03', image: 'myra.jpg', color: '#f0dfd3',
    tags: ['Travel', 'Conversational experience'], label: 'TRAVEL / CASE COMPETITION PROTOTYPE',
    summary: 'One connected companion for planning, group decisions, and the moments when a trip changes.',
    lead: 'A travel assistant should remember the trip, connect the details, and stay useful after the booking.',
    url: 'https://myra-autopilot.vercel.app', repo: 'myra-autopilot', scope: 'Product experience & working prototype', context: 'Case competition concept for MakeMyTrip',
    problem: 'Travel planning spans preferences, budgets, bookings, group coordination, and disruptions. Treating each interaction as a separate conversation loses the context that makes the next decision useful.',
    bet: 'Use conversation as the command layer and interactive cards as the action layer, connected by one shared trip state. The assistant becomes a persistent companion across the journey.',
    decisions: [
      'Explore three different needs through family, solo, and group trips rather than a single generic travel flow.',
      'Use shared trip state so recommendations, votes, plans, and bookings remain connected across views.',
      'Render contextual interfaces for recommendations, voting, approvals, and disruption recovery.',
      'Keep the traveller’s approval visible before important actions; use simulated bookings to test the interaction model.'
    ],
    try: 'Open the family trip to explore planning with parents and a weather-related disruption. Switch to the group trip to try stay voting and coordination, or the Hindi solo journey for local discovery.',
    next: 'The next study would examine whether travellers understand what the assistant remembers and which actions need approval. Group planning also needs validation of conflicting preferences, vetoes, and how a final decision is reached.',
    limitation: 'Case competition prototype with synthetic traveller data and scripted responses. No real bookings, payments, live LLM, or travel APIs. MakeMyTrip references provide context for the concept and do not imply affiliation.'
  },
  {
    slug: 'kavach', title: 'KAVACH', category: 'business', number: '04', image: 'kavach.jpg', color: '#e4dff0',
    tags: ['Enterprise AI concept', 'Risk intelligence'], label: 'ENTERPRISE / HUL TECHTONIC SEASON 8',
    summary: 'A shared risk graph that turns one team’s partner experience into another team’s early warning.',
    lead: 'When teams share vendors and agencies, why should every team have to learn the same risk from scratch?',
    url: 'https://kavach-prototype-lemon.vercel.app', repo: 'kavach-prototype', scope: 'Product concept & interactive prototype', context: 'HUL TechTonic Season 8',
    problem: 'Execution partners can serve several brands at once. A missed delivery or quality problem can remain isolated within the team that observed it, leaving other exposed teams without context until their own deadline is at risk.',
    bet: 'Represent partner relationships as a shared execution-risk graph. Carry a signal through detection, scoring, context, propagation, approval, and resolution — with a human decision gate for high-value actions.',
    decisions: [
      'Give six conceptual agents distinct responsibilities: Scout, Compass, Ledger, Relay, Aegis, and Pathfinder.',
      'Make cross-brand exposure visible, so a risk signal has a clear reason to reach another team.',
      'Support four personas, from campaign and procurement roles to a portfolio operations head.',
      'Tie escalation to financial exposure and a human approval threshold instead of treating every detected risk as permission to act.'
    ],
    try: 'Open the prototype dashboard, inspect a high-risk partner, and follow the knowledge graph to related brands. Change the persona to see how the same signals appear in different decision contexts.',
    next: 'I would validate signal quality and escalation usefulness with the teams responsible for partner decisions. Key questions include who can contest a signal, how long it remains relevant, and how much warning volume a team can usefully absorb.',
    limitation: 'Competition concept using mocked partner, brand, risk, and agent data. It is not a deployed HUL system, and its sample metrics are not production outcomes or verified company-wide measurements.'
  }
];
