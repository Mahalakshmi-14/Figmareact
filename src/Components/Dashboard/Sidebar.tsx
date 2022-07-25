import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Col, Row } from "antd";
import { Input, Button, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Sidebar.css";
import { Modal } from "antd";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";

//const { Content } = Layout;
import img1 from "../Images/L1.svg";
import img2 from "../Images/L2.svg";
import img3 from "../Images/L3.svg";
import img4 from "../Images/L4.svg";
import img5 from "../Images/L5.svg";
import img6 from "../Images/L6.svg";
import img7 from "../Images/L7.svg";
import img8 from "../Images/L8.png";
import img9 from "../Images/L9.svg";
// import img10 from "../Images/C1.png";


import Popupform from "../Imageselector/Form";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const { Search } = Input;
const { Header, Content, Sider } = Layout;

function Sidebar() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let employeeDetail = JSON.parse(
      `${localStorage.getItem("Employeedetails")}`
    );
    setCardData(employeeDetail);
    setLoading(false);
  }, [loading]);
  const refresh = () => {
    setLoading(true);
  };

  return (
    <div>
      <Layout>
        <Sider className="SideBar">
          <div className="Logo">
            <img src={img1} />
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            className="middleIcon"
            style={{ marginTop: "50px" }}
          >
            <Menu.Item>
              <img src={img2} />
            </Menu.Item>
            <Menu.Item>
              <img src={img3} />
            </Menu.Item>
            <Menu.Item>
              <img src={img4} className="one" />      
            </Menu.Item>
            <Menu.Item>
              <img src={img5} />
            </Menu.Item>
            <Menu.Item>
              <img src={img6} />
            </Menu.Item>
          </Menu>
          <div className="bottomIcon">
            <img src={img7} />
            <img src={img8} />
            <img src={img9} />
          </div>
        </Sider>
        <Layout>
          <Header>
            <Row>
              <Col span={8}>
                <p className="Workflow">Workflow</p>
              </Col>
              <Col span={8} className="SearchInput">
                <Input placeholder="Search" prefix={<SearchOutlined />}></Input>
              </Col>
              <Col span={8}>
                <Popupform refresh={refresh}/>
              </Col>
            </Row>
          </Header>
          <Content>
            <div className="Cards">
              {cardData.map((card: any, id) => {
                // console.log(card.e_id);
                return (
                  <div className="mappingcard">
                    <Cards
                      // key={card.e_id}
                      // image={card.image}
                      name={card.name}
                      designation={card.designation}
                      employeedetails={card.employeedetails}
                      refresh={refresh}
                      // info2={card.details}
                    />
                  </div>
                );
              })}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default Sidebar;
