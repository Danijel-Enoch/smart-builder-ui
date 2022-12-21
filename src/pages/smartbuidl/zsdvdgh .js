import { useState } from "react";
import Select from "react-select";
import { useNavigate, Link } from "react-router-dom";
import {
  ReferralText,
  SignUpBtn,
  SignUpContainer,
  SignUpDropdown,
  SignUpForm,
  SignUpHeaderText,
  SignUpInputContainer,
} from "../styled/SignUp";
import { Line, ToastifyProps } from "../styled/UniversalStyles";
import "react-dropdown/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { countryNames } from "../utils/countryName";

const SignUp = () => {
  // ******** //
  // SignUp```//
  //********* //
  //  Title for the page
  document.title = "JoinMonie | Sign Up";

  // Hooks

  const [values, setValues] = useState({});
  let navigate = useNavigate();

  // Toast Props For Success And Error Notification

  // Data Retrieval and Validation

  const optionName = {
    country: "country",
    currency: "currency",
  };

  const currencyCodeList = [
    {
      name: "Pound",
      currency_code: "EUR",
    },
    {
      name: "Naira",
      currency_code: "NGN",
    },
    {
      name: "Dollar",
      currency_code: "USD",
    },
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (selectedOption) => {
    setValues({
      ...values,
      [optionName.country]: selectedOption.name,
    });
  };

  const handleCurrencySelect = (selectedOption) => {
    setValues({
      ...values,
      [optionName.currency]: selectedOption.currency_code,
    });
  };

  const handleValidation = () => {
    let { fullName, email, country, currency, DOB } = values;

    if (!fullName || !email || !country || !currency || !DOB) {
      toast.error(`Please Fill All Fields.`, ToastifyProps);
      return false;
    }
    DOB = DOB.slice(0, 4);
    let yearNum = Number(DOB);
    let presentYear = new Date().getFullYear();
    let validBirthYear = presentYear - yearNum;
    if (fullName.length < 6) {
      toast.error("Name is too short", ToastifyProps);
      return false;
    }
    if (!email.includes("@") || !email.includes(".") || email.length < 8) {
      toast.error("Email is invalid.", ToastifyProps);
      return false;
    }
    if (validBirthYear < 18) {
      toast.error("You're not eligible to register.", ToastifyProps);
      return false;
    } else {
      localStorage.setItem("JoinMonie", JSON.stringify(values));
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      navigate("/set-password");
    }
  };

  return (
    <>
      <SignUpContainer>
        <SignUpHeaderText>Get Started</SignUpHeaderText>
        <div style={{ display: "flex" }}>
          <Line style={{ width: "48%" }} />
          <Line style={{ marginLeft: "auto", background: "#eee" }} />
        </div>
        <SignUpForm onSubmit={(e) => handleSubmit(e)}>
          <p>Personal Details</p>
          <SignUpInputContainer>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              autoComplete={"on"}
              name="fullName"
            />
          </SignUpInputContainer>
          <SignUpInputContainer>
            <label htmlFor="email">Email Address</label>
            <input type="text" onChange={(e) => handleChange(e)} name="email" />
          </SignUpInputContainer>
          <SignUpDropdown>
            <div className="">
              <p>Country</p>
              <p>Preferred Currency</p>
            </div>
            <div>
              <Select
                defaultValue={"Nigeria"}
                onChange={(option) => handleCountrySelect(option)}
                placeholder={"Country"}
                options={countryNames}
                className={"dropdown-signup"}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.name}
              />
              <Select
                defaultValue={"NGN"}
                placeholder={"Currency"}
                onChange={(option) => handleCurrencySelect(option)}
                options={currencyCodeList}
                className={"dropdown-signup"}
                getOptionLabel={(option) => option.currency_code}
                getOptionValue={(option) => option.currency_code}
              />
            </div>
          </SignUpDropdown>
          <SignUpInputContainer>
            <label htmlFor="organization">Organization (Optional)</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="organisationName"
            />
          </SignUpInputContainer>
          <SignUpInputContainer>
            <label htmlFor="dob">
              Date of Birth (Must be above the age of 18)
            </label>
            <input
              type="date"
              placeholder="dd-mm-yy"
              onChange={(e) => handleChange(e)}
              name="DOB"
            />
          </SignUpInputContainer>
          <SignUpBtn type="submit">Next</SignUpBtn>
          <ReferralText>
            Already have an account? <Link to={"/login"}>Log In.</Link>
          </ReferralText>
        </SignUpForm>
        <ToastContainer />
      </SignUpContainer>
    </>
  );
};

export default SignUp;
