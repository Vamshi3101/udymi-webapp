import React from "react";
function CompanyTypes(){
    return (
        <div className="container">
            <h2 className="mt-3">Registration Criteria for OPC companies</h2>
            <ul>
                <li>There must be only one shareholders and only one directors.</li>
                <li>An OPC must have only one directors and must be an Indian citizen.</li>
                <li>There is no minimum capital requirement.</li>
                <li>There is no continued existence allowed in One Person Company Registration.</li>
            </ul>
            <h2 className="mt-3">Registration Criteria for PVT LTD Company</h2>
            <ul>
                <li>The number of members must be between 2-200.</li>
                <li>There must be at least two directors and two shareholders.</li>
                <li>Each director must have a Directors Identification Number (DIN)</li>
                <li>PAN card copy of directors/shareholders and Passport copy for NRI subscribers.</li>
            </ul>
            <h2 className="mt-3">Registration Criteria for LLP companies</h2>
            <ul>
                <li>Minimum two partners are required to incorporate an LLP.</li>
                <li>There is no upper limit on the maximum number of partners of an LLP.</li>
                <li>Among the partners, there should be a minimum of two designated partners who must be natural persons, and at least one of them should be resident in India.</li>
                <li>There is no minimum capital requirement in LLP.</li>
            </ul>
            <h2 className="mt-3">Registration Criteria for NGO-Section 8 companies</h2>
            <ul>
                <li>Minimum two shareholders.</li>
                <li>Minimum two Directors (Directors and shareholders can be same person).</li>
                <li>At least one Director shall be resident in India.</li>
                <li>No Minimum capital required.</li>
            </ul>
        </div>
    )
}
export default CompanyTypes;