'use client'
import React from "react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import { IconGlobe } from "@tabler/icons-react";
import ContactForm from "./ContactForm";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950">
      <div className="container max-w-7xl py-20 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-20 px-4 sm:px-8">
        <div className="col-span-1">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight tracking-tight font-medium text-white mb-4">
            Contactez-nous
          </h4>
          <p className="text-slate-50/80">
            N'hesitez pas à nous contacter pour toute question ou information
            concernant le programme de Master en Réseaux et Télécommunications.
            Nous sommes là pour vous aider !
          </p>
          <div>
            <div className="flex items-center mt-4">
              <IconGlobe className="text-blue-500 mr-2" />
              <Link href={"https://fs.uit.ac.ma/"} target="_blank" className="text-slate-50 hover:text-blue-600 duration-200">fs.uit.ac.ma</Link>
            </div>
            <div className="flex items-center mt-2">
              <IconBrandFacebook className="text-blue-500 mr-2" />
              <Link href={"https://www.facebook.com/FSKenitra"} target="_blank" className="text-slate-50 hover:text-blue-600 duration-200">www.facebook.com/FSKenitra</Link>
            </div>
            <div className="flex items-center mt-2">
              <IconPhone className="text-pink-500 mr-2" />
              <Link href={"tel:+212537329400"} className="text-slate-50 hover:text-blue-600 duration-200">(+212) 5 37 32 94 00</Link>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <ContactForm />
        </div>
      </div>
   
    </section>
  );
};

export default Contact;
