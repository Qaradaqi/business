import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

const PrimaryLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PrimaryLayout;