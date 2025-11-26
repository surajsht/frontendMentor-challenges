const Card: React.FC = () => {
  return (
    <div className="bg-white p-4 max-w-72 rounded-lg">
      <img
        src="/image-qr-code.png"
        alt="qr-code"
        className="h-72 object-cover mb-6 rounded-lg"
      />

      <div className="text-center">
        <h2 className="text-[22px] font-bold text-title mb-4">
          Improve your front-end skills by building projects
        </h2>

        <p className="text-general text-[0.94rem]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
