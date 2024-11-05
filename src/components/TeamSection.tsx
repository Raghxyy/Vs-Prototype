import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  instagram: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Harsha Vardhan Sarla",
    role: "CO-FOUNDER",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "VAMSI P",
    role: "CO-FOUNDER",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "LALITESH M",
    role: "DEVELOPER",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "PRANAV M",
    role: "MARKETING",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "SUBRAMANYAM",
    role: "ADMINISTRATOR",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    instagram: "#"
  },
  {
    name: "A Raghu",
    role: "DESIGNER",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    instagram: "#"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#4b6efd] font-bold mb-2">BUILDING TEAM</h2>
          <h3 className="text-3xl font-bold text-gray-800">
            The People Behind the Scenes of the Organization
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-white/80 mb-4">{member.role}</p>
                  <div className="flex gap-4">
                    <a href={member.linkedin} className="text-white/80 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.instagram} className="text-white/80 hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;