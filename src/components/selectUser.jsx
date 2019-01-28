import React, { Component } from 'react';
import { getData } from '../Services/fakeDataService';
import Select from './common/select';

class SelectUser extends Component {
    state = {  
        data: {},
        members: [],
        fines: [],
        rounds: [],
        chosenMember: '',
        chosenFine: '',
        chosenRound: ''
    }

   async componentDidMount(){
    const data = await getData();
    this.setState({ data, members: data.members, fines: data.fineRates, rounds: data.members[0].rounds });
   }

   handleSubmit = e => {
       e.preventDefault();
       const { data, chosenMember, chosenFine, chosenRound } = this.state;
       const obj = {...data} 
       const member = obj.members.find(member => member._id == chosenMember);
       console.log({ member })
       const memberRound = member.rounds.find(round => round._id == chosenRound)
       console.log({memberRound}); 
       // if excist increment amount else push type to array with amount 1
       memberRound.fines.push({ amount: 2, type: 'test'})
       console.log('efter',memberRound);
       console.log('submit', {chosenMember, chosenFine, chosenRound});
       console.log({ data });
   }

   handleChange = ({ currentTarget: input}) => {
        this.setState({ [input.name]: input.value});
   }

   addFine = () => {

   }

    render() { 
         const { members, fines, rounds } = this.state;
        return ( 
            <React.Fragment>
                <h1>Select user</h1>
                <form onSubmit={this.handleSubmit}>
                    <Select name="chosenMember" options={members} placeholder="Select member" value={members.name} onChange={this.handleChange} />
                    <Select name="chosenFine" options={fines} placeholder="Select fine" value={fines.name} onChange={this.handleChange} />
                    <Select name="chosenRound" options={rounds} placeholder="Select fine" value={rounds.name} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                
            </React.Fragment>
         );
    }
}
 
export default SelectUser;