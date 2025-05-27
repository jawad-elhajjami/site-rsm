import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "Quels sont les prérequis pour intégrer le master ?",
    answer:
      "Le master est ouvert aux étudiants titulaires d’une licence en informatique, télécommunications, ou dans un domaine technique connexe. Une bonne maîtrise des bases en réseaux est recommandée.",
  },
  {
    question: "Le master est-il disponible en alternance ?",
    answer:
      "Oui, l’alternance est possible en M2 selon les partenariats entreprises. Cela permet aux étudiants de combiner expérience professionnelle et apprentissage académique.",
  },
  {
    question: "Quelles sont les principales technologies abordées ?",
    answer:
      "Le programme couvre les réseaux mobiles (4G/5G), l’IoT, le cloud, les SDN, la cybersécurité, ainsi que les outils comme Cisco Packet Tracer, Wireshark, et des plateformes cloud.",
  },
  {
    question: "Quels débouchés professionnels après le master ?",
    answer:
      "Les diplômés peuvent devenir ingénieurs réseau, administrateurs systèmes, consultants cloud, ou chefs de projet technique dans des secteurs comme les télécoms, la cybersécurité, ou les data centers.",
  },
  {
    question: "Comment candidater au programme ?",
    answer:
      "La candidature se fait en ligne via la plateforme de l’université, avec un dossier comprenant votre CV, relevés de notes, lettre de motivation, et éventuellement un entretien de sélection.",
  },
];

const FAQ = () => {
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Questions Fréquemment Posées
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Vous avez des questions sur le programme, l’admission ou la vie
          étudiante ? Retrouvez ici les réponses aux interrogations les plus
          courantes de nos futurs étudiants.
        </p>
      </div>
      <div className="p-4 sm:p-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
