import Logo from "../../components/Logo";

const Header = () => {
  return (
    <header className="navBar">
      <Logo />
      <div className="nbrOfTasks">Il y'a 5 matiéres.</div>
    </header>
  );
};

export default Header;
