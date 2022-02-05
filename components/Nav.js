import NavItem from "./NavItem";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col p-10 space-y-6",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={`flex ${pickedDir}`}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skill">
        Skill
      </NavItem>
      <NavItem scheme={scheme} href="#project">
        Project
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contact
      </NavItem>
    </ul>
  );
}
