import { AnimatedProfessors } from "@/components/ui/animated-professors";

export function Professors() {
  const professors = [
    {
      quote:
        "La théorie des jeux appliquée aux réseaux permet aux étudiants de mieux comprendre les stratégies d’allocation de ressources et de modéliser des situations complexes.",
      name: "Mouna EL MACHKOUR",
      designation: "Enseignante en théorie des jeux",
      src: "/images/professors/machkour.jpg", 
    },
    {
      quote:
        "Nous préparons les étudiants à maîtriser les technologies mobiles modernes, en mettant l’accent sur la 4G, 5G et l’optimisation des réseaux mobiles.",
      name: "Ibrahimi Khalil",
      designation: "Professeur en réseaux mobiles",
      src: "/images/professors/ibrahimi.jpg", 
    },
    {
      quote:
        "Les processus stochastiques sont essentiels pour modéliser l’incertitude dans les réseaux. Les étudiants acquièrent des outils mathématiques puissants pour l’analyse des performances.",
      name: "Youssef Oubaydallah",
      designation: "Professeur de mathématiques et processus stochastiques",
      src: "/images/professors/oubaydallah.jpg", 
    },
    {
      quote:
        "La compréhension approfondie des réseaux informatiques est la clé pour construire des systèmes performants, sûrs et évolutifs.",
      name: "Fakhri Youssef",
      designation: "Professeur en réseaux informatiques",
      src: "/images/professors/fakhri.jpg", 
    },
    {
      quote:
        "L’architecture avancée des réseaux mobiles est un pilier fondamental pour répondre aux défis des communications de demain.",
      name: "Tomader Mazri",
      designation: "Professeure en architectures avancées des réseaux mobiles",
      src: "/images/professors/mazri.jpg", 
    },
  ];

  return <AnimatedProfessors professors={professors} />;
}
