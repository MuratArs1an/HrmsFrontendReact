import React from 'react'
import { Button, Container, Header, Select } from 'semantic-ui-react'

const countryOptions = [
    { key: 'a', value: 'a', text: 'Ankara' },
    { key: 'i', value: 'i', text: 'Istanbul' },
    { key: 'iz', value: 'iz', text: 'Izmir' },
    { key: 'a1', value: 'a1', text: 'Adana' },
    { key: 'a2', value: 'a2', text: 'Adiyaman' },
    { key: 'a3', value: 'a3', text: 'Afyon' },
    { key: 'a4', value: 'a4', text: 'Antalya' },
    { key: 'a5', value: 'a5', text: 'Agri' },
    { key: 'a6', value: 'a6', text: 'Amasya' },
    { key: 'a7', value: 'a7', text: 'Artvin' },
    { key: 'b', value: 'b', text: 'Balikesir' },
    { key: 'b1', value: 'b1', text: 'Bilecik' },
    { key: 'b2', value: 'b2', text: 'Bingol' },
    { key: 'b3', value: 'b3', text: 'Bitlis' },
    { key: 'b4', value: 'b4', text: 'Bolu' },
    { key: 'b5', value: 'b5', text: 'Burdur' },
    { key: 'b6', value: 'b6', text: 'Bursa' },
    { key: 'c', value: 'c', text: 'Canakkale' },
]

export default function Search() {
    return (
        <div>
            <Container>
                <Header as='h2' color="orange">Filter Jobs</Header>
                <Button>
                    <Select placeholder='Select your city' options={countryOptions} />
                </Button>
                <Button>
                    <Select placeholder='Select Job Position'/>
                </Button>
                <Button>
                    <Select placeholder='Select Min-Max Salary'/>
                </Button>
            </Container>
        </div>
    )
}
