import React from "react";
import PropTypes from "prop-types";

import NodeView from "./NodeView";
import { RENDER_WAYS } from "./constants";

const CategoryTree = ({ data, renderType }) => {
  // BFS, DFS
  const renderIteratively = data => {
    if (data && data[0]) {
      let currentNode = data[0];
      const { name } = currentNode;
      let space = "";
      let breaker = 0;
      let parentIndex = 0;
      let childIndex = 0;
      let children = [];
      while (currentNode || breaker > 30) {
        const { contents } = currentNode;
        console.log(`${space}- ${name}`);
        for (let i = 0; i < contents.length; i++) {
          console.log(`${space}  - ${contents[i].name}`);
          children = contents[i];
          // console.log("children", children.contents.length);
          // if (
          //   children.contents.length > 0 &&
          //   childIndex < children.contents.length
          // ) {
          //   currentNode = children.contents[childIndex];
          //   childIndex++;
          // }
        }
        console.log(".");
        space = space + "  ";

        // while (childIndex < children.contents.length) {
        //   if (children.contents.length > 0) {
        //     console.log("children", children);
        //     //currentNode = currentNode.contents[0];
        //     childIndex++;
        //   }
        // }

        currentNode = null;

        childIndex = 0;
        breaker++;
      }
    }
    return null;
  };
  // return (
  //   <>
  //     <ul>
  //       {data.map((node, i) => (
  //         <NodeView key={i} {...node} />
  //       ))}
  //     </ul>
  //     <ul>{renderIteratively(data)}</ul>
  //   </>
  // );

  return renderType === RENDER_WAYS.RECURSIVE ? (
    <ul>
      {data.map((node, i) => (
        <NodeView key={i} {...node} />
      ))}
    </ul>
  ) : (
    <ul>{renderIteratively(data)}</ul>
  );
};

CategoryTree.defaultProps = {
  renderType: RENDER_WAYS.RECURSIVE
};

CategoryTree.propTypes = {
  data: PropTypes.array.isRequired,
  renderType: PropTypes.string
};

export default CategoryTree;
