export default function FeatureModal({ children, modalClose }) {
  return <div onClick={modalClose} id="feature__image__modal">{children}</div>;
}
