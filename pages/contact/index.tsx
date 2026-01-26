import axios from "axios";
import React from "react";
import { CgSpinner } from "react-icons/cg";

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
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingBtn(false);
      });
  };

  return (
    <div className="w-full h-full outline-red-300 flex justify-center p-4">
      <div className="container flex flex-col gap-12 p-8 items-center">
        <h3 className="font-semibold text-3xl">Contact Me</h3>

        <div className="flex flex-col sm:flex-row justify-between gap-12 w-[50rem] max-w-full">
          <input
            type="text"
            className="bg-transparent outline outline-white/60 px-2 py-1 rounded-sm w-full"
            placeholder="Email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
          <input
            type="text"
            className="bg-transparent outline outline-white/60 px-2 py-1 rounded-sm w-full "
            placeholder="Name"
            value={form.sender}
            onChange={(e) => {
              setForm({ ...form, sender: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-between gap-12 w-[50rem] max-w-full">
          <input
            type="text"
            className="bg-transparent outline outline-white/60 px-2 py-1 rounded-sm w-full"
            placeholder="Subject"
            value={form.title}
            onChange={(e) => {
              setForm({ ...form, title: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-between gap-12 w-[50rem] max-w-full h-[30rem] max-h-full">
          <textarea
            className="bg-transparent outline outline-white/60 px-2 py-1 rounded-sm w-full"
            placeholder="content"
            value={form.content}
            onChange={(e) => {
              setForm({ ...form, content: e.target.value });
            }}
          />
        </div>

        <div>
          <button
            disabled={!formIsValid || loadingBtn}
            className="px-8 py-1 rounded-md bg-accent text-white flex items-center gap-4 disabled:opacity-50"
            onClick={sendMail}
          >
            <span>Send Email</span>
            {loadingBtn && <CgSpinner className="animate-spin" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
