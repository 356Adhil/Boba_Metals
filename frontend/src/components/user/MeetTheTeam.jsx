import React from 'react';
import './style.css'

const TeamMember = ({ name, position, imageUrl }) => (
  <div className="flex flex-col items-center mb-12 md:w-1/3">
    <img src={imageUrl} alt={name} className="md:w-36 md:h-36 w-28 h-28 rounded-full mb-4 shadow-lg" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{position}</p>
  </div>
);

const MeetTheTeam = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-4xl font-semibold text-center mb-10">Meet the Team</h2>
        <div className="flex flex-col md:flex-row md:justify-center">
          <TeamMember
            name="UMMER K P"
            position="Owner"
            imageUrl={process.env.PUBLIC_URL + '/kaku.jpg'}
          />
          <TeamMember
            name="AKBAR ALI K P"
            position="Partner"
            imageUrl={process.env.PUBLIC_URL + '/Boppa.jpg'}
          />
          <TeamMember
            name="SHAJI K P"
            position="Partner"
            imageUrl="path_to_partner_image.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
