import React from "react";
import pokh from "../../../assets/images/pulogo.png";
import pulogo from "../../../assets/images/purb.png";
import tulogo from "../../../assets/images/tu.jpg";
import kulogo from "../../../assets/images/kulogo.png";

const bbm = () => {
  return (
    <>
      <section>
        <div className="container"></div>
        <h2 className="heading text-center text-primaryColor mx-auto">
          Courses
        </h2>
        <p className="text__para text-center">
          List of BBM colleges in different Universities.
        </p>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[600px] z-10 order-2 lg:order-1 ml-[50px] mt-[60px]">
              <img src={tulogo} alt="" height={300} width={300} />
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
              <h1 className="text-center text-primaryColor flex font-bold  mt-[50px] ml-[25px] text-xl">
                TU Affiliated Colleges
              </h1>
              <ul className="mt-[50px] font-bold ml-[40px]">
              <li className="text__para">
                  <a
                    href="https://thamescollege.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Thames International College
                  </a>
                </li>
                <li className="https://www.shankerdevcampus.edu.np/">
                  <a
                    href=""
                    target="_blank"
                    className="text__link"
                  >
                    Shanker Dev Campus
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://bca.pkcampus.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    PadmaKanya Multiple Campus
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://saraswaticampus.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Saraswati Multiple Campus
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://ncc.tu.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Nepal Commerce Campus
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://www.oic.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Orchid International College 
                  </a>
                </li>
                <li className="text__para">
                  <a
                    href="https://kbc.edu.np/"
                    target="_blank"
                    className="text__link"
                  >
                    Kathmandu BernHardt College
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default bbm;