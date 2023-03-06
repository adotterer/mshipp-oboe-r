import { AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function Contact() {
  const [emailClicked, setEmailClicked] = useState(false);
  useEffect(() => {}, [emailClicked]);
  function copyToClipboard(copyText) {
    navigator.clipboard.writeText(copyText).then(() => {
      setEmailClicked(true);
      setTimeout(() => {
        setEmailClicked(false);
      }, 4500);
    });
  }

  return (
    <div id="contact-page" className="container center">
      <title>Matthew Shipp | Oboe | Contact</title>
      <div
        // className="contact-icons"
        onClick={() => copyToClipboard("mshipp08@gmail.com")}
      >
        <div class="contact-icons">
          <AiFillMail />
          <div>mshipp08@gmail.com</div>
        </div>

        <div
          className={
            emailClicked ? "copied-to-clipboard" : "hidden copied-to-clipboard"
          }
        >
          <HiOutlineMusicalNote /> Copied email to clipboard!{" "}
          <HiOutlineMusicalNote />
        </div>
      </div>
      <div className="contact-icons">
        <div className="instagram-logo">
          <a href="https://www.instagram.com/matthewshippoboe/">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
