import React from "react";
import digitalNomadBg from "../../assets/images/digitalnomadbg.jpg";
import { Link } from "react-router-dom";

export default function DigitalNomad() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${digitalNomadBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 opacity-95 rounded-2xl shadow-xl p-8 space-y-10">
        {/* Intro Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
            Digital Nomad Visa – Mauritius
          </h1>

          <p className="text-lg font-mono font-bold leading-relaxed">
            Mauritius offers a unique opportunity for remote workers through its
            Premium Travel Visa — a free,
            long-stay visa designed for digital nomads, retirees, and long-term
            travelers who want to live on the island while working remotely.
          </p>

          <p className="text-lg font-mono font-bold leading-relaxed">
            The visa is valid for up to <span className="font-bold">1 year</span>{" "}
            and can be renewed. It allows you to live in Mauritius legally while
            earning income from outside the country.
          </p>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-6">
          {/* Who Can Apply */}
          <details className="bg-white border border-teal-200 rounded-xl shadow-md">
            <summary className="cursor-pointer px-6 py-4 text-xl font-mono font-bold text-teal-700 hover:bg-teal-50 rounded-t-xl">
              Who Can Apply?
            </summary>
            <div className="px-6 py-4 text-sm text-gray-800 font-mono space-y-2">
              <p>You can apply for the Mauritius Premium Visa if you are:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>A non-citizen of Mauritius</li>
                <li>Employed by or own a business based outside Mauritius</li>
                <li>A freelancer, digital nomad, or remote worker</li>
                <li>A retiree or long-term tourist with stable income</li>
                <li>Accompanied by family/spouse (they can be included on the visa)</li>
              </ul>
            </div>
          </details>

          {/* Requirements */}
          <details className="bg-white border border-teal-200 rounded-xl shadow-md">
            <summary className="cursor-pointer px-6 py-4 text-xl font-mono font-bold text-teal-700 hover:bg-teal-50 rounded-t-xl">
              Requirements Checklist
            </summary>
            <div className="px-6 py-4 text-sm text-gray-800 font-mono space-y-2">
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Valid passport</li>
                <li>Proof of remote work or business income (outside Mauritius)</li>
                <li>Minimum monthly income: approx. <strong>$1,500 USD</strong></li>
                <li>Proof of accommodation in Mauritius</li>
                <li>Health insurance valid in Mauritius</li>
                <li>Recent passport-sized photo</li>
                <li>Marriage certificate (if applying with spouse)</li>
                <li>Birth certificates for children (if applicable)</li>
              </ul>
            </div>
          </details>

          {/* Application Process */}
          <details className="bg-white border border-teal-200 rounded-xl shadow-md">
            <summary className="cursor-pointer px-6 py-4 text-xl font-mono font-bold text-teal-700 hover:bg-teal-50 rounded-t-xl">
              Application Process
            </summary>
            <div className="px-6 py-4 text-sm text-gray-800 font-mono space-y-2">
              <ol className="list-decimal list-inside pl-4 space-y-1">
                <li>
                  Visit the official application portal:{" "}
                  <a
                    href="https://passport.govmu.org/passport/?page_id=595"
                    className="text-teal-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply for Premium Visa
                  </a>
                </li>
                <li>Fill out the online form</li>
                <li>Upload required documents</li>
                <li>Include spouse/children details if applicable</li>
                <li>Submit (no fees required)</li>
                <li>Wait for approval (typically 3–10 business days)</li>
              </ol>
            </div>
          </details>

          {/* After Approval */}
          <details className="bg-white border border-teal-200 rounded-xl shadow-md">
            <summary className="cursor-pointer px-6 py-4 text-xl font-mono font-bold text-teal-700 hover:bg-teal-50 rounded-t-xl">
              What Happens After Approval?
            </summary>
            <div className="px-6 py-4 text-sm text-gray-800 font-mono space-y-2">
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>You’ll receive a PDF visa approval by email</li>
                <li>Present it on arrival — no physical visa is issued</li>
                <li>Visa is valid up to 12 months (renewable)</li>
                <li>No local employment is allowed under this visa</li>
                <li>Private health insurance is required throughout your stay</li>
                <li>You may rent property or stay in tourist accommodations</li>
              </ul>
            </div>
          </details>

          {/* Family/Spouse Inclusion */}
          <details className="bg-white border border-teal-200 rounded-xl shadow-md">
            <summary className="cursor-pointer px-6 py-4 text-xl font-mono font-bold text-teal-700 hover:bg-teal-50 rounded-t-xl">
              Can I Include My Spouse or Family?
            </summary>
            <div className="px-6 py-4 text-sm text-gray-800 font-mono space-y-2">
              <p>Yes, you can include your spouse and children on the same visa application.</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Upload a copy of your marriage certificate</li>
                <li>Provide birth certificates for children</li>
                <li>Only the main applicant needs to meet income requirements</li>
                <li>Everyone must have valid health coverage</li>
              </ul>
              <p>No additional fees apply for dependents.</p>
            </div>
          </details>
        </div>

        {/* Official Forms and Links Table */}
        <div className="overflow-x-auto pt-6">
          <h2 className="text-2xl font-mono font-bold text-teal-600 mb-4 text-center">
            Official Forms & Resources
          </h2>
          <table className="w-full table-auto border border-gray-300 text-center rounded-xl overflow-hidden">
            <thead className="bg-teal-100 font-mono text-gray-800 text-base">
              <tr>
                <th className="px-4 py-3 border">Purpose</th>
                <th className="px-4 py-3 border">Link</th>
              </tr>
            </thead>
            <tbody className="font-mono text-medium">
              <tr className="border-t hover:bg-teal-50">
                <td className="px-4 py-2 border">Apply for Premium Visa</td>
                <td className="px-4 py-2 border">
                  <a
                    href="https://passport.govmu.org/passport/?page_id=595"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-600 underline"
                  >
                    passport.govmu.org
                  </a>
                </td>
              </tr>
              <tr className="border-t hover:bg-teal-50">
                <td className="px-4 py-2 border">Visa Requirements Checklist (PDF)</td>
                <td className="px-4 py-2 border">
                  <a
                    href="https://residency.mu/wp-content/uploads/2022/04/Checklist-Premium-Visa.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-600 underline"
                  >
                    residency.mu
                  </a>
                </td>
              </tr>
              <tr className="border-t hover:bg-teal-50">
                <td className="px-4 py-2 border">Declaration Form PV1 (PDF)</td>
                <td className="px-4 py-2 border">
                  <a
                    href="https://www.mra.mu/download/FormPremiumVISA.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-600 underline"
                  >
                    mra.mu
                  </a>
                </td>
              </tr>
              <tr className="border-t hover:bg-teal-50">
                <td className="px-4 py-2 border">All-in-One Travel Form</td>
                <td className="px-4 py-2 border">
                  <a
                    href="https://mauritiusnow.com/mauritius-travel-advice/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-600 underline"
                  >
                    mauritiusnow.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Back link */}
        <Link
          to="/about"
          className="relative z-10 inline-block text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition pt-4"
        >
          ← Back to About Mauritius
        </Link>
      </div>
    </div>
  );
}
