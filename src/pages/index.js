import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import { HireMe, LinkButton } from '../components/Button.js';
import FirstProject from '../images/first.jpg';
import SecondProject from '../images/second.png';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Name Surname" className="avatar" />
            <t.H1 primary align="center">
              Kunal Sharma
            </t.H1>
            <t.LargeP align="center" max45>
              Student,Developer, passionate about what I do. Always interested in how the sites were made, I started to
              study HTML by hobby.
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              I am currently working as a frontend developer and mainly work with Javascript,React,Graphql,Gatsby,Next
              js,Contentful CMS, and Sanity CMS .
            </t.H2>
            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={FirstProject} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>University website</t.H2>
                <t.P>
                  I made this University website design using the html Framework bulma,react FrameWork Gatsby, Styled
                  Components and it is link with the contentful CMS. I make this website just to enhance my skills in
                  HTML and Gatsby{' '}
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/iamkunall/gatsby-first-project"
                >
                  <t.P>https://github.com/iamkunall/gatsby-first-project</t.P>
                </LinkButton>

                <LinkButton primary bold className="link" as="a" target="_blank" href="https://eduction.netlify.com/">
                  DEMO
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>BlockChain Website Design</t.H2>
                <t.P>
                  This project is made by me as my collage project under my summer training. In this project i am using
                  Bulma as HTML Framework and Nextjs as react FrameWork. This is Three Page Website having A landing
                  Page, Signup page and Login Page
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/iamkunall/Blockchain"
                >
                  <t.P>https://github.com/iamkunall/Blockchain</t.P>
                </LinkButton>

                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://blockchain.kunalsharma.now.sh/"
                >
                  DEMO
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={SecondProject} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>

          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Fancy working with me? Contact me for more info! </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
