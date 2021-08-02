import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div>
            <Menu inverted color='black'>
                <Menu.Item>About Us</Menu.Item>
                <Dropdown text='Contact Us' pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Contact Informations</Dropdown.Header>
                        <Dropdown.Item>Adress: Sincan / Ankara</Dropdown.Item>
                        <Dropdown.Item>Tel.No: 0312 312 312</Dropdown.Item>
                        <Dropdown.Item>Email: supersite@demirog.com</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>Forums</Menu.Item>
                <Menu.Item>Help</Menu.Item>
            </Menu>
        </div>
    )
}
