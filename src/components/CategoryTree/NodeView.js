import React from "react";
import PropTypes from "prop-types";

import { FILETYPES } from "./constants";

const NodeView = ({ name, filetype, contents }) => {
  /** here its possible to use switch for each filetype */
  return (
    <li>
      <div>- {name}</div>
      {filetype === FILETYPES.FOLDER && contents.length > 0 && (
        <ul>
          {contents.map((node, i) => (
            <NodeView key={i} {...node} />
          ))}
        </ul>
      )}
    </li>
  );
};

NodeView.propTypes = {
  name: PropTypes.string.isRequired,
  filetype: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired
};

export default NodeView;
