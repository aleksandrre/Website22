import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Section4 from "./components/section4/Section4";
import Footer2 from "./components2/footer2/Footer2";
import Footer from "./components/footer/Footer";

export const Div1 = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  background: url(${(props) => props.url});
  background-color: ${(props) => props.bccolor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Div2 = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #c7cec9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Container1 = styled.section`
  width: 1200px;

  @media screen and (max-width: 1100px) {
    width: 400px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: 15px;

  @media screen and (max-width: 1100px) {
    font-size: 32px;
  }
`;
export const H11 = styled(H1)`
  color: #485342;
`;
export const H4 = styled(H1)`
  font-size: 24px;
  margin-right: 20px;
`;
export const H41 = styled(H4)`
  color: #485342;
`;

export const H2 = styled.h2`
  font-size: 112px;
  color: white;

  @media screen and (max-width: 1100px) {
    font-size: 56px;
  }
`;

export const H22 = styled(H2)`
  color: #5c6756;
`;
export const P1 = styled.p`
  font-size: 14px;
  color: #485342;
  width: 600px;

  @media screen and (max-width: 1100px) {
    width: 400px;
  }
`;

export const P2 = styled(P1)`
  color: white;
  width: 400px;
`;

export const P22 = styled(P2)`
  color: #5c6756;
`;

export const Div3 = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c6756;
`;
export const Div33 = styled(Div3)`
  background-color: #c7cec9;
`;
export const Divelement1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
export const Divelement2 = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: start;
    margin-top: 40px;
  }
`;
export const H3 = styled.h1`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
`;

export const H33 = styled(H3)`
  color: #5c6756;
`;

export const Button = styled.div`
  width: 180px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 20px;
  color: white;
`;

export const Button1 = styled(Button)`
  color: #5c6756;
  border: 2px solid #5c6756;
`;
const Pricing = () => {
  return (
    <>
      <Navbar />
      <Div1 url="./images/img51.avif" height="87.73vh">
        <Container1>
          <H1>IT'S TIME TO</H1>
          <H2>CHOOSE BALI</H2>
        </Container1>
      </Div1>
      <Div2>
        <H11>WHAT WE CAN OFFER</H11>
        <P1>
          Need a place to get away? There is no better corner in the world to
          hide from the dull everyday than the magical Bali. Relax on the
          picturesque beaches, visit numerous spas and reside in the
          breathtaking resorts this location has to offer – and forget all of
          your worries.
        </P1>
      </Div2>

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

      <Div33>
        <Container1>
          <Container2>
            <Divelement1>
              <H33>ADVENTURE IN BALI</H33>
              <P22>
                Explore the tropical nature, hop on a scooter to drive around
                the island or choose other activities, such as water sports, to
                make your holiday memorable.
              </P22>
              <Button1>LEARN MORE</Button1>
            </Divelement1>
            <div>
              <Divelement2>
                <H41>FROM</H41>
                <H22>$569</H22>
              </Divelement2>
            </div>
          </Container2>
        </Container1>
      </Div33>

      <Div3>
        <Container1>
          <Container2>
            <Divelement1>
              <H3>FEEL THE CULTURE</H3>
              <P2>
                The Balinese culture is ready for the curious – ancient
                monuments, local festivals and exotic food make you leave the
                island with deeper knowledge of its lifestyle.
              </P2>
              <Button>LEARN MORE</Button>
            </Divelement1>
            <div>
              <Divelement2>
                <H4>FROM</H4>
                <H2>$514</H2>
              </Divelement2>
            </div>
          </Container2>
        </Container1>
      </Div3>

      <Div33>
        <Container1>
          <Container2>
            <Divelement1>
              <H33>PERSONAL ADVENTURE</H33>
              <P22>
                Looking for something a bit more out there? No problem. We are
                here to help you plan your special experience and find the best
                solutions on how to make your wishes come true. Contact us to
                make your dream vacation come true.
              </P22>
              <Button1>LEARN MORE</Button1>
            </Divelement1>
            <div>
              <Divelement2>
                <H41>FROM</H41>
                <H22>$611</H22>
              </Divelement2>
            </div>
          </Container2>
        </Container1>
      </Div33>
      <Section4 />
      <Footer2 />
      <Footer />
    </>
  );
};

export default Pricing;
