const Card: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg max-w-sm">
      <img
        src="/blog-preview-card.png"
        alt="card-image"
        className="rounded-lg h-56 object-cover"
      />

      <button className="bg-background py-2 px-4 my-4 rounded-md font-semibold text-sm hover:bg-black hover:text-white">
        Learning
      </button>

      <p className="leading-normal text-general font-semibold">
        Published 11 Feb 2024
      </p>

      <h2 className="text-2xl font-semibold my-3 hover:text-background">
        HTML & CSS foundations
      </h2>

      <p className="text-general leading-normal font-semibold mb-4">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div className="flex items-center gap-4">
        <img
          src="./image-avatar.webp"
          alt="user-avatar"
          className="h-10 w-10 rounded-full"
        />

        <h2 className="font-semibold"> Greg Hooper </h2>
      </div>
    </div>
  );
};

export default Card;
