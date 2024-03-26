import React from 'react'
import{Navbar}from"../../Common/Navbar/Navbar";

const Termsandconditions = () => {
    return (
<div>
<Navbar/>
      <div className="bg-[#18332f]  text-white text-xl">
      <div className=" w-[90rem] h-fit flex justify-center">
      <div className="p-[7rem] overflow-y-scroll text-justify">


        <div  className="flex justify-center py-5 mb-10 bg-[#8ba17f rounded-2xl">
          <p className="font-poppins bg-green-800 text-center rounded-2xl p-[1rem] w-full font-semibold text-2xl">
            Terms And Conditions
          </p>
        </div>

        <div className="text-white text-2xl text-left">
          <p className="font-semibold font-poppins">
            Effective Date:16/03/2000
          </p>
        </div>
        <div >
          <p className=" text-white text-2xl text-left font-semibold font-poppins">
          Terms and Conditions for AgroFundx
          </p>
        </div>

        <div className="py-2 px-10 font-medium font-poppins">
          Welcome to AgroFundx. By using our App, you agree to comply with and
          be bound by these Terms and Conditions. Please read these Terms and
          Conditions carefully before using our App.
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">1. Acceptance of Terms</p>
          <p className="pl-5 pr-10 font-poppins">
            By accessing or using the App, you acknowledge that you have read,
            understood, and agree to these Terms and Conditions. If you do not
            agree with any part of these Terms and Conditions, please do not use
            our App.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">2. Eligibility</p>
          <p className="pl-5 pr-10 font-poppins">
            You must be at least 16 years old to use the App. By using the App,
            you represent and warrant that you meet the age requirement and that
            you have the legal capacity to enter into these Terms and
            Conditions.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">3. User Accounts</p>
          <p className="font-semibold font-poppins">3.1. Registration</p>
          <p className="pl-5 pr-10 font-poppins">
            To access certain features of the App, you may be required to
            register for an account. You agree to provide accurate, current, and
            complete information during the registration process and to update
            such information to keep it accurate, current, and complete.
          </p>
          <p className="font-semibold font-poppins">3.2. Account Security</p>
          <p className="pl-5 pr-10 font-poppins">
            You are responsible for maintaining the confidentiality of your
            account credentials, including your username and password. You agree
            to notify us immediately of any unauthorized use of your account or
            any other breach of security.
          </p>
          <p className="font-semibold font-poppins">3.3. Account Termination</p>
          <p className="pl-5 pr-10 font-poppins">
            We reserve the right to terminate or suspend your account and access
            to the App, with or without cause, at our discretion, and without
            notice. Upon termination, you will lose access to your account and
            any User Content associated with it.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">4. User Content</p>
          <p className="font-semibold font-poppins">
            4.1. User-Generated Content
          </p>
          <p className="pl-5 pr-10 font-poppins">
            Users of the App may submit content, including but not limited to
            text, images, and files ("User Content"). You retain ownership of
            your User Content, but by submitting it, you grant us a worldwide,
            non-exclusive, royalty-free, sublicensable, and transferable license
            to use, reproduce, distribute, prepare derivative works of, display,
            and perform your User Content in connection with the App.
          </p>
          <p className="font-semibold font-poppins">4.2. Prohibited Content</p>
          <p className="pl-5 pr-10 font-poppins">
            You agree not to submit or transmit any User Content that is
            unlawful, infringing, defamatory, obscene, harmful, or otherwise
            objectionable.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            5. Payment and Transactions
          </p>
          <p className="font-semibold font-poppins">
            5.1. Transaction Processing
          </p>
          <p className="pl-5 pr-10 font-poppins">
            Users may engage in financial tracking on the App, including
            loans and subsidies for services provided by us. You agree to comply
            with our payment policies and to pay all fees and charges associated
            with your transactions.
          </p>
          <p className="font-semibold font-poppins">5.2. Payment Disputes</p>
          <p className="pl-5 pr-10 font-poppins">
            In the event of a payment dispute or disagreement with another user,
            you agree to resolve such disputes directly with the other party. We
            are not responsible for resolving payment disputes.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">6. Privacy</p>
          <p className="pl-5 pr-10 font-poppins">
            Your use of the App is governed by our Privacy Policy, which can be
            found at{" "}
            <span
              className="text-blue underline cursor-pointer"

            >
              Privacy Policy
            </span>
            . By using the App, you consent to the practices described in the
            Privacy Policy.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">7. Termination</p>
          <p className="pl-5 pr-10 font-poppins">
            We reserve the right to terminate or suspend your account and access
            to the App, with or without cause, at our discretion, and without
            notice. Upon termination, you will lose access to your account and
            any User Content associated with it.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">8. Intellectual Property</p>
          <p className="pl-5 pr-10 font-poppins">
            The App and its content, including but not limited to text,
            graphics, logos, and software, are protected by intellectual
            property rights owned by us or our licensors. You agree not to
            reproduce, distribute, or create derivative works based on the App
            without our prior written consent.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            9. Disclaimer of Warranties
          </p>
          <p className="pl-5 pr-10 font-poppins">
            The App is provided on an "as is" and "as available" basis, without
            any warranties of any kind, either express or implied, including but
            not limited to warranties of merchantability, fitness for a
            particular purpose, or non-infringement.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            10. Limitation of Liability
          </p>
          <p className="pl-5 pr-10 font-poppins">
            To the fullest extent permitted by applicable law, we shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses, resulting from:
          </p>
          <div className="px-10 flex flex-col gap-2">
            <p>Your use or inability to use the App.</p>
            <p>
              Any unauthorized access to or use of our servers and/or any
              personal information stored therein.
            </p>
            <p>
              Any interruption or cessation of transmission to or from the App.
            </p>
            <p>
              Any bugs, viruses, Trojan horses, or the like that may be
              transmitted to or through the App.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            11. Governing Law and Dispute Resolution
          </p>
          <p className="pl-5 pr-10 font-poppins">
            These Terms and Conditions are governed by the laws of India. Any
            dispute arising out of or in connection with these Terms and
            Conditions shall be subject to the exclusive jurisdiction of the
            courts of India.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">
            12. Changes to Terms and Conditions
          </p>
          <p className="pl-5 pr-10 font-poppins">
            We reserve the right to update or revise these Terms and Conditions
            at any time. We will notify you of any material changes by posting
            the updated Terms and Conditions within the App.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold font-poppins">13. Contact Us</p>
          <p className="pl-5 pr-10 font-poppins">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at{" "}
            <span className="underline text-blue">agrofundx@gmail.com</span>.
          </p>
          <p className="pl-5 pr-10 font-poppins">
            By using our App, you agree to the terms and conditions outlined in
            these Terms and Conditions.
          </p>
          <div className="px-10 mt-[1rem]">
            <p>AgroFundx</p>
            <p>Kovaipudur</p>
            <p>Coimbatore , 641042</p>
            <p>9876543210</p>
            <p>agrofundx@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

    </div>
</div>
    )
  }

  export default Termsandconditions
