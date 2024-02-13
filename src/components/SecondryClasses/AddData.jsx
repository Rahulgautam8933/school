// import React from "react";
import React, { useState } from "react";
import axios from "axios";

function AddData() {
  const [result1, setResult1] = useState(false);
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    fatherName: "",
    motherName: "",
    mbl: "",
    address: "",
    rollNumber: "",
    dob: "",
    classSection: "",
    engUnit1: "",
    engUnit2: "",
    engFy: "",
    engHy: "",
    hindiUnit1: "",
    hindiUnit2: "",
    hindiFy: "",
    hindiHy: "",
    mathUnit1: "",
    mathUnit2: "",
    mathFy: "",
    mathHy: "",
    sciUnit1: "",
    sciUnit2: "",
    sciFy: "",
    sciHy: "",
    gkUnit1: "",
    gkUnit2: "",
    gkFy: "",
    gkHy: "",
    urduUnit1: "",
    urduUnit2: "",
    urduFy: "",
    urduHy: "",
    sstUnit1: "",
    sstUnit2: "",
    sstFy: "",
    sstHy: "",
    cmptrUnit1: "",
    cmptrUnit2: "",
    cmptrFy: "",
    cmptrHy: "",
    artUnit1: "",
    artUnit2: "",
    artFy: "",
    artHy: "",
    twdHalfYear: "",
    twdFinalYear: "",
    twdTotal: "",
    tsaHalfYear: "",
    tsaFinalYear: "",
    tsaTotal: "",
    result: "",
    session: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5001/register2`, formData);
      console.log(res?.data);
      //   window.alert("Data submitted:\n");
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">
          Student Result Details (Class 1st to 8th)
        </h2>
        <form
          // onSubmit={handleSubmit}
          className="p-4"
          style={{ backgroundColor: "#F6EABE", borderRadius: "25px" }}
        >
          <div className="row">
            <div className="mb- col-md-4">
              <label htmlFor="studentId" className="form-label">
                Student Id:
              </label>
              <input
                type="text"
                className="form-control"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter Student Id"
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="studentName" className="form-label">
                Name of Student:
              </label>
              <input
                type="text"
                className="form-control"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter Student Name"
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="fatherName" className="form-label">
                Father's Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Enter Father Name"
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="motherName" className="form-label">
                Mother's Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Enter Mother Name"
              />
            </div>

            <div className="mb-1 col-md-4">
              <label htmlFor="mbl" className="form-label">
                Mobile No:
              </label>
              <input
                type="text"
                className="form-control"
                id="mbl"
                name="mbl"
                value={formData.mbl}
                onChange={handleChange}
                placeholder="Enter Mobile No"
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="rollNumber" className="form-label">
                Roll No:
              </label>
              <input
                type="text"
                className="form-control"
                id="rollNumber"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                placeholder="Enter Student Roll No"
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="dob" className="form-label">
                DOB :
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Enter DOB"
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="classSection" className="form-label">
                Class-Sec :
              </label>
              <input
                type="text"
                className="form-control"
                id="classSection"
                name="classSection"
                value={formData.classSection}
                onChange={handleChange}
                placeholder="Enter Class-Section"
              />
            </div>
          </div>

          {/* <h2>Result Details</h2> */}
          <div className="row">
            <div className="text-center col-md-4">
              <label htmlFor="english" className="form-label"></label>
              <h4>English</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="engUnit1" className="form-label">
                Unit1
              </label>
              <input
                type="text"
                className="form-control"
                id="engUnit1"
                name="engUnit1"
                value={formData.engUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="engHy" className="form-label">
                Half Year:
              </label>
              <input
                type="text"
                className="form-control"
                id="engHy"
                name="engHy"
                value={formData.engHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="engUnit2" className="form-label">
                Unit2:
              </label>
              <input
                type="text"
                className="form-control"
                id="engUnit2"
                name="engUnit2"
                value={formData.engUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="engFy" className="form-label">
                Final Year:
              </label>
              <input
                type="text"
                className="form-control"
                id="engFy"
                name="engFy"
                value={formData.engFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="english" className="form-label"></label>
              <h4>Hindi</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="hindiUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="hindiUnit1"
                name="hindiUnit1"
                value={formData.hindiUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="hindiHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="hindiHy"
                name="hindiHy"
                value={formData.hindiHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="hindiUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="hindiUnit2"
                name="hindiUnit2"
                value={formData.hindiUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="hindiFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="hindiFy"
                name="hindiFy"
                value={formData.hindiFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="english" className="form-label"></label>
              <h4>Math</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="mathUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="mathUnit1"
                name="mathUnit1"
                value={formData.mathUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="mathHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="mathHy"
                name="mathHy"
                value={formData.mathHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="mathUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="mathUnit2"
                name="mathUnit2"
                value={formData.mathUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="mathFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="mathFy"
                name="mathFy"
                value={formData.mathFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="english" className="form-label"></label>
              <h4>Science/E.V.S</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sciUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sciUnit1"
                name="sciUnit1"
                value={formData.sciUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sciHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sciHy"
                name="sciHy"
                value={formData.sciHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sciUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sciUnit2"
                name="sciUnit2"
                value={formData.sciUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sciFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sciFy"
                name="sciFy"
                value={formData.sciFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="english" className="form-label"></label>
              <h4>G.K</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="gkUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="gkUnit1"
                name="gkUnit1"
                value={formData.gkUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="gkHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="gkHy"
                name="gkHy"
                value={formData.gkHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="gkUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="gkUnit2"
                name="gkUnit2"
                value={formData.gkUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="gkFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="gkFy"
                name="gkFy"
                value={formData.gkFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="english" className="form-label"></label>
              <h4>URDU</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="urduUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="urduUnit1"
                name="urduUnit1"
                value={formData.urduUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="urduHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="urduHy"
                name="urduHy"
                value={formData.urduHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="urduUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="urduUnit2"
                name="urduUnit2"
                value={formData.urduUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="urduFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="urduFy"
                name="urduFy"
                value={formData.urduFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="sstUnit1" className="form-label"></label>
              <h4>SOCIAL STUDY</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sstUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sstUnit1"
                name="sstUnit1"
                value={formData.sstUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sstHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sstHy"
                name="sstHy"
                value={formData.sstHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sstUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sstUnit2"
                name="sstUnit2"
                value={formData.sstUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="sstFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="sstFy"
                name="sstFy"
                value={formData.sstFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="english" className="form-label"></label>
              <h4>COMPUTER</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="cmptrUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="cmptrUnit1"
                name="cmptrUnit1"
                value={formData.cmptrUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="cmptrHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="cmptrHy"
                name="cmptrHy"
                value={formData.cmptrHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="cmptrUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="cmptrUnit2"
                name="cmptrUnit2"
                value={formData.cmptrUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="cmptrFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="cmptrFy"
                name="cmptrFy"
                value={formData.cmptrFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>

            <div className="text-center col-md-4">
              <label htmlFor="artUnit1" className="form-label"></label>
              <h4>ART</h4>
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="artUnit1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="artUnit1"
                name="artUnit1"
                value={formData.artUnit1}
                onChange={handleChange}
                placeholder="Unit 1"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="artHy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="artHy"
                name="artHy"
                value={formData.artHy}
                onChange={handleChange}
                placeholder="Half Year"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="artUnit2" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="artUnit2"
                name="artUnit2"
                value={formData.artUnit2}
                onChange={handleChange}
                placeholder="Unit2"
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="artFy" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="artFy"
                name="artFy"
                value={formData.artFy}
                onChange={handleChange}
                placeholder="Final Year"
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="mb-1 col-md-4">
              <label htmlFor="totalWorkingDays" className="form-label"></label>

              <h4>Total Working Days:</h4>
            </div>
            <div className="mb-1 col-md-3">
              <label htmlFor="twdHalfYear" className="form-label">
                Half Year TWD:
              </label>
              <input
                type="text"
                className="form-control"
                id="twdHalfYear"
                name="twdHalfYear"
                value={formData.twdHalfYear}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 col-md-3">
              <label htmlFor="twdFinalYear" className="form-label">
                Final Year TWD:
              </label>
              <input
                type="text"
                className="form-control"
                id="twdFinalYear"
                name="twdFinalYear"
                value={formData.twdFinalYear}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="twdTotal" className="form-label">
                Total W.D:
              </label>
              <input
                type="text"
                className="form-control"
                id="twdTotal"
                name="twdTotal"
                value={formData.twdTotal}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="totalWorkingDays" className="form-label"></label>

              <h4>Total Student's Attendance:</h4>
            </div>
            <div className="mb-1 col-md-3">
              <label htmlFor="tsaHalfYear" className="form-label">
                Half Year TSA:
              </label>
              <input
                type="text"
                className="form-control"
                id="tsaHalfYear"
                name="tsaHalfYear"
                value={formData.tsaHalfYear}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 col-md-3">
              <label htmlFor="tsaFinalYear" className="form-label">
                Final Year TSA:
              </label>
              <input
                type="text"
                className="form-control"
                id="tsaFinalYear"
                name="tsaFinalYear"
                value={formData.tsaFinalYear}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 col-md-2">
              <label htmlFor="tsaTotal" className="form-label">
                Total Stu.A:
              </label>
              <input
                type="text"
                className="form-control"
                id="tsaTotal"
                name="tsaTotal"
                value={formData.tsaTotal}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="twdTotal" className="form-label"></label>
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="result" className="form-label">
                Result:
              </label>
              <select
                className="form-select"
                id="result"
                name="result"
                value={formData.result}
                onChange={handleChange}
              >
                <option value="">Select Result</option>
                <option value="Passed/Promoted">Passed/Promoted</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
            <div className="mb-1 col-md-4">
              <label htmlFor="session" className="form-label">
                Session:
              </label>
              <select
                className="form-select"
                id="session"
                name="session"
                value={formData.session}
                onChange={handleChange}
              >
                <option value="">Select Session</option>
                <option value="2021-2022">2021-2022</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>
          </div>
          <div className="text-center mb-4 pt-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddData;
