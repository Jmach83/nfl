import React, { Component } from 'react';
import { getData } from '../Services/fakeDataService';
import Select from './common/select';

class SelectUser extends Component {
    state = {  
        data: {
            member: {},
            fine: {}
        },
        members: [],
        fines: [],
        rounds: [],
        chosenMember: '',
        chosenFine: '',
        chosenRound: ''
    }

    // map data to set/post 

   async componentDidMount(){
    const { members, fineRates } = await getData();
    this.setState({ members, fines: fineRates });
   }

   populateRounds = (chosenMember) => {
       if(!chosenMember) return;
        const member = this.getMember(this.state.members, chosenMember);
        const rounds = member.rounds;
        this.setState({ rounds })
   }

   handleSubmit = async e => {
       e.preventDefault();
        const { members, fines, chosenMember, chosenFine } = this.state;
        const fine = this.getFineType(fines, chosenFine);
        const member = await this.getMember(members, chosenMember);
        const data = this.addFine(member, fine);
        this.setState({ data: {fine, member} });
   }

    handleChange = async ({ currentTarget: input}) => {
        await this.setState({ [input.name]: input.value});
        if(this.state.chosenMember) this.populateRounds(this.state.chosenMember)        
   }

   getMember = (membersArray, chosenMember) => {
        const members = [...membersArray];
        return members.find( member => member._id == chosenMember);
   }

   getFineType = (finesArray, chosenFine) => {
        const fines = [...finesArray];
        return fines.find( fine => fine._id == chosenFine);
   }

   getRoundIndex(roundsArray, chosenFine){
        return roundsArray.findIndex( round => round._id == chosenFine);
   }

   addFine = (member, chosenFineObj) => {
       // find round -> find if fine exist
        const newMember = {...member} 
        const fineExists = newMember.rounds
        console.log(fineExists)
        if(fineExists){
            console.log('Exists ++')
        }else(
            console.log('Add new fine')
        )
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