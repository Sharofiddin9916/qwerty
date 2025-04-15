import styled from "styled-components";
import { colors } from "../../styles/theme";

export const InputWrapper = styled.div`
    position: relative;
    height: 50px;
    width: 100%;
    border: 1px solid ${colors.main};
    border-radius: 100px;
    overflow: hidden;

    & > input {
        height: 100%;
        width: 100%;
        padding: 0 20xp;
        border: none;
        outline: none;
    }

    & > button {
        position: absolute;
        background-color: transparent;
        border: none;
        top: 16px;
        right: 20px;
    }
`;