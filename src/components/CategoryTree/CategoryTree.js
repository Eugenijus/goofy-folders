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
  const renderIteratively = data => {
    // const { name, filetype, contents } = data[0];
    // loop through all nodes and count

    /**
     * function traverseDFS(root) {
        let stack = [root]
        let res = []
        
        while (stack.length) {      
          let curr = stack.pop()
          res.push(curr.key)
          
          if (curr.right){
            stack.push(curr.right)
          }
          
          if (curr.left){
            stack.push(curr.left)
          }
        }
        
        return res.reverse()
      }
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
    while (stack.length) {
      let curr = stack.pop();
      console.log("curr", curr);
      res.push(curr.name);
      if (curr.contents && curr.contents.length > 0) {
        stack.push(...curr.contents);
      }
      // for (let i = 0; i < stack.length; i++) {
      //   const node = stack[i];
      //   if (node.contents && node.contents.length > 0) {
      //   } else {
      //     res.push(stack[i]);
      //   }
      // }
    }

    return res.map((name, i) => {
      return <NodeIterView key={i} name={name} />;
    });
  };

  // do we need preprocessing of data array?
  //

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
