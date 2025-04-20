import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { nanoid } from "nanoid";
import { useState, useEffect, useRef } from "react";
// import { basename, verify } from "../../utils/utilities";
import NoticationCard from "../notification/card-notify";
import emailjs from "@emailjs/browser";

const ContactMe = () => {

  const env = import.meta.env;
  const formRef = useRef<HTMLFormElement>(null);

  const templateParams = {
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  };

  const sendEmail = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    templateParams["from_name"] = `${lastname} ${firstname}`;
    templateParams["to_name"] = "Developer";
    templateParams["message"] = `Subject : ${subject}\nFrom: ${lastname} + " " + ${firstname}\nEmail: ${email}\nTel: ${tel}\n\nMessage: ${message}\n`;
    templateParams["reply_to"] = email;

    emailjs.init(env.REACT_EMAILJS_API || "HWcKJj7c4CouOd_Yy" );
    emailjs.send(env.REACT_EMAILJS_SERVICE_ID || "Portfolio" , env.REACT_EMAILJS_TEMPLATE_ID || "template_7vo1l7f" , templateParams)
    .then((response) => {
      console.log('SUCCESS!', response);
    }, (error) => {
      console.log('FAILED...', error);
    });
  };

  // const [response, setResponse] = useState({});
  const [send, setSend] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setSend(false);
    setEmail("");
    setLastname("");
    setFirstname("");
    setTel("");
    setMessage("");
    setSubject("");
  };

  useEffect(() => {
    if (send) {
      setTimeout(() => {
        reset();
      }, 2000);
    }
  }, [send]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPending(true);
    sendEmail(e);

    // const HeadersConfig = new Headers({
    //   "X-Custom-Header": "ProcessThisImmediately",
    //   "Content-Type": "application/json",
    // });

    // const data = {
    //   firstname: verify(firstname),
    //   lastname: verify(lastname),
    //   email: verify(email),
    //   tel: verify(tel),
    //   subject: verify(subject),
    //   message: verify(message),
    // };

    // try {
    //   const res = await fetch(`${basename}/assets/scripts/php/send.php`, {
    //     method: "POST",
    //     headers: HeadersConfig,
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     body: JSON.stringify(data),
    //   });

    //   if (!res.ok) {
    //     throw new Error("Failed to fetch, status: " + res.status);
    //   }

    //   const responseData = await res.json();
    //   setResponse(responseData);
    //   setSend(
    //     responseData["type" as keyof typeof responseData] === "success"
    //       ? true
    //       : false
    //   );
    //   setIsPending(false);

    //   console.log("==> ", responseData);
    //   console.log(response["status" as keyof typeof response]);
    //   console.log(response["message" as keyof typeof response]);
    //   console.log(response["type" as keyof typeof response]);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  const subjects = [
    {
      label: "-- Sujet --",
      tag: "",
    },
    {
      label: "Maintenance Site Web",
      tag: "maintenance_web",
    },
    {
      label: "Maintenance Application Mobile",
      tag: "maintenance_mobile_app",
    },
    {
      label: "Conception Site Web",
      tag: "website",
    },
    {
      label: "Conception App Mobile",
      tag: "mobile_app",
    },
    {
      label: "Devis",
      tag: "devis",
    },
    {
      label: "Autres",
      tag: "others",
    },
  ];
  return (
    <>
      {send && <NoticationCard type={"success"} message={"Message envoyé"} />}
      <div className="flex flex-col min-h-screen justify-center items-center ">
        <form
          ref={formRef}
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col w-full lg:w-1/2 px-10 rounded-md justify-center items-center gap-4"
          action=""
          method="post"
        >
          <div className="flex flex-col text-center">
            <h1 className="font-bold py-4 uppercase text-4xl lg:text-6xl">
              Formulaire de contact
            </h1>
            <p>
              Vous avez des questions ? Je suis heureux de recevoir vos questions, projets ou
              demandes de devis. Veuillez remplir le formulaire ci-dessous et je vous
              répondrez dans les plus brefs délais. Vos reves sont à un clic.
            </p>
          </div>
          <div className="flex flex-col gap-x-4 md:flex-row md:flex-wrap w-full">
            <div className="flex flex-1 flex-col gap-y-1">
              <label className={"font-bold"} htmlFor="firstname">
                Prénom
              </label>
              <input
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                className="flex font-bold outline-none rounded-md border-2 focus:border-sky-400 p-2 "
                type="text"
                placeholder="Ibrahim"
                name="firstname"
                id="firstname"
                value={firstname}
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-y-1">
              <label className={"font-bold"} htmlFor="lastname">
                Nom
              </label>
              <input
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className="flex font-bold outline-none rounded-md border-2 focus:border-sky-400 p-2 "
                type="text"
                placeholder="DIABY"
                name="lastname"
                id="lastname"
                value={lastname}
                required
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-y-1">
            <label className={"font-bold"} htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="flex font-bold outline-none rounded-md border-2 focus:border-sky-400 p-2 "
              type="email"
              placeholder="contact@gmail.com"
              name="email"
              id="email"
              value={email}
              required
            />
          </div>

          <div className="flex w-full flex-col gap-y-1">
            <label className={"font-bold"} htmlFor="tel">
              Téléphone
            </label>
            <input
              onChange={(e) => {
                setTel(e.target.value);
              }}
              className="flex font-bold outline-none rounded-md border-2 focus:border-sky-400 p-2 "
              type="tel"
              placeholder="+330701020304"
              name="tel"
              id="tel"
              value={tel}
              required
            />
          </div>

          <div className="flex w-full flex-col gap-y-1">
            <label className={"font-bold"} htmlFor="subject">
              Sujet
            </label>
            <select
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="flex font-bold outline-none rounded-md border-2 focus:border-sky-400 p-2 "
              name="subject"
              id="subject"
              value={subject}
              required
            >
              {subjects.map((item) => {
                return (
                  <option key={nanoid()} value={item["tag"]}>
                    {item["label"]}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex w-full flex-col gap-y-1">
            <label className={"font-bold"} htmlFor="message">
              Message
            </label>
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="flex font-bold h-30 outline-none rounded-md border-2 focus:border-sky-400 p-2 "
              placeholder="En quoi pouvons-nous vous aider?"
              name="message"
              id="message"
              value={message}
              required
            >
              {message}
            </textarea>
          </div>

          <button disabled={isPending}>
            <div className="flex bg-transparent">
              <div className="flex transition delay-75 duration-700 hover:scale-105 transform shadow-lg hover:shadow-sky-400 dark:hover:shadow-red-400  font-bold gap-x-4 cursor-pointer rounded-md bg-gradient-to-r from-white/40 via-sky-400 to-white/60 dark:from-black/40 dark:via-red-400/50 dark:to-black/60 uppercase ps-4 pe-2 py-4 bg-transparent">
                <span className="flex items-center">
                  Envoyer <PaperAirplaneIcon className="size-8 px-2" />
                </span>
              </div>
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
