"use client";

import axios from "axios";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/style.css";
import "react-simple-toasts/dist/theme/dark.css";
import { BsArrowRight } from "react-icons/bs";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/variants";

toastConfig({ theme: "dark", position: "top-center" });
const iniForm = {
  sender: "",
  email: "",
  title: "",
  content: "",
};

const ContactPage = () => {
  const [loadingBtn, setLoadingBtn] = React.useState(false);

  const [form, setForm] = React.useState({ ...iniForm });

  const formIsValid =
    form.sender.trim() &&
    form.email.trim() &&
    form.title.trim() &&
    form.content.trim();

  const sendMail = () => {
    setLoadingBtn(true);
    axios({
      method: "post",
      url: "/api/email",
      data: { ...form },
    })
      .then(() => {
        console.log("email sent !!!");
        setForm({ ...iniForm });

        toast("Email Sent Successfuly");
      })
      .catch((err) => {
        toast("Something went Wrong!");
        console.log(err);
      })
      .finally(() => {
        setLoadingBtn(false);
      });
  };

  return (
    <div className="h-full bg-primary/30 relative z-10">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <m.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </m.h2>
          {/* form */}
          <m.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              sendMail();
            }}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                value={form.sender}
                onChange={(e) => setForm({ ...form, sender: e.target.value })}
              />
              <input
                type="email"
                placeholder="email"
                className="input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              placeholder="message"
              className="textarea"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            ></textarea>
            <button
              disabled={!formIsValid || loadingBtn}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
              // onClick is handled by onSubmit, but keeping it for safety if type is not submit
              type="submit"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              {loadingBtn && <CgSpinner className="animate-spin ml-2" />}
            </button>
          </m.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
