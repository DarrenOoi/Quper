const SideBar = () => {
  return (
    <div className="drawer lg:drawer-open flex">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle hidden lg:block"
      />
      <div className="drawer-content flex flex-col items-center justify-center flex-1"></div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-purple-100 text-base-content">
          <li>
            <a>Data Collection</a>
          </li>
          <li>
            <a>Third Party Sharing</a>
          </li>
          <li>
            <a>Third Party Sharing</a>
          </li>
          <li>
            <a>Security</a>
          </li>
          <li>
            <a>Data Retention</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
