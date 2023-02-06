import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import Footer2 from "../components2/footer2/Footer2";
import Footer from "../components/footer/Footer";
import {
  Div1,
  Div2,
  Container1,
  H1,
  H2,
  H11,
  P1,
  Container2,
  Divelement1,
  H3,
  P2,
  P22,
  H33,
  Divelement2,
  Div3,
  Button,
  H4,
} from "../Pricing";

export const Container3 = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: 90vh;
    justify-content: space-around;
  }
`;

export const Image = styled.img`
  width: 600px;
  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 400px;
  }
`;

const Relax = () => {
  return (
    <>
      <Navbar />
      <Div1 url="./images/img71.avif" height="87.73vh">
        <Container1>
          <H1>IT'S TIME TO</H1>
          <H2>CHOOSE BALI</H2>
        </Container1>
      </Div1>
      <Div2>
        <H11>FORGET YOUR WORRIES</H11>
        <P1>
          Need a place to get away? There is no better corner in the world to
          hide from the dull everyday than the magical Bali. Relax on the
          picturesque beaches, visit numerous spas and reside in the
          breathtaking resorts this location has to offer – and forget all of
          your worries.
        </P1>
      </Div2>

      <Div1 height="100%" bccolor="#485342">
        <Container1>
          <Container3>
            <Image src="../images/img72.avif" />
            <Divelement1>
              <H3>BEAUTIFUL RESORTS</H3>
              <P2>
                Do you want to wake up with the view of perfect sandy beaches
                just 5 minutes away from having your feet washed by the clear
                waves of the blue sea? There is plenty of marvelous resorts to
                choose from.
              </P2>
            </Divelement1>
          </Container3>
        </Container1>
      </Div1>

      <Div1 height="100%" bccolor="#dbe2dd">
        <Container1>
          <Container3 direction="row-reverse">
            <Image src="../images/img73.avif" />
            <Divelement1>
              <H33>MINDFULNESS PRACTICES</H33>
              <P22>
                The inspiring nature of Bali and the magical essence of its
                culture creates a unique environment for everyone who wants to
                practice being mindful and open their hearts up for the colorful
                experiences this life has to offer.
              </P22>
            </Divelement1>
          </Container3>
        </Container1>
      </Div1>

      <Div1 height="100%" bccolor="#c7cec9">
        <Container1>
          <Container3>
            <Image src="../images/img74.avif" />
            <Divelement1>
              <H33>MINDFULNESS PRACTICES</H33>
              <P22>
                The inspiring nature of Bali and the magical essence of its
                culture creates a unique environment for everyone who wants to
                practice being mindful and open their hearts up for the colorful
                experiences this life has to offer.
              </P22>
            </Divelement1>
          </Container3>
        </Container1>
      </Div1>

      <Div3>
        <Container1>
          <Container2>
            <Divelement1>
              <H3>RELAX IN BALI</H3>
              <P2>
                Amazing, all-inclusive resorts, beautiful beaches and
                mindfulness sessions - these are just a few of the things that
                will help you relax and enjoy your holiday.
              </P2>
              <Button>LEARN MORE</Button>
            </Divelement1>
            <div>
              <Divelement2>
                <H4>FROM</H4>
                <H2>$420</H2>
              </Divelement2>
            </div>
          </Container2>
        </Container1>
      </Div3>

      <Footer2 />
      <Footer />
    </>
  );
};

export default Relax;
