import React from 'react'
import {Dropdown} from 'semantic-ui-react'

export default function SignIn() {
    return (
        <div>
            <Dropdown primary item text='Sign In'>
                <Dropdown.Menu>
                    <Dropdown.Item>Employer</Dropdown.Item>
                    <Dropdown.Item>Candidate</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
