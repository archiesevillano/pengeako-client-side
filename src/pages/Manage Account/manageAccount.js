import TextField from "../../components/TextField/textField";
import { useState, useEffect, useRef } from "react";
import "./manageAccount.css";
const ManageAccount = () => {

    const initialValues = {
        firstname: null,
        middleName: null,
        lastname: null,
    }

    const { firstname, middlename, lastname } = initialValues;

    // fullname
    const [fname, setFname] = useState(firstname);
    const [mname, setMname] = useState(middlename);
    const [lname, setLname] = useState(lastname);
    const [editableName, canEditName] = useState(false);


    // Account
    const { emailInput, setEmailInput } = useState("");
    const { passwordInput, setPasswordInput } = useState("");
    const [editableAccount, canEditAccount] = useState(false);

    // forms
    const fullnameRef = useRef(null);
    const [hasActive, setActive] = useState(false);
    const [activeForm, setActiveForm] = useState("");


    useEffect(() => {
        console.log(fname, mname, lname);
    }, [fname, mname, lname])

    return (
        <div className="manage-account">
            <div className="data-row">
                <h1>Manage Account Information</h1>
                <div className="info-container">
                    <form className={`user-name-section ${activeForm === "name" ? editableName ? "editable" : "read-only" : "read-only"}`}>
                        <h2 className="form-heading">Fullname</h2>
                        <div className="form-contents">
                            <div className="field-group">
                                <div className="input-row">
                                    <label className="input-label" htmlFor="firstname">Firstname:</label>
                                    <TextField width={"250px"} id={"firstname"} action={setFname} />
                                </div>
                                <div className="input-row">
                                    <label className="input-label" htmlFor="middlename">Middlename:</label>
                                    <TextField width={"250px"} id={"middlename"} placeHolder={"Optional"} action={setMname} />
                                </div>
                                <div className="input-row">
                                    <label className="input-label" htmlFor="lastname">Lastname:</label>
                                    <TextField width={"250px"} id={"lastname"} action={setLname} />
                                </div>
                            </div>
                            <div className="reminder">
                                <span className="material-symbols-outlined">
                                    clinical_notes
                                </span>
                                <p>Please keep in mind that you can only alter your account's name once every 60 days. Once you have modified your name, you will be unable to revert or modify it again for the next 60 days.</p>
                            </div>
                        </div>

                        <div className="button-collection">
                            <div className="set1" style={{ display: editableName ? "none" : "block" }}>
                                <button type="button" className="primary-btn" onClick={() => {
                                    if (hasActive) {
                                        alert("Save your changes first");
                                    }
                                    else {
                                        setActiveForm("name");
                                        setActive(true);
                                        canEditName(true);
                                    }
                                }}>Change name</button>
                            </div>
                            <div className="set2" style={{ display: editableName ? "flex" : "none" }}>
                                <button type="button" className="primary-btn" onClick={() => {
                                    setActive(false);
                                    canEditName(false);
                                }}>Save Changes</button>
                                <button type="button" className="secondary-btn" onClick={() => {
                                    setActive(false);
                                    canEditName(false);
                                }}>Cancel</button>
                            </div>
                        </div>
                    </form>
                    <form className={`account-section ${activeForm === "account" ? editableAccount ? "editable" : "read-only" : "read-only"}`}>
                        <h2 className="form-heading">Account Log In</h2>
                        <div className="form-contents">
                            <div className="field-group">
                                <div className="input-row">
                                    <label className="input-label" htmlFor="email">Email:</label>
                                    <TextField width={"250px"} id={"email"} action={setEmailInput} />
                                </div>
                                <div className="input-row">
                                    <label className="input-label" htmlFor="password">Password:</label>
                                    <TextField width={"250px"} id={"password"} action={setPasswordInput} type="password" />
                                </div>
                            </div>
                            <div className="reminder">
                                <span className="material-symbols-outlined">
                                    clinical_notes
                                </span>
                                <p>Please keep in mind that you can only alter your account's password once every 60 days. Once you have modified your name, you will be unable to revert or modify it again for the next 60 days.</p>
                            </div>
                        </div>

                        <div className="button-collection">
                            <div className="set1" style={{ display: editableAccount ? "none" : "block" }}>
                                <button type="button" className="primary-btn" onClick={() => {
                                    if (hasActive) {
                                        alert("Save your changes first");
                                    }
                                    else {
                                        setActiveForm("account");
                                        setActive(true);
                                        canEditAccount(true);
                                    }
                                }}>Change Details</button>
                            </div>
                            <div className="set2" style={{ display: editableAccount ? "flex" : "none" }}>
                                <button type="button" className="primary-btn" onClick={() => {
                                    setActive(false);
                                    canEditAccount(false);
                                }}>Save Changes</button>
                                <button type="button" className="secondary-btn" onClick={() => {
                                    setActive(false);
                                    canEditAccount(false);
                                }}>Cancel</button>
                            </div>
                        </div>
                    </form>
                    <form className={`account-section ${activeForm === "account" ? editableAccount ? "editable" : "read-only" : "read-only"}`}>
                        <h2 className="form-heading">Address</h2>
                        <div className="form-contents">
                            <div className="field-group">
                                <div className="input-row">
                                    <label className="input-label" htmlFor="street1">Street 1:</label>
                                    <TextField width={"250px"} id={"street1"} action={setEmailInput} />
                                </div>
                                <div className="input-row">
                                    <label className="input-label" htmlFor="street2">Barangay:</label>
                                    <TextField width={"250px"} id={"street2"} action={setPasswordInput} />
                                </div>
                                <div className="input-row">
                                    <label className="input-label" htmlFor="street1">State/Province:</label>
                                    <TextField width={"250px"} id={"street1"} action={setEmailInput} />
                                </div>
                            </div>
                            <div className="field-group">
                                <div className="input-row">
                                    <label className="input-label" htmlFor="street1">Street 2:</label>
                                    <TextField width={"250px"} id={"street1"} action={setEmailInput} />
                                </div>
                                <div className="input-row">
                                    <label className="input-label" htmlFor="street2">City</label>
                                    <TextField width={"250px"} id={"street2"} action={setPasswordInput} />
                                </div>
                                <div className="input-row">
                                    <label className="input-label" htmlFor="street1">Zip:</label>
                                    <TextField width={"250px"} id={"street1"} action={setEmailInput} />
                                </div>
                            </div>
                        </div>

                        <div className="button-collection">
                            <div className="set1" style={{ display: editableAccount ? "none" : "block" }}>
                                <button type="button" className="primary-btn" onClick={() => {
                                    if (hasActive) {
                                        alert("Save your changes first");
                                    }
                                    else {
                                        setActiveForm("account");
                                        setActive(true);
                                        canEditAccount(true);
                                    }
                                }}>Update Address</button>
                            </div>
                            <div className="set2" style={{ display: editableAccount ? "flex" : "none" }}>
                                <button type="button" className="primary-btn" onClick={() => {
                                    setActive(false);
                                    canEditAccount(false);
                                }}>Save Changes</button>
                                <button type="button" className="secondary-btn" onClick={() => {
                                    setActive(false);
                                    canEditAccount(false);
                                }}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ManageAccount;