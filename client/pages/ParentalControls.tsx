import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function ParentalControls() {
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
            <h1 className="text-4xl font-bold mb-4">Parental Controls</h1>

            <div className="space-y-6 text-sm leading-relaxed">
              <p>
                Our platform is intended strictly for adults. As stated in our Terms of Service, only individuals who
                have reached the legal age in their country or region are permitted to access or use our platform. We
                are not responsible for any false claims made about a user&apos;s age.
              </p>

              <p>
                Parents and guardians are strongly encouraged to use parental control tools—such as device settings,
                software, or internet filters—to prevent minors from accessing inappropriate content.
              </p>

              <p>We maintain a strict zero-tolerance policy against any material involving minors or any form of child exploitation.</p>

              <p>We work alongside organizations such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  ASACP, which focuses on protecting children online and preventing access to age-restricted content.
                </li>
                <li>
                  Revenge Porn Helpline, a UK-based service that supports adults dealing with intimate image abuse.
                </li>
              </ul>

              <p>
                As a parent or guardian, you play the most important role in controlling what your children can access
                online. We recommend using available parental control solutions to block adult content across websites,
                including ours. Our platform follows RTA (Restricted to Adults) standards, making it easy for filtering
                tools to block access.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Ways to Protect Children from Adult Content</h2>

              <h3 className="text-xl font-bold mt-6 mb-3">1. Enable Safe Search on Browsers</h3>
              <p>Safe search settings help filter out explicit content in search results:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Google SafeSearch can be enabled on personal accounts, supervised devices, or networks.</li>
                <li>Yahoo, Bing (Microsoft), and Yandex also provide similar filtering options.</li>
              </ul>
              <p className="mt-4">
                You can also consider child-friendly search engines like Kiddle, KidRex, WackySafe, or Kido&apos;z, which
                are designed to show only appropriate content.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">2. Use Built-in Parental Controls on Devices</h3>
              <p>Most operating systems include parental control features:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Apple devices (iOS/macOS): Allow you to restrict adult content and control which websites can be
                  accessed.
                </li>
                <li>Android devices: Offer similar settings through Google&apos;s safety tools.</li>
                <li>Windows: Includes family settings to manage children&apos;s accounts and online activity.</li>
                <li>Amazon Kids+: Lets parents set screen limits, filter content, and manage usage.</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">3. Install Parental Control Software</h3>
              <p>Specialized software can block adult websites and monitor activity. Popular options include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Qustodio</li>
                <li>Net Nanny</li>
                <li>Norton Family</li>
                <li>Mobicip</li>
                <li>SentryPC</li>
                <li>Bark</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">4. Learn More About Online Safety</h3>
              <p>
                Understanding internet risks helps you guide your children better. Educate them about safe browsing, set
                clear boundaries, and use available resources to support healthy digital habits.
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
