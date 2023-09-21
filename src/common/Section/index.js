import { 
  StyledSection,
  Header,
  Title,
  MainSectionContent
} from "./styled";

const Section = ({
  title, 
  extraHeaderContent, 
  mainSectionContent,
}) => (
  <StyledSection>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <MainSectionContent>
      {mainSectionContent}
    </MainSectionContent>
  </StyledSection>
);

export default Section;