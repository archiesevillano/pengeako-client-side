import React, { useState } from 'react';
import TextField from '../../components/TextField/textField';
import './manageAccount.css';

const ManageAccount = () => {
  const initialValues = {
    fullname: null,
    street1: null,
    street2: null,
    city: null,
    state: null,
    zip: null,
  };

  const {
    fullname,
    street1,
    street2,
    city,
    state,
    zip,
  } = initialValues;

  const [fullName, setFullName] = useState(fullname);
  const [editableName, setEditableName] = useState(false);
  const [editableAccount, setEditableAccount] = useState(false);

  const [inputStreet1, setStreet1] = useState(street1); 
  const [inputStreet2, setStreet2] = useState(street2);
  const [inputCity, setCity] = useState(city); 
  const [inputState, setState] = useState(state); 
  const [inputZip, setZip] = useState(zip); 

  return (
    <div className="manage-account">
        <h1>Manage Account Information</h1>
      <div className="data-row">
        
        <div className="info-container">
          <form className={`user-name-section ${editableName ? 'editable' : 'read-only'}`}>
            <h2 className="form-heading"></h2>
            <div className="form-contents">
              <div className="field-group">
                <div className="input-row">
                  <label className="input-label" htmlFor="fullname">Fullname:</label>
                  <TextField width="250px" id="fullname" action={setFullName} />
                </div>
                <div className="input-row">
                  <label className="input-label" htmlFor="street1">Street 1:</label>
                  <TextField width="250px" id="street1" action={setStreet1} />
                </div>
                <div className="input-row">
                  <label className="input-label" htmlFor="street2">Barangay:</label>
                  <TextField width="250px" id="street2" action={setStreet2} />
                </div>
                <div className="input-row">
                  <label className="input-label" htmlFor="city">City:</label>
                  <TextField width="250px" id="city" action={setCity} />
                </div>
                <div className="input-row">
                  <label className="input-label" htmlFor="state">State/Province:</label>
                  <TextField width="250px" id="state" action={setState} />
                </div>
                <div className="input-row">
                  <label className="input-label" htmlFor="zip">Zip:</label>
                  <TextField width="250px" id="zip" action={setZip} />
                </div>
              </div>
            </div>

            <div className="button-collection">
              <button
                type="button"
                className="primary-btn"
                onClick={() => setEditableName(!editableName)}
              >
                {editableName ? 'Save Changes' : 'Change name'}
              </button>
              {editableName && (
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setEditableName(false)}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
