import React from 'react'
import {Dropdown} from 'semantic-ui-react'

export default function LogIn() {
    return (
        <div>
            <Dropdown primary item text='Log In'>
                <Dropdown.Menu>
                    <Dropdown.Item>Employer</Dropdown.Item>
                    <Dropdown.Item>Candidate</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
