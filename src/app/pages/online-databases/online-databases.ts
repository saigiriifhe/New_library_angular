import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-online-databases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './online-databases.html',
  styleUrl: './online-databases.scss',
})
export class OnlineDatabases {
  /* =====================================
     FACULTY OF MANAGEMENT
  ===================================== */

  journalDatabases = [
    {
      name: 'Business Source Complete (Ebsco)',
      officialUrl: 'http://search.ebscohost.com',
      description:
        'Business Source Complete an online database a product of Ebsco.  Provide s access to more than 5400 full text journals includes titles from the Kluwer Academic Journals/John Wiley & Sons Journals/Berkeley Electronic Press/American Institute of Certified Public Accountants/Euro money Institutional Investor/Bernstein Financial Data/Additional Full Text Content from ICON Group International.  BSC also provide access to Market Research Reports and Company Profiles etc.',
    },

    {
      name: 'Econlit (Ebsco)',
      officialUrl: 'http://search.ebscohost.com',
      description:
        'Product of Ebsco provides bibliographic citations with selected abstracts and covers international literature on economics since 1969. Includes full-text sources for economic research. Contains over 700 journals with full-text and carries citations and abstracts dating back to 1886. Includes American Economic Association  (AEA) literature also.',
    },

    {
      name: 'Emerald Management Xtra',
      officialUrl: 'https://www.emerald.com',
      description:
        'Emerald Management Xtra an online database, Emerald Management Xtra is a product of Emerald Group Publishing Ltd.  EMX is a complete service wrapped around a highly focused collection of 150 primary, online journals in management and business and also integrated with management specific abstracting service of the world’s top 300 journals called Emerald Management Reviews.  EXM also focuses on Case Studies, Literature Reviews, and Book Reviews. EMX empowers management research and the teaching community',
    },

    {
      name: 'Proquest-ABI/Inform Complete',
      officialUrl: 'https://www.proquest.com',
      description:
        'ABI/INFORM Complete is the product of Proquest.  Provides access to over 6800 journals in full-text, also provides an in depth coverage of business conditions, trends, corporate strategies and management techniques data is available from 1992 onwards, includes important journals like MIT Sloan Management Review, Rand Journal of Economics, European Management Review, contains non-periodical content like EIU Views Wires, Business Dissertations, Author Profiles form Scholar Universe and Business Cases etc. ',
    },

    {
      name: 'JSTOR',
      officialUrl: 'http://www.jstor.org',
      description: `JSTOR is a digital library of more than 1,500 academic journals, books, and primary sources. JSTOR helps people discover, use, and build upon a wide range of content through a powerful research and teaching platform, and preserves this content for future generations. JSTOR is part of ITHAKA, a not-for-profit organization that also includes Ithaka S+R and Portico. is an archive of scholarly journals. It does not offer the current issues of a particular journal. It provides access to complete back run of a journal beginning with their first issue up until a 'moving wall'. The 'moving wall' is usually set by the publisher and it can range anywhere from 2-5 years. Business Collection contains the complete runs of 46 important titles in the following academic disciplines: Economics, Accounting.`,
    },

    {
      name: 'Science Direct',
      officialUrl: 'http://www.sciencedirect.com',
      description:
        'Science Direct is the web based interface to the full-text database of Elsevier Science journals, one of the world’s largest providers of scientific, technical and medical (STM) literature. The Science Direct offers a rich electronic environment for research journals, bibliographic databases and reference works. We have access to Business Management & Accounting; Economics, Econometrics and Finance present and backfile collections',
    },
  ];

  companyDatabases = [
    {
      name: 'Marketline',
      officialUrl: 'https://www.marketline.com',
      description:
        'Marketline is an online database which provides the equivalent of over 200,000 pages of company and industry information, 2500 Market Research Reports, 2000 SWOT Analysis, more than 50 Country Profiles and 10,000 Company Profiles, over 150 Industry Rankings.',
    },

    {
      name: 'Prime Database',
      officialUrl: 'https://www.primedatabase.com',
      description:
        'PRIME Database is operated by Praxis Consulting & Information Services Pvt. Ltd.  It capture the various activities happening in the primary financial markets in India.  It provides comprehensive information on all capital market offerings including public issues like IPOs, Debt, Takeovers, Mutual Fund IPOs, Equity Issues etc',
    },

    {
      name: 'Capitaline AWS',
      officialUrl: 'https://awsone.capitaline.com',
      description: `Capitaline AWS database provides fundamental and market data on more than 20,000 Indian listed and unlisted companies, classified under more than 300 industries, along with powerful analytic tools. Extensive data and analysis on every company profile, directors, more than 10-year financials (P&L, balance sheet, cash flow, consolidated financial data, segment data, forex data, R&D data, ratios, etc), quarterly results, ownership pattern, finished products, raw materials, share price data, directors' report, management discussion, notes to account, business news, corporate events, etc.`,
    },
    {
      name: 'CMIE Prowess',
      officialUrl: 'https://prowess.cmie.com/',
      description:
        'Prowess is a database of the financial performance of over 27,000 companies. It includes all companies traded on the National Stock Exchange and the Bombay Stock Exchange, thousands of unlisted public limited companies and hundreds of private limited companies. It also includes a number of important business entities that are not registered companies.',
    },
    {
      name: 'CMIE Economic Outlook',
      officialUrl: 'http://economicoutlook.cmie.com',
      description: `Provides CMIE's view on the current status of the Indian economy stands and where it is likely to head. This view is derived from a careful and continuous monitoring of all new data releases, analysed in real-time in the context of the historical trends and other current data releases.  It provides a comprehensive and integrated view of the Indian economy.`,
    },
    {
      name: 'CMIE Industry Outlook',
      officialUrl: 'http://industryoutlook.cmie.com',
      description:
        'Provides an up-to-date review of and an outlook for about 70 industries. CMIE analysts assess the outlook for each of these industries every month.  The analysis is largely quantitative and the presentations are focused and well organized. It presents detailed data on Demand and Supply, Prices, Financial performance. Investments etc. of the industries.',
    },

    {
      name: 'EPWRF Datasets ',
      officialUrl: 'http://www.epwrfits.in',
      description: `Product of Economic and Political Weekly Research Foundation, provides Time Series data on Indian Economy.  Subscribed to Financial Markets, Finances of State Governments, Banking Statistics, Combined Government Finances, Domestic Product of States of India, National Accounts Statistics, Price Indices, Annual Survey of Industries, Agricultural Statistics, External Sector, Power Sector, Finances of the Government of India, Industrial Production modules.  
Capitaline Nav India Enterprise Veresion  http://www.capitaline.com
Capitaline NAV is vastly more varied and in-depth database on the mutual fund industry. Database coverage on the mutual fund industry includes 5,000 schemes of 41 AMCs, with user-friendly data presentation — be it on an scheme/AMC, tracking NAVs, scheme details, performances, rankings, portfolios, etc.
Cross validation controls ensure data accuracy and views, analysis and reports, Fund managers’ profiles/commentaries & basic company profiles are some of the value additions for making informed decisions and to stay on top.
`,
    },

    {
      name: 'Capitaline NAV',
      officialUrl: 'http://www.capitaline.com',
      description: `Capitaline NAV is vastly more varied and in-depth database on the mutual fund industry. Database coverage on the mutual fund industry includes 5,000 schemes of 41 AMCs, with user-friendly data presentation — be it on an scheme/AMC, tracking NAVs, scheme details, performances, rankings, portfolios, etc.
Cross validation controls ensure data accuracy and views, analysis and reports, Fund managers’ profiles/commentaries & basic company profiles are some of the value additions for making informed decisions and to stay on top.`,
    },
  ];




  eBooks = [
    {
      name: 'EBSCO eBooks Collection',
      officialUrl: 'http://search.ebscohost.com',
      description: `Ebsco eBook Business Collection contains more than 27000 eBooks related to business management.  It covers various subject topics such as business management, marketing, finance, economics, operations and engineering etc. Titles are available from many noteworthy academic and business publishers including Oxford University Press, Cambridge Scholars Publishing, World Scientific Publishing Company, Princeton University Press, Amacom and Gallup Press etc.  
Research Related Databases 
`
    },
  ];


  researchDatabases = [
    {
      name: 'Scopus',
      officialUrl: 'https://www.scopus.com',
      description: 'Scopus is the largest abstract and citation database containing both peer-reviewed research literature and quality web sources. With over 19,000 titles from more than 5,000 international publishers, SciVerse Scopus offers researchers a quick, easy and comprehensive resource to support their research needs in the scientific, technical, medical and social sciences fields and, more recently, also in the arts and humanities.',
    },

    {
      name: 'Web of Science',
      officialUrl: 'https://www.webofscience.com',
      description: `Web of Science is a bibliometric database used to measure, evaluate, and track scientific research. The database contains scientific articles and other materials published in leading scientific journals. Additionally, Web of Science includes research, methods, and topics in various fields.  Scientists have access to assessments of articles and journals, such as the number of citations, impact factor, and other metrics. These assessments help determine the performance of researchers and the quality of journals.
Web of Science also helps scientists discover new areas of research by tracking publications and articles in a particular field. This helps researchers expand their interests and uncover new topics. Overall, Web of Science is an important tool for measuring, evaluating, and tracking scientific research and is widely used in the academic community.
`
    },

    {
      name: 'Cabells Directories',
      officialUrl: 'https://cabells.com',
      description: 'Cabells Directories database is designed to help researchers and academics match their manuscripts with the scholarly journals which are most likely to publish those manuscripts.  Provides the publishing guidelines of journals in the following areas: accounting, management, marketing, educational curriculum and methods, educational psychology and administration, and psychology etc.',
    }
  ];

  /* =====================================
     FACULTY OF SCIENCE & TECHNOLOGY
  ===================================== */

  engineeringDatabases = [
    {
      name: 'IEEE ASPP + POP',
      officialUrl: 'https://ieeexplore.ieee.org',
      description: 'IEEE ASPP+POP which includes 169 IEEE online society sponsored journals, transactions and magazines, peer-reviewed publications, quality magazines over 3 million Abstract Records, Back Files from 2005 onwards.  It also includes proceedings in the areas of Computer Engineering, Bio-medical Technology, Telecommunications, Electric Power, Aerospace, Computer Electronics etc.',
    },

    {
      name: 'Springer Engineering e-Journals Collection',
      officialUrl: 'https://link.springer.com',
      description: 'Springer Engineering e-Journals Collection includes 1400 e-journals, Titles include access to complete back issues from 1997 onwards.  Subject Collections covering subjects: behavioral science, life sciences, chemistry and materials science, computer science, earth and environmental science, engineering, mathematics, physics and astronomy. ',
    },

    {
      name: 'J-Gate Engineering and Technology (JET)',
      officialUrl: 'https://jgateplus.com',
      description: 'It is an Engineering Database published by Informatics India Ltd. Indexes 7,748+ e-journals out of which 4,082 are full text. Subjects include electronics, electrical, civil, information technology, computer science etc.',
    },
  ];

  /* =====================================
     FACULTY OF LAW
  ===================================== */

  lawDatabases = [
    {
      name: 'Manupatra',
      officialUrl: 'https://www.manupatrafast.com',
      description: 'The Manupatra online legal Database provides judgments across all subjects of law of Supreme Court, all Indian High Courts, Orders of the Tribunals, bills, central and state Acts, notification and circulars, ordinances, committee reports and more.  ',
    },

    {
      name: 'SCC Online',
      officialUrl: 'https://www.scconline.com',
      description: `SSC Online is a legal database containing a collection of legal materials from India as well as from other Asian and African countries, the USA, Canada and the United Kingdom.  With a collection of over 400 databases, with more than 4 million documents and over 19 million pages, this legal research tool provides quality information with an interface which makes research a quicker and more effective process.
SCC Online extensively covers case-law of the Indian Supreme Court (1969 onwards), all High Courts, historical courts, tribunals and commissions, Indian Statutory Law, Indian secondary materials, articles from up to 31 top Indian legal journals, 21 foreign courts, and international materials, such as human rights treaties and conventions, World Intellectual Property Organization domain name decisions, and documents of the Permanent Court of Arbitration. In addition, SCC Online also offers law decisions and judgments of Sri Lanka, Tanzania, Thailand, Uganda, Bangladesh, South Africa, Nigeria, Zimbabwe, Botswana, United Kingdom, and the United States.
`,
    },

    {
      name: 'Lexis-Nexis',
      officialUrl: 'https://www.lexisnexis.com',
      description: `Lexis-Nexis contains thousands of publications which provide extensive sources of information in the areas of law, news, business, finance, government, medicine, technology and other subjects. Most publications in Lexis-Nexis are available in full-text, but very few academic journals are included. The only two subject areas in which Lexis-Nexis does have extensive coverage of academic journals are law and medicine. The service includes the full-text of a large number of law review journals and medical journal article abstracts are available through a version of the Medline database. (Another online information service--Dialog--has the most extensive coverage of academic journals in all subject areas.) Dates of coverage for many of the publications in Lexis-Nexis go back to the 1980's, with many of the legal documents (state and federal case law, statutes, law reviews, etc.) dating back earlier. Files are updated continuously.
`
    },
  ];
}
