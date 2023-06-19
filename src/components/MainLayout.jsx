// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import React from 'react';
// import ComplaintForm from './ComplaintForm';
// const { Header, Content, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
    
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
      
//     }),
//   };
// });
// const MainLayout= () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Header
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <div className="demo-logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
//       </Header>
//       <Layout>
//         <Sider
//           width={200}
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{
//               height: '100%',
//               borderRight: 0,
//             }}
//             items={items2}
//           />
//         </Sider>
//         <Layout
//           style={{
//             padding: '0 24px 24px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>List</Breadcrumb.Item>
//             <Breadcrumb.Item>App</Breadcrumb.Item>
            
//           </Breadcrumb>
//           <Content
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//               background: colorBgContainer,
//             }}
//           >
          
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };
// export default MainLayout;


// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import React from 'react';
// import ComplaintForm from './ComplaintForm';
// import BasicTable from './BasicTable'

// const { Header, Content, Footer, Sider } = Layout;

// const MainLayout = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   return (
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="demo-logo-vertical" />
        
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['4']}
//           items={[
//             {
//               key: '1',
//               icon: <UserOutlined />,
//               label: <ComplaintForm />,
//             //   content: <ComplaintForm />, // Replace with ComplaintForm component
//             },
//             {
//               key: '2',
//               icon: <VideoCameraOutlined />,
//               label: 'nav 2',
//             },
//             {
//               key: '3',
//               icon: <UploadOutlined />,
//               label: 'nav 3',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: '24px 16px 0',
//           }}
//         >
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             content
//             <BasicTable />
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import React, { useState } from 'react';
// import ComplaintForm from './ComplaintForm';
// import BasicTable from './BasicTable';

// const { Header, Content, Footer, Sider } = Layout;

// const MainLayout = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   const [selectedMenuKey, setSelectedMenuKey] = useState('1');

//   const handleMenuClick = (menuKey) => {
//     setSelectedMenuKey(menuKey);
//   };

//   return (
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           selectedKeys={[selectedMenuKey]}
//           onSelect={({ key }) => handleMenuClick(key)}
//           items={[
//             {
//               key: '1',
//               icon: <UserOutlined />,
//               label: <ComplaintForm />,
//             //   content: <ComplaintForm />,
//             },
//             {
//               key: '2',
//               icon: <VideoCameraOutlined />,
//               label: 'nav 2',
//               content: <BasicTable />,
//             },
//             {
//               key: '3',
//               icon: <UploadOutlined />,
//               label: 'nav 3',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
        
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
          
//         />
//         <Content
//           style={{
//             margin: '24px 16px 0',
//           }}
//         >
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             {selectedMenuKey === '2' ? <BasicTable /> : 'content'}
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;

// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import React, { useState } from 'react';
// import ComplaintForm from './ComplaintForm';
// import BasicTable from './BasicTable';

// const { Header, Content, Footer, Sider } = Layout;

// const MainLayout = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   const [selectedMenuKey, setSelectedMenuKey] = useState('1');

//   const handleMenuClick = (menuKey) => {
//     setSelectedMenuKey(menuKey);
//   };

//   const renderContent = () => {
//     switch (selectedMenuKey) {
//       case '1':
//         return <ComplaintForm />;
//       case '2':
//         return <BasicTable />;
//       default:
//         return 'content';
//     }
//   };

//   return (
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           selectedKeys={[selectedMenuKey]}
//           onSelect={({ key }) => handleMenuClick(key)}
//           items={[
//             {
//               key: '1',
//               icon: <UserOutlined />,
//               label: 'nav 1',
//             },
//             {
//               key: '2',
//               icon: <VideoCameraOutlined />,
//               label: 'nav 2',
//             },
//             {
//               key: '3',
//               icon: <UploadOutlined />,
//               label: 'nav 3',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: '24px 16px 0',
//           }}
//         >
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             {renderContent()}
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Modal, theme } from 'antd';
import React, { useState } from 'react';
import ComplaintForm from './ComplaintForm';
import BasicTable from './BasicTable';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectedMenuKey, setSelectedMenuKey] = useState(null);
  const [isComplaintFormVisible, setComplaintFormVisible] = useState(false);

  const handleMenuClick = (menuKey) => {
    setSelectedMenuKey(menuKey);
    if (menuKey === '1') {
      setComplaintFormVisible(true);
    }
  };

  const handleComplaintFormClose = () => {
    setComplaintFormVisible(false);
  };

  const renderContent = () => {
    switch (selectedMenuKey) {
      case '2':
        return <BasicTable />;
      default:
        return 'content';
    }
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedMenuKey]}
          onSelect={({ key }) => handleMenuClick(key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {renderContent()}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
      <Modal
        visible={isComplaintFormVisible}
        onCancel={handleComplaintFormClose}
        footer={null}
        width={400}
      >
        <ComplaintForm />
      </Modal>
    </Layout>
  );
};

export default MainLayout;
