import { cn } from "@/lib/utils";
import {
  IconNetwork,
  IconDeviceMobile,
  IconCloudComputing,
  IconLockCog,
  IconSatellite,
  IconTopologyRing,
  IconCpu,
  IconSchool,
} from "@tabler/icons-react";

export function Program() {
  const features = [
    {
      title: "Réseaux informatiques & protocoles",
      description:
        "Compréhension des architectures réseau, des protocoles (TCP/IP, DNS, DHCP...) et des couches OSI.",
      icon: <IconNetwork className="w-8 h-8" />,
    },
    {
      title: "Technologies mobiles (4G/5G)",
      description:
        "Étude approfondie des réseaux mobiles, de la 4G à la 5G, et des infrastructures de télécommunications.",
      icon: <IconDeviceMobile className="w-8 h-8" />,
    },
    {
      title: "Cloud & Virtualisation",
      description:
        "Déploiement de services cloud, virtualisation (VMware, Docker), et orchestration avec Kubernetes.",
      icon: <IconCloudComputing className="w-8 h-8" />,
    },
    {
      title: "Cybersécurité des réseaux",
      description:
        "Protection des systèmes, détection des intrusions, VPN, pare-feu, et bonnes pratiques de sécurité.",
      icon: <IconLockCog className="w-8 h-8" />,
    },
    {
      title: "Internet des Objets (IoT)",
      description:
        "Communication M2M, protocoles IoT (MQTT, CoAP), capteurs et passerelles intelligentes.",
      icon: <IconSatellite className="w-8 h-8" />,
    },
    {
      title: "Réseaux définis par logiciel (SDN)",
      description:
        "Programmation des réseaux, OpenFlow, et séparation du plan de contrôle et de données.",
      icon: <IconTopologyRing className="w-8 h-8" />,
    },
    {
      title: "Systèmes embarqués & programmation",
      description:
        "Conception de systèmes connectés, développement embarqué en C/C++ et protocoles temps réel.",
      icon: <IconCpu className="w-8 h-8" />,
    },
    {
      title: "Projets & veille technologique",
      description:
        "Travaux pratiques, projets en groupe et exploration des dernières tendances en télécoms.",
      icon: <IconSchool className="w-8 h-8" />,
    },
  ];

  return (
    <section id="program" className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Un programme complet, à la pointe des technologies réseau
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Le Master Réseaux et Services Mobiles offre une formation approfondie
          dans les domaines des télécommunications, des réseaux mobiles, du
          cloud, de l’IoT et de la cybersécurité. Conçu pour répondre aux
          besoins actuels de l’industrie, il combine théorie, pratique et
          projets concrets pour former les ingénieurs réseau de demain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
