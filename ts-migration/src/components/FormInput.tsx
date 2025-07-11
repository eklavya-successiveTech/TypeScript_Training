"use client";
import { useState, ChangeEvent, FormEvent } from "react";

const FormInput = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [coupons, setCoupons] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      gender,
      coupons,
    };

    console.log("Form Data:", formData);
  };

  const resetData = () => {
    setFirstName("");
    setLastName("");
    setGender("");
    setCoupons([]);
  };
  const handleCouponChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setCoupons((prev) => [...prev, value]);
    } else {
      setCoupons((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        padding: "20px",
        maxWidth: "400px",
        margin: "40px auto",
        borderRadius: "8px",
      }}
    >
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Gender:</label><br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label>Female</label>
        </div>

        <div>
          <label>Coupons:</label><br />
          <input
            type="checkbox"
            value="FoodCoupon"
            checked={coupons.includes("FoodCoupon")}
            onChange={handleCouponChange}
          />
          <label>Food Coupon</label>
          <input
            type="checkbox"
            value="DinnerCoupon"
            checked={coupons.includes("DinnerCoupon")}
            onChange={handleCouponChange}
          />
          <label>Dinner Coupon</label>
        </div>

        <hr />
        <button type="reset" onClick={resetData} style={{ marginRight: "10px" }}>
          Reset Form
        </button>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default FormInput;
