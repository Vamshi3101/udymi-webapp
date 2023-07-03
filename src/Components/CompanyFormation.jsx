import React from "react";
import "../companyFormations.css"
import { NavLink } from "react-router-dom";
function CompanyFormation(){
    return (
        <div>
            <div className="company-formation">
                <div className="box-container">
                    <h1>Registration as Company Formation</h1>
                    <h2>OPC vs PVT LTD vs LLP vs NGO</h2>
                    <p>One Person Company (OPC), Private Limited Company (PVT LTD), Limited Liability Parternship (LLP) and Non Governmental Organization (NGO) are the most preferable entities in India. Many people gets confused between OPC or PVT LTD vs LLP vs NGO which is better is the major aspect of peoples. To get more details click below button.</p>
                    <NavLink to = "/companyTypes"><button>Know more</button></NavLink>
                    <h2>One Person Company (OPC) Registration</h2>
                    <p>As the name suggests, an OPC is a company established by a single person. A single individual establishes and manages the company. An OPC has all the features of a company, such as perpetual succession, limited liability and a separate legal entity. </p>
                    <NavLink to = "/OpcRegistration"><button>Click here</button></NavLink>
                    <h2>Private Limited Company (PVT LTD) Registration</h2>
                    <p>A private limited company is a company privately held for small businesses. This type of business entity limits owner liability to their shareholdings, the number of shareholders to 200, and restricts shareholders from publicly trading shares. </p>
                    <NavLink to = "/PvtLtdRegistration"><button>Click here</button></NavLink>
                    <h2>Limited Liability Parternship (LLP) Registration</h2>
                    <p>Limited liability partnership (LLP) is a type of general partnership where every partner has a limited personal liability for the debts of the partnership. Partners will not be liable for the tortious damages of other partners but potentially for the contractual debts depending on the state. </p>
                    <NavLink to = "/LlpRegistration"><button>Click here</button></NavLink>
                    <h2>Non Governmental Organization (NGO) Registration</h2>
                    <p>NGO (Non-Government Organisation) is an organization that works for non-profit/ charitable purposes. An NGO established as Section 8 company under the Companies Act, 2013 (‘Act’) is governed by the Ministry of Corporate Affairs ('MCA') whereas the NGO registered as a trust or society is governed by the registrar of state under the State Government. </p>
                    <NavLink to = "/Section8Registration"><button>Click here</button></NavLink>

                </div>
            </div>
        </div>
    )
}
export default CompanyFormation;