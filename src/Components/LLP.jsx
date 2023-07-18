import React from "react";
import Fileupload from "./Fileupload";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faBan,faUsers,faClipboard,faCalculator,faFileInvoiceDollar,faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import "../llpRegistration.css";
function Llp(){
    return (
        <div className="llp-registration bg-primary-subtle">
            <div className="box-container">
                <h1>Limited Liability Parternship Registration</h1>
                <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom border-dark">How to register a LLP?</h2>
                <p>A Limited Liability Partnership (LLP) is a form of business that offers the combined features of 'Partnership' and 'Limited Company' business structures. This business form was introduced in India in April 2009 with the enactment of the Limited Liability Partnership Act, 2008. In an LLP, a partner is not responsible or liable for another partner's misconduct or negligence. Instead, all partners have limited liability, limited to their own acts of commission or omission, similar to shareholders' liabilities in a limited company. However, unlike the shareholders in a company, LLP partners have the right to manage the business directly. An LLP also limits the personal liability of a partner for the errors, omissions, incompetence, or negligence of the LLP's employees or other agents. The management of the day-to-day business is outlined in the LLP Agreement, providing partners with the freedom to regulate the affairs of the business. LLP registration is administered by the Ministry of Corporate Affairs (MCA) through the Office of the Registrar of Companies. The incorporation process is fully electronic, similar to the company registration process, i.e. applications and documents are filed electronically and the Registrar issues a digitally signed Certificate of Incorporation (COI).</p>
                </div>
                <div className="container px-4 py-5" id="icon-grid">
                    <h2 className="pb-2 border-bottom border-dark">Benefits of LLP registration</h2>

                    <div className="row row-cols-1 row-cols-sm-2 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faCheckCircle}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Convenient</h3>
                        <p>It is easy to start and manage a business like entrepreneurs. LLP agreements are customized in according to meet the needs of partners concerned. There is fewer formalities in areas of legal compilation, annual meeting, resolution as compared to any other Private Limited Company. For a detailed comparison between LLP and Private Limited read Choosing between LLP and Private Limited.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faBan}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">No minimum capital requirement</h3>
                        <p>LLP can be started with the minimum amount of capital money. Capital may be in the form of tangible, movable asset like Land, machinery or intangible form.  Capital requirement in the case of a Private company( Requirements for Registration of a Private Company)  and Public Company(Requirements for registration of a Public Company) is Rs. 1, 00,000 and Rs. 5,00,000 respectively whereas no such mandatory capital requirement specified under the LLP.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faUsers}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">No limit on owners of business</h3>
                        <p>LLP may have partners varying from 2 to many. There is no limit for partners in LLP. An LLP requires a minimum 2 partners while there is no limit on the maximum number of partners in contrast to a private company wherein there is a restriction of not having more than 200 members.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faClipboard}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">No requirement of compulsory Audit</h3>
                        <p>LLPs are not required to audit the accounts. Any other company (Public, Private) are mandated to get their accounts audited by the auditing firm. LLP is required to audit their account in the following situation either when the contributions of the LLP exceeds Rs. 25 Lakhs, or when annual turnover of the LLP exceeds Rs. 40 Lakhs.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faCalculator}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Savings from lower compliance burden</h3>
                        <p>LLP have to face less compliance burden as they have to submit only two statements i.e. the Annual Return & Statement of Accounts and Solvency. Whereas in the case of private company, at Least 8 to 10 regulatory formalities and compliances are required to be duly completed. Read Annual Cost Comparison of Private Limited and LLP.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faFileInvoiceDollar}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Taxation Aspect on LLP</h3>
                        <p>LLP is not liable to pay the tax on the income and share of its partner. Thus, no dividend distribution tax is payable as under section 40(b).  Bonus, commission or remuneration, Interest to partners, any payment of salary, allowed as deduction.  Provision of 'deemed dividend' under income tax law, is not applicable to LLP.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <FontAwesomeIcon className = "bi text-body-secondary flex-shrink-0 me-3" icon={faExclamationCircle}/>
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">DDT not applicable</h3>
                        <p>If the partners of LLP withdraw profits from the company, an additional tax liability in the form of DDT is not payable by partners. Whereas, in the case of a company, the owners have to pay DDT @ 15% ( surcharge & educational cess). Hence, profit of LLP is in the hands of its partners can be easily withdrawn by the partners.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row text-center bg-body-tertiary border border-5 border-dark">
                    <div className="col">
                    <h2 className="text-danger">Register</h2>
                    <p className="fw-bold">ID Proof</p>
                    <Fileupload/>
                    <p className="fw-bold">Address Proof</p>
                    <Fileupload/>
                    <p className="fw-bold">Residence Proof</p>
                    <Fileupload/>
                    <p className="fw-bold">Photograph</p>
                    <Fileupload/>
                    <button className="btn btn-success mt-3 mb-2">Pay and Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Llp;