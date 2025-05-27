import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconGlobe } from "@tabler/icons-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-slate-950">
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
              <Link href={""} className="text-slate-50 hover:text-blue-600 duration-200">www.fs.uit.ac.ma</Link>
            </div>
            <div className="flex items-center mt-2">
              <IconBrandFacebook className="text-blue-500 mr-2" />
              <Link href={""} className="text-slate-50 hover:text-blue-600 duration-200">facebook.com/masterreseaux</Link>
            </div>
            <div className="flex items-center mt-2">
              <IconBrandInstagram className="text-pink-500 mr-2" />
              <Link href={""} className="text-slate-50 hover:text-blue-600 duration-200">instagram.com/masterreseaux</Link>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <form action="">
            <div className="mb-4">
              <Label htmlFor="name" className="text-white mb-4">
                Nom
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Votre nom"
                className="text-slate-50 border border-slate-700 bg-slate-900 outline-0"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="name" className="text-white mb-4">
                Email
              </Label>
              <Input
                id="name"
                type="email"
                placeholder="Votre e-mail"
                className="text-slate-50 border border-slate-700 bg-slate-900 outline-0"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="name" className="text-white mb-4">
                Sujet
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Sujet de message"
                className="text-slate-50 border border-slate-700 bg-slate-900 outline-0"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="message" className="text-white mb-4">
                Message
              </Label>
              <Textarea placeholder="Tapez votre message ici." className="text-slate-50 border border-slate-700 bg-slate-900 outline-0" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Envoyer</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
