export default function ProjectItem({ image, name, description }) {
  return (
    <article className="text-center">
      <img src={image} className="w-full rounded-lg" alt="" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-gray-400">{description}</p>
    </article>
  );
}
