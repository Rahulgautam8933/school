import React, { useState } from "react";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/iso.jpeg";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserData = () => {
  const printResult = (event) => {
    let printContents = document.getElementById("printinvice21").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    event.preventDefault();
    window.print();
    document.body.innerHTML = originalContents;
    // return false;
  };

  const params = useParams();
  const [userData, setUserData] = useState([]);

  const getSingleData = async () => {
    try {
      const res = await axios.get(``);
      setUserData(res?.data)
    } catch (error) {
      console.log(error);
    }
  }


  // English

  const engUnit11 = /\d/.test(engUnit1);
  const engHy1 = /\d/.test(engHy);
  const engUnit21 = /\d/.test(engUnit2);
  const engFy1 = /\d/.test(engFy);

  const engTotal1 =
    (engUnit11 ? Number(engUnit1) : 0) + (engHy1 ? Number(engHy) : 0);

  const engTotal2 =
    (engUnit21 ? Number(engUnit2) : 0) + (engFy1 ? Number(engFy) : 0);

  const engunit =
    (engUnit21 ? Number(engUnit2) : 0) + (engUnit11 ? Number(engUnit1) : 0);

  const engExam = (engHy1 ? Number(engHy) : 0) + (engFy1 ? Number(engFy) : 0);

  const total = engTotal1 + engTotal2;

  // hindi
  const hiUnit11 = /\d/.test(hindiUnit1);
  const hiHy1 = /\d/.test(hindiHy);
  const hiUnit21 = /\d/.test(hindiUnit2);
  const hiFy1 = /\d/.test(hindiFy);

  const hiTotal1 =
    (hiUnit11 ? Number(hindiUnit1) : 0) + (hiHy1 ? Number(hindiHy) : 0);

  const hiTotal2 =
    (hiUnit21 ? Number(hindiUnit2) : 0) + (hiFy1 ? Number(hindiFy) : 0);

  const hiunit =
    (hiUnit11 ? Number(hindiUnit1) : 0) + (hiUnit21 ? Number(hindiUnit2) : 0);

  const hiExam = (hiHy1 ? Number(hindiHy) : 0) + (hiFy1 ? Number(hindiFy) : 0);

  const hitotal = hiTotal1 + hiTotal2;

  // maths
  const mathUnit11 = /\d/.test(mathUnit1);
  const mathHy1 = /\d/.test(mathHy);
  const mathUnit21 = /\d/.test(mathUnit2);
  const mathFy1 = /\d/.test(mathFy);

  const mathTotal1 =
    (mathUnit11 ? Number(mathUnit1) : 0) + (mathHy1 ? Number(mathHy) : 0);

  const mathTotal2 =
    (mathUnit21 ? Number(mathUnit2) : 0) + (mathFy1 ? Number(mathFy) : 0);

  const mathunit =
    (mathUnit11 ? Number(mathUnit1) : 0) + (hiUnit21 ? Number(hindiUnit2) : 0);

  const mathExam =
    (mathHy1 ? Number(mathHy) : 0) + (mathFy1 ? Number(mathFy) : 0);

  const mathtotal = mathTotal1 + mathTotal2;

  // SCIENCE/E.V.S
  const sciUnit11 = /\d/.test(sciUnit1);
  const sciHy1 = /\d/.test(sciHy);
  const sciUnit21 = /\d/.test(sciUnit2);
  const sciFy1 = /\d/.test(sciFy);

  const sciTotal1 =
    (sciUnit11 ? Number(sciUnit1) : 0) + (sciHy1 ? Number(sciHy) : 0);

  const sciTotal2 =
    (sciUnit21 ? Number(sciUnit2) : 0) + (sciFy1 ? Number(sciFy) : 0);

  const sciunit =
    (sciUnit11 ? Number(sciUnit1) : 0) + (sciUnit21 ? Number(sciUnit2) : 0);

  const sciExam = (sciHy1 ? Number(sciHy) : 0) + (sciFy1 ? Number(sciFy) : 0);

  const scitotal = sciTotal1 + sciTotal2;

  // G.K

  const gkUnit11 = /\d/.test(gkUnit1);
  const gkHy1 = /\d/.test(gkHy);
  const gkUnit21 = /\d/.test(gkUnit2);
  const gkFy1 = /\d/.test(gkFy);

  const gkTotal1 =
    (gkUnit11 ? Number(gkUnit1) : 0) + (gkHy1 ? Number(gkHy) : 0);

  const gkTotal2 =
    (gkUnit21 ? Number(gkUnit2) : 0) + (gkFy1 ? Number(gkFy) : 0);

  const gkunit =
    (gkUnit11 ? Number(gkUnit1) : 0) + (gkUnit21 ? Number(gkUnit2) : 0);

  const gkExam = (gkHy1 ? Number(gkHy) : 0) + (gkFy1 ? Number(gkFy) : 0);

  const gktotal = gkTotal1 + gkTotal2;

  // URDU

  const urduUnit11 = /\d/.test(urduUnit1);
  const urduHy1 = /\d/.test(urduHy);
  const urduUnit21 = /\d/.test(urduUnit2);
  const urduFy1 = /\d/.test(urduFy);

  const urduTotal1 =
    (urduUnit11 ? Number(urduUnit1) : 0) + (urduHy1 ? Number(urduHy) : 0);

  const urduTotal2 =
    (urduUnit21 ? Number(urduUnit2) : 0) + (urduFy1 ? Number(urduFy) : 0);

  const urduunit =
    (urduUnit11 ? Number(urduUnit1) : 0) + (urduUnit21 ? Number(urduUnit2) : 0);

  const urduExam =
    (urduHy1 ? Number(urduHy) : 0) + (urduFy1 ? Number(urduFy) : 0);

  const urdutotal = urduTotal1 + urduTotal2;

  // SOCIAL STUDY

  const sstUnit11 = /\d/.test(sstUnit1);
  const sstHy1 = /\d/.test(sstHy);
  const sstUnit21 = /\d/.test(sstUnit2);
  const sstFy1 = /\d/.test(sstFy);

  const sstTotal1 =
    (sstUnit11 ? Number(sstUnit1) : 0) + (sstHy1 ? Number(sstHy) : 0);

  const sstTotal2 =
    (sstUnit21 ? Number(sstUnit2) : 0) + (sstFy1 ? Number(sstFy) : 0);

  const sstunit =
    (sstUnit11 ? Number(sstUnit1) : 0) + (sstUnit21 ? Number(sstUnit2) : 0);

  const sstExam = (sstHy1 ? Number(sstHy) : 0) + (sstFy1 ? Number(sstFy) : 0);

  const ssttotal = sstTotal1 + sstTotal2;

  // COMPUTER

  const cmptrUnit11 = /\d/.test(cmptrUnit1);
  const cmptrHy1 = /\d/.test(cmptrHy);
  const cmptrUnit21 = /\d/.test(cmptrUnit2);
  const cmptrFy1 = /\d/.test(cmptrFy);

  const cmptrTotal1 =
    (cmptrUnit11 ? Number(cmptrUnit1) : 0) + (cmptrHy1 ? Number(cmptrHy) : 0);

  const cmptrTotal2 =
    (cmptrUnit21 ? Number(cmptrUnit2) : 0) + (cmptrFy1 ? Number(cmptrFy) : 0);

  const cmptrunit =
    (cmptrUnit21 ? Number(cmptrUnit2) : 0) +
    (cmptrUnit11 ? Number(cmptrUnit1) : 0);

  const cmptrExam =
    (cmptrHy1 ? Number(cmptrHy) : 0) + (cmptrFy1 ? Number(cmptrFy) : 0);

  const cmptrtotal = cmptrTotal1 + cmptrTotal2;

  // ART

  const artUnit11 = /\d/.test(artUnit1);
  const artHy1 = /\d/.test(artHy);
  const artUnit21 = /\d/.test(artUnit2);
  const artFy1 = /\d/.test(artFy);

  const artTotal1 =
    (artUnit11 ? Number(artUnit1) : 0) + (artHy1 ? Number(artHy) : 0);

  const artTotal2 =
    (artUnit21 ? Number(artUnit2) : 0) + (artFy1 ? Number(artFy) : 0);

  const artunit =
    (artUnit21 ? Number(artUnit2) : 0) + (artUnit11 ? Number(artUnit1) : 0);

  const artExam = (artHy1 ? Number(artHy) : 0) + (artFy1 ? Number(artFy) : 0);

  const arttotal = artTotal1 + artTotal2;

  const gdtotal1 =
    engTotal1 +
    hiTotal1 +
    mathTotal1 +
    sciTotal1 +
    gkTotal1 +
    urduTotal1 +
    sstTotal1 +
    cmptrTotal1 +
    artTotal1;
  const gdtotal2 =
    engTotal2 +
    hiTotal2 +
    mathTotal2 +
    sciTotal2 +
    gkTotal2 +
    urduTotal2 +
    sstTotal2 +
    cmptrTotal2 +
    artTotal2;
  const gdtotalfinal =
    total +
    hitotal +
    mathtotal +
    scitotal +
    gktotal +
    urdutotal +
    ssttotal +
    cmptrtotal +
    arttotal;

  var percentage =
    ((Number(tsaHalfYear) + Number(tsaFinalYear)) /
      (Number(twdFinalYear) + Number(twdHalfYear))) *
    100;

  var roundedPercentage = percentage.toFixed(2);

  var halfyearAttper = (Number(tsaHalfYear) / Number(twdHalfYear)) * 100;
  var halfyearAttper1 = halfyearAttper.toFixed(2);

  var finalYearAttper = (Number(tsaFinalYear) / Number(twdFinalYear)) * 100;

  var finalYearAttper1 = finalYearAttper.toFixed(2);

  return (
    <>
      <button className="btn btn-secondary m-4">Back</button>
      <button className="btn btn-secondary m-4" onClick={printResult}>
        Print
      </button>
      <div style={{ width: "80%", margin: "1rem auto" }}>
        <div className="result1container" id="printinvice21">
          <div className="resultcontainerboxs">
            <div className="result-up-box">
              <div className="result-up-boxs">
                <div className="resutl-up-left-box">
                  <img src={logo1} alt="left logo" />
                </div>

                <div className="resutl-up-mid-box">
                  <h3>WASIM MEMORIAL PUBLIC SCHOOL</h3>
                  <p>English Medium School </p>
                  <p>(Affiliated to U.P.Board)</p>
                  <p>Vill-Post Teary, SULTANPUR (U.P.)</p>
                  <p>
                    Ph. No: 7860452786, Website: www.wasimmemorialschool.com
                  </p>
                  <span>Record of Academic Performance</span>
                  <h2>{session}</h2>
                </div>

                <div className="resutl-up-right-box">
                  <img src={logo2} alt="right logo" />
                </div>
              </div>

              <div className="result-up-mid-box2">
                <div className="result-up-mid-box21">
                  <p>
                    <strong>Student Id: </strong> {studentId}
                  </p>
                  <p>
                    <strong>Name of Student: </strong>
                    {studentName}
                  </p>
                  <p>
                    <strong>Father`s Name: </strong>
                    {fatherName}
                  </p>
                  <p>
                    <strong>Mother`s Name: </strong> {motherName}
                  </p>
                  <p>
                    <strong>Mobile No: </strong> {mbl}
                  </p>
                  <p>
                    <strong>Address: </strong> {address}
                  </p>
                </div>
                <div className="result-up-mid-box22">
                  <p>
                    <strong>Roll No: </strong> {rollNumber}
                  </p>
                  <p>
                    <strong>Date of Birth: </strong> {dob}
                  </p>
                  <p>
                    <strong>Class-Sec: </strong> {classSection}
                  </p>
                </div>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1"></div>
              <div className="result-mid-sec1-box2">
                <p className="padding12 center12 heading-font-size">
                  HALF YEARLY EXAM(100 MARKS)
                </p>
              </div>
              <div className="result-mid-sec1-box2">
                <p className="padding12 center12 heading-font-size">
                  FINAL YEAR EXAM(100 MARKS)
                </p>
              </div>
              <div className="result-mid-sec1-box2  text-center">
                <p className="padding12 center12 heading-font-size">
                  FINAL ASSESSMENT
                </p>
              </div>
            </div>

            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <span>Subject Name</span>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12 center121">
                  <span>Unit 1</span>
                </p>
                <p className="border-right center12 center121">
                  <span>HALF YEAR</span>
                </p>
                <p className="text-center center12 center121">
                  <span>TOTAL</span>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12 center121">
                  <span>Unit 2</span>
                </p>
                <p className="border-right center12 center121">
                  <span>FINAL YEAR</span>
                </p>
                <p className="text-center center12 center121">
                  <span>TOTAL</span>
                </p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12 center121">
                  <span>UNIT</span>
                </p>
                <p className="border-right center12 center121">
                  <span>EXAM</span>
                </p>
                <p className="border-right center12 center121">
                  <span>TOTAL</span>
                </p>
                <p className=" center12 center121">
                  <span>(%)</span>
                </p>
              </div>
            </div>

            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>ENGLISH</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{engUnit1}</p>
                <p className="border-right center12">{engHy}</p>
                <p className="text-center center12">{engTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{engUnit2}</p>
                <p className="border-right center12">{engFy}</p>
                <p className="text-center center12">{engTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{engunit}</p>
                <p className="border-right center12">{engExam}</p>
                <p className="border-right center12">{total}</p>
                <p className=" center12">{total}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>HINDI</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{hindiUnit1}</p>
                <p className="border-right center12">{hindiHy}</p>
                <p className="text-center center12">{hiTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{hindiUnit2}</p>
                <p className="border-right center12">{hindiFy}</p>
                <p className="text-center center12">{hiTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{hiunit}</p>
                <p className="border-right center12">{hiExam}</p>
                <p className="border-right center12">{hitotal}</p>
                <p className=" center12">{hitotal}</p>
              </div>
            </div>

            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>MATH</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{mathUnit1}</p>
                <p className="border-right center12">{mathHy}</p>
                <p className="text-center center12">{mathTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{mathUnit2}</p>
                <p className="border-right center12">{mathFy}</p>
                <p className="text-center center12">{mathTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{mathunit}</p>
                <p className="border-right center12">{mathExam}</p>
                <p className="border-right center12">{mathtotal}</p>
                <p className=" center12">{mathtotal}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>SCIENCE/E.V.S</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{sciUnit1}</p>
                <p className="border-right center12">{sciHy}</p>
                <p className="text-center center12">{sciTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{sciUnit2}</p>
                <p className="border-right center12">{sciFy}</p>
                <p className="text-center center12">{sciTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{sciunit}</p>
                <p className="border-right center12">{sciExam}</p>
                <p className="border-right center12">{scitotal}</p>
                <p className=" center12">{scitotal}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>G.K</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{gkUnit1}</p>
                <p className="border-right center12">{gkHy}</p>
                <p className="text-center center12">{gkTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{gkUnit2}</p>
                <p className="border-right center12">{gkFy}</p>
                <p className="text-center center12">{gkTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{gkunit}</p>
                <p className="border-right center12">{gkExam}</p>
                <p className="border-right center12">{gktotal}</p>
                <p className=" center12">{gktotal}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>URDU</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{urduUnit1}</p>
                <p className="border-right center12">{urduHy}</p>
                <p className="text-center center12">{urduTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{urduUnit2}</p>
                <p className="border-right center12">{urduFy}</p>
                <p className="text-center center12">{urduTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{urduunit}</p>
                <p className="border-right center12">{urduExam}</p>
                <p className="border-right center12">{urdutotal}</p>
                <p className=" center12">{urdutotal}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>SOCIAL STUDY</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{sstUnit1}</p>
                <p className="border-right center12">{sstHy}</p>
                <p className="text-center center12">{sstTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{sstUnit2}</p>
                <p className="border-right center12">{sstFy}</p>
                <p className="text-center center12">{sstTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{sstunit}</p>
                <p className="border-right center12">{sstExam}</p>
                <p className="border-right center12">{ssttotal}</p>
                <p className=" center12">{ssttotal}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>COMPUTER</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{cmptrUnit1}</p>
                <p className="border-right center12">{cmptrHy}</p>
                <p className="text-center center12">{cmptrTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{cmptrUnit2}</p>
                <p className="border-right center12">{cmptrFy}</p>
                <p className="text-center center12">{cmptrTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{cmptrunit}</p>
                <p className="border-right center12">{cmptrExam}</p>
                <p className="border-right center12">{cmptrtotal}</p>
                <p className=" center12">{cmptrtotal}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>ART</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{artUnit1}</p>
                <p className="border-right center12">{artHy}</p>
                <p className="text-center center12">{artTotal1}</p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right center12">{artUnit2}</p>
                <p className="border-right center12">{artFy}</p>
                <p className="text-center center12">{artTotal2}</p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right center12">{artunit}</p>
                <p className="border-right center12">{artExam}</p>
                <p className="border-right center12">{arttotal}</p>
                <p className=" center12">{arttotal / 2}</p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>GRAND TOTAL</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{gdtotal1}</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  {" "}
                  <strong>{gdtotal2}</strong>
                </p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right" style={{ width: "50%" }}></p>
                <p className="border-right center12">
                  <strong>{gdtotalfinal}</strong>
                </p>

                <p></p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>PERCENTAGE (%)</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{((gdtotal1 / 500) * 100).toFixed(2)}</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{((gdtotal2 / 500) * 100).toFixed(2)}</strong>
                </p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right" style={{ width: "50%" }}></p>
                <p className="border-right">
                  <strong> {((gdtotalfinal / 1000) * 100).toFixed(2)}</strong>
                </p>

                <p></p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Total Working Days</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{twdHalfYear}</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{twdFinalYear}</strong>
                </p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right" style={{ width: "50%" }}></p>
                <p className="border-right center12">
                  <strong> {Number(twdFinalYear) + Number(twdHalfYear)}</strong>
                </p>

                <p></p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Total Student`s Attendance</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{tsaHalfYear}</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{tsaFinalYear}</strong>
                </p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right" style={{ width: "50%" }}></p>
                <p className="border-right center12">
                  <strong> {Number(tsaHalfYear) + Number(tsaFinalYear)}</strong>
                </p>

                <p></p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Attendance (%)</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{halfyearAttper1}%</strong>
                </p>
              </div>
              <div className="result-mid-sec1-box2  mid-boxs-grid  ">
                <p className="border-right" style={{ width: "66.80%" }}></p>
                <p className="center12">
                  <strong>{finalYearAttper1}%</strong>
                </p>
              </div>

              <div className="result-mid-sec1-box2  text-center d-flex">
                <p className="border-right" style={{ width: "50%" }}></p>
                <p className="border-right center12">
                  <strong>{roundedPercentage}%</strong>
                </p>

                <p></p>
              </div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Remarks</strong>
                </p>
              </div>
              <div
                style={{ width: "78.1%" }}
                className="result-mid-sec1-box2  mid-boxs-grid  "
              ></div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Class Teacher`s Sign</strong>
                </p>
              </div>
              <div
                style={{ width: "78.1%" }}
                className="result-mid-sec1-box2  mid-boxs-grid  "
              ></div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Checked By</strong>
                </p>
              </div>
              <div
                style={{ width: "78.1%" }}
                className="result-mid-sec1-box2  mid-boxs-grid  "
              ></div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Principal`s Sign</strong>
                </p>
              </div>
              <div
                style={{ width: "78.1%" }}
                className="result-mid-sec1-box2  mid-boxs-grid  "
              ></div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Guardian`s Sign</strong>
                </p>
              </div>
              <div
                style={{ width: "78.1%" }}
                className="result-mid-sec1-box2  mid-boxs-grid  "
              ></div>
            </div>
            <div className="result-mid-sec1">
              <div className="result-mid-sec1-box1">
                <p>
                  <strong>Result</strong>
                </p>
              </div>
              <div
                style={{ width: "78.1%" }}
                className="result-mid-sec1-box2  mid-boxs-grid  "
              >
                <strong> {result}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
