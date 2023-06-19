

// import { Link } from 'react-router-dom';
// import { Container, Header, Content, Form, ButtonToolbar, Button, Panel, FlexboxGrid } from 'rsuite';
// import MainLayout from './MainLayout';
// import Registration from './Registration';

// const Logis = () => (
//   <div className="show-fake-browser login-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//     <Container>
//       <Header>
//         {/* ... */}
//       </Header>
//       <Content>
//         <FlexboxGrid justify="center">
//           <FlexboxGrid.Item colspan={12}>
//             <div className="Form" style={{ paddingTop: 10 }}>
//               <Panel header={<h3>Login</h3>} bordered>
//                 <Form fluid>
//                   <Form.Group>
//                     <Form.ControlLabel>Username or email address</Form.ControlLabel>
//                     <Form.Control name="name" />
//                   </Form.Group>
//                   <Form.Group>
//                     <Form.ControlLabel>Password</Form.ControlLabel>
//                     <Form.Control name="password" type="password" autoComplete="off" />
//                   </Form.Group>
//                   <Form.Group>
//                     <ButtonToolbar>
//                       <Link to="/main" element={MainLayout}>
//                         <Button appearance="primary">
//                           Sign in
//                         </Button>
//                       </Link>
//                       <Link to="/registration" element={Registration}>
//                         <Button appearance="link">Don't have an account?</Button>
//                       </Link>
//                     </ButtonToolbar>
//                   </Form.Group>
//                 </Form>
//               </Panel>
//             </div>
//           </FlexboxGrid.Item>
//         </FlexboxGrid>
//       </Content>
//       {/* <Footer>Footer</Footer> */}
//     </Container>
//   </div>
// );

// export default Logis;

import { Link } from 'react-router-dom';
import { Container, Header, Content, Form, ButtonToolbar, Button, Panel, FlexboxGrid } from 'rsuite';
import MainLayout from './MainLayout';
import Registration from './Registration';

const Logis = () => (
  <div className="show-fake-browser login-page" style={{ backgroundImage: 'url(.jpg)', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Container>
      <Header>
        {/* ... */}
      </Header>
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <div className="Form" style={{ paddingTop: 10 }}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <Form.Group>
                    <Form.ControlLabel>Username or email address</Form.ControlLabel>
                    <Form.Control name="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Link to="/main" element={MainLayout}>
                        <Button appearance="primary">
                          Sign in
                        </Button>
                      </Link>
                      <Link to="/registration" element={Registration}>
                        <Button appearance="link">Don't have an account?</Button>
                      </Link>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Panel>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Container>
  </div>
);

export default Logis;
