const UserDetail: React.FC = () => {
  return (
    <div className="text-center">
      <img
        src="./user-avatar.jpeg"
        alt="user-avatar"
        className="h-28 w-h-28 rounded-full mb-9 mx-auto"
      />

      <h2 className="text-2xl font-semibold"> Jessica Randall </h2>

      <span className="text-sm text-highlight mt-3  mb-4 inline-block font-semibold">
        London, United Kingdom
      </span>

      <p className="text-sm mb-8"> "Front-end developer and avid reader." </p>
    </div>
  );
};

export default UserDetail;
