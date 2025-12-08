"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

export default function RefundPolicyPage() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 py-12 text-gray-800 dark:text-gray-200 text-justify">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Refund and Deferral Policy: Coursevita
          </h1>

          <h2 className="text-xl font-semibold mt-8">Refund Policy</h2>
          <ol className="list-decimal ml-6 mt-4 space-y-3">
            <li>
              Learners can apply for a refund of the amount paid toward their
              program at any time before the batch commencement date. A
              processing fee equivalent to 50% of the initial slot booking
              payment will be charged during the refund process. This fee is
              non-refundable.
            </li>
            <li>
              Refund requests made after the batch commencement date are not
              eligible for any refund under any circumstances. Learners are
              responsible for completing any remaining payments, including
              installments under auto-pay setup agreements, if applicable.
            </li>
            <li>
              Refund applications must be submitted through the official email
              <a
                href="mailto:support@coursevita.com"
                className="text-blue-600 underline ml-1"
              >
                support@coursevita.com
              </a>
              . Refunds will be processed within 30 business days from the date
              of approval.
            </li>
            <li>
              In cases where learners have setup autopay or mandate fund their
              enrollment, they are solely responsible for managing any
              cancellation or adjustment charges levied by the service provider.
              CourseVita does not have any authority or influence over
              third-party service agreements.
            </li>
            <li>
              Full program fees must be paid within the specified deadlines
              outlined in the enrollment of the course. Non-compliance with fee
              deadlines may result in forfeiture of admission and cancellation
              of the enrollment.
            </li>
            <li>
              CourseVita reserves the right to modify the refund policy from
              time to time. Any updates will be communicated through official
              channels, including the CourseVita website and learner portal.
            </li>
          </ol>

          <h3 className="text-lg font-semibold mt-8 mb-2">
            Case Details for Refund
          </h3>
          <table className="w-full border text-sm text-left mt-2">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Case</th>
                <th className="border px-4 py-2">Fee Deducted/Charged</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="border px-4 py-2">Before Batch Commencement</td>
                <td className="border px-4 py-2">
                  50% of the initial slot booking payment
                </td>
              </tr>
              <tr className="border-t">
                <td className="border px-4 py-2">After Batch Commencement</td>
                <td className="border px-4 py-2">No refund possible</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-10">Deferral Policy</h2>
          <ol className="list-decimal ml-6 mt-4 space-y-3">
            <li>
              If a learner is unable to start their program due to unforeseen
              circumstances, they can request a deferral to a future batch.
              Deferral requests must be made before the batch commencement date.
            </li>
            <li>
              Learners opting for a deferral must pay 25% of the total program
              fee (inclusive of taxes) upfront as a commitment fee. This fee
              will be adjusted against the total program fee of the deferred
              batch.
            </li>
            <li>
              Deferral requests are allowed only once per learner and must be
              applied to batches commencing within one year of the original
              batch start date. Beyond this timeframe, the deferral request will
              be invalid, and the learner will be required to follow the refund
              policy terms.
            </li>
            <li>
              If a learner does not complete the deferral payment within 7
              calendar days of submitting the request, the deferral will be
              deemed canceled, and the learner will remain enrolled in their
              current batch.
            </li>
            <li>
              Deferral fees are non-refundable, and any additional costs
              incurred due to changes in program fees for the deferred batch
              will be borne by the learner.
            </li>
          </ol>
          <h3 className="text-lg font-semibold mt-8 mb-2">
            Case Details for Deferral
          </h3>
          <table className="w-full border text-sm text-left mt-2">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Case</th>
                <th className="border px-4 py-2">Fee for Deferral</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="border px-4 py-2">Before Batch Commencement</td>
                <td className="border px-4 py-2">
                  25% of the total program fee (inclusive of taxes)
                </td>
              </tr>
              <tr className="border-t">
                <td className="border px-4 py-2">After Batch Commencement</td>
                <td className="border px-4 py-2">Deferral not permitted</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-10">Note</h2>
          <p className="mt-4">
            CourseVita aims to provide a learner-centric approach to managing
            enrollment changes, balancing flexibility with the need to ensure
            resource planning for program delivery.
          </p>
          <p className="mt-2">
            For any queries or assistance regarding refunds or deferrals,
            learners are encouraged to contact the CourseVita support team
            through the official helpdesk.
          </p>
        </div>
      </div>
    </div>
  );
}
