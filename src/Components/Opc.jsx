import React from "react";
import Fileupload from "./Fileupload";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced,faHandHoldingDollar,faCircleExclamation,faLink,faUserGear,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import "../opcRegistration.css";
function Opc(){
    return (
        <div className="opc-registration bg-primary-subtle">
            <div className="box-container">
                <h1>One Person Company Registration</h1>
                <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom border-dark">How to register a OPC?</h2>
                <p>Today, company registration process  and other regulatory filings are paperless; documents are filed electronically through the MCA website and is processed at the Central Registration Centre (CRC).</p>
                <p>Company Registration process  is completely online. Upon completing all registration formalities, the Registrar of Companies issues a digitally signed Certificate of Incorporation (COI). Electronic certificates issued by the ministry can be verified by all stakeholders on the MCA website itself.</p>
                <p>Incorporating a company  is a systematic process of collection and submission of details required as per the requirements of Companies Act 2013 and as per the process defined by the Ministry of Corporate Affairs from time to time. Management of the process requires in-depth knowledge of legal requirements and not to mention, practical experience of the same.</p>
                </div>
                <div className="container px-4 py-5" id="icon-grid">
                    <h2 className="pb-2 border-bottom border-dark">Benefits of OPC registration</h2>

                    <div className="row row-cols-1 row-cols-sm-2 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faScaleBalanced}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Legal Status</h3>
                        <p>The OPC receives a separate legal entity status from the member. The separate legal entity of the OPC gives protection to the single individual who has incorporated it. The liability of the member is limited to his/her shares, and he/she is not personally liable for the loss of the company.  Thus, the creditors can sue the OPC and not the member or director.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faHandHoldingDollar}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Easy to obtain funds</h3>
                        <p>Since OPC is a private company, it is easy to go for fundraising through venture capitals, angel investors, incubators etc. The Banks and the Financial Institutions prefer to grant loans to a company rather than a proprietorship firm. Thus, it becomes easy to obtain funds.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faCircleExclamation}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Less compliance's</h3>
                        <p>The Companies Act, 2013 provides certain exemptions to the OPC with relation to compliance's. The OPC need not prepare the cash flow statement. The company secretary need not sign the books of accounts and annual returns and be signed only by the director.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faLink}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Easy incorporation</h3>
                        <p>It is easy to incorporate OPC as only one member and one nominee is required for its incorporation. The member can be the director also. The minimum authorised capital for incorporating OPC is Rs.1 lakh but there is no minimum paid-up capital requirement. Thus, it is easy to incorporate as compared to the other forms of company.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faUserGear}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Easy to manage</h3>
                        <p>Since a single person can establish and run the OPC, it becomes easy to manage its affairs. It is easy to make decisions, and the decision-making process is quick. The ordinary and special resolutions can be passed by the member easily by entering them into the minute book and signed by the sole member. Thus, running and managing the company is easy as there won't be any conflict or delay within the company.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faCircleArrowRight}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Perpetual succession</h3>
                        <p>The OPC has the feature of perpetual succession even when there is only one member. While incorporating the OPC, the single-member needs to appoint a nominee. Upon the member's death, the nominee will run the company in the member's place.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row text-center bg-body-tertiary border border-5 border-dark">
                    <div className="col">
                    <h2 className="text-danger">Register</h2>
                    <p className="fw-bold">Pan Card</p>
                    <Fileupload/>
                    <p className="fw-bold">Photograph</p>
                    <Fileupload/>
                    <p className="fw-bold">Identity Proof</p>
                    <Fileupload/>
                    <p className="fw-bold">Director's Address Proof</p>
                    <Fileupload/>
                    <p className="fw-bold">Business Address Proof</p>
                    <Fileupload/>
                    <button className="btn btn-success mt-3 mb-2">Pay and Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Opc;