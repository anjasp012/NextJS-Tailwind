export default function SkillCard({ name, level, image, className }) {
  const imageClassName = className ? ` ${className}` : "";

  return (
    <div className="flex items-center bg-white shadow-[0px_15px_30px_rgba(0,0,0,0.1)] rounded-md p-5 hover:scale-105 transition-all">
      <img src={image} className={`h-16 mr-5${imageClassName}`} alt="" />
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold">{level}</p>
      </div>
    </div>
  );
}
