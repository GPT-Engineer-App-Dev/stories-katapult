import { Input } from "@/components/ui/input";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="text-center">
      <h1 className="text-3xl font-bold mb-4">Hacker News Top Stories</h1>
      <Input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md mx-auto"
      />
    </header>
  );
};

export default Header;