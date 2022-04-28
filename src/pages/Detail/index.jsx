import React from "react";

export default class Detail extends React.Component {
  state = {
    dts: [
      {
        id: "1",
        title: "TITLE:message001",
        content: "CONTENT:message001内容",
      },
      {
        id: "2",
        title: "TITLE:message002",
        content: "CONTENT:message002内容",
      },
      {
        id: "3",
        title: "TITLE:message003",
        content: "CONTENT:message003内容",
      },
    ],
  };
  render() {
    // 获取路由传参params（this.props.match.params）
    const { id } = this.props.match.params;
    // 获取路由传参query/search(this.props.location.search)
    console.log(this.props.location.search);
    // 获取路由传递state（this.props.location.state）
    console.log(this.props.location.state);
    // console.log(id);

    const { dts } = this.state;
    const item = dts.find((item) => {
      return item.id === id;
    });

    return (
      <div>
        <div className="deta-item">
          <div>ID:{item.id}</div>
          <div>{item.title}</div>
          <div>{item.content}</div>
        </div>
      </div>
    );
  }
}
