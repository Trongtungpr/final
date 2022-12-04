import "./Footer.scss";
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="footer">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ margin: "30px auto" }}
              >
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Company 3THL
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ margin: "30px auto" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/#" className="text-reset">
                  Introduce
                </a>
              </p>
              <p>
                <a href="/#" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="/#" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="/#" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ margin: "30px auto" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/#" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="/#" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="/#" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="/#" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4"
              style={{ margin: "30px auto" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Hai Chau, Da Nang, Viet Nam
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                3thl@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                023 234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> +
                023 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{ backgroundColor: "rgb(66,109,73)" }}
      >
        <div
          className="me-5 d-none d-lg-block"
          style={{ color: "white", fontWeight: "bold" }}
        >
          <span style={{ margin: "0 50px" }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div style={{ margin: "auto 150px" }}>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon color="white" fab icon="facebook-f" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon color="white" fab icon="twitter" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon color="white" fab icon="google" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon color="white" fab icon="instagram" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon color="white" fab icon="linkedin" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon color="white" fab icon="github" />
          </a>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{
          backgroundColor: "rgb(66,109,73)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        © 2022 Well Come :
        <a
          className="text-reset fw-bold"
          href="https://mdbootstrap.com/"
          style={{ margin: "0 10px", fontWeight: "bold" }}
        >
          3thl.com.vn
        </a>
      </div>
    </MDBFooter>
  );
}
