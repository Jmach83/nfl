import React, { Component } from 'react';
import { getData } from '../Services/fakeDataService';
import Select from './common/select';

class SelectUser extends Component {
    state = {  
        members: [],
        fines: []
    }

   async componentDidMount(){
    const data = await getData();
    this.setState({ members: data.members, fines: data.fineRates });
   }

    render() { 
         const { members, fines } = this.state;
        return ( 
            <React.Fragment>
                <h1>Select user</h1>
                <Select name="members" options={members} placeholder="Select member" />
                <Select name="fines" options={fines} placeholder="Select fine" />
            </React.Fragment>
         );
    }
}
 
export default SelectUser;