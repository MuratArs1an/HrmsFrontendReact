import React from 'react'
import LogIn from "./LogIn"
import SignIn from "./SignIn"
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted color='grey' size='small'>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Menu position='right'>
                    <SignIn/>
                    <LogIn/>
                    <Menu.Item>
                        <Button color='orange'>Log Out</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
