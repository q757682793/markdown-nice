import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {message, Tooltip} from "antd";

import {solveWeChatMath, solveMermaid, solveDrawio, solveHtml, copySafari} from "../../utils/converter";
import {LAYOUT_ID, ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";
import SvgIcon from "../../icon";
import "./WecomDoc.css";

@inject("content")
@inject("navbar")
@inject("imageHosting")
@inject("dialog")
@observer
class WecomDoc extends Component {
  constructor(props) {
    super(props);
    this.html = "";
  }

  // 企微文档不识别 CSS 百分比宽度，在 DOM 上设置实际渲染像素宽度后再走 solveHtml 内联
  solveWecomTable = () => {
    const layout = document.getElementById(LAYOUT_ID);
    if (!layout) return;
    const tables = layout.querySelectorAll("table");
    tables.forEach((table) => {
      const width = table.offsetWidth;
      if (width > 0) {
        table.setAttribute("width", width);
        table.style.width = width + "px";
      }
    });
  };

  copyWecomDoc = async () => {
    const layout = document.getElementById(LAYOUT_ID);
    const html = layout.innerHTML;
    solveWeChatMath();
    await solveMermaid();
    await solveDrawio();
    this.solveWecomTable();
    this.html = solveHtml();
    copySafari(this.html);
    message.success("已复制，请到企微文档粘贴");
    layout.innerHTML = html;
  };

  render() {
    return (
      <Tooltip placement="left" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="复制到企微文档">
        <a id="nice-sidebar-wecom-doc" className="nice-btn-wecom-doc" onClick={this.copyWecomDoc}>
          <SvgIcon name="wecom-doc" className="nice-btn-wecom-doc-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default WecomDoc;
