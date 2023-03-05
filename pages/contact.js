import { AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import { useRef } from "react";

function copyToClipboard(copyText) {
  // Get the text field
  // var copyText = document.getElementById("myInput");

  // Select the text field

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText).then(function() {
    alert(`Copied email to clipboard!`);
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });

}

export default function Contact() {
  const emailRef = useRef(null);

  return (
    <div id="contact-page" className="container center">
      <div
        className="contact-icons"
        onClick={() => copyToClipboard("mshipp08@gmail.com")}
      >
        <div>
          <AiFillMail />
        </div>
        <div>mshipp08@gmail.com</div>
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
