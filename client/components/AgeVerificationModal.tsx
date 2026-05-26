import { X } from "lucide-react";

interface AgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AgeVerificationModal({ isOpen, onClose, onConfirm }: AgeVerificationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-fade-in">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={22} />
        </button>

        <div className="p-5 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            TheGlam is an <span className="text-purple-600">adults only</span> platform
          </h3>

          <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Content available on TheGlam may include mature material intended only for adults.
            </p>
            <p>
              You must be 18 years or older, or of legal age in your jurisdiction, whichever is greater.
            </p>
            <p>
              If you are a parent or guardian, we recommend enabling parental controls to restrict
              access to age-restricted content for minors.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <p className="text-sm text-gray-600 mb-4">
              By continuing, you confirm that you are 18+ and eligible to view this content.
            </p>
            <button
              onClick={onConfirm}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 sm:py-4 px-5 rounded-lg transition-all duration-300"
            >
              I'm 18 or older - Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
