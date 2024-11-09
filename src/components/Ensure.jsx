import {
  FaDesktop,
  FaPhone,
  FaCogs,
  FaBolt,
  FaClipboardCheck,
  FaChartBar,
} from "react-icons/fa";

function Ensure({ ensureRef }) {
  const stats = [
    {
      id: 1,
      name: "Responsywność",
      description:
        "Aplikacje jak i strony przystosowane są do każdego rodzaju urządzenia.",
      icon: FaDesktop,
    },
    {
      id: 2,
      name: "Wydajność",
      description:
        "Każda realizacja jest zoptymalizowana pod kątem szybkości działania.",
      icon: FaBolt,
    },
    {
      id: 3,
      name: "Obsługa techniczna",
      description: "Zapewniam wsparcie techniczne po zakończeniu projektu.",
      icon: FaPhone,
    },
    {
      id: 4,
      name: "Modyfikacje",
      description:
        "Dostosowywanie i rozwijanie rozwiązań, zgodnie z potrzebami.",
      icon: FaCogs,
    },
    {
      id: 5,
      name: "Realizacja z wytycznymi",
      description:
        "Strony i aplikacje tworzonę ściśle według Twoich wskazówek.",
      icon: FaClipboardCheck,
    },
    {
      id: 6,
      name: "Analityka i raportowanie",
      description:
        "Tworzenie wykresów oraz raportów, które ułatwiają analizę kluczowych wskaźników.",
      icon: FaChartBar,
    },
  ];

  return (
    <div
      ref={ensureRef}
      className="py-24 sm:py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-violet-700">
          Korzyści
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Co zapewniam 🤝
        </p>

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8 cursor-pointer">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white relative flex flex-col items-center gap-y-4 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2 border border-violet-200"
              >
                <div className="relative z-10 mb-2">
                  <stat.icon className="h-12 w-12 text-violet-600 drop-shadow-md" />
                </div>
                <dd className="relative text-2xl font-semibold text-gray-900 sm:text-2xl z-10">
                  {stat.name}
                </dd>
                <dt className="relative text-sm mt-3 font-light text-gray-600 z-10 max-w-xs">
                  {stat.description}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Ensure;
