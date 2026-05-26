import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>

            <div className="space-y-6 text-sm leading-relaxed">
              <h2 className="text-2xl font-bold mt-2 mb-4">About Us</h2>
              <p>
                nServe Technology LLC operates and manages the website{" "}
                <a
                  href="https://theglam.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  theglam.info
                </a>{" "}
                (referred to as &quot;the Website&quot;). To ensure the Website works efficiently and provides a smooth
                user experience, we use cookies and similar technologies. These are stored on your device—such as a
                computer, phone, or tablet—and help us recognize you, remember your preferences, and understand how the
                Website is used.
              </p>
              <p>This policy explains:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>how we use cookies and tracking technologies; and</li>
                <li>the choices available to you regarding their use.</li>
              </ul>
              <p>
                When we mention &quot;personal data,&quot; we mean information that can identify you, such as your IP
                address or other online identifiers.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files saved on your device when you visit a website or use an app. They allow the
                website to recognize your device on future visits.
              </p>
              <p>There are two main types:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Session cookies:</strong> These are temporary and are deleted when you close your browser. They
                  help the Website function during your visit.
                </li>
                <li>
                  <strong>Persistent cookies:</strong> These stay on your device until they expire or are manually
                  deleted. They help remember your preferences for future visits.
                </li>
              </ul>
              <p>Our Website uses both types.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Why We Use Cookies</h2>
              <p>Cookies help us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>recognize users where necessary</li>
                <li>customize content based on user preferences</li>
                <li>improve overall Website performance and experience</li>
              </ul>
              <p className="mt-4">Without certain cookies, some parts of the Website may not function properly.</p>
              <p className="mt-4">We may collect information such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>your IP address (when available)</li>
                <li>device and browser details</li>
                <li>operating system</li>
                <li>browsing behavior and usage patterns (in anonymized form)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Cookies</h2>
              <p>
                When you visit our Website, cookies help us deliver services tailored to your device and ensure security.
                We collect data such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>device type, operating system, and screen resolution</li>
                <li>browser details</li>
                <li>how you interact with the Website</li>
                <li>your IP address</li>
              </ul>
              <p className="mt-4">Some features of the Website may not work correctly if cookies are disabled.</p>
              <p className="mt-4">We also use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>provide requested services securely</li>
                <li>meet legal requirements</li>
                <li>manage marketing activities</li>
                <li>analyze performance and improve the Website</li>
                <li>personalize your browsing experience</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Types of Cookies</h2>
              <p>Cookies can be grouped in different ways:</p>

              <h3 className="text-xl font-bold mt-6 mb-3">Based on Source</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>First-party cookies:</strong> Set directly by our Website to support functionality and
                  remember preferences.
                </li>
                <li>
                  <strong>Third-party cookies:</strong> Set by external services, often used for analytics or
                  advertising.
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Based on Duration</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Session cookies:</strong> Temporary and removed after closing the browser.
                </li>
                <li>
                  <strong>Persistent cookies:</strong> Remain on your device until expiration or deletion.
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Based on Purpose</h3>
              <h4 className="text-lg font-semibold mt-4 mb-2">Essential cookies</h4>
              <p>
                These are necessary for the Website to operate properly and provide secure services. Without them, some
                features may not work.
              </p>
              <p className="mt-4">They are used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>allow users to log in and stay authenticated</li>
                <li>maintain security and prevent misuse</li>
                <li>remember cookie preferences</li>
                <li>control access to certain features or content</li>
              </ul>
              <p className="mt-4">
                These cookies are automatically enabled when you visit the Website. Blocking them may affect how the
                Website functions.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to Home</Link>
            </div>
          </div>
        </div>

        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, nServe Technology LLC All Rights Reserved</p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Link to="/terms" className="hover:text-white/80">Terms of Services</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">Refund Policy</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
              <span>|</span>
              <Link to="/complaint-content-renewal-policy" className="hover:text-white/80">
                Complaint Content Renewal Policy
              </Link>
              <span>|</span>
              <Link to="/parental-controls" className="hover:text-white/80">Parental Controls</Link>
              <span>|</span>
              <Link to="/cookie-policy" className="hover:text-white/80">Cookie Policy</Link>
              <span>|</span>
              <Link to="/dmca-policy" className="hover:text-white/80">DMCA Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
