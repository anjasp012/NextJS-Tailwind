export default function SectionTitle({ left, children }) {
  return (
    <h2
      className={`text-[24px] font-semibold font-mono ${
        !left ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
