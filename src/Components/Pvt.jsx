import React from "react";
import Fileupload from "./Fileupload";
import "../PvtLtdRegistration.css";
function Pvt(){
    return (
        <div className="pvt-ltd-registration">
            <div className="box-container">
                <h1>Private Limited Company Registraion</h1>
                <h2>How to register a Private Limited Company?</h2>
                <p>Today, the entire private limited company registration process and other regulatory filings are paperless; documents are filed electronically through the MCA website and is processed at the Central Registration Centre (CRC).</p>
                <p>Private Limited Company Registration process is completely online. Upon completing all registration formalities, the Registrar of Companies' issues a digitally signed Certificate of Incorporation (COI). Electronic certificates issued by the ministry can be verified by all stakeholders on the MCA website itself.</p>
                <p>Incorporating a private limited company is a systematic process of collection and submission of details required as per the requirements of the Companies Act 2013 and as per the process defined by the Ministry of Corporate Affairs from time to time. Management of the process requires in-depth knowledge of legal requirements and not to mention, practical experience of the same.</p>
                <h2>Benefits of Private Limited Company registration</h2>
                <ol>
                    <li>Shield from personal liability and protects from other risks and losses.</li>
                    <li>Attract more customers.</li>
                    <li>Procure bank credits and good investment from reliable investors with ease.</li>
                    <li>Offers liability protection to protect your company's assets.</li>
                    <li>Greater capital contribution and greater stability.</li>
                    <li>Increases the potential to grow big and expand.</li>
                </ol>
                <div className="row text-center bg-secondary-subtle">
                    <div className="col">
                    <h2 className="text-danger">Register</h2>
                    <p className="fw-bold">Pan Card</p>
                    <Fileupload/>
                    <p className="fw-bold">Identity Proof</p>
                    <Fileupload/>
                    <p className="fw-bold">Latest Bank Statement</p>
                    <Fileupload/>
                    <p className="fw-bold">Photograph</p>
                    <Fileupload/>
                    <p className="fw-bold">No-Objection Certificate</p>
                    <Fileupload/>
                    <p className="fw-bold">Sales/Property Deed</p>
                    <Fileupload/>
                    <button className="btn btn-success mt-3 mb-2">Pay and Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pvt;