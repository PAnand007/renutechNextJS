import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-[#3b7d9a] bg-opacity-25 w-full">
      <footer
        className="   text-white pb-3 px-4 md:px-12 overflow-hidden"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="container flex flex-col justify-center items-center">
          <div className="md:flex items-center md:pt-4">
            <h3 className="text-2xl pt-2 md:pt-0 font-extrabold mr-4 md:border-r-2 md:pr-4">
              RENUTECH
            </h3>
            <div className="flex justify-center items-center pt-4 md:pt-0">
              <Link
                href="https://www.instagram.com/renutechspnrec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="mr-4"
              >
                <FaInstagram size={22} />
              </Link>
              <Link
                href="https://x.com/renutech_spnrec?t=bcLEFar8M6Nb_TAhlBl2kA&s=09"
                target="_blank"
                className="mr-4"
              >
                <FaXTwitter size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/renutech/"
                target="_blank"
                className="mr-4"
              >
                <FaLinkedinIn size={22} />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center md:w-full md:px-40 font-semibold mt-6">
            <Link href="/" className="m-2 lg:border-r-2 lg:px-16">
              Home
            </Link>
            <Link href="/events" className="m-2 lg::border-r-2 lg:px-16">
              Events
            </Link>
            <Link href="/about" className="m-2 lg:border-r-2 lg:px-16">
              About
            </Link>{" "}
            <Link href="/contact" className="m-2 lg:border-r-2 lg:px-16">
              Contact
            </Link>
            <Link href="/about" className=" lg:pl-16">
              Developers
            </Link>
          </div>
        </div>
        <div className="container text-center mt-4 cursor-default">
          <p className="hidden md:block">
            &quot;Join us for an unforgettable celebration of talent,
            creativity, and community at our college fest!&rdquo; <br />
            #ExperienceTheMagic #CollegeFest2024 <br />
            &ldquo;Don&apos;t miss out!&quot;
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4">
            <span className="md:border-r-4 pr-2">&copy; 2024 RenuTech </span>
            <Link
              href="https://www.linkedin.com/company/arunabytes-innovations"
              className="font-bold pl-2"
            >
              &nbsp;Developed by Arunabyte Innovations
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
