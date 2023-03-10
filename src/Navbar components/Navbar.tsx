import './Navbar.css'
import { Dropdown, Menu} from 'semantic-ui-react'
import { useState } from 'react';
import {useNavigate } from 'react-router-dom'
type Props = {}

const Navbar = (props: Props) => {
  const [activeItem, setActive] = useState('home')
  const navigate = useNavigate();
  const handleItemClick = (e: any, { name }: any) => {
    name = name.split(" ").join("")
    setActive(name)
    navigate(`/${name}`)
  }
  return (
    <div>

      <div className='menu-desktop'>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Dropdown item text='Solutions'>
            {/* <Dropdown.Menu>
              <Dropdown.Item name='Solutions/Shippers' active={activeItem === 'Shippers'} onClick={handleItemClick}>Shippers</Dropdown.Item>
              <Dropdown.Item name='Solutions/DeliveryAgents' active={activeItem === 'DeliveryAgents'} onClick={handleItemClick}>Delivery Agents</Dropdown.Item>
              <Dropdown.Item name='Solutions/ThirdPartyProviders' active={activeItem === 'ThirdPartyProviders'} onClick={handleItemClick}>Third Party Providers</Dropdown.Item>
            </Dropdown.Menu> */}
          </Dropdown>
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
          <Menu.Menu position='right'>
            <Menu.Item
              name='Portal Login'
              active={activeItem === 'Portal Login'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Book a Demo'
              active={activeItem === 'Book a Demo'}
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