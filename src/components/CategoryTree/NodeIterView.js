import React from "react";
import PropTypes from "prop-types";

import { FILETYPES } from "./constants";

const NodeIterView = ({ name }) => {
  return (
    <li>
      <div>- {name}</div>
      {/* {filetype === FILETYPES.FOLDER && contents.length > 0 && <ul />} */}
    </li>
  );
};

NodeIterView.propTypes = {
  name: PropTypes.string.isRequired
  // filetype: PropTypes.string.isRequired,
  // contents: PropTypes.array.isRequired
};

export default NodeIterView;
