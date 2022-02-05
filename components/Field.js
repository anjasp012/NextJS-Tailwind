export default function Field({ name, label, type, className }) {
  const addClassName = className ? `${className}` : "";
  const formControlClassName = `bg-transparent border border-[#BFBFE3] py-3 px-2 w-full ${addClassName}`;
  return (
    <div className="mb-8">
      <label htmlFor={name} className="block mb-1 text-sm font-semibold">
        {label}
      </label>

      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}

      {type === "textarea" && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}
