import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
