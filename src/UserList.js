import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function UserList() {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleClickBack = () => {
    setCounter(counter - 1);
  };
  const alert = () => {
    if (counter >= data.length) {
      return true, (<h6 style={{ color: "red" }}>list ended !!</h6>);
    }
  };
  const alertB = () => {
    if (counter < 0) {
      return true, (<h6 style={{ color: "red" }}>list ended !!</h6>);
    }
  };

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data.map((e) => e.username));
    });
  }, []);

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <div>
        <h4>
          Username : <h5 style={{ color: "gray" }}>{data[counter]}</h5>
        </h4>
        <button
          disabled={alertB()}
          className="btn1"
          onClick={handleClickBack}
          className="btn btn-primary m-2 "
          style={{ height: "50px", width: "90px" }}
        >
          Previous
        </button>
        <button
          disabled={alert()}
          className="btn2"
          onClick={handleClick}
          className="btn btn-primary m-2 "
          style={{ height: "50px", width: "90px" }}
        >
          Next!
        </button>
        {alert()}
        {alertB()}
      </div>
    </div>
  );
}

export default UserList;
