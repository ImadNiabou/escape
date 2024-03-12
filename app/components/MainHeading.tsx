
const MainHeading = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="text-[#1F334E] text-3xl font-semibold pb-5 mb-5">
        {title}
      </h2>
    </div>
  );
};

export default MainHeading;
