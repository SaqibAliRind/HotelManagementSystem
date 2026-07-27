import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{background: 'var(--sona-bg)', color: 'var(--sona-text)'}}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>

  );
};

export default GuestLayout;
