export default function SectionParagraph({ left, children }) {
  return (
    <p className={`text-[18px] text-gray-400 ${!left ? "text-center" : ""}`}>
      {children}
    </p>
  );
}
