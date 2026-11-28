// Curated, optional external research library. Descriptions and cautions are editorial metadata.
export const INVESTOR_SOURCES = [
  {
    "id": 1,
    "name": "Dataroma",
    "url": "https://www.dataroma.com/",
    "category": "Institutional positioning",
    "quality": "B",
    "priority": "P2",
    "notes": "Aggregated portfolios and reported holdings of selected investment managers. Treat reported holdings as dated snapshots, not current orders."
  },
  {
    "id": 2,
    "name": "WhaleWisdom",
    "url": "https://whalewisdom.com/",
    "category": "Institutional positioning",
    "quality": "B",
    "priority": "P2",
    "notes": "Fund holdings and 13F-oriented research tools. Check filing dates, coverage and methodology."
  },
  {
    "id": 3,
    "name": "Capitol Trades",
    "url": "https://www.capitoltrades.com/",
    "category": "Insider and public disclosures",
    "quality": "B",
    "priority": "P3",
    "notes": "Tracks disclosed US congressional trades. Disclosures are delayed, incomplete as a signal, and do not establish superior information or performance."
  },
  {
    "id": 4,
    "name": "OpenInsider",
    "url": "http://openinsider.com/",
    "category": "Insider and public disclosures",
    "quality": "B",
    "priority": "P2",
    "notes": "Searches reported corporate insider transactions. Distinguish routine, planned and discretionary transactions; inspect primary filings."
  },
  {
    "id": 5,
    "name": "13F.info",
    "url": "https://13f.info/",
    "category": "Institutional positioning",
    "quality": "B",
    "priority": "P2",
    "notes": "Makes institutional 13F filings easier to explore. 13F data is delayed and omits important parts of a fund's portfolio."
  },
  {
    "id": 6,
    "name": "SEC EDGAR",
    "url": "https://www.sec.gov/edgar/search/",
    "category": "Regulatory filings and primary sources",
    "quality": "A",
    "priority": "P1",
    "notes": "Official US company and fund filings. Use original 10-K, 10-Q, 8-K, proxy and 13F documents as the evidentiary source."
  },
  {
    "id": 7,
    "name": "Berkshire Hathaway — shareholder letters",
    "url": "https://www.berkshirehathaway.com/letters/letters.html",
    "category": "Investor letters and principles",
    "quality": "A",
    "priority": "P1",
    "notes": "Primary shareholder letters and annual reports. Read for capital allocation, incentives, accounting and business quality."
  },
  {
    "id": 8,
    "name": "Buffett meeting archive (CNBC)",
    "url": "https://buffett.cnbc.com/",
    "category": "Investor letters and principles",
    "quality": "B",
    "priority": "P3",
    "notes": "Video/interview archive associated with Berkshire annual meetings. Secondary media source; verify quotations and dates."
  },
  {
    "id": 9,
    "name": "Oaktree Capital — memos",
    "url": "https://www.oaktreecapital.com/insights/memos",
    "category": "Investor letters and principles",
    "quality": "A",
    "priority": "P1",
    "notes": "Howard Marks memos on risk, cycles, credit and investor psychology. Read the original memo and its publication date."
  },
  {
    "id": 10,
    "name": "Bridgewater Associates — research",
    "url": "https://www.bridgewater.com/research-and-insights",
    "category": "Macro and economic research",
    "quality": "A",
    "priority": "P2",
    "notes": "Research and commentary from an institutional asset manager. Treat house views as arguments to test, not neutral facts."
  },
  {
    "id": 11,
    "name": "Principles",
    "url": "https://www.principles.com/",
    "category": "Investor letters and principles",
    "quality": "B",
    "priority": "P2",
    "notes": "Ray Dalio's stated principles and frameworks. Separate useful heuristics from claims that require independent evidence."
  },
  {
    "id": 12,
    "name": "GMO — research",
    "url": "https://www.gmo.com/americas/research-library/",
    "category": "Macro and economic research",
    "quality": "A",
    "priority": "P2",
    "notes": "Long-horizon valuation and market research. Note assumptions, forecast horizons and the firm's investment perspective."
  },
  {
    "id": 13,
    "name": "AQR — insights",
    "url": "https://www.aqr.com/Insights",
    "category": "Quantitative research",
    "quality": "A",
    "priority": "P1",
    "notes": "Research on factors, portfolio construction, risk and quantitative investing. Check sample periods, costs and implementation assumptions."
  },
  {
    "id": 14,
    "name": "NYU Stern — Aswath Damodaran data",
    "url": "https://pages.stern.nyu.edu/~adamodar/",
    "category": "Valuation and financial analysis",
    "quality": "A",
    "priority": "P1",
    "notes": "Open valuation datasets, spreadsheets and teaching materials. Inspect date, industry definitions and model assumptions."
  },
  {
    "id": 15,
    "name": "Musings on Markets",
    "url": "https://aswathdamodaran.blogspot.com/",
    "category": "Valuation and financial analysis",
    "quality": "A",
    "priority": "P1",
    "notes": "Damodaran's valuation commentary. Use alongside the underlying data and models, not as a substitute for doing the valuation."
  },
  {
    "id": 16,
    "name": "Collaborative Fund — Morgan Housel",
    "url": "https://collabfund.com/blog/",
    "category": "Investor psychology and behaviour",
    "quality": "B",
    "priority": "P2",
    "notes": "Essays on behaviour, incentives, uncertainty and long-term investing. Strong conceptual reading; verify empirical claims separately."
  },
  {
    "id": 17,
    "name": "Farnam Street",
    "url": "https://fs.blog/",
    "category": "Decision-making and mental models",
    "quality": "B",
    "priority": "P2",
    "notes": "Mental models and decision frameworks. Treat models as tools with boundary conditions, not universal laws."
  },
  {
    "id": 18,
    "name": "J.P. Morgan Asset Management — market guide",
    "url": "https://am.jpmorgan.com/",
    "category": "Market and portfolio research",
    "quality": "A",
    "priority": "P2",
    "notes": "Market guides and investment materials. Check region, publication date, assumptions and whether content is educational or product-related."
  },
  {
    "id": 19,
    "name": "ARK Invest — research",
    "url": "https://www.ark-invest.com/research",
    "category": "Thematic and innovation research",
    "quality": "B",
    "priority": "P3",
    "notes": "Thematic research on innovation and technology. Treat forecasts as high-uncertainty scenarios; compare with independent evidence."
  },
  {
    "id": 20,
    "name": "Andreessen Horowitz",
    "url": "https://a16z.com/",
    "category": "Venture capital and business models",
    "quality": "B",
    "priority": "P3",
    "notes": "Essays on technology, startups and markets from a venture-capital perspective. Account for portfolio and industry incentives."
  },
  {
    "id": 21,
    "name": "CSInvesting",
    "url": "https://csinvesting.org/",
    "category": "Value investing education",
    "quality": "C",
    "priority": "P2",
    "notes": "Collected value-investing lectures, notes and case studies. Check original sources and dates; archive quality may vary."
  },
  {
    "id": 22,
    "name": "Columbia Business School — Value Investing",
    "url": "https://www.gsb.columbia.edu/valueinvesting",
    "category": "Value investing education",
    "quality": "A",
    "priority": "P2",
    "notes": "Academic and programme resources on value investing. Use as a structured learning source, not a stock-picking shortcut."
  },
  {
    "id": 23,
    "name": "FRED",
    "url": "https://fred.stlouisfed.org/",
    "category": "Macroeconomic data",
    "quality": "A",
    "priority": "P1",
    "notes": "Federal Reserve Bank of St. Louis economic time series. Check series definitions, revisions, frequency and seasonal adjustment."
  },
  {
    "id": 24,
    "name": "Federal Reserve",
    "url": "https://www.federalreserve.gov/",
    "category": "Macroeconomic data and policy",
    "quality": "A",
    "priority": "P1",
    "notes": "Official US monetary-policy statements, minutes, data and research. Primary source for Federal Reserve decisions."
  },
  {
    "id": 25,
    "name": "European Central Bank",
    "url": "https://www.ecb.europa.eu/",
    "category": "Macroeconomic data and policy",
    "quality": "A",
    "priority": "P1",
    "notes": "Official euro-area monetary policy, statistics and research. Confirm the relevant series, release date and geographic coverage."
  },
  {
    "id": 26,
    "name": "Bank for International Settlements",
    "url": "https://www.bis.org/",
    "category": "Macroeconomic data and policy",
    "quality": "A",
    "priority": "P1",
    "notes": "Central-bank research and international financial statistics, including credit and banking-system analysis."
  },
  {
    "id": 27,
    "name": "Trading Economics",
    "url": "https://tradingeconomics.com/",
    "category": "Macroeconomic data",
    "quality": "B",
    "priority": "P2",
    "notes": "Cross-country macroeconomic indicators and calendars. Verify important values against the originating statistical agency."
  },
  {
    "id": 28,
    "name": "Macrotrends",
    "url": "https://www.macrotrends.net/",
    "category": "Company and market data",
    "quality": "B",
    "priority": "P2",
    "notes": "Long-run company and market charts. Reconcile figures with audited filings and account for splits, restatements and definitions."
  },
  {
    "id": 29,
    "name": "Stock Analysis",
    "url": "https://stockanalysis.com/",
    "category": "Company and market data",
    "quality": "B",
    "priority": "P2",
    "notes": "Company financial statements, ratios and market data. Use as a discovery layer; verify material numbers in filings."
  },
  {
    "id": 30,
    "name": "CompaniesMarketCap",
    "url": "https://companiesmarketcap.com/",
    "category": "Company and market data",
    "quality": "B",
    "priority": "P3",
    "notes": "Company rankings and market-cap comparisons. Market capitalisation is not enterprise value or intrinsic value."
  },
  {
    "id": 31,
    "name": "Finviz",
    "url": "https://finviz.com/",
    "category": "Market screening and charting",
    "quality": "B",
    "priority": "P2",
    "notes": "Equity screens, heat maps and market snapshots. Treat screens as idea-generation, then inspect filings and valuation."
  },
  {
    "id": 32,
    "name": "Portfolio Visualizer",
    "url": "https://www.portfoliovisualizer.com/",
    "category": "Portfolio construction and backtesting",
    "quality": "B",
    "priority": "P2",
    "notes": "Portfolio analysis and backtesting tools. Historical results are sensitive to dates, survivorship, fees, taxes and chosen benchmarks."
  },
  {
    "id": 33,
    "name": "TradingView",
    "url": "https://www.tradingview.com/",
    "category": "Market screening and charting",
    "quality": "B",
    "priority": "P3",
    "notes": "Charts, indicators and market commentary. Price charts describe market history; they do not establish intrinsic value."
  },
  {
    "id": 34,
    "name": "Koyfin",
    "url": "https://www.koyfin.com/",
    "category": "Market screening and charting",
    "quality": "B",
    "priority": "P2",
    "notes": "Market, company and macro dashboards. Check which features/data are free and confirm important figures at source."
  },
  {
    "id": 35,
    "name": "AnnualReports",
    "url": "https://www.annualreports.com/",
    "category": "Company filings and reports",
    "quality": "B",
    "priority": "P2",
    "notes": "Convenient archive of company annual reports. Prefer the issuer's investor-relations site or regulator filing for authoritative versions."
  },
  {
    "id": 36,
    "name": "Investor.gov",
    "url": "https://www.investor.gov/",
    "category": "Investor protection and education",
    "quality": "A",
    "priority": "P1",
    "notes": "US SEC investor education, fraud warnings and explanations of securities products and market mechanics."
  },
  {
    "id": 37,
    "name": "Bogleheads Wiki",
    "url": "https://www.bogleheads.org/wiki/Main_Page",
    "category": "Portfolio construction and education",
    "quality": "C",
    "priority": "P2",
    "notes": "Community-maintained passive-investing reference. Useful for concepts; verify tax and legal details for the relevant country."
  },
  {
    "id": 38,
    "name": "Investopedia",
    "url": "https://www.investopedia.com/",
    "category": "Finance education",
    "quality": "B",
    "priority": "P2",
    "notes": "Accessible finance definitions and explainers. Good for orientation; consult primary sources for consequential claims."
  },
  {
    "id": 39,
    "name": "Corporate Finance Institute",
    "url": "https://corporatefinanceinstitute.com/resources/",
    "category": "Finance education",
    "quality": "B",
    "priority": "P2",
    "notes": "Practical finance, accounting and modelling guides. Check the assumptions behind templates and simplified examples."
  },
  {
    "id": 40,
    "name": "CFA Institute — research and insights",
    "url": "https://www.cfainstitute.org/insights",
    "category": "Professional research and standards",
    "quality": "A",
    "priority": "P1",
    "notes": "Professional research, investment standards and practitioner perspectives. Distinguish research from exam-preparation or promotional material."
  },
  {
    "id": 41,
    "name": "Morningstar",
    "url": "https://www.morningstar.com/",
    "category": "Fund and security analysis",
    "quality": "B",
    "priority": "P2",
    "notes": "Fund and security research, ratings and data. Understand rating methodology, coverage and any paywall or licensing limits."
  },
  {
    "id": 42,
    "name": "Simply Wall St",
    "url": "https://simplywall.st/",
    "category": "Company analysis",
    "quality": "B",
    "priority": "P3",
    "notes": "Visual company analysis and financial summaries. Treat visual scores as screening aids; validate accounting and valuation inputs."
  },
  {
    "id": 43,
    "name": "Value Investors Club",
    "url": "https://www.valueinvestorsclub.com/",
    "category": "Investment theses and case studies",
    "quality": "C",
    "priority": "P3",
    "notes": "Selected investor write-ups and theses. Potentially useful for learning analytical structure; access may be restricted and ideas may be stale."
  },
  {
    "id": 44,
    "name": "ETF Database",
    "url": "https://etfdb.com/",
    "category": "Funds and portfolio holdings",
    "quality": "B",
    "priority": "P2",
    "notes": "ETF screening, classifications and holdings information. Confirm holdings, fees and methodology with the fund issuer's current documents."
  },
  {
    "id": 45,
    "name": "Curvo",
    "url": "https://curvo.eu/",
    "category": "Portfolio construction and backtesting",
    "quality": "B",
    "priority": "P2",
    "notes": "European-oriented portfolio and ETF tools. Check index coverage, fees, currency, tax assumptions and backtest limitations."
  },
  {
    "id": 46,
    "name": "Of Dollars and Data",
    "url": "https://ofdollarsanddata.com/",
    "category": "Investor psychology and behaviour",
    "quality": "B",
    "priority": "P2",
    "notes": "Data-led writing on personal finance and investing behaviour. Inspect the dataset, sample and assumptions behind each conclusion."
  },
  {
    "id": 47,
    "name": "A Wealth of Common Sense",
    "url": "https://awealthofcommonsense.com/",
    "category": "Investor psychology and behaviour",
    "quality": "B",
    "priority": "P2",
    "notes": "Market history and behavioural investing commentary. Useful for context; distinguish historical patterns from forecasts."
  },
  {
    "id": 48,
    "name": "The Irrelevant Investor",
    "url": "https://theirrelevantinvestor.com/",
    "category": "Investor psychology and behaviour",
    "quality": "B",
    "priority": "P3",
    "notes": "Market history, investor behaviour and commentary. Use as a secondary perspective and verify referenced data."
  },
  {
    "id": 49,
    "name": "Visual Capitalist",
    "url": "https://www.visualcapitalist.com/",
    "category": "Data visualisation and economic context",
    "quality": "B",
    "priority": "P3",
    "notes": "Charts and visual explainers on markets, business and the economy. Follow chart footnotes to the original dataset."
  },
  {
    "id": 50,
    "name": "Our Finite World — identity and URL unverified",
    "url": null,
    "category": "Macroeconomic commentary",
    "quality": "C",
    "priority": "P3",
    "notes": "The submitted entry was incomplete (“ourfiniteworld?”). Do not rely on or link it until the exact site and author are confirmed."
  }
];

export const INVESTOR_CATEGORIES = [
  "All topics",
  "Regulatory filings and primary sources",
  "Institutional positioning",
  "Investor letters and principles",
  "Valuation and financial analysis",
  "Macroeconomic data and policy",
  "Quantitative research",
  "Company and market data",
  "Market screening and charting",
  "Portfolio construction and backtesting",
  "Investor protection and education",
  "Finance education",
  "Investor psychology and behaviour",
  "Venture capital and business models",
  "Data visualisation and economic context",
  "Thematic and innovation research",
  "Investment theses and case studies",
  "Professional research and standards",
  "Fund and security analysis",
  "Funds and portfolio holdings",
  "Decision-making and mental models",
  "Insider and public disclosures",
  "Macroeconomic commentary"
];
