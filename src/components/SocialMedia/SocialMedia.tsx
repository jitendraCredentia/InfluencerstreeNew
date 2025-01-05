import SocialMediaCard from "./SocialMediaCard";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { withTranslation } from "react-i18next";
import { StyledRow } from "../ContentBlock/styles";
import { Fade } from "react-awesome-reveal";
import { Col } from "antd";
import { ContentBlockProps } from "../ContentBlock/types";

const SocialMedia = ({ direction, id }: ContentBlockProps) => {
  return (
    <>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={6} md={6} sm={12} xs={24}>
            <SocialMediaCard
              icon={<FaInstagram style={{ color: "#E4405F" }} />}
              title="Instagram"
              description="Follow us on Instagram"
              followers={109985}
              link="https://www.instagram.com/influencerstree/profilecard/?igsh=MWNwOGpnNTk2NHdlOA%3D%3D"
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={24}>
            <SocialMediaCard
              icon={<FaYoutube style={{ color: "#FF0000" }} />}
              title="YouTube"
              description="Like our YouTube page"
              followers={1410565}
              link="https://www.youtube.com/@neuzunlocker"
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={24}>
            <SocialMediaCard
              icon={<FaLinkedin style={{ color: "#0A66C2" }} />}
              title="LinkedIn"
              description="Follow us on LinkedIn"
              followers={100}
              link="https://www.linkedin.com/in/influencerstree/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </Col>
        </StyledRow>
      </Fade>
    </>
  );
};

export default withTranslation()(SocialMedia);
