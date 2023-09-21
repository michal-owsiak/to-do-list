import { 
  StyledSection,
  Header,
  Title,
  DifferentContent
} from "./styled";

const Section = ({
  title, 
  extraHeaderContent, 
  mainSectionContent,
  differentSectionContent
}) => (
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
    <DifferentContent>
      {differentSectionContent}
    </DifferentContent>
  </StyledSection>
);

export default Section;