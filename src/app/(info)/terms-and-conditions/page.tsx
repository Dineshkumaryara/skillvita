"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

export default function TermsPage() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 py-12 text-gray-800 dark:text-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

          <section className="space-y-4 text-justify">
            <p className="text-lg">Welcome to CourseVita!</p>
            <p>
              These terms and conditions outline the rules and regulations for
              the use of CourseVita (BHUVANA INFORMATION TECHNOLOGIES PRIVATE
              LIMITED)&apos;s Website, located at https://www.coursevita.com/.
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use CourseVita if you do not agree
              to all of the terms and conditions stated on this page.
            </p>
            <br />
            Terms and Conditions ​ Welcome to CourseVita! ​ These terms and
            conditions outline the rules and regulations for the use of
            CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE LIMITED)&apos;s
            Website, located at https://www.coursevita.com/. By accessing this
            website we assume you accept these terms and conditions. Do not
            continue to use CourseVita if you do not agree to take all of the
            terms and conditions stated on this page. ​ The following
            terminology applies to these Terms and Conditions, Privacy Statement
            and Disclaimer Notice and all Agreements: &quot;Client&quot;,
            &quot;You&quot; and &quot;Your&quot; refers to you, the person log
            on this website and compliant to the Company&apos;s terms and
            conditions. &quot;The Company&quot;, &quot;Ourselves&quot;,
            &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our
            Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;,
            refers to both the Client and ourselves. All terms refer to the
            offer, acceptance and consideration of payment necessary to
            undertake the process of our assistance to the Client in the most
            appropriate manner for the express purpose of meeting the
            Client&apos;s needs in respect of provision of the Company&apos;s
            stated services, in accordance with and subject to, prevailing law
            of in. Any use of the above terminology or other words in the
            singular, plural, capitalization and/or he/she or they, are taken as
            interchangeable and therefore as referring to same.
            <h2 className="text-xl font-semibold mt-10">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing CourseVita, you agreed
              to use cookies in agreement with the CourseVita(BHUVANA
              INFORMATION TECHNOLOGIES PRIVATE LIMITED)&apos;s Privacy Policy.
              <br />
              Most interactive websites use cookies to let us retrieve the
              user&apos;s details for each visit. Cookies are used by our
              website to enable the functionality of certain areas to make it
              easier for people visiting our website. Some of our
              affiliate/advertising partners may also use cookies.
            </p>
            <h2 className="text-xl font-semibold mt-10">License</h2>
            <p>
              Unless otherwise stated, CourseVita(BHUVANA INFORMATION
              TECHNOLOGIES PRIVATE LIMITED) and/or its licensors own the
              intellectual property rights for all material on CourseVita. All
              intellectual property rights are reserved. You may access this
              from CourseVita for your own personal use subjected to
              restrictions set in these terms and conditions.
              <br />
              <br />
              You must not:
            </p>
            <ul className="list-disc ml-6">
              <li>Republish material from CourseVita</li>
              <li>Sell, rent or sub-license material from CourseVita</li>
              <li>Reproduce or copy material from CourseVita</li>
              <li>Redistribute content from CourseVita</li>
            </ul>
            This Agreement shall begin on the date hereof. Our Terms and
            Conditions were created with the help of the{" "}
            <a href="https://www.termsandconditionsgenerator.com/">
              Free Terms and Conditions Generator
            </a>
            <p className="mt-2">
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE LIMITED) does
              not filter, edit, publish or review Comments prior to their
              presence on the website. Comments do not reflect the views and
              opinions of CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE
              LIMITED),its agents and/or affiliates. Comments reflect the views
              and opinions of the person who post their views and opinions. To
              the extent permitted by applicable laws, CourseVita(BHUVANA
              INFORMATION TECHNOLOGIES PRIVATE LIMITED) shall not be liable for
              the Comments or for any liability, damages or expenses caused
              and/or suffered as a result of any use of and/or posting of and/or
              appearance of the Comments on this website.
            </p>
            <br />
            CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE LIMITED)
            reserves the right to monitor all Comments and to remove any
            Comments which can be considered inappropriate, offensive or causes
            breach of these Terms and Conditions
            <br />
            You warrant and represent that:
            <ul className="list-disc ml-6 space-y-1">
              <br />
              <li>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so.
              </li>
              <li>
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent, or trademark of
                any third party.
              </li>
              <li>
                The Comments do not contain any defamatory, libelous, offensive,
                indecent, or otherwise unlawful material which is an invasion of
                privacy.
              </li>
              <li>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </li>
            </ul>
            <br />
            You hereby grant CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE
            LIMITED) a non-exclusive license to use, reproduce, edit and
            authorize others to use, reproduce and edit any of your Comments in
            any and all forms, formats or media.
            <br />
            <h2 className="text-xl font-semibold mt-10">
              Hyperlinking to our Content
            </h2>
            <p>
              Certain organizations may link to our Website without prior
              approval:
            </p>
            <ul className="list-disc ml-6">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>
                {" "}
                Online directory distributors may link to our Website in the
                same manner as they hyperlink to the Websites of other listed
                businesses; and
              </li>
              <li>
                System wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </li>
            </ul>
            <br />
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party&apos;s site.
            <br />
            We may consider and approve other link requests from the following
            types of organizations:
            <br />
            <br />
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Commonly-known consumer and/or business information sources
              </li>
              <li>Dot.com community sites</li>
              <li>Associations or other groups representing charities</li>
              <li>Online directory distributors</li>
              <li>Internet portals</li>
              <li>Accounting, law, and consulting firms</li>
              <li>Educational institutions and trade associations</li>
            </ul>
            <p className="mt-4">
              <br />
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE LIMITED); and
              (d) the link is in the context of general resource information.
              <br />
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party&apos;s site. If you are one of the organizations
              listed in paragraph 2 above and are interested in linking to our
              website, you must inform us by sending an e-mail to
              CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE LIMITED).
              Please include your name, your organization name, contact
              information as well as the URL of your site, a list of any URLs
              from which you intend to link to our Website, and a list of the
              URLs on our site to which you would like to link. Wait 2-3 weeks
              for a response. <br />
              Approved organizations may hyperlink to our Website as follows:
              <br />
              <br />
              <ul className="list-disc ml-6 space-y-1">
                <li>By use of our corporate name</li>
                <li>By use of the uniform resource locator being linked to</li>
                <li>
                  By use of any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party&apos;s site
                </li>
              </ul>
              <br />
              No use of CourseVita(BHUVANA INFORMATION TECHNOLOGIES PRIVATE
              LIMITED)&apos;s logo or other artwork will be allowed for linking
              absent a trademark license agreement.
            </p>
            <h2 className="text-xl font-semibold mt-10">iFrames</h2>
            <p className="mt-2">
              Without prior approval and written permission, you may not create
              frames around our webpages that alter the visual presentation or
              appearance of our Website.
            </p>
            <h2 className="text-xl font-semibold mt-10">Content Liability</h2>
            <p className="mt-2">
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights. <br />
              Reservation of Rights
              <br />
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amend these terms and conditions and its linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions
              <br />
              <br />
            </p>
            <p className="mt-4 font-semibold">
              {" "}
              Removal of links from our website
            </p>
            <p className="mt-2">
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly. <br />
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>
            <h2 className="text-xl font-semibold mt-10">Disclaimer</h2>
            <p className="mt-2">
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:{" "}
              <br />
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
            <p className="mt-2">
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty. As long as the website and the
              information and services on the website are provided free of
              charge, we will not be liable for any loss or damage of any
              nature.`
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
