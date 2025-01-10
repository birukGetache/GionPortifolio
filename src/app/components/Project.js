import React from 'react';

const teamMembers = [

  {
    id: 1,
    name: 'Lucky Me Platform',
    role: 'On develoment',
    image: '/logo.png',
    linkedin: 'https://linkedin.com/in/Kalab',
    twitter: 'https://twitter.com/Kalab',
    profile: 'https://example.com/Kalab',
  },
  {
    id: 2,
    name: 'Gion Food Delivery',
    role: 'On development',
    image: '/logo.png',
    linkedin: 'https://linkedin.com/in/Kaleb',
    twitter: 'https://twitter.com/Kaleb',
    profile: 'https://example.com/Kaleb',
  },
  {
    id: 3,
    name: 'Tana Transport System',
    role: 'On Development',
    image: '/logo.png',
    linkedin: 'https://linkedin.com/in/birukf',
    twitter: 'https://twitter.com/birukf',
    profile: 'https://example.com/birukf',
  },
    {id: 4,
    name: ' Daga Buisness Group',
    role: 'On Production',
    image: '/logo.png',
    linkedin: 'https://linkedin.com/in/birukf',
    twitter: 'https://twitter.com/birukf',
    profile: 'https://example.com/birukf',
  },
];

const Team = ({isVisible}) => {
  return (
    <section
    className={`container mx-auto px-4 py-12 service transition-opacity duration-500 ease-in-out ${
      isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
    }`}
    id="project"
  >
      <h2 className="text-3xl font-semibold  text-gray-800 text-center mb-8">Our Next Step</h2>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
                      className="bg-white bg-opacity-10 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-2 border-green-600 w-full max-w-full sm:w-full"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[80px] h-[80px] m-auto object-cover rounded-full"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-gray-600">{member.name}</h3>
              <p className="text-gray-500 mt-2">{member.role}</p>
              <p className="text-blue-500 p-1 cursor-pointer">More</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
