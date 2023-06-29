import "./Navbar.css";
import Dropdown from "./Dropdown";
const Navbar = (props) => {
  let filterData1 = props.filterData1;

  return (
    <div className="buttons">
      <div className="button">
        {filterData1.map((data) => (
          <button key={data.id} className="btn">
            {data.title}{" "}
          </button>
        ))}

        <div className="dropdown">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
