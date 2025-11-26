import Data, { type LinkType } from "../Data";

const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-4">
      {Data.map((data: LinkType) => {
        const { id, name, link } = data;

        return (
          <a
            href={link}
            key={id}
            className="block text-center bg-link p-4 rounded-lg hover:bg-highlight hover:text-black font-semibold transition-colors duration-300"
          >
            {name}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
