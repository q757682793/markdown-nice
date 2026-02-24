import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {message, Tooltip} from "antd";

import {solveWeChatMath, solveMermaid, solveHtml, copySafari} from "../../utils/converter";
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

  copyWecomDoc = async () => {
    const layout = document.getElementById(LAYOUT_ID);
    const html = layout.innerHTML;
    solveWeChatMath();
    await solveMermaid();
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
