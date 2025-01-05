import SocialMediaCard from "./SocialMediaCard";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
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
              icon={<FaTwitter style={{ color: "#1DA1F2" }} />}
              title="Twitter"
              description="Follow us on Twitter"
              followers={12500}
              link="/https://twitter.com"
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={24}>
            <SocialMediaCard
              icon={<FaInstagram style={{ color: "#E4405F" }} />}
              title="Instagram"
              description="Follow us on Instagram"
              followers={23000}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={24}>
            <SocialMediaCard
              icon={<FaFacebook style={{ color: "#1877F2" }} />}
              title="Facebook"
              description="Like our Facebook page"
              followers={15000}
            />
          </Col>
        </StyledRow>
      </Fade>
    </>
  );
};

export default withTranslation()(SocialMedia);
