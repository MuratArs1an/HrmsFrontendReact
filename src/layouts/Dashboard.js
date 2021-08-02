import React from 'react'
import JobAdvertisement from '../pages/JobAdvertisement'
import Header from './Header'
import Navi from "./Navi"
import Search from './Search'
import { Grid } from 'semantic-ui-react'


export default function Dashboard() {
    return (
        <div>
            <Header/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Search />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobAdvertisement />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
