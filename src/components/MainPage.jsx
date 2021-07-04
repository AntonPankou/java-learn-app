import React from 'react';
import TabPanel from './TabPanel';
import { AppBar, Button, Tab, Tabs } from '@material-ui/core';

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
};

export class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prop: 42,
            tabValue: 0
        };
    };

    handleCreate = () => {
        console.log('Create ticket');
    }

    handleLogout = () => {
        console.log('Logout');
    }

    handleTabChange = (event, value) => {
        this.setState({
            tabValue: value
        });
    }

    render() {
        const { tabValue } = this.state;

        return (
            <>
                <div className='buttons-container'>
                    <Button onClick={this.handleCreate} variant="contained" color="primary">Create Ticket</Button>
                    <Button onClick={this.handleLogout} variant="contained" color="secondary">Logout</Button>
                </div>
                <div className='table-container'>
                    <AppBar position="static" >
                        <Tabs variant="fullWidth" onChange={this.handleTabChange} value={tabValue}>
                            <Tab label="My tickets" {...a11yProps(0)} />
                            <Tab label="All tickets" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel value={tabValue} index={0}>
                            Fuck you
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            Screw you
                        </TabPanel>
                    </AppBar>
                </div>
            </>
        )
    }
};
