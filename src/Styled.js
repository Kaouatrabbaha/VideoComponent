import styled from 'styled-components';

export const Container = styled.section`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%; 
    margin:0 auto;
    border-radius: 6px;
    `;

export const VideoContainer = styled.div`
    background-image: url(${require('./images/pexels-photo.jpg')});
    padding-top: 56.66%;
    background-position: center;
    position: relative;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`;

export const TextContainer = styled.div`
    padding: 30px 30px 0px 30px;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 16px;
    margin: 6px 0;
`;

export const SubTitle = styled.h5`
    font-size: 16px;
    margin: 0;
    color: #b7b7b7;
`;

export const Link = styled.a`
    font-size: 16px;
    color: rgba(57, 175, 228, 1);
    text-decoration: none;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #b7b7b7;
    margin-top: 20px;
    line-height: 24px;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 40px 30px 30px;
`;

export const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterText = styled.span`
    margin-left: 10px;
    font-size: 13px;
    font-weight: 600;
`

export const Tag = styled.div`
    position: absolute;
    top: ${(props)=>props.top? props.top: null};
    left: ${(props)=>props.left? props.left: null};;
    bottom: ${(props)=>props.bottom? props.bottom: null};
    right: ${(props)=>props.right? props.right: null};
    padding: 6px;
    border-radius: 6px;
    color: white;
    font-size: 14px;
    background-color:${(props)=>props.color? props.color: 'rgba(111,182,173,1)'};
`
export const HeartIcon = styled.div`
    position: absolute;
    top: 11px;
    right:11px;
    height: 16px;
    width: 16px;
    background-color:rgba(55, 166, 217, 1);
    mask: url(${require('./icons/heart-filled.svg')}) no-repeat 50% 50%
`

export const PlayButton = styled.a`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border: 2px solid #fff;
    width: 68px;
    height: 68px;
    border-radius: 128px;
    color: #fff;
    text-align: center;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s linear;
    &:hover{
        background-color: white;
        svg{
            g#Icons-Updated{
                fill: black;
            }
        }
    }
    `
