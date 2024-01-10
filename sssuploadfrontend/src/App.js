import { useState, useEffect } from "react";
import axios from "axios";

const Uploadimage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [sucessMessage, setSuccessMesagge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <form
        method="post"
        action="#"
        onSubmit={(e) => {
          e.preventDefault();

          // Create an object of formData
          let formData = new FormData();

          // Update the formData object

          formData.append("file", selectedFile);

          console.log(selectedFile);

          axios
            .post("http://localhost:3002/uploadfile", formData, { headers: { "Content-Type": "multipart/form-data" } })
            .then((res) => {
              console.log("HERE", res)
              if (res.status === 201) {
                setSuccessMesagge("File uploaded successfully");
              }
            })
            .catch((error) => {
              //console.error(error.response);
              setErrorMessage(error.response.statusText + " Please select the file");
            });
        }}
      >
        <input type="file" name="uploadfile" onChange={(e) => setSelectedFile(e.target.files[0])}></input>
        <p> {sucessMessage}</p>
        <p>{errorMessage}</p>
        <button> upload</button>
      </form>
    </div>
  );
};
export default Uploadimage;
