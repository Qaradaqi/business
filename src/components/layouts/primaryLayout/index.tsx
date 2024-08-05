import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";
import SidebarContactInfo from "@/components/sidbarContactInfo";
import { SearchBoxContextProvider } from "@/context/searchBoxContext";
import { SidebarContactProvider } from "@/context/sideInfoContext";

const PrimaryLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <SidebarContactProvider>
        <SearchBoxContextProvider>
          <SidebarContactInfo />
          <SearchBox />
          <Navbar />
          {children}
          <Footer />
        </SearchBoxContextProvider>
      </SidebarContactProvider>
    </>
  );
};

export default PrimaryLayout;