import Button from "./Button";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header className="header m-2">
      <div class="row">
        <div class="col-sm-8">
          <h1>PMIS APP</h1>
        </div>
        <div class="col-sm-4">
          <Button color="green" text="Hello" />
          <Button color="blue" text="Pulasthi" />
        </div>
      </div>
    </header>
  );
};

export default Header;
