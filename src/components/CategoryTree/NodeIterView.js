import React from "react";
import PropTypes from "prop-types";

import { FILETYPES } from "./constants";

const NodeIterView = ({ name, depth = 0 }) => {
  const addSpace = (depth, name) => {
    console.log('depth: ', depth);
    if (depth === 0) return <div>- {name}</div>;
    let spaceComp = [];
    for (let i = 0; i < depth; i++) {
      spaceComp.push(<div key={i}>{'vienas'}</div>);
    }
    console.log('spaceComp: ', spaceComp);
    return (
      <div>{spaceComp.forEach((space, i) => {
        return {space};
      })}- {name}</div>
    );
  }
  return (
    <li>
      {addSpace(depth, name)}
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
