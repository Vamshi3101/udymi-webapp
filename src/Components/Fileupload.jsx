import React, { useState } from "react";
function Fileupload(){
    const [file,setFile] = useState();
    function handleFile(event){
        setFile(event.target.files[0]);
    }
    return (
        <form>
            <input type="file" className="border border-secondary-subtle pt-2 pb-2 px-1" name="file" onChange={handleFile} />
            <br/>
            <button className="btn btn-secondary mt-1 mb-3">Upload</button>
        </form>
    )
}
export default Fileupload;