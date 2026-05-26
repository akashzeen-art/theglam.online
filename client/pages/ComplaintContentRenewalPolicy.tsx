import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function ComplaintContentRenewalPolicy() {
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
            <h1 className="text-4xl font-bold mb-4">Complaint Content Renewal Policy</h1>

            <div className="space-y-6 text-sm leading-relaxed">
              <p>
                This Complaint Content Renewal Policy governs the review, removal, reinstatement, and renewal of
                content on the website{" "}
                <a
                  href="https://www.theglam.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  www.theglam.info
                </a>{" "}
                following the submission of a complaint. This Policy shall be read in conjunction with the Site&apos;s
                Terms of Service, Privacy Policy, and applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Scope and Applicability</h2>
              <p>
                This Policy applies to all users, visitors, and any third parties submitting complaints regarding
                content hosted, published, or made available on the Site. By using the Site, you acknowledge and agree
                to be bound by this Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Submission and Review of Complaints</h2>
              <p>Upon receipt of a complaint:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  The Site reserves the right, at its sole discretion, to determine whether the complaint is complete,
                  valid, and submitted in good faith
                </li>
                <li>The Site may request additional documentation or information to verify the complaint</li>
                <li>
                  The Site shall assess the complaint in accordance with applicable laws, contractual obligations, and
                  internal policies
                </li>
                <li>The Site is under no obligation to act on incomplete, inaccurate, or unsupported complaints.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Interim Measures and Content Removal</h2>
              <p>Pending review of a complaint, the Site may, at its sole discretion and without prior notice:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Remove, disable, or restrict access to the allegedly infringing or non-compliant content</li>
                <li>Suspend or limit the account responsible for such content</li>
                <li>Take any other action deemed necessary to ensure compliance with legal or regulatory requirements</li>
              </ul>
              <p className="mt-4">Such actions shall not constitute an admission of liability or wrongdoing.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Determination and Final Action</h2>
              <p>Following review:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  If the complaint is substantiated, the Site may permanently remove the content and take further
                  action against the responsible user, including account suspension or termination
                </li>
                <li>
                  If the complaint is unsubstantiated, the Site may restore the content or maintain its availability
                </li>
                <li>
                  All determinations made by the Site shall be final, subject only to applicable legal requirements.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Content Renewal and Reinstatement</h2>
              <p>Content removed or restricted pursuant to a complaint may be reinstated or renewed only under the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Receipt of a valid counter-notification or dispute meeting applicable legal standards</li>
                <li>Withdrawal of the complaint by the complainant</li>
                <li>Modification of the content to bring it into compliance with applicable laws and Site policies</li>
                <li>Determination by the Site that the removal was made in error or based on incorrect information</li>
              </ul>
              <p className="mt-4">
                The Site reserves the sole and absolute discretion to approve or deny any request for reinstatement.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Timeframes</h2>
              <p>
                The Site shall use commercially reasonable efforts to process complaints, counter-notifications, and
                reinstatement requests in a timely manner. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>No specific timeframe is guaranteed unless required by law</li>
                <li>
                  Typical processing periods may range from 10 to 14 business days, depending on the complexity of the
                  matter
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Repeat Violations</h2>
              <p>Users who are found to have repeatedly submitted content that results in valid complaints may be subject to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Permanent removal of content</li>
                <li>Suspension or termination of accounts</li>
                <li>Restriction of future access to the Site</li>
              </ul>
              <p className="mt-4">
                The Site reserves the right to enforce a &quot;repeat infringer&quot; policy in accordance with applicable law.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Misuse and Bad Faith Complaints</h2>
              <p>
                Any party found to have submitted complaints or counter-notifications that are false, misleading,
                fraudulent, or made in bad faith may be subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Rejection of current and future submissions</li>
                <li>Suspension or restriction of access to the Site</li>
                <li>Potential legal liability under applicable laws</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, the Site shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Any removal, disabling, or reinstatement of content</li>
                <li>Any loss of data, revenue, or reputation resulting from actions taken under this Policy</li>
                <li>Any actions taken in good faith to comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Modifications to Policy</h2>
              <p>
                The Site reserves the right to amend, modify, or update this Policy at any time without prior notice.
                Continued use of the Site following any changes constitutes acceptance of the revised Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
              <p>
                This Policy shall be governed and construed in accordance with applicable laws, without regard to
                conflict of law principles.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
              <p>
                All inquiries, complaints, or requests related to this Policy must be submitted through the Site&apos;s
                designated communication channels.
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
