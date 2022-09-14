import styled from "styled-components";
import { Typography } from "@mui/material";

export const TituloStyled = styled(Typography)`
    color: blueviolet;
    font-size: ${props => props.size};
`;