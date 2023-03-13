import './Navbar.css'
import { Dropdown, Menu} from 'semantic-ui-react'
//import { useState } from 'react';
import {useNavigate } from 'react-router-dom'
type Props = {
  CurrentActiveItem:string
  SetActiveItem:Function
}

const Navbar = (props: Props) => {
  //const [activeItem, setActive] = useState('home')
  const navigate = useNavigate();
  const handleItemClick = (e: any, { name }: any) => {
    name = name.split(" ").join("")
    //setActive(name)
    props.SetActiveItem(name)
    navigate(`/${name}`)
    console.log(name)
  }
  return (
    <div>

      <div className='menu-desktop'>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={props.CurrentActiveItem === 'home'}
            onClick={handleItemClick}
          />
          <Dropdown item text='Solutions'>
            <Dropdown.Menu >
              <Dropdown.Item name='Solutions/Shippers' active={props.CurrentActiveItem === 'Shippers'} onClick={handleItemClick}>Shippers</Dropdown.Item>
              <Dropdown.Item name='Solutions/DeliveryAgents' active={props.CurrentActiveItem === 'DeliveryAgents'} onClick={handleItemClick}>Delivery Agents</Dropdown.Item>
              <Dropdown.Item name='Solutions/ThirdPartyProviders' active={props.CurrentActiveItem === 'ThirdPartyProviders'} onClick={handleItemClick}>Third Party Providers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name='About'
            active={props.CurrentActiveItem === 'About'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Contact Us'
            active={props.CurrentActiveItem === 'Contact Us'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Portal Login'
              active={props.CurrentActiveItem === 'Portal Login'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Book a Demo'
              active={props.CurrentActiveItem === 'Book a Demo'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>

      </div>
      <div className='menu-mobile'>
        {/* <Dropdown text='FG' pointing='left' className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item
              name='home' active={activeItem === 'home'} onClick={handleItemClick}
            >Home</Dropdown.Item>
            <Dropdown item text='Solutions'>
              <Dropdown.Menu>
                <Dropdown.Item name='Solutions/Shippers' active={activeItem === 'Shippers'} onClick={handleItemClick}>Shippers</Dropdown.Item>
                <Dropdown.Item name='Solutions/DeliveryAgents' active={activeItem === 'DeliveryAgents'} onClick={handleItemClick}>Delivery Agents</Dropdown.Item>
                <Dropdown.Item name='Solutions/ThirdPartyProviders' active={activeItem === 'ThirdPartyProviders'} onClick={handleItemClick}>Third Party Providers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Item
            name='About'active={activeItem === 'About'}onClick={handleItemClick}
          >About</Dropdown.Item>
          <Dropdown.Item
            name='Contact Us'active={activeItem === 'Contact Us'}onClick={handleItemClick}
          >Contact Us</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

      </div>
      
    </div>
  )
}
export default Navbar