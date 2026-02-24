import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Modal, Button} from "antd";

@inject("dialog")
@observer
class AboutDialog extends Component {
  handleOk = () => {
    this.props.dialog.setAboutOpen(false);
  };

  handleCancel = () => {
    this.props.dialog.setAboutOpen(false);
  };

  handleVersion = () => {
    this.props.dialog.setAboutOpen(false);
    this.props.dialog.setVersionOpen(true);
  };

  render() {
    return (
      <Modal
        title="关于"
        okText="确认"
        cancelText="取消"
        visible={this.props.dialog.isAboutOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认
          </Button>,
        ]}
        bodyStyle={{
          paddingTop: "5px",
        }}
      >
        <h3 style={style.headerMargin}>Markdown Nice</h3>

        <p style={style.lineHeight}>一款支持自定义样式的 Markdown 编辑器，专注于微信公众号排版，让排版变简单。</p>
        <p style={style.lineHeight}>
          本项目基于
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/whaoa/markdown-nice">
            &nbsp;whaoa/markdown-nice&nbsp;
          </a>
          进行二次开发。
        </p>
        <p style={{...style.lineHeight, marginTop: "8px", fontWeight: "bold"}}>功能特性</p>
        <ul style={style.featureList}>
          <li>Markdown 实时编辑与预览</li>
          <li>内置 20+ 排版主题，一键切换</li>
          <li>代码高亮，支持 Mac 风格代码块</li>
          <li>支持数学公式（KaTeX / MathJax）</li>
          <li>支持 Mermaid 图表，复制时自动转为 PNG</li>
          <li>支持 Draw.io 图表，复制时自动转为 PNG</li>
          <li>一键复制到企微文档、微信公众号等编辑器</li>
        </ul>
        <p style={{...style.lineHeight, marginTop: "8px"}}>
          GitHub：
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/q757682793/markdown-nice">
            q757682793/markdown-nice
          </a>
        </p>
        <p style={style.lineHeight}>
          致谢：
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/mdnice/markdown-nice">
            mdnice/markdown-nice
          </a>
          &nbsp;及所有贡献者
        </p>
      </Modal>
    );
  }
}

const style = {
  headerMargin: {
    marginTop: "5px",
    marginBottom: "5px",
    color: "black",
  },
  lineHeight: {
    lineHeight: "26px",
    color: "black",
    padding: 0,
    margin: 0,
  },
  featureList: {
    lineHeight: "26px",
    color: "black",
    paddingLeft: "20px",
    margin: "4px 0",
  },
};

export default AboutDialog;
