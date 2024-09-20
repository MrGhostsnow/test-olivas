import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 394.5px;
    height: 487px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    border-radius: 24px;
    padding: 22px 20px 20px 20px;
    box-shadow: 0px 4px 8px 0px #8585851A,
    0px 14px 14px 0px #85858517,
    0px 32px 19px 0px #8585850D,
    0px 56px 23px 0px #85858503,
    0px 88px 25px 0px #85858500;

    img {
        width: 346.5px;
        height: 185px;

        @media (max-width: 768px) {
            width: 300px;
        }
    }

    @media (max-width: 768px) {
        width: 330px;
        height: 500px;
    }

`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #7F7F7F;
    height: 48px;
`;

export const Title = styled.h3`
    font-size: 25px;
    line-height: 30px;
    font-weight: 500;
    color: #5D5D5D;
    height: 74px;
`

export const Link = styled.a`
    text-decoration: none;
    border: 2px solid #C6B92D;
    border-radius: 50px;
    width: 173px;
    height: 56px;
    padding: 20px 30px 20px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C6B92D;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    cursor: pointer;
`;