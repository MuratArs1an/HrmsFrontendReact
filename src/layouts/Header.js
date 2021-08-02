import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default function Header() {
    return (
        <div>
            <Menu inverted color='black'>
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Input
                        action={{ type: 'submit', content: 'Go' }}
                        placeholder='Navigate to...'
                    />
                </Menu.Item>
            </Menu>
        </div>
    )
}
