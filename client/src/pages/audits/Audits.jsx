import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeaveAMessage from "../../components/messages/LeaveAMessage";
import Footer from "../../components/Footer/Footer";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import auditbannerimg from "../../assets/auditbannerimg.jpg";
import systemmonitoringimg from "../../assets/systemmonitoringimg.svg";
import recoveryimg1 from "../../assets/recoveryimg1.jpg";
import "./audits.css";

const Audits = () => {
  const { id } = useParams();

  return (
    <div className="audits_page">
      <Header />

      {id && id === "business-regulatory" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Business Regulatory Services"}
            image={auditbannerimg}
            bread="Home | Audits | Business Regulatory Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Business Regulatory</span> Services
            </h1>

            <div className="consulting_list">
              <p>
                We specialize in assisting clients with navigating the complex
                Nigerian business regulatory environment. Our comprehensive
                services are designed to help businesses thrive in Nigeria by
                ensuring compliance with all relevant regulations and optimizing
                their operational strategies. Here is a detailed explanation of
                the areas we cover:
              </p>
              <ul>
                <li>
                  New Investments and Business Start-ups in Nigeria: We provide
                  expert guidance on establishing new businesses in Nigeria,
                  including legal, financial, and regulatory support to ensure a
                  smooth start-up process.
                </li>
                <li>
                  Securities Regulations: Our team helps clients comply with
                  Nigerian securities laws and regulations, ensuring their
                  financial instruments and market activities meet all legal
                  requirements.
                </li>
                <li>
                  Cross-border Transactions and Business Acquisitions: We offer
                  specialized support for international business dealings,
                  including mergers and acquisitions, to ensure compliance with
                  Nigerian and international regulations.
                </li>
                <li>
                  Due Diligence Investigations: We conduct thorough
                  investigations to assess the viability and risks associated
                  with potential business ventures or partnerships, providing
                  clients with a clear understanding of their investment
                  opportunities.
                </li>
                <li>
                  Equity Buy-outs and Buy-ins: We assist clients in executing
                  equity buy-outs and buy-ins, ensuring these transactions are
                  structured effectively and comply with all relevant
                  regulations.
                </li>
                <li>
                  Review of Commercial Agreements for Business Issues: Our team
                  reviews and advises on commercial agreements to identify and
                  address potential business issues, ensuring contracts are fair
                  and beneficial.
                </li>
                <li>
                  Contract Structuring and Restructuring for Tax Efficiency: We
                  help clients structure and restructure contracts to optimize
                  tax efficiency, reducing tax liabilities and maximizing
                  financial benefits.
                </li>
                <li>
                  Business Organization Advisory Services: We provide
                  comprehensive advice on business organization, including the
                  formation of joint ventures, wholly-owned subsidiaries, and
                  guidance on divestment and voluntary winding up/liquidation
                  processes.
                </li>
                <li>
                  Intellectual Property Advisory and Compliance Services: Our
                  experts assist clients in protecting their intellectual
                  property rights and ensuring compliance with Nigerian
                  intellectual property laws.
                </li>
                <li>
                  Company Secretarial Services: We offer a range of company
                  secretarial services, including maintaining statutory records,
                  filing annual returns, and ensuring compliance with corporate
                  governance requirements.
                </li>
              </ul>{" "}
              <br />
              <br />
              <br />
              <h3>Cooporate Finance</h3>
              <p>
                We provide strategic intelligence to help you develop a bidding
                strategy that gives you a competitive edge. Our services include
                assisting in the packaging of sell-offs and structuring the
                safest financing options that offer the best returns. We provide
                top-tier advice and our comprehensive corporate finance services
                portfolio includes acting as reporting accountants, conducting
                due diligence reviews, performing equity and bond valuations,
                offering pre- and post-merger and acquisition advisory, and
                providing taxation and audit/assurance services.
              </p>
            </div>
          </section>
        </div>
      )}

      {id && id === "risk-compliance" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Risk and Compliance"}
            image={auditbannerimg}
            bread="Home | Audits | Risk and Compliance"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Risk and</span> Compliance
            </h1>

            <div className="consulting_list human_resources">
              <h5>Internal Audit, Risk & Compliance:</h5>
              <p>
                This service involves evaluating and improving an organization's
                internal controls, risk management processes, and compliance
                with laws and regulations. It ensures that the organization
                operates efficiently, safeguards its assets, and maintains
                accurate financial reporting.
              </p>
            </div>

            <div className="consulting_list human_resources">
              <h5>Forensic: </h5>
              <p>
                Forensic services focus on investigating and resolving financial
                fraud and disputes. This includes detecting, analyzing, and
                documenting financial misconduct, providing expert witness
                testimony, and assisting in litigation support to resolve legal
                issues related to financial crimes.
              </p>
            </div>

            <div className="consulting_list human_resources">
              <h5>Financial Risk: </h5>
              <p>
                Financial risk services involve identifying, assessing, and
                mitigating risks that could impact an organization's financial
                health. This includes market risk, credit risk, liquidity risk,
                and operational risk. The goal is to develop strategies to
                manage and minimize potential financial losses.
              </p>
            </div>

            <div className="consulting_list human_resources">
              <h5>Accounting System Advisory: </h5>
              <p>
                This service provides guidance on selecting, implementing, and
                optimizing accounting systems and software. It ensures that the
                chosen system meets the organization's needs for accurate
                financial reporting, compliance, and operational efficiency,
                while also integrating seamlessly with other business processes.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* {id && id === "system-monitoring" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"System Monitoring & Control"}
            image={auditbannerimg}
            bread="Home | Audits | System Monitoring & Control"
          />

          <section className="consulting_section_1 audits_page_section_1">
            <h1>
              {" "}
              <span>System Monitoring</span> & Control
            </h1>

            <div className="consulting_list system_monitoring">
              <img src={systemmonitoringimg} alt="system monitoring" />

              <p>
                We assist clients in monitoring their accounting systems to
                ensure timely and accurate report generation. Additionally, we
                assess the current accounting system's capacity to handle the
                volume of data and recommend improvements or changes as needed.
                Our team of skilled professional accountants is ready and eager
                to assist you.
              </p>
            </div>
          </section>
        </div>
      )} */}

      {id && id === "business-development" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Business Development Service Providers In Nigeria"}
            image={auditbannerimg}
            bread="Home | Audits |  Business Development Service Providers In Nigeria"
          />

          <section className="consulting_section_1 audits_page_section_1">
            <div className="consulting_list business_development">
              <div className="row">
                <h4>What is Business Development?</h4>
                <p>
                  Business development involves strategies and activities aimed
                  at improving a business, including increasing revenue,
                  expanding, building strategic partnerships, and making
                  strategic decisions. It spans various departments such as
                  sales, marketing, project management, product management,
                  vendor management, networking, negotiations, partnerships, and
                  cost-saving efforts.
                </p>
              </div>

              <div className="row">
                <p>
                  Business development services identify and address issues
                  like:
                </p>
                <ul>
                  <li>Poor quality and viability of business ideas</li>
                  <li>Inability to write a business plan</li>
                  <li>
                    Difficulty in differentiating products or identifying
                    markets
                  </li>
                  <li>
                    Challenges with business viability, access to capital, and
                    financial management
                  </li>
                  <li>Marketing and cash flow management issues</li>
                  <li>Support for feasibility studies</li>
                </ul>
              </div>

              <div className="row">
                <h4>What We Do</h4>
                <p>
                  As Business Development Service Providers in Lagos, Nigeria,
                  we offer financial and non-financial services to help
                  entrepreneurs establish or expand their businesses. We provide
                  information, skills, and advisory services, and assist with
                  legal services, training, and contract arrangements. We serve
                  a variety of industries including manufacturing, ICT, mining,
                  oil & gas, healthcare, finance, real estate, construction,
                  agriculture, and more. We support start-ups and established
                  businesses through:
                </p>
                <ul>
                  <li>Business idea development</li>
                  <li>Financial modeling</li>
                  <li>Coaching and mentoring</li>
                  <li>Business advisory</li>
                  <li>Market analysis</li>
                  <li>Regulatory and legal guidance</li>
                </ul>
              </div>

              <div className="row">
                <h4>Our Business Development Service Program</h4>
                <h5>For start-ups</h5>
                <p></p>We help aspiring entrepreneurs develop viable business
                plans, assess profitability, and provide peer-to-peer sessions,
                financial modeling, and mentoring.
                <h5>For Established Businesses</h5>
                <p>
                  We offer services like sales growth, business expansion,
                  strategic partnerships, marketing, financial advisory, product
                  development, vendor management, digital marketing,
                  bookkeeping, tax compliance, and market development.
                </p>
                <h5>Our Business Development Process</h5>
                <ol>
                  <li>
                    Discovery and Understanding: Understand client business
                    ideas and objectives.
                  </li>
                  <li>
                    Design: Guide clients in developing innovative business
                    ideas.
                  </li>
                  <li>
                    Test and Refinement: Implement design thinking
                    methodologies.
                  </li>
                  <li>
                    Action Plan: Develop a plan for maximizing business
                    potential.
                  </li>
                  <li>
                    Demonstration and Implementation: Equip clients with tools
                    and support for implementation.
                  </li>
                </ol>
              </div>

              <div className="row">
                <h4>Why You Should Hire Us</h4>
                <ul>
                  <li>Professional support from experts</li>
                  <li>Refinement of entrepreneurial ideas</li>
                  <li>Confidentiality and data security</li>
                  <li>Affordable, cost-effective services</li>
                  <li>Organizational effectiveness strategies</li>
                  <li>Over 10 years of market research experience</li>
                  <li>Opportunities for peer learning and network building</li>
                  <li>Sector-specific insights and step-by-step guidance</li>
                  <li>Facilitation of partnership building</li>
                </ul>
                <p>
                  Our business development services aim to transform innovative
                  ideas into successful enterprises through comprehensive
                  support and strategic planning.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "internal-audit" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Internal Audit, Risk and Compliance Services"}
            image={auditbannerimg}
            bread="Home | Audits | Internal Audit, Risk and Compliance Services"
          />

          <section className="consulting_section_1 audits_page_section_1">
            <h1>
              {" "}
              <span>Internal Audit, Risk and</span> Compliance Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  We facilitate the transformation of the internal audit
                  function from a traditional, transaction-focused model to one
                  that provides strategic business assurance and value. We
                  assist clients in preserving shareholder value and making
                  informed business decisions by implementing an enterprise risk
                  management system. This
                </p>
                <p>
                  system continuously enhances the control environment and
                  mitigates risks.
                </p>
              </div>
              <div className="row">
                <p>
                  We support regulatory compliance, corporate governance,
                  third-party contract compliance, and global sustainability. We
                  help clients adopt the structures, culture, procedures,
                  controls, roles, and communication processes that improve
                  business performance and boost shareholder confidence.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "financial-risk-management" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Financial Risk Management"}
            image={auditbannerimg}
            bread="Home | Audits |  Financial Risk Management"
          />

          <section className="consulting_section_1 audits_page_section_1">
            <h1>
              {" "}
              <span>Financial Risk</span> Management
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  We help you define, measure, and manage risk exposure to
                  enhance shareholder value. Our services include developing and
                  implementing customized risk management structures, processes,
                  tools, and methodologies for both financial and non-financial
                  risks.
                </p>
              </div>

              <div className="row">
                <h4>Key Services:</h4>
                <ul>
                  <li>
                    Risk Identification and Assessment: Identifying and
                    evaluating potential risks to understand their impact and
                    likelihood.
                  </li>
                  <li>
                    Risk Mitigation: Developing strategies to mitigate
                    identified risks.
                  </li>
                  <li>
                    Risk Management Strategies: Advising on effective management
                    of financial and non-financial risks.
                  </li>
                  <li>
                    Diagnostic Review: Conducting comprehensive reviews of
                    existing risk management practices.
                  </li>
                  <li>
                    Framework Design and Implementation: Creating and
                    implementing robust risk management frameworks.
                  </li>
                </ul>
              </div>

              <div className="row">
                <h4>Benefits:</h4>
                <ul>
                  <li>
                    Enhanced Shareholder Value: Protecting and growing
                    shareholder value through effective risk management.
                  </li>
                  <li>
                    Informed Decision-Making: Providing insights for better
                    business decisions.
                  </li>
                  <li>
                    Regulatory Compliance: Ensuring compliance with relevant
                    regulations.
                  </li>
                  <li>
                    Improved Business Performance: Achieving a resilient and
                    efficient organization capable of navigating uncertainties.
                  </li>
                </ul>
                <br />
                <br />
                <p>
                  Our goal is to equip you with the tools and expertise needed
                  for proactive and strategic risk management, ensuring
                  long-term business success and stability.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* {id && id === "insolvency" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Insolvency & Corporate Reengineering Services"}
            image={auditbannerimg}
            bread="Home | Audits |  Insolvency & Corporate Reengineering Services"
          />

          <section className="consulting_section_1 audits_page_section_1">
            <h1>
              {" "}
              <span>Insolvency & Corporate Reengineering</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <h4>Insolvency and Corporate Reengineering</h4>
                <p>
                  Insolvency and corporate reengineering involve redesigning or
                  reinventing daily work processes, applicable across all
                  industries regardless of size, type, or location. The goal is
                  to make organizations more flexible, responsive, efficient,
                  and effective for customers, employees, and other
                  stakeholders.
                </p>
                <p>
                  We offer insolvency and corporate reengineering services to
                  clients in various sectors, including banks, financial
                  institutions, agriculture, oil and gas, mining, forestry,
                  light and heavy industry, and tertiary sectors.
                </p>
                <p>Key Requirements for Successful Corporate Reengineering</p>
                <p>
                  Experts highlight essential elements for successful corporate
                  reengineering:
                </p>
                <ul>
                  <li>
                    Top-Level Initiation: Leadership with a vision for the
                    entire process and relentless deployment throughout the
                    organization.
                  </li>
                  <li>
                    Rapid, Dramatic Redesign: Leadership that drives quick and
                    significant process changes.
                  </li>
                  <li>
                    New Value System: Emphasis on satisfying customers and
                    stakeholders.
                  </li>
                  <li>
                    Fundamental Rethinking: Reevaluating daily work processes to
                    improve quality, cycle time, cost, and other metrics.
                  </li>
                  <li>
                    Cross-Functional Teams: Structural and process redesign
                    through cross-functional teamwork.
                  </li>
                  <li>
                    Enhanced Information Dissemination: Improved decision-making
                    through better information flow, including computerization
                    after process redesign.
                  </li>
                  <li>
                    Training and Involvement: Empowering individuals and teams
                    as process owners to re-invent their processes.
                  </li>
                  <li>
                    Total Redesign: Involving all internal constituents in a
                    mandatory redesign of processes.
                  </li>
                  <li>
                    Results-Based Rewards: Implementing a disciplined approach
                    with rewards based on outcomes.
                  </li>
                </ul>
              </div>
 
              <div className="row">
                <h4>Our Services</h4>
                <p>
                  Leveraging our extensive knowledge of the Nigerian economy and
                  various industry operations, we offer the following services
                  to our clients:
                </p>
                <ul>
                  <li>
                    Independent Business Reviews: Conducting thorough
                    evaluations of business operations.
                  </li>
                  <li>
                    Advising on Business Structures: Providing guidance on
                    improving business structures and performance.
                  </li>
                  <li>
                    Rescue and Restructuring: Assisting in rescuing,
                    restructuring, or realizing illiquid or insolvent
                    businesses.
                  </li>
                  <li>
                    Creditor Moratoriums: Establishing and operating moratoriums
                    for creditors.
                  </li>
                  <li>
                    Debt Recovery and Rescheduling: Recovering, rescheduling,
                    and converting debt.
                  </li>
                  <li>
                    Optimizing Stakeholder Returns: Maximizing returns for
                    stakeholders.
                  </li>
                  <li>
                    Investigating Business Failures: Investigating business
                    failures and challenging prior transactions.
                  </li>
                  <li>
                    Court-Ordered Winding Up: Managing the winding up of
                    businesses through court orders.
                  </li>
                  <li>
                    Business Diagnostics and Organizational Audits: Evaluating
                    business models, structures, and strategies, and proposing
                    solutions.
                  </li>
                  <li>
                    Corporate Re-engineering: Reviewing business processes with
                    a focus on cost-cutting.
                  </li>
                  <li>
                    Restructuring Plans: Designing restructuring plans with
                    short-term and long-term options.
                  </li>
                  <li>
                    Trust Relationship Intermediary: Acting as intermediaries in
                    trust relationships.
                  </li>
                  <li>Asset Tracing: Tracking and recovering assets.</li>
                  <li>
                    Operational & Financial Restructuring: Restructuring
                    distressed companies both operationally and financially.
                  </li>
                  <li>
                    Lender-Led Restructuring: Assisting in lender-led
                    restructuring efforts.
                  </li>
                  <li>
                    Scheme of Arrangement: Facilitating schemes of arrangement.
                  </li>
                  <li>
                    Board and Director Advisory: Advising boards and
                    non-executive directors.
                  </li>
                  <li>
                    Restructuring Advisory: Providing expert advice on
                    restructuring.
                  </li>
                  <li>
                    Corporate Insolvency in Nigeria: Managing corporate
                    insolvency.
                  </li>
                  <li>
                    Turnaround Advisory: Offering turnaround strategies and
                    advice.
                  </li>
                  <li>
                    Borrower Representation: Representing borrowers in
                    negotiations and restructuring.
                  </li>
                  <li>
                    Post-Restructuring Financial Advisory: Providing financial
                    advisory services after restructuring.
                  </li>
                  <li>Agent Management: Managing agents and intermediaries.</li>
                  <li>Winding Up Services:</li>
                  <ul>
                    <li>
                      Voluntary Winding Up: Managing members' or creditors'
                      voluntary winding up processes.
                    </li>
                    <li>
                      Receivership and Management: Handling receivership and
                      management duties.
                    </li>
                    <li>
                      Security Recovery and Realization: Recovering and
                      realizing security.
                    </li>
                    <li>
                      Creditor Negotiations: Negotiating with secured creditors.
                    </li>
                    <li>
                      Security Enforcement: Implementing strategies for security
                      enforcement, reviews, and recovery proceedings.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )} */}

      {/* {id && id === "statutory-records" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Statutory Records"}
            image={auditbannerimg}
            bread="Home | Audits | Statutory Records"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Statutory</span> Records
            </h1>

            <div className="consulting_list human_resources">
              <p>
                We manage all statutory books, including the Minute Book,
                Registers of Members, Directors and Secretaries, mortgages and
                charges, and directors’ interests. Our services include
                safekeeping these records and providing a registered office
                address. Maintaining these records ensures legal compliance,
                transparency, good corporate governance, and efficient company
                management. By using our services, you can trust that your
                essential documents are handled professionally, keeping your
                company compliant and well-organized.
              </p>
            </div>
          </section>
        </div>
      )} */}

      {/* {id && id === "internal-debt-recovery" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Internal Debt Recovery Agents"}
            image={auditbannerimg}
            bread="Home | Audit | Internal Debt Recovery Agents"
          />

          <section className="consulting_section_1">
            <div className="consulting_row">
              <div className="row_text">
                <h4>International Debt Recovery</h4>
                <p>
                  International Debt Recovery involves the collection of debts
                  across a country's borders by specialist debt recovery
                  experts. As global debt recovery agents, we provide
                  international, cross-border debt recovery services for our
                  clients. Businesses offering products or services to
                  international markets will benefit from partnering with us. In
                  commerce, extending credit to customers is often necessary,
                  but it can lead to overdue obligations if debtors fail to pay.
                  Engaging an international debt recovery agent is a
                  cost-effective solution when defaults occur.
                </p>
              </div>
              <div className="row_img">
                <img src={recoveryimg1} alt="" />
              </div>
            </div>
          </section>

          <section className="audit_section_2">
            <h1>
              <span>Why engage as Internal</span> Debt Recovery Agents
            </h1>

            <div className="audit_grid_section">
                <div className="item">
                    <h3>No recovery, no Fees</h3>
                </div>
                <div className="item">
                    <h3>Faster Results</h3>
                </div>
                <div className="item">
                    <h3>Our Experience</h3>
                </div>
                <div className="item">
                    <h3>Global Coverage & Network of International Debt Recovery Agents</h3>
                </div>
            </div>
          </section>
        </div>
      )} */}

      <LeaveAMessage />
      <Footer />
    </div>
  );
};

export default Audits;
