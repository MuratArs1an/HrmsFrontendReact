import React, {useState, useEffect} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../Services/JobAdvertisementService'


export default function JobAdvertisement() {

    const [jobs, setjobs] = useState([])

    useEffect(()=>{
        let jobAdvertisementService= new JobAdvertisementService()
        jobAdvertisementService.getJobs().then(result=>setjobs(result.data.data))
    })
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>JobPosition</Table.HeaderCell>
                        <Table.HeaderCell>Salary</Table.HeaderCell>
                        <Table.HeaderCell>Open Position</Table.HeaderCell>
                        <Table.HeaderCell>JobDescrption</Table.HeaderCell>
                        <Table.HeaderCell>DeadLine</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobs.map(job => (
                            <Table.Row key={job.id}>
                                <Table.Cell>{job.jobPosition.positionName}</Table.Cell>
                                <Table.Cell>{job.maxSalary} - {job.minSalary}</Table.Cell>
                                <Table.Cell>{job.openPositions}</Table.Cell>
                                <Table.Cell>{job.jobDescription}</Table.Cell>
                                <Table.Cell>{job.applicationDeadLine}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            )
        </div>
    )
}
