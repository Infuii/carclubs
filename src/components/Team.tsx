import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    description: "Leading the company with a vision for innovation.",
    image: "john.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    description: "Overseeing technology strategies and operations.",
    image: "jane.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "CFO",
    description: "Managing financial planning and risk management.",
    image: "alice.jpg",
  },
  {
    id: 4,
    name: "Bob Brown",
    title: "CMO",
    description: "Developing marketing strategies and brand management.",
    image: "bob.jpg",
  },
  {
    id: 5,
    name: "Charlie Green",
    title: "COO",
    description: "Ensuring operational efficiency across the organization.",
    image: "charlie.jpg",
  },
  {
    id: 6,
    name: "Daisy Blue",
    title: "HR Manager",
    description: "Fostering a positive work environment and culture.",
    image: "daisy.jpg",
  },
  {
    id: 7,
    name: "Ethan Black",
    title: "Lead Developer",
    description: "Driving software development and technological advancements.",
    image: "ethan.jpg",
  },
  {
    id: 8,
    name: "Fiona White",
    title: "Designer",
    description: "Creating visually appealing and user-friendly designs.",
    image: "fiona.jpg",
  },
];

const Team = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      }));
    }
  }, [controls, inView]);

  const memberVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (i: unknown) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: (i as number) * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <div className="container mx-auto my-16 px-4">
      <h2 className="text-4xl font-bold text-black mb-8 text-center">
        Our Team
      </h2>
      <div ref={ref} className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="md:w-1/3 p-4"
            initial="hidden"
            animate={controls}
            custom={index}
            variants={memberVariant}
          >
            <div className="bg-orange-400 rounded-lg shadow-lg overflow-hidden text-center p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-black">{member.name}</h3>
              <h4 className="text-md font-semibold text-gray-800">
                {member.title}
              </h4>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
