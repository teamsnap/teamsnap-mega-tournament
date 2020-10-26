import React, { useState } from "react";

interface Props {
  label: string;
  onChange: (e: any) => void;
  value: string;
}

const FormInput = (props: Props) => {
  const { label, onChange, value } = props;

  return (
    <div className="form-input">
      <div style={{ marginBottom: "5px", width: "115px" }}>
        <label style={{ fontWeight: "bold", fontSize: "13px" }}>{label}</label>
      </div>
      <input
        type="text"
        style={{ height: "25px" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
