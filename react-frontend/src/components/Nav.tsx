import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl 
    flex-wrap items-center justify-between border-b border-gray-200 bg-white/70 
    backdrop-blur-lg p-6 font-sans font-semibold uppercase text-gray-900">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
