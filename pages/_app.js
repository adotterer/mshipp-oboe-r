// import '@/styles/globals.css'
import "./index.css";
import PageWrapper from "../components/PageWrapper";

export default function App({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}
