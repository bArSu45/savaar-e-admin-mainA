import "./App.css";
import Button from "~/component/common/Button";

function App() {
  return (
<div className="w-full">
      {/* Hero Section */}
      <section className="bg-pink-100 text-center p-10">
        <h1 className="text-3xl font-bold">Your Gateway to a Seamless Salon and Spa Experience</h1>
        <p className="mt-4 text-gray-700">Discover the Convenience of Booking Salon and Spa Services with EaseSeat.</p>
        <div className="mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">Contact Us</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Download Now</button>
        </div>
      </section>

      {/* About Us */}
      <section className="p-10 flex flex-col md:flex-row items-center">
        <img src="/about-us.jpg" alt="About Us" className="w-full md:w-1/2 rounded-md" />
        <div className="bg-white shadow-lg p-6 rounded-md md:ml-6">
          <h2 className="text-xl font-bold">What We Offer</h2>
          <p className="text-gray-600 mt-2">Effortless booking, top-tier quality, and a personalized experience. Our team of beauty experts is here to cater to your unique needs.</p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-900 text-white p-10 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="mt-2">Our mission is to transform the way you look and feel, offering seamless booking and expert services that make self-care simple and stress-free.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Our Vision</h2>
          <p className="mt-2">We envision a world where booking salon and spa services is hassle-free and accessible to everyone, promoting self-care as a natural aspect of daily life.</p>
        </div>
      </section>

      {/* Download Section */}
      <footer className="text-center p-6 bg-black text-white">
        <p>For Better Experience Download EaseSeat App</p>
        <div className="flex justify-center mt-2">
          <img src="/google-play.png" alt="Google Play" className="w-32 mx-2" />
          <img src="/app-store.png" alt="App Store" className="w-32 mx-2" />
        </div>
      </footer>
    </div>
  );
}

export default App;
