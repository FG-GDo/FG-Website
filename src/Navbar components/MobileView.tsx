import React, { useState } from 'react'
import './MobileView.css'
import { useNavigate, Outlet } from 'react-router-dom';

import { Dropdown, Grid, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Navbar from './Navbar';

// type Props = {}
const MobileView = () => {
    const [visible, setVisible] = React.useState(true)
    const [activeItem, setActive] = useState('home')

    const navigate = useNavigate();
    const handleItemClick = (e: any, { name }: any) => {
        name = name.split(" ").join("")
        setActive(name)

        navigate(`/${name}`)
    }

    return (
        <div >
            <Grid columns={1}>


                <Grid.Column>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar
                            as={Menu}
                            animation='slide along'
                            icon='labeled'
                            inverted
                            onHide={() => setVisible(false)}
                            vertical
                            visible={visible}
                            width='thin'
                            direction='right'
                        >
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={handleItemClick}
                            />
                            <Dropdown item text='Solutions'>
                                <Dropdown.Menu></Dropdown.Menu>
                            </Dropdown>
                            {/* <Dropdown item text='Solutions'>
                                <Dropdown.Menu>
                                    <Dropdown.Item name='Solutions/Shippers' active={activeItem === 'Shippers'} onClick={handleItemClick}>Shippers</Dropdown.Item>
                                    <Dropdown.Item name='Solutions/DeliveryAgents' active={activeItem === 'DeliveryAgents'} onClick={handleItemClick}>Delivery Agents</Dropdown.Item>
                                    <Dropdown.Item name='Solutions/ThirdPartyProviders' active={activeItem === 'ThirdPartyProviders'} onClick={handleItemClick}>Third Party Providers</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                            <Menu.Item
                                name='About'
                                active={activeItem === 'About'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name='Contact Us'
                                active={activeItem === 'Contact Us'}
                                onClick={handleItemClick}
                            />
                        </Sidebar>

                        <Sidebar.Pusher>
                            <button onClick={() => setVisible(!visible)} className='toggle-button' style={{ float: 'right' }}>
                                asdfasdf
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>
                            </button>
                            <div>
                                <Navbar />
                            </div>
                            <div style={{ height: '100vh' }}>
                                <Outlet />
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
            </Grid>

        </div>
    )
}
// First way
// const Sidebars = (props: Props) => {
//     const [isVisible, setIsVisible] = React.useState(false)
//     return (
//         <div>
//             <Grid columns={1}>
//                 <Grid.Column>
//                     <Checkbox />
//                 </Grid.Column>
//                 <Grid.Column>
//                     <Sidebar.Pushable as={Segment.Group} raised>
//                         <Sidebar
//                             as={Menu}
//                             animation='overlay'
//                             icon='labeled'
//                             inverted
//                             vertical
//                             visible={isVisible}
//                             width='thin'
//                         >
//                             <Menu.Item as='a'>Home</Menu.Item>
//                             <Menu.Item as='a'>Games</Menu.Item>
//                             <Menu.Item as='a'>Channels</Menu.Item>
//                         </Sidebar>
//                         <Ref>

//                         </Ref>
//                     </Sidebar.Pushable>
//                 </Grid.Column>
//             </Grid>

//         </div>
//     )
// }

export default MobileView