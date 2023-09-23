import meter95 from "../assets/img/meter95.svg";
import meter90 from "../assets/img/meter90.svg";
import meter80 from "../assets/img/meter80.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am experienced with various programming languages,<br></br>frameworks, container technologies, cloud platforms, and databases.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter95} alt="" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter95} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>JavaScript/TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="" />
                                <h5>Google Cloud</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>RESTful API</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="" />
                                <h5>Docker</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
