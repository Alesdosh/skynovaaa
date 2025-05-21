
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamMember = ({ name, role, image, description }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-drone mb-2">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
