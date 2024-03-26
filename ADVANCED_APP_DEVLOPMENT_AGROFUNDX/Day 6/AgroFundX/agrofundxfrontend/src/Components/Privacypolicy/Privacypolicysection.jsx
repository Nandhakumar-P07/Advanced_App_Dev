import React from "react";
import { useNavigate } from "react-router-dom";

export const Privacypolicysection = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="xl:px-72 mt-32 xl:pb-24 lg:pb-12 lg:px-12 bg-[#f9f9f9] h-full">
        <div className="flex z-10 pt-6 items-center gap-3 text-sm text-darkteal">
          <span onClick={() => navigate("/home")}>
            <i className="fa-solid fa-house-chimney"></i>
          </span>
          <span className="text-lightgray text-sm">
            <i className="fa-solid text-sm fa-angle-right"></i>
          </span>
          <p>Privacy Policy</p>
        </div>
        <div className="flex flex-col text-darkteal text-justify text-lg gap-7">
          <div className="mt-8 flex flex-col gap-4">
            <p className="font-bold text-darkteal text-2xl">Who we are</p>
            <p>Our platform address is: https://agrofundx.com.</p>
          </div>
          <div>
            <p className="font-bold text-darkteal text-2xl">
              What personal data we collect and why we collect it
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-darkteal">Comments</p>

            <p>
              When users leave comments on the platform, we collect the data
              shown in the comments form, along with the user’s IP address and
              browser user agent string to help spam detection.
            </p>
            <p>
              An anonymized string created from the user's email address may be
              provided to the Gravatar service to see if the user is using it.
              The Gravatar service privacy policy is available here:{" "}
              <a href="https://automattic.com/privacy/">
                Gravatar Privacy Policy
              </a>
              . After approval of the comment, the user's profile picture is
              visible to the public in the context of the comment.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-darkteal">Media</p>

            <p>
              If users upload images to the platform, they should avoid
              uploading images with embedded location data (EXIF GPS) included.
              Visitors to the platform can download and extract any location
              data from images on the platform.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-darkteal">Contact forms</p>

            <p className="font-bold text-darkteal">Cookies</p>
            <p>
              If users leave a comment on our platform, they may opt-in to
              saving their name, email address, and website in cookies. These
              are for the user's convenience so that they do not have to fill in
              their details again when they leave another comment. These cookies
              will last for one year.
            </p>
            <p>
              If users have an account and they log in to the platform, we will
              set a temporary cookie to determine if their browser accepts
              cookies. This cookie contains no personal data and is discarded
              when the user closes their browser.
            </p>
            <p>
              When users log in, we will also set up several cookies to save
              their login information and their screen display choices. Login
              cookies last for two days, and screen options cookies last for a
              year. If users select “Remember Me”, their login will persist for
              two weeks. If they log out of their account, the login cookies
              will be removed.
            </p>
            <p>
              If users edit or publish an article, an additional cookie will be
              saved in their browser. This cookie includes no personal data and
              simply indicates the post ID of the article they just edited. It
              expires after 1 day.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-darkteal">
              Embedded content from other websites
            </p>

            <p>
              Articles on this platform may include embedded content (e.g.
              videos, images, articles, etc.). Embedded content from other
              websites behaves in the exact same way as if the visitor has
              visited the other website.
            </p>
            <p>
              These websites may collect data about users, use cookies, embed
              additional third-party tracking, and monitor user interaction with
              that embedded content, including tracking user interaction with
              the embedded content if users have an account and are logged in to
              that website.
            </p>
            <p className="font-bold ">Analytics</p>
            <p className="font-bold text-2xl">Who we share your data with</p>
            <p className="font-bold text-2xl">How long we retain your data</p>
            <p>
              If users leave a comment, the comment and its metadata are
              retained indefinitely. This is so we can recognize and approve any
              follow-up comments automatically instead of holding them in a
              moderation queue.
            </p>
            <p>
              For users that register on our platform, we also store the
              personal information they provide in their user profile. All users
              can see, edit, or delete their personal information at any time
              (except they cannot change their username). Platform
              administrators can also see and edit that information.
            </p>
            <p className="font-bold text-2xl">
              What rights you have over your data
            </p>
            <p>
              If users have an account on this platform, or have left comments,
              they can request to receive an exported file of the personal data
              we hold about them, including any data they have provided to us.
              They can also request that we erase any personal data we hold
              about them. This does not include any data we are obliged to keep
              for administrative, legal, or security purposes.
            </p>
            <p className="font-bold text-2xl">Where we send your data</p>
            <p>
              Visitor comments may be checked through an automated spam
              detection service.
            </p>
            <p className="font-bold text-2xl">Your contact information</p>
            <p className="font-bold text-2xl">Additional information</p>
            <p className="font-bold">How we protect your data</p>
            <p className="font-bold">
              What data breach procedures we have in place
            </p>
            <p className="font-bold">What third parties we receive data from</p>
            <p className="font-bold">
              What automated decision making and/or profiling we do with user
              data
            </p>
            <p className="font-bold">
              Industry regulatory disclosure requirements
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
