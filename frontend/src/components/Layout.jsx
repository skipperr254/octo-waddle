import TopHeading from "./layout/TopHeading";
import Navbar from "./layout/Navbar";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Top Heading */}
      <TopHeading />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main content */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
