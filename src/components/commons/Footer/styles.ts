import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;