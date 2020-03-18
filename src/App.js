import React from "react";

import { response } from "./data/mockData";
import { HeaderDiv, ContentDiv } from "./components/common/styledComponents";
import CategoryTree from "./components/CategoryTree";
import { RENDER_WAYS } from "./components/CategoryTree/constants";
import "./styles.css";

/**
 * ✔️ 1) render a category tree data structure to a web page
 * ✔️ 2) Tree must be rendered in two different ways (modes),
 * both able to handle unlimited dep
 *  ✔️ 2.1) Recursive.
 *  2.2) Iterative.
 * 3) have an ability to add new nodes interactively.
 *
 */

export default function App() {
  return (
    <div className="App">
      <HeaderDiv>
        <h1>Category Tree</h1>
      </HeaderDiv>
      <ContentDiv>
        <p>Result tree:</p>
        <CategoryTree data={response.data} renderType={RENDER_WAYS.RECURSIVE} />
      </ContentDiv>
    </div>
  );
}
