import styled from "styled-components";
export const CastLs = styled.div`
display: flex;
flex-wrap: wrap;

.cast-itm {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;

    @media only screen and (max-width: 768px) {
        flex: 1 0 100%;
    }
}

.pic-wrapp {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}

.actor {
    margin-left: 25px;
    
    .bold {
    font-weight: bold;
    }
}
`;