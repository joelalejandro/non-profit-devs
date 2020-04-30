import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

const styles = `
    padding: 5px 7px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid var(--ember);
    color: var(--ember);
    background-color: transparent;

    &.contained {
        background-color: var(--ember);
        color: var(--lavender)
    }

    &.text {
        color: var(--lavender);
        border: 0;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            height: 2px;
            background-color: #EFDFDF;
            width: 100%;
            bottom: 1px;
            left: 0;
        }
    }
`;

const StyledLink = styled(Link)`
  ${styles}
`;
const StyledButton = styled.button`
  ${styles}
`;

export default function Button({ onClick, to, children, className }) {
  return (
    <>
      {to ? (
        <StyledLink className={className} to={to}>
          {children}
        </StyledLink>
      ) : (
        <StyledButton className={className} onClick={onClick}>
          {children}
        </StyledButton>
      )}
    </>
  );
}
