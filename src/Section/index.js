import { StyledSection, Header, Title } from "./styled";

const Section = ({ title, extraHeaderContent, mainSectionContent }) => (
  <StyledSection>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <div>
      {mainSectionContent}
    </div>
  </StyledSection>
);

export default Section;