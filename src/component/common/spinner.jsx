import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="sweet-loading" style={{ textAlign: "center" }}>
      <ClipLoader size={15} color={"green"} loading={loading} />
    </div>
  );
};

export default Spinner;
