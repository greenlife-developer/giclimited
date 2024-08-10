import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import contactbannerimg from "../../assets/aboutsub.jpg";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import img1 from "../../assets/ccimg1.jpg";
import img2 from "../../assets/ccimg2.jpg";
import img3 from "../../assets/ccimg3.jpg";
import "./consulting.css";
import LeaveAMessage from "../../components/messages/LeaveAMessage";
import Footer from "../../components/Footer/Footer";

const Consulting = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="consulting_service_page">
      <Header />

      {id && id === "operational-improvement" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Operational Improvement"}
            image={contactbannerimg}
            bread="Home | Consulting | Operational Improvement"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Operational</span> Improvement
            </h1>

            <div className="consulting_list">
              <ol>
                <li>
                  Developing, aiding in the execution, and periodically
                  reviewing the Profit Improvement Plan.
                </li>
                <li>
                  Conducting regular reviews related to cost control and value
                  analysis.
                </li>
                <li>
                  Managing inventory, including reviews, material handling, and
                  storage practices.
                </li>
                <li>
                  Assessing current control methods and management information
                  reports, and improving reporting practices.
                </li>
                <li>
                  Examining overhead costs and proposing strategies for cost
                  control.
                </li>
                <li>Establishing executive and wage incentive plans.</li>
                <li>
                  Evaluating organizational structure and behavior, enhancing
                  human resources through training program design and execution,
                  work studies, job descriptions, job specifications, and
                  workload assessments.
                </li>
                <li>
                  Analyzing and designing systems, including advising on
                  hardware selection and software development to leverage
                  technology for competitive advantage.
                </li>
                <li>
                  Creating and updating manuals for operating, organizational,
                  and accounting policies and procedures, and conducting
                  post-implementation reviews.
                </li>
                <li>
                  Assisting in the selection and recruitment of key finance
                  executives.
                </li>
              </ol>
            </div>
          </section>
        </div>
      )}

      {id && id === "business-valuation" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Business Valuation Services"}
            image={contactbannerimg}
            bread="Home | Consulting | Business valuation services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Business</span> Valuation Services
            </h1>

            <p>
              Business valuation involves a set of procedures and methods to
              estimate the economic worth of an owner's stake in a business. It
              helps financial market participants assess the price they are
              prepared to pay or accept for the sale of a business. Business
              valuation can also be described as the process of determining the
              economic value of an entire business or company unit. It is useful
              for various purposes, including determining the sale price,
              establishing ownership stakes among partners, handling tax
              matters, and resolving divorce disputes. At Matog Consulting, we
              pride ourselves on having experienced and skilled business
              advisors with extensive involvement in various facets of business
              valuation. This expertise enables us to provide customized
              solutions to measure, analyze, and report on a wide range of
              business valuation issues.
            </p>

            <div className="consulting_list">
              <h3>
                At GIC Consulting, we offer comprehensive business valuation
                services that include:
              </h3>
              <ul>
                <li>Impairment Testing</li>
                <li>Fairness Opinions</li>
                <li>Tangible and Intangible Asset Valuation</li>
                <li>
                  Valuation of Business Interests and Share-Based Payments
                </li>
                <li>Purchase Price Allocation</li>
              </ul>
              <p>
                Our experts have experience across various industries such as
                pharmaceuticals, financial services, and technology. We address
                common valuation needs including divestitures, buy/sell
                agreements, exit strategies, mergers and acquisitions,
                shareholder disputes, and tax assessments.
              </p>
              <h3>Key Services Include:</h3>
              <ul>
                <li>
                  Financial Reporting Valuations: For fair value measurement,
                  purchase price allocation, share-based payments, and
                  impairment reviews.
                </li>
                <li>
                  Infrastructure and Project Finance Advisory: Support from
                  project evaluation to financial close and strategic
                  management.
                </li>
                <li>
                  Valuation Advisory: Asset and portfolio valuations, risk
                  assessment, and transaction advisory.
                </li>
                <li>
                  Real Estate Valuation: Covering sectors from residential to
                  commercial and alternative investments.
                </li>
                <li>
                  Tax Valuation: For land use charges, capital gains, goodwill,
                  and employment-related securities.
                </li>
                <li>
                  Valuation Assurance: Reviewing third-party valuations to
                  ensure accuracy.
                </li>
                <li>
                  Restructuring Valuation: Independent valuations for corporate
                  restructuring.
                </li>
                <li>
                  Complex Financial Instruments Valuation: Accurate valuation of
                  instruments like derivatives and options.
                </li>
                <li>
                  Intellectual Property Valuation: For patents, trademarks, and
                  other intangibles.
                </li>
                <li>
                  Transfer Pricing Valuation: Ensuring fair pricing for
                  intercompany transactions.
                </li>
                <li>
                  Healthcare Valuation: Covering compliance, mergers, tax
                  planning, and transaction modeling.
                </li>
                <li>
                  Employee Ownership Stock Plan Valuation: Including fairness
                  opinions and annual reviews.
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}

      {id && id === "learning-development" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Learning and Development"}
            image={contactbannerimg}
            bread="Home | Consulting | Learning and Development"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Learning</span> and Development
            </h1>

            <div className="consulting_list learning">
              <p>
                Our faculty provides customized training to meet diverse client
                needs:
              </p>
              <ul>
                <li>
                  Generic Training: Essential skills applicable across various
                  roles, including communication, teamwork, and time management.
                </li>
                <li>
                  Function-Specific Training: Specialized training for
                  particular departments or functions such as finance,
                  marketing, and HR.
                </li>
                <li>
                  Career Planning: Guidance on career advancement, including
                  resume writing, interview skills, and goal setting.
                </li>
                <li>
                  Leadership Training: Development of leadership skills for
                  effective team management, strategic thinking, and conflict
                  resolution
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}

      {id && id === "executive-search" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Executive Search Services"}
            image={contactbannerimg}
            bread="Home | Consulting | Executive Search Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Executive</span> Search Services
            </h1>

            <p>
              As Nigeria's top Executive Search Service Company based in Lagos,
              we specialize in assisting organizations in recruiting and
              headhunting highly qualified and talented candidates. Our
              unparalleled retainer-based Executive Search Service model offers
              a comprehensive range of services including human capital
              recruitment, remuneration analysis, benchmarking, leadership
              development, executive outplacement, succession planning, talent
              sourcing, executive competency assessments, executive market
              mapping, competitive analysis, and market benchmarking. Whether
              you need top management, middle management, or junior team
              members, we assure you of quality results.
            </p>

            <div className="consulting_list executive">
              <h3>Why Work With Us?</h3>
              <ul>
                <li>
                  We possess unrivaled industry knowledge in executive search
                  services.
                </li>
                <li>
                  We offer consultative, personalized services tailored to the
                  needs of our client companies.
                </li>
                <li>
                  Our extensive database includes a strong network of
                  senior-level talent across various industries, ensuring
                  exclusive and high-quality candidates.
                </li>
                <li>
                  Our recruiters maintain a communicative relationship with both
                  clients and candidates, providing regular updates throughout
                  the search process.
                </li>
                <li>
                  Our vast experience allows us to quickly identify the rare
                  skills mix needed for C-suite positions and find the right
                  fit.
                </li>
              </ul>

              <h3>Our Executive Search Service Process</h3>
              <ul>
                <li>
                  We work with you to understand your needs and develop a
                  statement of requirements that defines our search parameters.
                </li>
                <li>
                  We create a detailed position profile, including the job
                  title, description, duties, and required skills, to ensure the
                  best fit for the role.
                </li>
                <li>
                  With years of experience, we have an unrivaled database of
                  top-level executives that no other search service can access.
                </li>
                <li>
                  We present the information you provide in a way that appeals
                  to top executives, even those not actively seeking new
                  opportunities.
                </li>
                <li>
                  Leveraging our extensive industry knowledge, we identify
                  experienced and emerging executives with specific qualities
                  across various business functions.
                </li>
                <li>
                  We compare our database with responses from the marketed
                  opportunity to compile a list of ideal candidates.
                </li>
                <li>
                  We conduct thorough investigations and only consider
                  candidates with the strongest potential. Employment and
                  academic credentials are verified to ensure the perfect fit.
                </li>
                <li>
                  Complex Financial Instruments Valuation: Accurate valuation of
                  instruments like derivatives and options.
                </li>
                <li>
                  We contact previous employers, supervisors, schools, and other
                  references to verify key employment and educational
                  information, gaining insights into a candidate’s background,
                  experiences, and skills.
                </li>
              </ul>

              <h3>Negotiate an Initial Offer</h3>
              <p>
                With our experience, we help you determine and negotiate the
                right offer for the candidate.
              </p>
            </div>
          </section>
        </div>
      )}

      {id && id === "consult-services" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Consulting Services"}
            image={contactbannerimg}
            bread="Home | Consulting | Consulting Services"
          />

          <section className="consulting_section_1">
            <div className="consulting_row">
              
            </div>
            <div className="consulting_row row_2">
              <div className="row_img">
                <img src={img2} alt="" />
              </div>
              <div className="row_text">
                <h1>Human Capital Outsourcing</h1>
                <p>
                  We supply our clients with human capital possessing the skills
                  and experience needed to manage non-core business roles,
                  enhancing the value to our clients' operations. <br />
                  Human Capital Organization: <br />
                  We assist companies in establishing functional human resources
                  units, planning their organizational structures, developing
                  job descriptions, and implementing best human resources
                  practices.
                </p>
              </div>
            </div>
            <div className="consulting_row">
              <div className="row_text">
                <h1>Company Formation</h1>
                <p>
                  Nigerian company law allows for three types of business
                  structures: Business Name Company, Limited Liability (Ltd),
                  and Private Limited Companies (Plc). The primary differences
                  between these types lie in the size of the share capital and
                  the number of permissible shareholders. Our firm specializes
                  in company incorporation and business name registration. This
                  process is relatively straightforward and can be completed in
                  a few days, depending on the availability of the required
                  documents.
                </p>
                <p>The main requirements are:</p>
                <ul>
                  <li>Company name (suggest at least 3 options)</li>
                  <li>Object of the company (nature of business)</li>
                  <li>At least two directors (for Ltds)</li>
                </ul>
              </div>
              <div className="row_img">
                <img src={img3} alt="" />
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "people-performance" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"People, Performance and Technology"}
            image={contactbannerimg}
            bread="Home | Consulting | People, Performance and Technology"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>People, Performance</span> and Technology
            </h1>

            <div className="consulting_list learning">
              <p>
                We conduct comprehensive reviews of critical aspects of our
                clients' operations, including systems, supply chains, capital
                structures, and contracts with third parties. Our goal is to
                identify weaknesses that may hinder business objectives and
                provide actionable recommendations.
              </p>
              <ul>
                <li>
                  Systems Review: Assessing the efficiency and effectiveness of
                  current systems and processes.
                </li>
                <li>
                  Supply Chain Analysis: Evaluating the entire supply chain to
                  identify inefficiencies and improve operational efficiency.
                </li>
                <li>
                  Capital Structure Evaluation: Examining the financial
                  structure to optimize for growth and reduce risks.
                </li>
                <li>
                  Contract Review: Scrutinizing contracts with third parties to
                  ensure they are favorable and risk-free.
                </li>
              </ul>
              <p>
                We then provide detailed recommendations to address identified
                weaknesses, helping strengthen operations and achieve business
                objectives.
              </p>
            </div>
          </section>
        </div>
      )}

      {id && id === "performance-management" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Performance Management System"}
            image={contactbannerimg}
            bread="Home | Consulting | Performance Management System"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Performance Management</span> System
            </h1>

            <p>
              Our Performance Improvement services help you enhance performance
              by improving the efficiency and effectiveness of your company’s
              key business operations. Leveraging our deep expertise in finance,
              risk management/compliance, IT systems, operations, and human
              resources, we assist clients in identifying and implementing
              cost-saving initiatives, enhancing management and control,
              identifying and managing risks, and improving quality. We also
              offer hands-on assistance to address financial under-performance
              and cash-flow management issues using our proven experience and
              expertise.
            </p>

            <p>
              We focus on improving Financial Effectiveness, IT Effectiveness,
              and Governance, Risk, and Compliance operations, utilizing data,
              technology, and change management skills to address the challenges
              your business faces.
            </p>

            <p>
              We plan, design, and recommend the implementation of performance
              measurement and appraisal systems that provide a valid basis for
              evaluating employee performance.
            </p>
          </section>
        </div>
      )}

      {id && id === "feasibility-study" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Feasibility Studies & Business Plan"}
            image={contactbannerimg}
            bread="Home | Consulting | Feasibility Studies & Business Plan"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Feasibility Studies</span> & Business Plan
            </h1>

            <p>
              If you are an existing business looking to advance to the next
              level, you will need a business plan expert to professionally
              document your plan. Our business plans are tailored to target
              specific audiences, whether you aim to attract new investors,
              raise fresh equity, secure loans from lenders, support a
              public-private partnership, join a group of strategic investors,
              collaborate with other partners, make new investments, plan to
              sell or value your business, or simply manage your current
              operations effectively. The following are the services we offer
            </p>

            <div className="consulting_list">
              <ul>
                <li>
                  Conduct a market demand study for products or services,
                  considering local demand in Nigeria and export potential.
                </li>
                <li>Prepare a SWOT analysis.</li>
                <li>Prepare a sensitivity analysis.</li>
                <li>Prepare a risk analysis.</li>
                <li>
                  Assess the financial feasibility of the project using
                  evaluation methods such as IRR, NPV, Payback Period, ROI, cash
                  generation potential, and other balance sheet ratio analyses.
                </li>
                <li>
                  Create detailed financial forecasts, including profit & loss
                  projections, pro forma balance sheets, pro forma cash flow
                  statements, cash budgets, and ratio analyses.
                </li>
                <li>
                  Perform company valuation based on projections and break-even
                  analysis.
                </li>
                <li>
                  Develop production plans, marketing plans, operations plans,
                  management plans, product plans, procurement plans, and
                  personnel plans.
                </li>
                <li>
                  Review forecasts for operating expenses, capital expenses,
                  inflation, interest rates, borrowing, equity injections, and
                  working capital.
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}

      {id && id === "human-resources" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Human Resources"}
            image={contactbannerimg}
            bread="Home | Consulting | Human Resources"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Human</span> Resources
            </h1>

            <div className="consulting_list human_resources">
              <h5>Human Resources</h5>
              <p>
                We work with our client to extract value from its human capital
                as we position ourselves as partners with them. To this end, we
                render the following services to our client.
              </p>
              <p>
                We are your strategic partner in executive selection. We help
                you in searching for the best human capital that aligns with our
                growth plans.
              </p>
              <p>
                As major human resources consultants, we follow industry trends,
                spot changes and advise our clients on employee rights, welfare
                packages, salary levels and compensation policies.
              </p>
              <p>
                Our faculty delivers training needs of our clients that are
                generic, function specific, career planning and for leadership
                levels.
              </p>
              <p>
                Some of our training includes Accounting, Taxation, Sales,
                Leadership, Strategy, Quality Control, Safety, and Performance
                Improvement Personal Development
              </p>
              <p>
                We provide our clients with human capital that possess the
                skills and experience to man posts that are not in their
                core-business relevant for them to add value to our clients
                business.
              </p>
              <p>
                We offer you access to new resources, expertise, experience and
                professionalism
              </p>
              <p>
                We also employ one organization with the entire technical
                back-up you require – not just one person; specialist tax,
                financial services, IT, corporate finance – can all be dealt
                with.
              </p>
              <p>
                We also allow you to save in money and time both In the short
                term on recruitment and, in the long term, on employment taxes
                and potential redundancy costs – also avoid the potential
                pitfalls of employment law.
              </p>
              <p>
                We handle the non-core business issues for you. We will worry
                about producing the management information, you can worry about
                acting on it; so you can concentrate on strategic issues, work
                ‘on’ not ‘in’ your business.
              </p>
              <p>Contract scope, length and fees</p>
              <p>
                We agree contract scope, duration upfront. Our fees will be
                agreed prior to commencement with no surprises, and you will not
                be tied into lengthy restrictive contracts. Successful
                partnerships require responsibility from all parties, they are
                built on trust, and they thrive on flexibility.
              </p>
            </div>

            <div className="consulting_list human_resources">
              <h5>Payroll</h5>
              <p>
                Managing your payroll can be time-consuming and burdensome,
                diverting energy and resources from your business's core
                activities. The task is further complicated by the growing
                complexity of taxation and employment legislation and the
                accompanying penalties for non-compliance.
              </p>
              <p>
                We offer comprehensive payroll services to alleviate this
                burden. Our dedicated team provides confidential support,
                including:
              </p>
              <ul>
                <li>Customized payslips</li>
                <li>
                  Administration of PAYE, national insurance, statutory sick
                  pay, statutory maternity pay, and pension remittance
                </li>
                <li>Employee compensation and industrial training</li>
              </ul>
              <p>
                We also assist with completing statutory forms, including
                year-end returns, to issue to your employees and submit to the
                Inland Revenue. Our services include:
              </p>
              <ul>
                <li>Summaries and analyses of staff costs</li>
                <li>
                  Administration of incentive schemes, bonuses, ex-gratia, and
                  termination payments
                </li>
                <li>Administration of pension schemes</li>
              </ul>
              <p>
                We provide our clients with human capital that possess the
                skills and experience to man posts that are not in their
                core-business relevant for them to add value to our clients
                business.
              </p>
              <p>
                Additionally, our team can conduct a health check to identify
                any PAYE or benefit issues for employers, employees, or
                directors. With the increased likelihood of businesses being
                investigated for PAYE and benefit in kind irregularities, we can
                help you get on the right track before any issues arise. Even
                with a small number of employees, engaging us to administer your
                payroll can result in significant savings.
              </p>
            </div>
          </section>
        </div>
      )}

      {id && id === "human-capital" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Human Capital Outsourcing"}
            image={contactbannerimg}
            bread="Home | Consulting | Human Capital Outsourcing"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Human Capital</span> Outsourcing
            </h1>

            <p>
              We offer our clients access to skilled and experienced
              professionals who can fill roles that are not directly related to
              their core business operations. By providing human capital for
              these positions, we enable our clients to focus on their main
              business activities while ensuring that all necessary functions
              are handled efficiently. Our services help add value to our
              clients' businesses by bringing in expertise and allowing them to
              maintain a streamlined and effective workforce.
            </p>

            <div className="consulting_list"></div>
          </section>
        </div>
      )}

      <LeaveAMessage />
      <Footer />
    </div>
  );
};

export default Consulting;
