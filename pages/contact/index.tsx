import Input from "@/components/Input";
import React from "react";
import emailjs from "@emailjs/browser";
import { BiLoader } from "react-icons/bi";
import Message, { MessageProps } from "@/components/Message";
type Props = {};

type FormData = {
  name: string;
  value: string;
  isValid: boolean;
  isTouched: boolean;
  error: string;
  validate: (val: string) => string | null;
};

const initialFormData: Record<string, FormData> = {
  name: {
    name: "name",
    value: "",
    isValid: false,
    isTouched: false,
    error: "",
    validate: (val) => {
      if (!val.trim()) return "please enter this value";
      return null;
    },
  },
  email: {
    name: "email",
    value: "",
    isValid: false,
    isTouched: false,
    error: "",
    validate: (val) => {
      if (!val.trim()) return "please enter this value";
      return null;
    },
  },
  subject: {
    name: "subject",
    value: "",
    isValid: false,
    isTouched: false,
    error: "",
    validate: (val) => {
      if (!val.trim()) return "please enter this value";
      return null;
    },
  },
  message: {
    name: "message",
    value: "",
    isValid: false,
    isTouched: false,
    error: "",
    validate: (val) => {
      if (!val.trim()) return "please enter this value";
      return null;
    },
  },
};

const Contact = (props: Props) => {
  const form = React.useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [notifMessage, setNotifMessage] = React.useState<MessageProps>({
    message: "",
    id: "",
    type: "success",
  });
  const [formData, setFormData] = React.useState(initialFormData);

  const validate = (): boolean => {
    const newFormData = { ...formData };
    let res = true;
    Object.keys(formData).forEach((key) => {
      console.log("key", key);
      const validation = formData[key].validate(formData[key].value);
      if (validation !== null) {
        res = false;
      }
      const newData = { ...formData[key] };
      newData.error = validation ?? "";
      newFormData[key] = newData;
    });

    if (!res) {
      setFormData(newFormData);
    }

    return res;
  };

  const sendEmail = () => {
    const validationResult = validate();
    if (!validationResult) return;
    if (form.current) {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_o4ufqcv",
          "template_vaf8oa3",
          form.current,
          "FndIhQVMbXlqvK2cT"
        )
        .then(
          (result) => {
            console.log(result.text);
            setNotifMessage({
              id: Math.random() + "",
              message: "Message sent",
              type: "success",
            });
            setFormData(initialFormData);
          },
          (error) => {
            setNotifMessage({
              id: Math.random() + "",
              message: "Unexpected Error",
              type: "error",
            });
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const changeValue = (key: string, value: string) => {
    setFormData((oldData) => {
      const newData = { ...oldData };
      const newEntry = { ...newData[key] };
      if (!newEntry) return oldData;
      newEntry.value = value;
      newData[key] = newEntry;
      return newData;
    });
  };

  return (
    <>
      <Message
        message={notifMessage.message}
        id={notifMessage.id}
        type={notifMessage.type}
      />
      <form
        ref={form}
        action="/api/hello"
        method="POST"
        className="h-full container flex flex-col justify-center items-center  mx-auto gap-8"
        target="lmao"
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
      >
        <h1 className="text-4xl">
          Lets <span className="text-accent">Connect</span>{" "}
        </h1>
        <div className="flex flex-col  w-full lg:w-1/2">
          <div className="flex gap-4 mx-auto w-full ">
            <Input
              error={formData["name"]?.error}
              value={formData["name"]?.value}
              name="name"
              placeholder="Name"
              className="w-full"
              onChange={(e) => {
                changeValue("name", e.target.value);
              }}
            />
            <Input
              error={formData["email"]?.error}
              value={formData["email"]?.value}
              name="email"
              placeholder="Email"
              type="email"
              className="w-full"
              onChange={(e) => {
                changeValue("email", e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <Input
              error={formData["subject"]?.error}
              value={formData["subject"]?.value}
              name="subject"
              placeholder="Subject"
              className="w-full"
              onChange={(e) => {
                changeValue("subject", e.target.value);
              }}
            />
          </div>
          <textarea
            name="message"
            cols={30}
            rows={10}
            className="bg-transparent hover:outline-none focus:outline-none hover:border-accent/70 focus:border-accent border-2 border-gray-500/30 transition-colors ease-in-out duration-150 resize-none rounded-md p-2 mt-4"
            value={formData["message"]?.value}
            onChange={(e) => {
              changeValue("message", e.target.value);
            }}
          ></textarea>
          <div className="w-full mt-4">
            <button className="cursor-pointer border-2 border-gray-500/30 hover:border-accent hover:text-accent transition-colors ease-in duration-150 rounded-2xl w-fit py-2 px-4 text-sm mx-auto flex justify-center items-center gap-2">
              Lets Talk
              {isLoading && (
                <span className="animate-spin  text-accent inline-block ">
                  <BiLoader />
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
