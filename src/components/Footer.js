import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import githubIcon from '../assets/img/github-icon.svg';
import resumeIcon from '../assets/img/resume-icon.svg';

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            Zhiyi Chen
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/zhiyi-chen-401/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/zhiyiyi"><img src={githubIcon} alt="" /></a>
              <a href="https://drive.google.com/file/d/1s6x17pDNtmZ7pNru_7nU1-PBsMsS70K9/view?usp=drive_link"><img src={resumeIcon} alt="" /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}