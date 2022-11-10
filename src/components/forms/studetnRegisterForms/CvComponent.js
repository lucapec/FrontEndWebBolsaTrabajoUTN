import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const CvComponent = () =>
{
    const {jwt} = useContext(UserContext);

    const inputHandler = (e) => {
        fetch("https://localhost:7172/api/UsersInfo/UploadCV", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify(e.target.files[0]),
        })
          .then((res) => res.json())
          .catch((err) => {
            console.log(err.message);
          });
    }    

    return (
        <div className="col mt-4">
            <label>Archivo CV</label>
            <div>
            <input
                type="file"
                name="fileCv"
                id="fileCv"
                className="form-control here"
                onChange={inputHandler}
            />
            </div>
        </div>
    );
};

export default CvComponent;