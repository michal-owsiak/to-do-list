import { StyledLink, StyledList } from "./styled";

const Navigation = () => (
  <nav>
    <StyledList>
      <li>
        <StyledLink to="/zadania">Zadania</StyledLink>
      </li>
      <li>
        <StyledLink to="/autor">O autorze</StyledLink>
      </li>
    </StyledList>
  </nav>
);

export default Navigation;