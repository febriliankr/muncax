import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

const Schema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  instansi: yup.string().required().min(2),
  whatsapp: yup.number().required().min(6),
});

export default function PendaftaranUmum() {
  const router = useRouter();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  function checkAndAddToDatabase(name, email, whatsapp, username, password, alamat_seller, kota_seller, tgllahir_seller) {
    console.log(name, email, whatsapp);
  }

  const onSubmit = (formData) => {
    console.log(formData);
    setDisableSubmit(true);
    const { name, email, instansi, whatsapp } = formData;
  };

  return (
    <>
      <Head>
        <title>Registration</title>
        <link rel="icon" href="/dlogo.png" />
      </Head>

      <div className="home__container">
        <div className="signup__form">
          <h1 className="register-text-heading">REGISTER NOW</h1>
          <p className="register-text">Pendaftaran Seller Muncax</p>
          <div className="input-areas">
            <form className="register-form" >
              <input
                className={`register-input ${
                  errors.name ? "username-error" : null
                }`}
                name="name"
                type="name"
                placeholder="Nama Lengkap"
                ref={register}
              />
              <p className="error-label">{errors.name?.message}</p>
              <input
                className="register-input"
                name="email"
                type="email"
                placeholder="Alamat Email"
                ref={register}
              />
              <p className="error-label">{errors.email?.message}</p>
              <input
                className={`register-input ${
                  errors.instansi ? "username-error" : null
                }`}
                name="instansi"
                type="instansi"
                placeholder="Asal Instansi"
                ref={register}
              />
              <p className="error-label">{errors.instansi?.message}</p>
              <input
                className="register-input"
                name="whatsapp"
                type="tel"
                placeholder="Nomor Whatsapp"
                ref={register}
              />
              <p className="error-label">{errors.whatsapp?.message}</p>

              <div className="pt-1">
                <button disabled={disableSubmit}>
                  Register
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
