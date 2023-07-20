import "./style.css";

const Section = ({ title, extraHeaderContent, mainSectionContent }) => (
  <section className="section">
    <div className="section__header">
      <h2 className="section__title">{title}</h2>
      {extraHeaderContent}
    </div>
    <div>
      {mainSectionContent}
    </div>
  </section>
);

export default Section; 