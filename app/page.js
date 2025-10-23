import Navbar from "./components/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-layout">
        
        <div className="side-containers left-side">
          <div className="side-container"><img src="" alt="" /></div>
          <div className="side-container"><img src="" alt="" /></div>
          <div className="side-container"><img src="" alt="" /></div>
          <div className="side-container menu-icon-box"><img src="" alt="" /></div>
        </div>

        <div className="main-logo-container">
          <div className="logo-image-wrapper">
            <Image src="/images/logo.png" alt="Logo" width={200} height={200} className="main-logo-img" />
          </div>
          <a href="https://discord.gg/yourlink" target="_blank" rel="noopener noreferrer" className="discord-button">
            Join Discord
          </a>
        </div>

        <div className="side-containers right-side">
          <div className="side-container"><img src="" alt="" /></div>
          <div className="side-container"><img src="" alt="" /></div>
          <div className="side-container"><img src="" alt="" /></div>
          <div className="side-container"><img src="" alt="" /></div>
        </div>

      </div>
    </>
  );
}
