import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { DossierCandidatureAccordion } from "@/components/DossierCandidatureAccordion";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="container max-w-5xl mx-auto py-20 px-8 flex flex-col items-center">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mt-20 text-center max-w-4xl mx-auto leading-tight">
          Candidature au Master Réseaux et Services Mobiles
        </h1>
        <p className="text-center max-w-4xl mx-auto mt-8 text-slate-950/70">
          Le Master Réseaux et Services Mobiles (RSM) forme des ingénieurs
          spécialisés dans les technologies des réseaux, la 5G, le cloud, l’IoT,
          et la cybersécurité. Si vous souhaitez rejoindre un programme exigeant
          et tourné vers l’innovation, suivez les étapes ci-dessous pour déposer
          votre candidature.
        </p>
        <Button asChild className="mt-8">
          <Link
            target="_blank"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSfDua96viOMxSw6GtrpVuuW8yTw4vo-zRrHBJxKSKL10nbDLw/viewform?usp=dialog"
            }
          >
            Déposer ma candidature
          </Link>
        </Button>
        <DossierCandidatureAccordion />
        <GoogleMapEmbed />
      </div>
    </div>
  );
};

export default page;
