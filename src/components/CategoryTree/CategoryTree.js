import React from "react";
import PropTypes from "prop-types";

import NodeView from "./NodeView";
import { RENDER_WAYS } from "./constants";
import { BFS } from "../../utils/tree";
import NodeIterView from "./NodeIterView";

const CategoryTree = ({ data, renderType }) => {
  // BFS, DFS
  // 0. find JS implementasion of BFS or DFS in google or SO :D
  // 1. load function from utils
  // 2. run that function with given data
  // 3. profit :D
  // based on https://medium.com/@jpoechill/iterative-bfs-and-dfs-in-javascript-537bb7b0bbfd
  // https://en.wikipedia.org/wiki/Depth-first_search
  // https://medium.com/@kenny.hom27/breadth-first-vs-depth-first-tree-traversal-in-javascript-48df2ebfc6d1
  const renderIteratively = data => {
    // const { name, filetype, contents } = data[0];
    // loop through all nodes and count

    /**
     *
     * const root = {
     * key: 1,
     * left: { key: 2 },
     * right: { key: 3 }
     * };
     */
    // loop while still have nodes
    let stack = data;
    let res = [];
    let space = 0;
    while (stack.length) {
      let curr = stack.shift();
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
      res.unshift({name: curr.name, depth: space});
      if (curr.contents && curr.contents.length > 0) {
        space++;
        stack.unshift(...curr.contents);
      } else {
        // space = space > 0 ? space - 1 : space;
      }
    }

    return res.reverse().map((node, i) => {
      console.log('node: ', node);
      return <NodeIterView key={i} name={node.name} depth={node.depth} />;
    });
  };

  // do we need preprocessing of data array?

  /**
   * <ul>
   *    <li>
   *      <div></div>
   *      <ul>
   *        <li>
   *          <div></div>
   *        </li>
   *        <li>
   *          <div></div>
   *        </li>
   *      </ul>
   *    </li>
   *    <li>
   *      <div></div>
   *    </li>
   *    <li>
   *      <div></div>
   *    </li>
   * </ul>
   */

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
