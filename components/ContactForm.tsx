import React, { FormEvent, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

type ContactFormData = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { nom, email, sujet, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nom.trim()) return "Veuillez renseigner votre nom.";
    if (!email.trim() || !emailRegex.test(email))
      return "Veuillez renseigner une adresse email valide.";
    if (!sujet.trim()) return "Veuillez indiquer un sujet.";
    if (!message.trim() || message.length < 10)
      return "Votre message doit contenir au moins 10 caractères.";

    return null;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const honeypot = (e.currentTarget as any).phone?.value;
    if (honeypot) return;

    const errorMsg = validateForm();
    if (errorMsg) {
      toast.warning(errorMsg);
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_bvgdsbr",
          template_id: "template_hhknnap",
          user_id: "GzLJkFyaqIjKgPc-U",
          template_params: formData,
        }),
      });

      if (!res.ok) {
        toast.error("Une erreur est survenue lors de l'envoi du message.");
      } else {
        setFormData({ nom: "", email: "", sujet: "", message: "" });
        toast.success("Merci pour votre message. Nous vous répondrons bientôt.");
      }
    } catch {
      toast.error("Erreur réseau. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <Label htmlFor="name" className="text-white mb-4">
          Nom
        </Label>
        <Input
          id="name"
          name="nom"
          type="text"
          placeholder="Votre nom complet"
          className="text-slate-50 border border-slate-700 bg-slate-900 outline-0 selection:bg-blue-500 selection:text-white"
          onChange={handleChange}
          value={formData.nom}
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="email" className="text-white mb-4">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="exemple@domaine.com"
          className="text-slate-50 border border-slate-700 bg-slate-900 outline-0 selection:bg-blue-500 selection:text-white"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="sujet" className="text-white mb-4">
          Sujet
        </Label>
        <Input
          id="sujet"
          name="sujet"
          type="text"
          placeholder="Objet du message"
          className="text-slate-50 border border-slate-700 bg-slate-900 outline-0 selection:bg-blue-500 selection:text-white"
          onChange={handleChange}
          value={formData.sujet}
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="message" className="text-white mb-4">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tapez votre message ici..."
          className="text-slate-50 border border-slate-700 bg-slate-900 outline-0 selection:bg-blue-500 selection:text-white"
          onChange={handleChange}
          value={formData.message}
        />
      </div>

      {/* Honeypot field (anti-bot) */}
      <input
        type="text"
        name="phone"
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        aria-label="Envoyer un message"
        className="bg-blue-600 hover:bg-blue-700 text-white w-full"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
};

export default ContactForm;
