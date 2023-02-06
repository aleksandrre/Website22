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

const Culture = () => {
  return (
    <>
      <Navbar />
      <Div1 url="../images/img61.avif" height="87.73vh">
        <Container1>
          <H1>IT'S TIME TO</H1>
          <H2>FEEL BALI BALI</H2>
        </Container1>
      </Div1>

      <Div2>
        <H11>DIVE INTO A LIFESTYLE</H11>
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
            <Image src="../images/img62.avif" />
            <Divelement1>
              <H3>COLORFUL CULTURE</H3>
              <P2>
                The culture of Bali is as colourful as it can be. Various
                celebrations, bright clothes, ancient stories and a diverse
                local lifestyle is something you can experience during your
                stay. Immerse yourself with the life of Bali and its residents.
              </P2>
            </Divelement1>
          </Container3>
        </Container1>
      </Div1>

      <Div1 height="100%" bccolor="#dbe2dd">
        <Container1>
          <Container3 direction="row-reverse">
            <Image src="../images/img63.avif" />
            <Divelement1>
              <H33>ANCIENT MONUMENTS</H33>
              <P22>
                Bali is full of ancient monuments that will take your breath
                away. Gazebos on the beaches and mystical temples in the forests
                are just a few of the places to visit for the people thristy of
                seeing inspiring architecture with deep history.
              </P22>
            </Divelement1>
          </Container3>
        </Container1>
      </Div1>

      <Div1 height="100%" bccolor="#c7cec9">
        <Container1>
          <Container3>
            <Image src="../images/img64.avif" />
            <Divelement1>
              <H33>Exotic FOOD</H33>
              <P22>
                Hungry for something new? Your search is over. The fresh and
                exciting cuisine of Bali will make your taste buds happy for
                weeks to come. Be it street food or fancy local restaurants, we
                are sure you will find something new to drool over after your
                stay is over.
              </P22>
            </Divelement1>
          </Container3>
        </Container1>
      </Div1>

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

      <Footer2 />
      <Footer />
    </>
  );
};

export default Culture;
