import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import { Navigation, Keyboard, EffectFlip } from 'swiper/modules';
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import img1 from '../../assets/images/small/img-1.jpg';
import img2 from '../../assets/images/small/img-2.jpg';
import img3 from '../../assets/images/small/img-3.jpg';
import img4 from '../../assets/images/small/img-7.jpg';
import img5 from '../../assets/images/small/img-5.jpg';
import img6 from '../../assets/images/small/img-6.jpg';
import img7 from '../../assets/images/small/img-7.jpg';

const Swiperslider = () => {
  document.title = "Swiper Slider | Dashonic - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Extended UI" breadcrumbItem="Swiper Slider" />

          <Row>
            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Default Swiper</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Swiper 
                    modules={[Autoplay]} 
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }} 
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={img1} className="img-fluid mx-auto d-block" alt="slide1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img2} className="img-fluid mx-auto d-block" alt="slide2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img3} className="img-fluid mx-auto d-block" alt="slide3" />
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Navigation Swiper</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Swiper 
                    modules={[Autoplay, Navigation]} 
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                    slidesPerView={1}
                    spaceBetween={40}
                    navigation={true}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={img4} className="img-fluid mx-auto d-block" alt="slide4" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img5} className="img-fluid mx-auto d-block" alt="slide5" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img6} className="img-fluid mx-auto d-block" alt="slide6" />
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Effect Flip</h4>
                  <Link to="//swiperjs.com/react" rel="noreferrer" className="btn btn-sm btn-soft-secondary">
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Swiper 
                    modules={[Autoplay, Pagination, Navigation, EffectFlip]} 
                    effect="flip"
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={img3} className="img-fluid mx-auto d-block" alt="slide7" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img2} className="img-fluid mx-auto d-block" alt="slide8" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img1} className="img-fluid mx-auto d-block" alt="slide9" />
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
}

export default Swiperslider;
