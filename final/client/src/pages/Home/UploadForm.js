import React from "react";
import { useFileDrop } from "./components/hooks";

const UploadForm = ({ onUpload }) => {
  const { DropBox, HiddenInput, onClick, drag } = useFileDrop(onUpload);
  return (
    <div>
      <HiddenInput />
      <DropBox className={`upload-box ${drag ? "drag" : ""}`}>
        <div>Dop files to upload</div>
      </DropBox>
      <button onClick={onClick}>Upload file</button>
    </div>
  );
};

export default UploadForm;
