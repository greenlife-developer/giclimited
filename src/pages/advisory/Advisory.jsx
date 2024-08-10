import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LeaveAMessage from "../../components/messages/LeaveAMessage";
import advisorybannerimg from "../../assets/advisorybannerimg.jpg";

import "./advisory.css";
import { useParams } from "react-router-dom";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";

const Advisory = () => {
  const { id } = useParams();

  return (
    <div className="advisory_page">
      <Header />

      {id && id === "company-searches" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Company Searches"}
            image={advisorybannerimg}
            bread="Home | Advisory | Company Searches"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Company</span> Searches
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  GIC Limited offers company search services for clients, which
                  include providing current financial accounts, copies of Annual
                  Returns, and other company information. We also gather
                  statistical data on companies, including overseas entities,
                  along with credit details and other relevant information.
                </p>
              </div>

              <div className="row">
                <p>
                  GIC Limited provides comprehensive company search services to
                  help clients make informed business decisions. These services
                  include:
                </p>
                <ol>
                  <li>
                    Current Sets of Accounts: We retrieve the latest financial
                    statements to assess a company's financial health.
                  </li>
                  <li>
                    Annual Returns: We obtain documents detailing a company's
                    structure, including directors, shareholders, and registered
                    addresses.
                  </li>
                  <li>
                    Company Information: We provide various details such as
                    registration, business activities, statutory filings, and
                    legal status.
                  </li>
                  <li>
                    Statistical Information: We gather data on market
                    performance and industry standing for benchmarking purposes.
                  </li>
                  <li>
                    Credit Details: We offer credit reports that include scores,
                    payment histories, and outstanding debts to evaluate a
                    company's financial reliability.
                  </li>
                  <li>
                    Overseas Company Information: We obtain similar detailed
                    reports for international companies.
                  </li>
                </ol>
              </div>

              <div className="row">
                <h4>Benefits</h4>
                <ul>
                  <li>
                    Informed Decision-Making: Accurate data for well-informed
                    business choices.
                  </li>
                  <li>
                    Due Diligence: Essential for mergers, acquisitions, and
                    partnerships.
                  </li>
                  <li>
                    Risk Management: Identifies potential financial and legal
                    risks.
                  </li>
                  <li>
                    Competitive Analysis: Provides insights into market position
                    and performance.
                  </li>
                  <li>
                    Credit Risk Assessment: Helps determine creditworthiness and
                    set appropriate credit terms.
                  </li>
                </ul>
              </div>

              <div className="row">
                <h4>Process</h4>
                <ol>
                  <li>
                    Request Initiation: Clients submit information requests.
                  </li>
                  <li>
                    Data Collection: We access various databases, including the
                    Corporate Affairs Commission (CAC) in Nigeria.
                  </li>
                  <li>
                    Analysis and Reporting: Experts analyze data and compile
                    detailed reports.
                  </li>
                  <li>
                    Delivery: Reports are delivered promptly in digital format.
                  </li>
                </ol>
              </div>

              <div className="row">
                <h4>Why Choose GIC Limited?</h4>
                <ul>
                  <li>
                    Expertise: Extensive experience in accurate company
                    searches.
                  </li>
                  <li>
                    Comprehensive Services: Wide range of local and
                    international search services.
                  </li>
                  <li>Timeliness: Prompt report delivery.</li>
                  <li>
                    Confidentiality: Strict confidentiality and security of
                    client information.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "corporate-finance" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Corporate Finance"}
            image={advisorybannerimg}
            bread="Home | Advisory | Corporate Finance"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Corporate</span> Finance
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  We offer intelligence to develop bidding strategies that give
                  you an edge over competitors. Our services include packaging
                  sell-offs and structuring financing options that prioritize
                  safety and high returns. We provide top-notch advice and a
                  comprehensive portfolio of corporate finance services,
                  including acting as reporting accountants, conducting due
                  diligence reviews, performing equity and bond valuations, and
                  offering pre- and post-merger and acquisition advisory,
                  taxation, and audit/assurance services.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "company-formation" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Company Formation Services"}
            image={advisorybannerimg}
            bread="Home | Advisory | Company Formation Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Company Formation</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  At GIC Limited, our expert team advises clients on the best
                  business setups based on their needs. We offer cost-effective
                  solutions for starting businesses in desired locations. Bulls
                  Capital, our business advisory firm, provides expert guidance
                  on various business issues, including setting up new ventures
                  across Nigeria. We focus on helping clients explore new
                  business opportunities, understand legal procedures, network
                  with local authorities, and establish suitable business models
                  globally.
                </p>
                <p>
                  Navigating local business environments, government policies,
                  and foreign investments is crucial for success. Business Setup
                  Worldwide provides turnkey solutions to these challenges,
                  leveraging years of experience in integrated business setup
                  services worldwide.
                </p>
                <p>
                  Our services include establishing private limited companies,
                  professional firms, branch offices, representative offices,
                  and public shareholding companies. We offer comprehensive
                  services such as company formation and registration, taxation,
                  accounting, bookkeeping, audit and assurance, legal
                  compliance, and branding consultation.
                </p>
              </div>

              <div className="row">
                <p>
                  We meticulously manage legal procedures and documentation,
                  including:
                </p>
                <ul>
                  <li>
                    Determining the legal form and economic activity of the
                    business
                  </li>
                  <li>Obtaining trade licenses and registering companies</li>
                  <li>Notarizing necessary documents</li>
                  <li>Registering trade names</li>
                  <li>Applying for establishment cards and approvals</li>
                  <li>Signing MOAs and lease agreements</li>
                  <li>Meeting all licensing requirements</li>
                  <li>Finding local sponsors (if needed)</li>
                </ul>
              </div>

              <div className="row">
                <p>
                  We also provide business valuation, business plan development,
                  resource determination, enterprise management, tax policies,
                  tax incentives, mergers, separations, and conversions.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "sme-advisory" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"SME Advisory Services"}
            image={advisorybannerimg}
            bread="Home | Advisory | SME Advisory Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>SME Advisory</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  we provide dedicated support for small businesses, recognizing
                  their vital role in the economy. Our mission is to help
                  clients achieve their business goals and transition from their
                  current state to their desired state.
                </p>
              </div>

              <div className="row">
                <h4>Our services include:</h4>
                <ul>
                  <li>
                    Start-up Capital Arrangement: We leverage our expertise to
                    connect clients seeking investment opportunities with those
                    in need of start-up capital, focusing on financial
                    potential.
                  </li>
                  <li>
                    Business Plan Preparation and Implementation: We assist
                    clients in developing comprehensive business plans from
                    concept to start-up, ensuring the implementation of
                    strategies for profitability and growth.
                  </li>
                  <li>
                    Development of Strategic Solutions: We tailor our approach
                    to each client's unique challenges, offering business
                    requirement analysis, customer feedback research, market
                    analysis, and product feasibility testing.
                  </li>
                  <li>
                    Financial Advice: We manage budgeting, financial
                    investments, and funds, allowing clients to focus on their
                    core activities without financial concerns.
                  </li>
                  <li>
                    Business Consulting: Our experts provide strategic
                    consulting and incubation support, offering feedback on
                    business models, operations, and growth plans. This can lead
                    to grant support, capital raising, or partnership
                    development.
                  </li>
                  <li>
                    Project Development: We advise developers on infrastructure
                    project specifics, providing feedback on commercial
                    arrangements, operational advice, and technical support.
                  </li>
                  <li>
                    Capital Raising: We guide clients through the
                    capital-raising process, from investment readiness
                    assessments and investor material feedback to financer
                    selection and process advice.
                  </li>
                  <li>
                    Partnership Support: We help clients develop successful
                    partnerships, focusing on partner identification and
                    ensuring a high probability of success.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "project-management" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Project Management"}
            image={advisorybannerimg}
            bread="Home | Advisory | Project Management"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Project</span> Management
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  At GIC Limited, we offer comprehensive Project Management
                  Consultancy Services to help organizations successfully plan,
                  execute, and complete their projects. Our experienced team
                  ensures projects meet their objectives and deliver maximum
                  value.
                </p>
              </div>

              <div className="row">
                <h4>Our Services Include:</h4>
                <ol>
                  <li>
                    Project Planning and Initiation: Defining scope, objectives,
                    deliverables, timelines, budgets, risk assessments, and
                    communication strategies.
                  </li>
                  <li>
                    Project Execution and Monitoring: Overseeing task
                    completion, monitoring progress, identifying issues, and
                    implementing corrective actions.
                  </li>
                  <li>
                    Risk Management: Proactively identifying and managing risks
                    with contingency plans and mitigation measures.
                  </li>
                  <li>
                    Quality Assurance: Establishing quality standards and
                    performing regular checks to ensure deliverables meet
                    expectations.
                  </li>
                  <li>
                    Stakeholder Communication: Facilitating clear communication
                    among stakeholders with regular updates and reporting.
                  </li>
                  <li>
                    Resource Management: Optimizing resource use to prevent
                    bottlenecks and ensure timely project progression.
                  </li>
                  <li>
                    Change Management: Managing scope, schedule, and resource
                    changes in a controlled manner.
                  </li>
                  <li>
                    Project Closure and Evaluation: Conducting thorough reviews,
                    documenting lessons learned, and finalizing deliverables and
                    reports.
                  </li>
                </ol>
              </div>

              <div className="row">
                <h4>Why Choose GIC Limited?</h4>
                <ul>
                  <li>Expertise from certified professionals.</li>
                  <li>Customized solutions for client-specific needs.</li>
                  <li>Proven methodologies and best practices.</li>
                  <li>Client-focused approach.</li>
                  <li>Use of innovative tools and technologies.</li>
                </ul>
              </div>

              <div className="row">
                <p>
                  Partner with GIC Limited for professional and effective
                  project management that drives your business forward. Contact
                  us to learn more.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "bad-debt-recovery" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Bad Debt Recovery Agent"}
            image={advisorybannerimg}
            bread="Home | Advisory | Bad Debt Recovery Agent"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Bad Debt</span> Recovery Agent
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  GIC Limited, we excel in recovering bad debts, offering
                  comprehensive services globally to help clients reclaim debts
                  deemed uncollectible. We operate on a success-fee basis,
                  meaning you pay us only when we successfully recover your
                  debts.
                </p>
              </div>

              <div className="row">
                <h4>Core Services:</h4>
                <ul>
                  <li>
                    Bad Debt Recovery: We specialize in retrieving payments for
                    debts written off as uncollectible, which generates income
                    by crediting bad debt reserves and reducing accounts
                    receivable.
                  </li>
                  <li>
                    Debt Recovery Litigation: If initial collection efforts
                    fail, we collaborate with affiliate law firms to pursue
                    legal action, with no additional fees for court appearances.
                  </li>
                  <li>
                    Debt Negotiation: Our experts employ advanced tactics to
                    negotiate debt settlements, including installment payments,
                    asset garnishments, and equity stakes.
                  </li>
                </ul>
              </div>

              <div className="row">
                <h4>Why Choose GIC Limited?</h4>
                <ul>
                  <li>
                    Professional Approach: We utilize a strict, firm, and
                    professional methodology for debt recovery.
                  </li>
                  <li>
                    Experienced Team: Our team comprises attorneys, debt
                    collectors, and consultants with extensive expertise.
                  </li>
                  <li>
                    Global Reach: We serve clients worldwide, including markets
                    in Nigeria, the UK, Africa, Europe, Australia, and Asia.
                  </li>
                </ul>
              </div>

              <div className="row">
                <h4>Frequently Asked Questions:</h4>
                <ul>
                  <li>
                    Cost: No upfront fees; our services are based on a no
                    recovery, no fees model.
                  </li>
                  <li>Minimum Debt Size: ₦1,000,000 or USD equivalent.</li>
                  <li>
                    Documentation: Essential for negotiating with debtors and
                    understanding the debt details.
                  </li>
                  <li>
                    Debt Recovery Process: Includes demand letters, reminders,
                    phone calls, personal visits, litigation, and enforcement of
                    judgments.
                  </li>
                </ul>
              </div>

              <div className="row">
                <h4>Engagement Process:</h4>
                <ol>
                  <li>Contact us via email, visit, or phone call.</li>
                  <li>Negotiate and agree on service fees.</li>
                  <li>
                    Issue a letter of appointment as Debt Recovery Agents.
                  </li>
                  <li>Sign the Debt Recovery Agreement.</li>
                  <li>
                    Provide the debtor portfolio and necessary documentation.
                  </li>
                  <li>
                    We begin the recovery process and provide regular updates.
                  </li>
                </ol>
              </div>

              <div className="row">
                <h4>Legal Recovery Methods:</h4>
                <ul>
                  <li>
                    Summons and Legal Actions: Legal actions involve writ of
                    summons, summary judgment, Mareva injunctions, and writs of
                    execution.
                  </li>
                  <li>
                    Enforcement: Includes asset seizure, auctions, garnishee
                    proceedings, and installment payments.
                  </li>
                </ul>
              </div>

              <div className="row">
                <h4>Ethics and Mission:</h4>
                <p>
                  We adhere to the highest ethical standards and strive to build
                  robust client relationships by delivering superior debt
                  recovery services. Our dedication to professionalism and
                  client satisfaction is the cornerstone of our success in the
                  debt recovery industry.
                </p>
              </div>

              <div className="row">
                <p>
                  Got a deal for us or debt requiring action upon, please email:
                  info@giclimited.net for initial discussion or send us a brief.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "pension-advisory" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Pension Advisory Services"}
            image={advisorybannerimg}
            bread="Home | Advisory | Pension Advisory Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Pension Advisory</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  Our team of experts, drawn from diverse and multi-disciplinary
                  backgrounds, is dedicated to addressing the challenges you
                  face with pension contributions.
                </p>
                <p>
                  GIC Limited Pensions Advisory team leverages its unique
                  expertise to assess both the current and future economic value
                  of the Employer to the Plan. This enables us to clearly
                  identify and tailor options for Trustees, whether related to
                  Scheme Specific Funding or transactions GIC Limited offers
                  expert advice on pension contributions and related challenges
                  through:
                </p>
              </div>

              <div className="row">
                <ul>
                  <li>
                    Scheme-Specific Funding Valuations: Assessing Employer
                    Covenant strength and future contribution affordability, and
                    advising on sustainable growth strategies.
                  </li>
                  <li>
                    Transactions: Evaluating the impact of mergers, takeovers,
                    refinancings, and other transactions on Employer Covenant.
                  </li>
                  <li>
                    Restructuring and Insolvency: Providing guidance on solvent
                    and insolvent restructurings, including benefit redesign and
                    Company Voluntary Arrangements.
                  </li>
                  <li>
                    Regulatory and Expert Witness Services: Advising on
                    regulatory actions and offering expert witness services
                    regarding Employer Covenant considerations.
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>
                  We also support mergers and acquisitions by analyzing pension
                  risks, combining actuarial, tax, and corporate finance
                  expertise to deliver integrated advice, and offer tailored
                  solutions for Irish pension schemes.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "organisational-audit" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Organizational Audits"}
            image={advisorybannerimg}
            bread="Home | Advisory | Organizational Audits"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Organizational</span> Audits
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  Organizational audits in consultancy firms are comprehensive
                  evaluations aimed at assessing the firm's internal processes,
                  structures, and overall performance. These audits serve
                  several purposes, including performance assessment, compliance
                  verification, risk management, strategic alignment, and
                  fostering continuous improvement
                </p>
              </div>
              <div className="row">
                <h4>Key components of organizational audits include:</h4>
                <ul>
                  <li>
                    Operational Audit: Evaluates process efficiency, resource
                    utilization, and service delivery.
                  </li>
                  <li>
                    Financial Audit: Reviews financial health, cost management,
                    and revenue streams.
                  </li>
                  <li>
                    Compliance Audit: Ensures adherence to regulations, internal
                    policies, and ethical standards.
                  </li>
                  <li>
                    Strategic Audit: Aligns activities with strategic objectives
                    and evaluates market position.
                  </li>
                  <li>
                    Risk Audit: Identifies and mitigates potential risks, and
                    assesses crisis management.
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>
                  The audit process involves planning, data collection,
                  analysis, reporting, and implementation. Benefits include
                  improved efficiency, enhanced compliance, increased
                  accountability, better risk management, and strategic growth.
                  Regular organizational audits help consultancy firms maintain
                  high standards, ensure continuous improvement, and secure a
                  competitive edge in the market.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "other-marketing" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Other Market Offerings"}
            image={advisorybannerimg}
            bread="Home | Advisory | Other Market Offerings"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Other Market</span> Offerings
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <ol>
                  <li>Financial Transformation</li>
                  <li>Business Efficiency</li>
                  <li>Cost Reduction</li>
                  <li>Business Intelligence and Technology Support</li>
                  <li>Post-Deal Services</li>
                  <li>Business Process Outsourcing</li>
                  <li>Shared Services</li>
                  <li>Change Management</li>
                  <li>Financial Management</li>
                  <li>Performance Sustainability</li>
                  <li>Integrating Risk and Compliance</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      )}

      <LeaveAMessage />
      <Footer />
    </div>
  );
};

export default Advisory;
