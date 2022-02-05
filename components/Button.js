export default function Button({ href, children, className, variant }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    border:
      "text-yellow-400 py-2 px-9 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-white focus:ring focus:ring-yellow-100",
    default:
      "text-black py-3 px-12 rounded-full bg-yellow-400 hover:bg-yellow-500 focus:ring focus:ring-yellow-200 ",
    black:
      "text-white py-2 px-10 bg-gray-800 block mr-auto hover:bg-black focus:ring focus:ring-gray-400 focus:outline-none",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={`inline-block font-semibold text-[18px] focus:outline-none transition-colors ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
