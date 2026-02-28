const SkillCard = ({ icon, name }) => {
  return (
    <div className="
      group
      p-6
      rounded-2xl
      bg-gray-50 dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      flex flex-col items-center justify-center
      text-center
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-2
      transition-all duration-300
      cursor-pointer
    ">

      <div className="
        text-4xl mb-4
        text-gray-700 dark:text-gray-300
        group-hover:text-blue-600 dark:group-hover:text-blue-400
        transition-colors duration-300">
        {icon}
      </div>

      <h4 className="font-semibold text-sm tracking-wide">
        {name}
      </h4>

    </div>
  );
};
export default SkillCard