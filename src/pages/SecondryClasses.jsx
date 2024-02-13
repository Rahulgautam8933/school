import React, { useEffect, useState } from "react";
import { Table, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SecondryClasses = () => {
  const navigator = useNavigate();
  const [getData, setGedata] = useState([]);

  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getdata = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/getdata1`);
      setGedata(res?.data?.data);
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleEdit = (id) => {
    // Handle edit logic with the ID

    navigator(`/secondryClsses/updateData/${id}`);

    console.log("Edit button clicked for ID:", id);
  };
  const handleUser = (id) => {
    // Handle edit logic with the ID

    navigator(`/secondryClsses/userData/${id}`);

    console.log("Edit button clicked for ID:", id);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5001/deleteuser1/${deleteId}`
      );
      console.log("Deleting item with ID:", res);
      setShowDeleteModal(false);
      getdata();
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  const dataSource = getData;

  const columns = [
    {
      title: "Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "fatherName",
      dataIndex: "fatherName",
      key: "fatherName",
    },
    {
      title: "Mother`s Name",
      dataIndex: "motherName",
      key: "motherName",
    },
    {
      title: "rollNumber",
      dataIndex: "rollNumber",
      key: "rollNumber",
    },
    {
      title: "dob",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div className="d-flex g-2">
          <button
            className="btn btn-primary mx-1"
            onClick={() => handleUser(record._id)}
          >
            User
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={() => handleEdit(record._id)}
          >
            Edit
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container my-4">
        <div className="row my-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>
          <div className="col text-end">
            <Link to="/secondryClsses/addData" className="btn btn-primary">
              + Add
            </Link>
          </div>
          <div className="col text-end">
            <button className="btn btn-primary">Reset</button>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>

      <Modal
        title="Confirm Delete"
        visible={showDeleteModal}
        onOk={handleDeleteConfirm}
        onCancel={() => setShowDeleteModal(false)}
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    </>
  );
};

export default SecondryClasses;
