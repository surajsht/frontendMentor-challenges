import SocialLinks from "./SocialLinks";
import UserDetail from "./UserDetail";

const Card: React.FC = () => {
  return (
    <div className="bg-component p-8 rounded-lg w-[30rem] max-w-full">
      <UserDetail />
      <SocialLinks />
    </div>
  );
};

export default Card;
