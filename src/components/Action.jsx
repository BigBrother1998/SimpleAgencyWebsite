import React, { useEffect } from "react";
import { GiStarsStack } from "react-icons/gi";
import { MdDraw, MdOutlineMoneyOff, MdTimelapse } from "react-icons/md";
import { TbChecks } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import confetti from "canvas-confetti";

const timelineItems = [
  {
    title: "1. Bezpłatna wycena",
    description:
      "Po pierwszym kontakcie omawiamy Twoje potrzeby i oczekiwania. Na tej podstawie przygotowuję bezpłatną wycenę, abyś mógł poznać pełne koszty i zakres projektu przed podjęciem decyzji.",
    icon: <MdOutlineMoneyOff />,
  },
  {
    title: "2. Projekt",
    description:
      "Tworzę wstępny projekt strony lub aplikacji, który odpowiada Twoim wymaganiom i wizji. Projekt jest dokładnie dopracowywany, aby spełniał najwyższe standardy użyteczności i estetyki.",
    icon: <MdDraw />,
  },
  {
    title: "3. Akceptacja",
    description:
      "Po Twojej akceptacji projektu i wszelkich niezbędnych poprawkach przechodzimy do kolejnych kroków. Dzięki temu masz pełną kontrolę nad finalnym wyglądem i funkcjonalnością projektu.",
    icon: <TbChecks />,
  },
  {
    title: "4. Realizacja",
    description:
      "Rozpoczynam proces kodowania i wdrażania strony lub aplikacji. Regularnie informuję Cię o postępach, aby zapewnić, że finalny efekt spełni Twoje oczekiwania.",
    icon: <MdTimelapse />,
  },
  {
    title: "5. Gwarancja",
    description:
      "Rozpoczynam proces kodowania i wdrażania strony lub aplikacji. Regularnie informuję Cię o postępach, aby zapewnić, że finalny efekt spełni Twoje oczekiwania.",
    icon: <GiStarsStack />,
  },
];

const Action = ({ actionRef }) => {
  return (
    <div ref={actionRef} className="flex justify-center items-center">
      <div className="mx-auto max-w-5xl py-8 sm:px-8 sm:py-12 lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-violet-700">
          Realizacja
        </h2>
        <p className="mx-auto mt-2 mb-12 max-w-xl text-balance font-semibold text-center text-4xl tracking-tight text-gray-950 sm:text-5xl">
          Jak działam 🚀
        </p>

        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            index={index}
            isLastItem={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, description, icon, index, isLastItem }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      if (isLastItem) {
        confetti({
          particleCount: 200,
          spread: 180,
          origin: { y: 0.6 },
          scalar: 1.2,
        });
      }
    } else {
      controls.start("hidden");
    }
  }, [inView, controls, isLastItem]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: { duration: 0.6 },
        },
      }}
      className="relative mb-12 mx-4 sm:mx-8 max-w-lg"
    >
      <div className="flex items-center space-x-4">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-700 text-white text-3xl shadow-lg">
          {icon}
        </span>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="mt-4 p-8 bg-white border-2 border-violet-300 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <p className="text-md leading-7 text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default Action;
