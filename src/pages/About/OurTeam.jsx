import teambg from "../../assets/teambg.jpg";
import Header from "../../components/Header/Header";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import TeamCard from "../../components/TeamCard/TeamCard";
import bukolaimg from "../../assets/team/bukola.png";
import ibraheemimg from "../../assets/team/ibraheem.png";
import obasaimg from "../../assets/team/obasa.png";
import nurudeenimg from "../../assets/team/nurudeen.png";
import "./team.css";
import NewsLetterForm from "../../components/NewsLetter/NewsLetterForm";
import Footer from "../../components/Footer/Footer";

const OurTeam = () => {
  const teamMembers = [
    {
      image: ibraheemimg,
      name: "Ibraheem Sulayman Olaosebikan",
      position: "Managing Director",
      details:
        'As the Managing Director of GREAT IBSOL CONSULTANCY LIMITED, Ibraheem Sulayman Olaosebikan brings over a decade of expertise in Debt Recovery and Credit Risk Management to the forefront of the company"s operations. With a strong educational foundation in Chemistry from the University of Agriculture, Abeokuta, and a Postgraduate Diploma in Business Administration from the National Open University of Nigeria, Ibraheem has cultivated a unique blend of technical and managerial acumen. Under his visionary leadership, GREAT IBSOL CONSULTANCY LIMITED has established itself as a premier Debt Recovery Firm, delivering exceptional results and driving business growth for clients. His expertise spans Debt Recovery and Management, Credit Risk Management, Audit and Compliance, Team Management and Training, Business Development, and Strategy. His analytical and problem-solving skills, combined with his passion for microfinance, have been instrumental in shaping the company"s success. As a seasoned professional, he has managed and trained over 100 professionals in Credit Risk Management and Debt Recovery. He is a Full Member of the Institute of Debt Recovery Practitioners of Nigeria and a certified member of the Chartered Institute of Bankers of Nigeria (CIBN). With Ibraheem at the helm, GREAT IBSOL CONSULTANCY LIMITED is poised for continued growth and innovation, solidifying its position as a leader in the Debt Recovery Industry."',
    },
    {
      image: bukolaimg,
      name: "Ajao Toluwani Bukola",
      position: "COMPANY SECRETARY",
      details:
        "Her expertise in Accounting and Administration makes her a round peg in a round hole.She holds a degree in Accounting from the National Open University of Nigeria, demonstrating her strong foundation in financial management and governance. As Company Secretary, AJAO TOLUWANI BUKOLA is responsible for ensuring the efficient administration of the company, maintaining accurate records, and providing exceptional support to the Managing Director and the board of directors. Her strong organizational skills, attention to detail, and excellent communication abilities make her a valuable asset to the team. AJAO TOLUWANI BUKOLA is committed to upholding the highest standards of corporate governance and ensuring the company's compliance with regulatory requirements. Her expertise in accounting and administration has been instrumental in driving the company's growth and success. With her strong work ethic and dedication, AJAO TOLUWANI BUKOLA is an integral part of the GREAT IBSOL CONSULTANCY LIMITED team.",
    },
    {
      image: obasaimg,
      name: "Adesile Obasa",
      position: "Company Legal Consultant",
      details:
        "Adesile Obasa is an astute legal practitioner with over 9 years of post call experience. His practice areas include Commercial Law, Litigation, Intellectual Property and Mediation amongst others. His experience in Legal Practice began in the Chambers of the Attorney General of Oyo State where he served as a State Counsel. Upon the completion of his time at the Ministry of Justice, Adesile joined the leading Law firm of Ogunkeye and Ogunkeye in October 2017. Being a member of the Dispute Resolution team, he got the opportunity to appear and succeed in the entire hierarchy of courts in Nigeria except the Supreme Court. He also assisted the Managing Partner, Mrs. W.O. Ogunkeye who served as Chairman of the first Mentoring Committee of the Nigerian Bar Association (NBA) Ibadan Branch. Adesile is one of the Ex-Chairmen of the Young Lawyers Forum of the NBA, Ibadan Branch. As a thought leader in the legal space, Adesile gets to share his ideas on Legal Practice, Justice Administration and the Nigerian Legal System and has been a speaker in many fora. He was a prize winner at the Justice Pius Aderemi Essay Competition where his essay on the ‘Role of Artificial intelligence in creating a sustainable Law Practice in Nigeria, drew much commendation. Adesile Obasa is an expert in Legal Debt Management and Recovery. He has been an External solicitor to  AB Microfinance Bank and some topmost Microfinance Banks and FMCG Companies and  Financial Institutions in Nigeria. He is the brain behind Legal Recovery Strategies of GREAT IBSOL CONSULTANCY LIMITED.",
    },
    // Add more team members as needed
  ];

  return (
    <div className="our_team_page">
      <Header />
      <SubPageBanner
        text={"Our Management Team"}
        image={teambg}
        bread="About | Management Team"
      />

      <section className="team_section_1">
        <h1>
          Meet Our <span>Management Team</span>
        </h1>

        <p>
          GIC Limited is proud to have a team with exceptional expertise in
          management consulting, digital solutions, and event management. Our
          certified professionals across various disciplines work together
          towards a common goal: to apply our skills and experiences to optimize
          and position your business in the global market.{" "}
        </p>

        <p>
          Our multilingual consultants are invaluable in communicating with
          project stakeholders, reducing the language and cultural barriers. We
          are committed to providing you with top-notch services to turn your
          dreams into reality.
        </p>
      </section>

      <section className="team_section_2">
        {teamMembers.map((member, i) => {
          return (
            <TeamCard
              key={i}
              details={member.details}
              image={member.image}
              name={member.name}
              position={member.position}
            />
          );
        })}
      </section>

      <NewsLetterForm />

      <Footer />
    </div>
  );
};


export default OurTeam;
