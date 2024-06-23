import { AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Head from 'next/head';

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
      <Head>
        <title>Matthew Shipp | Oboe | Contact</title>
      </Head>
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      <div class="elfsight-app-405bed0a-0faf-49f5-8725-37bf0ff3a5f9" data-elfsight-app-lazy></div>
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
