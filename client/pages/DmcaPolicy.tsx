import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function DmcaPolicy() {
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
            <h1 className="text-4xl font-bold mb-4">DMCA Policy</h1>

            <div className="space-y-6 text-sm leading-relaxed">
              <p>
                This website (&quot;Site&quot;) qualifies as a &quot;Service Provider&quot; under the Digital Millennium
                Copyright Act (DMCA), specifically 17 U.S.C. §512(k)(1). As such, it benefits from certain legal
                protections (known as &quot;safe harbor&quot; provisions) against copyright infringement claims.
              </p>
              <p>
                We respect the intellectual property rights of others and expect our users to do the same. To support
                this, we follow DMCA regulations and have implemented the following Notice and Takedown procedures.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Reporting Copyright Infringement</h2>
              <p>If you believe your copyrighted work has been used without permission, you must send a notice to our designated Copyright Agent including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A physical or electronic signature of the copyright owner or authorized representative</li>
                <li>A description of the copyrighted work that has been infringed</li>
                <li>Details of where the infringing content is located on the Site (preferably with exact URLs)</li>
                <li>Your contact details (address, phone number, and email)</li>
                <li>A statement confirming you believe the use is unauthorized</li>
                <li>
                  A declaration, under penalty of perjury, that the information provided is accurate and that you are
                  authorized to act on behalf of the copyright owner
                </li>
              </ul>
              <p className="mt-4">
                <strong>Please note:</strong> Only copyright-related notices should be sent to this contact.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Misuse of the DMCA Process</h2>
              <p>
                Submitting false claims or abusing the DMCA process can lead to legal consequences, including liability
                for damages, legal fees, and court costs under federal law (17 U.S.C. §512(f)). These procedures are
                strictly for copyright-related complaints and not for other disputes.
              </p>
              <p className="mt-4">
                We reserve the right to investigate and take action against misuse of this process.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Takedown Process</h2>
              <p>When a valid infringement notice is received:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Site may remove or disable access to the reported content</li>
                <li>The affected user will be notified</li>
                <li>Repeat offenders may have their accounts terminated</li>
              </ul>
              <p className="mt-4">
                If a notice is incomplete but still provides sufficient information, we may attempt to contact the
                complainant to correct it.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Counter-Notification Process</h2>
              <p>
                If you believe your content was wrongly removed or misidentified, you may submit a counter-notification
                under DMCA Section 512(g).
              </p>
              <p className="mt-4">Your counter-notification must include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identification of the removed content</li>
                <li>The original location of the content (preferably with URLs)</li>
                <li>
                  A statement declaring, under penalty of perjury, that the removal was a mistake or misidentification
                </li>
                <li>Your contact details (address, phone number, email)</li>
                <li>
                  A statement agreeing to the jurisdiction of the appropriate court and accepting legal service from the
                  complainant
                </li>
              </ul>
              <p className="mt-4">
                Send the signed counter-notification to the same Copyright Agent listed above.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">What Happens Next</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Once a valid counter-notification is received, it will be shared with the original complainant</li>
                <li>The removed content may be restored within 10–14 days</li>
                <li>This will only happen if no legal action has been filed by the complainant to prevent restoration</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Service Providers</h2>
              <p>
                If the alleged infringer is itself a service provider, complaints regarding its users should be directed
                to that provider&apos;s designated DMCA agent instead of this Site.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Policy Updates</h2>
              <p>
                We may update or change this policy at any time. Users are encouraged to review it regularly to stay
                informed.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Customer Support Notice</h2>
              <p>
                The DMCA Agent handles only copyright-related issues and is not part of the Site&apos;s customer service.
                For account, billing, or general inquiries, please contact the Site&apos;s customer support team directly.
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
