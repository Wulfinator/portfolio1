/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = (email: string) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e: any) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs
        .send("service_a8353vs", "template_p7x5f9f", {
          from_name: username,
          to_name: "YOUR_EMAIL_ADDRESS",
          subject: subject,
          message: message,
          reply_to: email,
        })
        .then(() => {
          setSuccessMsg(
            `Thank you dear ${username}, Your Messages has been sent Successfully!`
          );
          setErrMsg("");
          setUsername("");
          setEmail("");
          setSubject("");
          setMessage("");
        });
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex items-center justify-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-br from-bodyColor to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne my-5">
              <form className="flex flex-col w-full gap-4 py-2 lgl:gap-6 lgl:py-5">
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowTwo text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowTwo text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div className="flex flex-col w-full gap-10 lgl:flex-row">
                  <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                    <p className="text-sm tracking-wide text-gray-400 uppercase">
                      Your name
                    </p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={`${
                        errMsg === "Username is required!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Email
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${
                      errMsg === "Please give your Email!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Subject
                  </p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`${
                      errMsg === "Plese give your Subject!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${
                      errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Send Message
                  </button>
                </div>
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#141518] to-[#141518] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#141518] to-[#141518] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
