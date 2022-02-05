export default function ContactItem({ label, value, icon, className }) {
  const addClassName = className ? `${className}` : "";

  return (
    <div className={`flex items-start ${className}`}>
      <img src={icon} className="w-6" alt="" />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
