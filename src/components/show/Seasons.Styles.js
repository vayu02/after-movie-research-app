import styled from "styled-components";

export const SeasonsWrap = styled.div`
p {
    margin: 5px 0;
}

span {
    font-weight: 700;
}
`;

export const SeasonLs = styled.div`
display: flex;
flex-direction: column;

.season-itm {
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:last-child {
    margin-bottom: 0;
    }

    .left {
    flex: 0 0 30%;
    border-right: 1px solid #b0b0b0;
    padding-right: 20px;
    }

    .right {
    padding-left: 20px;
    flex: 1;
    }
}
`;

