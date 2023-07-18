import React from "react";
import Fileupload from "./Fileupload";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel,faStamp,faDollarSign,faSignature,faFile,faFileInvoiceDollar,faHandHoldingHeart,faUser,faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import "../section8Registration.css";
function Ngo(){
    return (
        <div className="section8-registration bg-primary-subtle">
            <div className="box-container">
                <h1>NGO-Section 8 Company Registration</h1>
                <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom border-dark">How to register a Section 8 Company?</h2>
                <p>Today, the entire Section 8 company registration process and other regulatory filings are paperless; documents are filed electronically through the MCA website and is processed at the Central Registration Centre (CRC).</p>
                <p>Section 8 Company Registration process is completely online. Upon completing all registration formalities, the Registrar of Companies issues a digitally signed Certificate of Incorporation (COI). Electronic certificates issued by the ministry can be verified by all stakeholders on the MCA website itself.</p>
                <p>Incorporating a Section 8 Company is a systematic process of collection and submission of details required as per the requirements of the Companies Act 2013 and as per the process defined by the Ministry of Corporate Affairs from time to time. Management of the process requires in-depth knowledge of legal requirements and not to mention, practical experience of the same.</p>
                </div>
                <div className="container px-4 py-5" id="icon-grid">
                    <h2 className="pb-2 border-bottom border-dark">Benefits of Section 8 registration</h2>

                    <div className="row row-cols-1 row-cols-sm-2 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faGavel}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Distinct Legal Identity</h3>
                        <p>Section 8 Company is a separate legal entity and is different from it's members. The Company has perpetual existence. Along with having organized operations and greater flexibility.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faStamp}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Zero Stamp Duty</h3>
                        <p>A Section 8 Company is exempt from the requirement of paying stamp duty on the MoA and AoA of the private or public limited company, which is applicable for registration of other kinds of company structures.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faDollarSign}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">No Minimum Capital Requirement</h3>
                        <p>No minimum capital limit has been mentioned for a Section 8 Company in India. And the capital structure can be altered at any stage as per the growth requirements of the company. This implies that it can be formed without any share capital. The funds necessary for carrying the business operations can be brought, later, in the form of donations and/or subscriptions from members and the general public.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faSignature}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Name</h3>
                        <p>Section 8 Company is not required to suffix “Public Limited or Private Limited”, next to it's legal name. It can be registered with names such as “Association, Society, Council, Club, Charities, Foundation, Academy, Institute, Organisation, and Federation”.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faFile}/>
                        <div>
                        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">CARO</h3>
                        <p>Requirements of Companies Auditor's Report Order or CARO do not apply to this type of company.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faFileInvoiceDollar}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Tax Benefits</h3>
                        <p>For Section 8 Companies in India, many tax benefits are granted.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faHandHoldingHeart}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Exemption to the donors</h3>
                        <p>Those donating to a Section 8 Company are eligible for tax exemptions u/s 12A and 80G of the Income Tax Act.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faUser}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Membership</h3>
                        <p>A registered partnership firm can become a member in it's individual capacity and obtain Directorship.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faShieldAlt}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Credibility</h3>
                        <p>Section 8 Companies are more reliable than all other forms of charitable organizations. They are governed by the Companies Act and are regulated strictly. Such as the requirement of a mandatory annual audit, and both the “MOA and AOA” cannot be altered at any stage or situation. The rules on managing the profits and losses of the company make these companies trustworthy.</p>
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
                    <p className="fw-bold">Notarized Rental Agreement</p>
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
export default Ngo;