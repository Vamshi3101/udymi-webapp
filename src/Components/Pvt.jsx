import React from "react";
import Fileupload from "./Fileupload";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt,faMagnet,faMoneyBill,faUmbrella,faRocket,faChartLine } from '@fortawesome/free-solid-svg-icons'
import "../PvtLtdRegistration.css";
function Pvt(){
    return (
        <div className="pvt-ltd-registration bg-primary-subtle">
            <div className="box-container">
                <h1>Private Limited Company Registraion</h1>
                <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom border-dark">How to register a Private Limited Company?</h2>
                <p>Today, the entire private limited company registration process and other regulatory filings are paperless; documents are filed electronically through the MCA website and is processed at the Central Registration Centre (CRC).</p>
                <p>Private Limited Company Registration process is completely online. Upon completing all registration formalities, the Registrar of Companies' issues a digitally signed Certificate of Incorporation (COI). Electronic certificates issued by the ministry can be verified by all stakeholders on the MCA website itself.</p>
                <p>Incorporating a private limited company is a systematic process of collection and submission of details required as per the requirements of the Companies Act 2013 and as per the process defined by the Ministry of Corporate Affairs from time to time. Management of the process requires in-depth knowledge of legal requirements and not to mention, practical experience of the same.</p>
                </div>
                <div className="container px-4 py-5" id="icon-grid">
                    <h2 className="pb-2 border-bottom border-dark">Benefits of Private Limited Company registration</h2>

                    <div className="row row-cols-1 row-cols-sm-2 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faShieldAlt}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Shield from personal liability and protects from other risks and losses.</h3>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faMagnet}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Attract more customers.</h3>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faMoneyBill}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Procure bank credits and good investment from reliable investors with ease.</h3>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faUmbrella}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Offers liability protection to protect your company's assets.</h3>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faChartLine}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Greater capital contribution and greater stability.</h3>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faRocket}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Increases the potential to grow big and expand.</h3>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row text-center bg-body-tertiary border border-5 border-dark">
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