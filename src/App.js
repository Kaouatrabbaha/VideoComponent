import React, { Component } from 'react';
import Logo from "./icons/play.svg";
import {
  Container,
  VideoContainer,
  Title,
  TextContainer,
  SubTitle,
  Link,
  Description,
  FooterContainer,
  LeftSection,
  FooterText,
  Tag,
  HeartIcon,
  PlayButton
} from "./Styled";

class App extends Component {
  render() {
    return (
      <Container>
        <VideoContainer>
          <Tag top="8px" left="8px">
            NEW
        </Tag>
          <HeartIcon>
          </HeartIcon>
          <Tag bottom="8px" right="8px" color="rgba(0, 0, 0, 0.5)">
            5 mins
        </Tag>
          <PlayButton>
            <svg width="14px" height="18px" viewBox="0 0 12 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Icons-NEW" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Icons-Updated" transform="translate(-69.000000, -208.000000)" fill="#ffffff">
                  <g id="play" transform="translate(69.000000, 208.000000)">
                    <path d="M11.6001,7.2152 L1.6001,0.2152 C0.9001,-0.2848 0.0001,0.2152 0.0001,1.0152 L0.0001,15.0152 C0.0001,15.8152 0.9001,16.3152 1.6001,15.8152 L11.6001,8.8152 C12.1001,8.4152 12.1001,7.6142 11.6001,7.2152" id="Fill-142"></path>
                  </g>
                </g>
              </g>
            </svg>
          </PlayButton>
        </VideoContainer>
        <TextContainer>
          <Title>
            Yogalarartips: Passning i hunden for nyborjare
            </Title>
          <SubTitle>
            <Link href="/">Yin</Link> with <Link href="/">Johanna Alvin</Link>
          </SubTitle>
          <Description>
            Ett bra stalle att borjah ela om vi kommit ur balans ar hur vi forhaller oss till oss sjalva
          </Description>
        </TextContainer>
        <FooterContainer>
          <LeftSection>
            <img width="23px" height="23px" src={`${require('./icons/playlist.svg')}`} />
            <FooterText>ADD TO PLAYLIST</FooterText>
          </LeftSection>
          <img width="23px" height="23px" src={`${require('./icons/menu-hor.svg')}`} />
        </FooterContainer>
      </Container>
    );
  }
}

export default App;
