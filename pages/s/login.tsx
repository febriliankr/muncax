import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import responsiveObserve from "antd/lib/_util/responsiveObserve";

const Schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function PendaftaranUmum() {
  const router = useRouter();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const loginSeller = async (data) => {
    const request = await axios({
      method: "post",
      baseURL: "/api/sellerAuth",
      data,
    });

    const response = request.data;
    console.log(response);
    return response;
  };

  const onSubmit = (formData) => {
    console.log(formData);
    setDisableSubmit(true);
    loginSeller(formData);
  };

  return (
    <>
      <Head>
        <title>Registration</title>
        <link rel="icon" href="/dlogo.png" />
      </Head>

      <div className="home__container">
        <div className="signup__form">
          <h1 className="register-text-heading">LOGIN</h1>
          <p className="register-text">Seller Login Page</p>
          <div className="input-areas">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className={`register-input ${
                  errors.name ? "username-error" : null
                }`}
                name="username"
                type="username"
                placeholder="Username"
                ref={register}
              />
              <p className="error-label">{errors.username?.message}</p>
              <input
                className="register-input"
                name="password"
                type="password"
                placeholder="Password"
                ref={register}
              />
              <p className="error-label">{errors.password?.message}</p>

              <div>
                <button disabled={disableSubmit} onSubmit={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
