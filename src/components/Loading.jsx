import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const Loading = ({loading}) => {
  return (
    <div className="messageLoaderWrapper mt-5">
      <PuffLoader size={250} color={"#000000"} loading={loading}/>
    </div>
  );
};

export default Loading;