import React from "react";
import "../companyFormations.css"
import companyImg from "./Images/Company.jpeg"
import opcLogo from "./Images/One-Person-Company.jpg";
import pvtLtdImg from "./Images/PRIVATE-LIMITED-COMPANY.jpg";
import ngoImg from "./Images/ngo.jpg";
import llpImg from "./Images/LLP.png";
import { NavLink } from "react-router-dom";
function CompanyFormation(){
    return (
        <div>
            <div className="company-formation bg-primary-subtle">
                <div className="box-container">
                    <h1>Registration as Company Formation</h1>
                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={companyImg} className="d-block mx-lg-auto img-fluid" alt="company" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-7 fw-bold text-body-emphasis lh-1 mb-3">OPC vs PVT LTD vs LLP vs NGO</h2>
                            <p className="lead">One Person Company (OPC), Private Limited Company (PVT LTD), Limited Liability Parternship (LLP) and Non Governmental Organization (NGO) are the most preferable entities in India. Many people gets confused between OPC or PVT LTD vs LLP vs NGO which is better is the major aspect of peoples. To get more details click below button.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <NavLink to = "/companyTypes"><button>Know more</button></NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={opcLogo} className="d-block mx-lg-auto img-fluid" alt="Opc" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-7 fw-bold text-body-emphasis lh-1 mb-3">One Person Company (OPC) Registration</h2>
                            <p className="lead">As the name suggests, an OPC is a company established by a single person. A single individual establishes and manages the company. An OPC has all the features of a company, such as perpetual succession, limited liability and a separate legal entity.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <NavLink to = "/OpcRegistration"><button>Click here</button></NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={pvtLtdImg} className="d-block mx-lg-auto img-fluid border border-4 border-dark" alt="Private Limited" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-7 fw-bold text-body-emphasis lh-1 mb-3">Private Limited Company (PVT LTD) Registration</h2>
                            <p className="lead">A private limited company is a company privately held for small businesses. This type of business entity limits owner liability to their shareholdings, the number of shareholders to 200, and restricts shareholders from publicly trading shares.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <NavLink to = "/PvtLtdRegistration"><button>Click here</button></NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={llpImg} className="d-block mx-lg-auto img-fluid" alt="LLP" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-7 fw-bold text-body-emphasis lh-1 mb-3">Limited Liability Parternship (LLP) Registration</h2>
                            <p className="lead">Limited liability partnership (LLP) is a type of general partnership where every partner has a limited personal liability for the debts of the partnership. Partners will not be liable for the tortious damages of other partners but potentially for the contractual debts depending on the state.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <NavLink to = "/LlpRegistration"><button>Click here</button></NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={ngoImg} className="d-block mx-lg-auto img-fluid" alt="NGO" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-7 fw-bold text-body-emphasis lh-1 mb-3">Non Governmental Organization (NGO) Registration</h2>
                            <p className="lead">NGO (Non-Government Organisation) is an organization that works for non-profit/ charitable purposes. An NGO established as Section 8 company under the Companies Act, 2013 ('Act') is governed by the Ministry of Corporate Affairs ('MCA') whereas the NGO registered as a trust or society is governed by the registrar of state under the State Government. </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <NavLink to = "/Section8Registration"><button>Click here</button></NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompanyFormation;