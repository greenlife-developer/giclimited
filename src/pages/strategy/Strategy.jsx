import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LeaveAMessage from "../../components/messages/LeaveAMessage";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import strategyimg from "../../assets/strategyimg.jpg";
import markettingimg from "../../assets/markettingimg.jpg";
import "./strategy.css";

const Strategy = () => {
  const { id } = useParams();

  return (
    <div className="strategy_page">
      <Header />

      {id && id === "management-consultancy" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Management Consultancy Services"}
            image={strategyimg}
            bread="Home | Strategy | Management Consultancy Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Management Consultancy</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <h4>
                  We offer comprehensive services to enhance financial, costing,
                  and management systems, including:
                </h4>
              </div>

              <div className="row">
                <ul>
                  <li>
                    Accounting and Management System Review: Evaluating current
                    systems for optimization.
                  </li>
                  <li>
                    Project Evaluation: Assessing acquisitions, mergers, and
                    disinvestments.
                  </li>
                  <li>Feasibility Studies: Analyzing new project viability.</li>
                  <li>
                    Capital Raising: Liaising with financial institutions to
                    secure funding.
                  </li>
                  <li>
                    Project Coordination: Collaborating with technical experts
                    for smooth implementation.
                  </li>
                  <li>
                    Personnel Management: Recruiting and managing human
                    resources effectively.
                  </li>
                  <li>
                    Business Administration: Providing complete business
                    management services.
                  </li>
                  <li>
                    Project Rehabilitation: Revitalizing distressed projects.
                  </li>
                  <li>
                    Performance Audits: Conducting audits to improve
                    organizational efficiency and effectiveness.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "marketing-research" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Market Research"}
            image={strategyimg}
            bread="Home | Strategy | Market Research"
          />

          <section className="consulting_section_1">
            <div className="image_section">
              <img src={markettingimg} alt="marketting" />
            </div>

            <h1>
              {" "}
              <span>We Conduct</span> Market Research
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <h4>Marketing Research</h4>
                <p>
                  Navigating forward swiftly amidst significant uncertainty is a
                  daunting challenge. Radar Strategy offers a solution with our
                  distinct “Today Forward, Future Back” approach. This method
                  allows you to create immediate value while progressing toward
                  your future vision, maintaining the flexibility to adapt to
                  changing scenarios. We assist you in making crucial decisions
                  and guiding your transformation journey, maximizing your core
                  potential and developing new growth opportunities.
                </p>
                <p>
                  Our global experts help you attain sustainable, organic growth
                  by concentrating on three essential components: an outside-in
                  approach that prioritizes customers, delivering an exceptional
                  customer experience, and enhancing internal capabilities to
                  ensure optimal customer interactions at every touchpoint.
                </p>
              </div>

              <div className="row">
                <h4>How It Works & How We Do It</h4>
                <p>
                  Our specialists are equipped to analyze both the market as a
                  whole and its individual components (such as competitors,
                  consumers, and products), employing practical methods tailored
                  to your research goals.
                </p>
              </div>

              <div className="row">
                <p>
                  For organizations new to the market and beginning to implement
                  projects, our global team of experts helps you achieve
                  sustainable, organic growth by focusing on three critical
                  building blocks.
                </p>
              </div>

              <div className="row">
                <p>
                  For projects that require a temporary expansion of the
                  marketing department, we assist customer-focused businesses in
                  creating a virtuous cycle, known as the “customer wheel.” We
                  support you at every growth stage, developing custom solutions
                  and collaborating with all levels of your organization.
                </p>
              </div>

              <div className="row">
                <p>
                  Additionally, for projects needing a temporary marketing
                  department expansion, we align your marketing and brand
                  strategy with overarching business objectives, combining hard
                  metrics with creative insights.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "strategic-planning" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Strategic Planning Services"}
            image={strategyimg}
            bread="Home | Strategy | Strategic Planning Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Strategic Planning</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  We assist organizations in defining their mission, vision, and
                  strategic objectives, and in developing plans to achieve these
                  goals.
                </p>
              </div>

              <div className="row">
                <h4>Our Services Include:</h4>
                <ol>
                  <li>
                    Organization Benchmarking: Enhancing internal processes to
                    secure a competitive advantage.
                  </li>
                  <li>
                    Market Studies: Performing various surveys for market
                    analysis, focusing on customer behavior and product
                    positioning.
                  </li>
                  <li>
                    Customer Journey Mapping: Identifying gaps in marketing,
                    sales, and service processes.
                  </li>
                  <li>
                    Organizational Design: Adjusting workflows, procedures, and
                    structures to align with current business needs.
                  </li>
                  <li>
                    Service Program Design: Planning and organizing service
                    elements to improve quality and customer interaction.
                  </li>
                  <li>
                    Global Service Models: Standardizing operations to enhance
                    efficiency across the organization.
                  </li>
                  <li>
                    Competitive Landscape Audit: Understanding competitors and
                    potential market threats.
                  </li>
                  <li>
                    Retreat Facilitation: Planning and leading strategy sessions
                    and retreats.
                  </li>
                  <li>
                    Leadership Development and Coaching: Customizing development
                    plans for individual and organizational growth.
                  </li>
                  <li>
                    Visioning & Future-Casting: Assisting organizations in
                    creating and pursuing a compelling future vision.
                  </li>
                  <li>
                    Employee Insights: Conducting surveys to enhance employee
                    experience and motivation.
                  </li>
                  <li>
                    Customer Insights: Analyzing customer data to inform
                    business decisions.
                  </li>
                  <li>
                    Brand Portfolio Strategy and Architecture: Managing and
                    positioning brands and sub-brands within the market.
                  </li>
                  <li>
                    Ongoing Strategic Management Services: Assisting managers in
                    selecting strategies for improved organizational
                    performance.
                  </li>
                  <li>
                    Marketing Strategy: Developing strategies to drive revenue,
                    enhance customer value, and deliver unique experiences.
                  </li>
                  <li>
                    Comprehensive Strategic Planning: Creating a roadmap for
                    organizational priorities and success.
                  </li>
                  <li>
                    Business Plan: Crafting well-researched, comprehensive
                    business plans.
                  </li>
                  <li>
                    Momentum Meetings: Facilitating meetings and events to
                    achieve organizational goals.
                  </li>
                  <li>
                    Targeting & Segmentation: Strategically segmenting and
                    targeting customers to gain a competitive edge.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "wealth-management" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Wealth Management Services"}
            image={strategyimg}
            bread="Home | Strategy | Wealth Management Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Wealth Management</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  Wealth management services integrate financial planning,
                  investment portfolio management, and other financial services.
                  It involves a consultative process where advisors gather
                  information about a client’s goals and create a tailored
                  strategy using appropriate financial products and services.
                  This holistic approach covers all aspects of a person's
                  financial life, rather than piecemeal advice from various
                  professionals.
                </p>
              </div>

              <div className="row">
                <h4>Scope of Services Wealth management may include:</h4>
                <ul>
                  <li>Investment management</li>
                  <li>Insurance</li>
                  <li>Estate planning</li>
                  <li>Taxation</li>
                  <li>Cash flow management</li>
                  <li>Debt management</li>
                  <li>Stock brokering</li>
                  <li>Mortgages</li>
                  <li>Charitable giving</li>
                  <li>Financial structuring</li>
                </ul>
              </div>

              <div className="row">
                <h4>Benefits</h4>
                <ol>
                  <li>
                    Goal Achievement: Helps clients meet short, medium, and
                    long-term financial goals.
                  </li>
                  <li>
                    Sustainability: Positively impacts future generations.
                  </li>
                  <li>
                    Risk Mitigation: Addresses factors affecting financial
                    situations.
                  </li>
                  <li>
                    Professional Guidance: Avoids poor financial decisions with
                    expert advice.
                  </li>
                </ol>
              </div>

              <div className="row">
                <p>
                  At GIC Limited Ltd, we offer personalized multi-asset
                  portfolios to diversify investments and reduce volatility. We
                  provide comprehensive wealth management services, including
                  dedicated advisors, personalized planning, tax-smart
                  strategies, and robust privacy and security measures. Our
                  process includes data collection, detailed planning, thorough
                  analysis, personalized recommendations, proactive
                  implementation, and regular communication to ensure client
                  goals are met.
                </p>
              </div>

              <div className="row">
                <h4>Key Services Offered</h4>
                <ul>
                  <li>
                    Comprehensive Planning: Custom financial plans tailored to
                    individual needs.
                  </li>
                  <li>
                    Personalized Investment Management: Strategies based on risk
                    preferences, with continuous monitoring.
                  </li>
                  <li>
                    Tax-Smart Strategies: Techniques to reduce taxable income.
                  </li>
                  <li>
                    Client Satisfaction: Ongoing assessment and communication to
                    ensure goals are met.
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>
                  Our professionals are dedicated to helping you achieve your
                  financial goals through a tailored and comprehensive approach
                  to wealth management.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "change-management" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Change Management Services"}
            image={strategyimg}
            bread="Home | Strategy | Change Management Services"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Change Management</span> Services
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <p>
                  Change Management Services at GIC Limited involve a structured
                  approach to integrating technological changes in
                  organizations. This includes theories, tools, and tactics to
                  achieve effective, lasting change.
                </p>
              </div>

              <div className="row">
                <h4>Services Offered</h4>
                <p>Program Management Planning</p>
                <ul>
                  <li>Efficient resource management</li>
                  <li>Risk and change management</li>
                  <li>Strategic goal achievement</li>
                  <li>Improved project interdependency management</li>
                </ul>
              </div>

              <div className="row">
                <p>Organizational Change Strategy</p>
                <ul>
                  <li>Focus on the people side of change</li>
                  <li>Foster a thriving work culture</li>
                </ul>
              </div>

              <div className="row">
                <p>Organization Realignment</p>
                <ul>
                  <li>
                    Optimize positions and responsibilities for strategic
                    efficiency
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Business Process Design and Re-engineering</p>
                <ul>
                  <li>
                    Improve quality, output, cost, and service by reducing
                    redundancies
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Organization Structure Development</p>
                <ul>
                  <li>Define roles within the organization to achieve goals</li>
                </ul>
              </div>

              <div className="row">
                <p>Performance Management Systems</p>
                <ul>
                  <li>
                    Job descriptions, new hire paperwork, performance reviews,
                    employee rewards, promotions, transfers, and terminations
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Strategy Deployment and Facilitation</p>
                <ul>
                  <li>
                    Turn strategic thinking into results through environmental
                    scanning and strategy formulation
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Resource Development and Training</p>
                <ul>
                  <li>
                    Enhance corporate image, productivity, teamwork, and safety
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Organization Development & Integration</p>
                <ul>
                  <li>
                    Maximize workforce effectiveness with tools and assessments
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Transition & Impacts Analysis</p>
                <ul>
                  <li>Analyze change, assess data, and align organizations</li>
                </ul>
              </div>

              <div className="row">
                <p>Communications Strategy & Development</p>
                <ul>
                  <li>
                    Create cohesive communication strategies to achieve change
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Business Process Documentation</p>
                <ul>
                  <li>Standardize procedures and establish best practices</li>
                </ul>
              </div>

              <div className="row">
                <p>Education Strategy & Development</p>
                <ul>
                  <li>Provide engaging educational content and training</li>
                </ul>
              </div>

              <div className="row">
                <p>Transition & Performance Analytics</p>
                <ul>
                  <li>
                    Monitor performance, anticipate trends, and improve service
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>Staffing Solutions</p>
                <ul>
                  <li>Offer customized staffing solutions for various needs</li>
                </ul>
              </div>

              <div className="row">
                <p>Mergers and Acquisitions</p>
                <ul>
                  <li>
                    Provide strategic M&A services to maximize satisfaction
                  </li>
                </ul>
              </div>

              <div className="row">
                <p>
                  For more information or to hire our services, contact us at
                  +234 706 968 4132, or email info@giclimited.net.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {id && id === "secretarial-services" && (
        <div className="consulting_sub_page">
          <SubPageBanner
            text={"Company Formation and Secretarial Services In Nigeria"}
            image={strategyimg}
            bread="Home | Strategy | Company Formation and Secretarial Services In Nigeria"
          />

          <section className="consulting_section_1">
            <h1>
              {" "}
              <span>Company Formation</span> and Secretarial Services In Nigeria
            </h1>

            <div className="consulting_list business_development">
              <div className="row">
                <h4>Company Secretarial Services</h4>
                <p>
                  GIC Limited provides comprehensive company secretarial
                  services, ensuring compliance with the Companies and Allied
                  Matters Act, Law of Federation 2004. Led by Chartered
                  Accountant Matthew OGAGAVWORIA, FCA, with over 25 years of
                  experience, our services include acting as Company
                  Secretaries, Nominees, and providing corporate governance
                  advisory. We offer these services for a fixed annual fee.
                </p>
              </div>

              <div className="row">
                <h4>Assurance</h4>
                <p>
                  Our efficient and reliable company secretarial services ensure
                  your organization complies with company law. We review
                  statutory books, ensure compliance with various tax and labor
                  laws, and provide full company secretarial audit services.
                </p>
              </div>

              <div className="row">
                <h4>Company Formations</h4>
                <p>
                  We assist with all aspects of company formation, including
                  private, public, and guarantee companies, and limited
                  liability partnerships. Our services include advisory on
                  company structure, name availability searches, preparation of
                  initial board minutes, maintenance of statutory books, and
                  printing of share certificates. We also offer advice on group
                  company formation, joint ventures, mergers/acquisitions, and
                  shareholder agreements.
                </p>
              </div>

              <div className="row">
                <h4>Compliance with the Companies Act</h4>
                <p>
                  We offer full company secretarial services on a retainer
                  basis, ensuring peace of mind and cost control. Our services
                  include maintaining statutory books, filing annual returns,
                  and preparing audited financial statements.
                </p>
              </div>

              <div className="row">
                <h4>Post-Incorporation Services</h4>
                <p>
                  We provide various post-incorporation services, including
                  changes to company name, registered office, directors, and
                  accounting year, filing board minutes and resolutions,
                  re-allotment and transfer of shares, reconstitution of
                  statutory books, alterations to Memorandum and Articles of
                  Association, and preparation for Annual General Meetings and
                  Board Meetings.
                </p>
              </div>

              <div className="row">
                <p>
                  For more information or to hire our services, email
                  info@giclimited.net.
                </p>
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

export default Strategy;
