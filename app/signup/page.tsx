"use client";
// import { signUpUser } from "@/lib/supabase/auth";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    business_name: "",
    address: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const response = await signUpUser(formData);
    // if (response.error) {
    //   console.error(response.error);
    // } else {
    //   console.log("User signed up successfully", response.data);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[60%] mx-auto mt-20 border">
      <p>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border"
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border"
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="border"
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Business Name"
          value={formData.business_name}
          onChange={(e) =>
            setFormData({ ...formData, business_name: e.target.value })
          }
          className="border"
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="border"
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border"
        />
      </p>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
