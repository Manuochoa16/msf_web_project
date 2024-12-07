const Sidebar = () => {
  return (
    <aside className="w-1/4 p-4 bg-gray-100 shadow-md">
      <ul className="space-y-4">
        <li>
          <a href="#seccion1" className="text-red-600 hover:underline">
            Sección 1
          </a>
        </li>
        <li>
          <a href="#seccion2" className="text-red-600 hover:underline">
            Sección 2
          </a>
        </li>
        <li>
          <a href="#seccion3" className="text-red-600 hover:underline">
            Sección 3
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
