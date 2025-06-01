import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DossierCandidatureAccordion() {
  return (
    <Accordion
      type="multiple"
      className="w-full max-w-2xl mx-auto my-10 border rounded-md p-4"
    >
      {/* Dossier requis */}
      <AccordionItem value="dossier">
        <AccordionTrigger>Dossier de candidature</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-muted-foreground mb-2">
            Voici la liste des documents à fournir pour déposer votre
            candidature :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>
              📄 <strong>CV</strong> à jour (format PDF)
            </li>
            <li>
              📝 <strong>Lettre de motivation</strong> personnalisée
            </li>
            <li>
              🎓 <strong>Copie du diplôme</strong> de licence (ou attestation en
              cours)
            </li>
            <li>
              📚 <strong>Relevés de notes</strong> des années universitaires
            </li>
            <li>
              🪪 <strong>Pièce d’identité</strong> (carte ou passeport)
            </li>
            <li>
              🌐 (Optionnel) Certificat de niveau en anglais (TOEIC, TOEFL,
              etc.)
            </li>
            <li>📬 (Optionnel) Lettres de recommandation</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Conditions d’admission */}
      <AccordionItem value="conditions">
        <AccordionTrigger>Conditions d’admission</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-6 text-sm space-y-2 text-muted-foreground">
            <li>
              Licence (Bac +3) en informatique, réseaux, télécommunications ou
              domaine équivalent
            </li>
            <li>Bon niveau en systèmes et protocoles réseau</li>
            <li>Intérêt pour la 5G, l’IoT, le Cloud et la cybersécurité</li>
            <li>Capacité à travailler en équipe sur des projets techniques</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Procédure de candidature */}
      <AccordionItem value="procedure">
        <AccordionTrigger>Procédure de candidature</AccordionTrigger>
        <AccordionContent>
          <ol className="list-decimal pl-6 text-sm space-y-2 text-muted-foreground">
            <li>Préparer les documents demandés (voir ci-dessus)</li>
            <li>Remplir le formulaire en ligne sur le site du Master</li>
            <li>Uploader les fichiers requis (CV, diplôme, etc.)</li>
            <li>Recevoir un accusé de réception par email</li>
            <li>Si sélectionné·e : entretien ou validation par dossier</li>
          </ol>
        </AccordionContent>
      </AccordionItem>

      {/* Calendrier */}
      <AccordionItem value="calendar">
        <AccordionTrigger>Calendrier de candidature</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-6 text-sm space-y-2 text-muted-foreground">
            <li>
              📅 Ouverture des candidatures : <strong>15 mars 2025</strong>
            </li>
            <li>
              📅 Clôture des candidatures : <strong>30 mai 2025</strong>
            </li>
            <li>
              📢 Résultats d’admission : <strong>mi-juin 2025</strong>
            </li>
            <li>
              🎓 Rentrée universitaire : <strong>septembre 2025</strong>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Aide & contact */}
      <AccordionItem value="contact">
        <AccordionTrigger>Besoin d’aide ?</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-muted-foreground">
            Si vous avez des questions concernant le processus de candidature,
            n'hésitez pas à nous contacter via le{" "}
            <strong>formulaire de contact</strong> sur le site ou par email à :
            <br />
            <a
              href="mailto: ibrahimi.khalil@uit.ac.ma"
              className="underline text-blue-600"
            >
              ibrahimi.khalil@uit.ac.ma
            </a>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
