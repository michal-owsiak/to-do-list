import { StyledLink, StyledList } from "./styled";

const Navigation = () => (
  <nav>
    <StyledList>
      <li>
        <StyledLink to="/tasks">Tasks</StyledLink>
      </li>
      <li>
        <StyledLink to="/Author">Author</StyledLink>
      </li>
    </StyledList>
  </nav>
);

export default Navigation;