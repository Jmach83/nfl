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
        chosenMember: '', // lav til object med _id & name
        chosenFine: '',
        chosenRound: ''
    }

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
        const { chosenFine, chosenMember, chosenRound } = this.state;
        const newFine = this.createFine(5, chosenFine)
        this.addFine(newFine, chosenMember, chosenRound);
   }

    handleChange = async ({ currentTarget: input}) => {
        await this.setState({ [input.name]: input.value});
        if(this.state.chosenMember) this.populateRounds(this.state.chosenMember)        
   }

   getMember = (membersArray, chosenMember) => {
        const members = [...membersArray];
        return members.find( member => member.name === chosenMember);
   }

   getFineType = (finesArray, chosenFine) => {
        const fines = [...finesArray];
        return fines.find( fine => fine.type === chosenFine);
   }

   getRoundIndex = (roundsArray, chosenRound) => {
        return roundsArray.findIndex( round => round.round === chosenRound);
   }

   isFineExisting = (memberFines, chosenFine) => {
        return memberFines.find( fine => fine.type === chosenFine);
   }

   createFine = ( _id, type) => {
       return { _id, type, amount: 1}
   }

   addFine = (fineToAdd, chosenMember, chosenRound) => {
       const {members} = this.state;
       console.log({chosenMember, chosenRound, fineToAdd})
       const member = this.getMember(members, chosenMember);
       const chosenRoundIndex = this.getRoundIndex(member.rounds, chosenRound);
       console.log(chosenRoundIndex)
       // const memberFines =  member.rounds[chosenRoundIndex].fines
       // exist ? amount ++
      //  const fineExists = this.isFineExisting(memberFines, this.state.chosenFine);
      
    //    if(fineExists){
    //        fineExists.amount ++;
    //        console.log('Exists ++')
    //    }else{           
    //        console.log()
    //    }
       // else pushTo finesArray

    //    // find round -> find if fine exist --- copy and mutate correct ?
    //     const newMember = {...member}
    //     const chosenRoundIndex = this.getRoundIndex(member.rounds, this.state.chosenRound);
    //     const finesArray = newMember.rounds[chosenRoundIndex].fines 
    //     const fineExists = this.isFineExisting(finesArray, this.state.chosenFine);
    //     console.log({ newMember, fineExists})
    //     if(fineExists){
    //         fineExists.amount ++;
    //         console.log('Exists ++')
    //     }else{
    //         finesArray.push(chosenFineObj);
    //         console.log(finesArray)
    //     }
   }

   selectMemberRender = (name, label, options) => {
        return (
            <div className="form-group">
            <label htmlFor={name}>{label}</label>
                <select name={name} id={name} className="form-control" onChange={this.handleChange}>
                    <option value=""></option>
                    {options.map(option => (
                        <option key={option._id} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
        )
   }

   selectFineRender = (name, label, options) => {
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
            <select name={name} id={name} className="form-control" onChange={this.handleChange}>
                <option value=""></option>
                {options.map(option => (
                    <option key={option._id} value={option.type}>
                        {option.type}
                    </option>
                ))}
            </select>
        </div>
    )
   }

   selectRoundRender = (name, label, options) => {
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
            <select name={name} id={name} className="form-control" value={options.round} onChange={this.handleChange}>
                <option value=""></option>
                {options.map(option => (
                    <option key={option._id} value={option.round}>
                        {option.round}
                    </option>
                ))}
            </select>
        </div>
    )
   }

    render() { 
        const { members, fines, rounds } = this.state;

        return ( 
            <React.Fragment>
                <h1>Select user</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.selectMemberRender("chosenMember", "select member", members)}
                    {this.selectFineRender("chosenFine", "select fine", fines)}
                    {this.selectRoundRender("chosenRound", "select round", rounds)}
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

                    {/* <Select name="chosenMember" options={members} placeholder="Select member" value={members.name} onChange={this.handleChange} />
                    <Select name="chosenFine" options={fines} placeholder="Select fine" value={fines.name} onChange={this.handleChange} />
                    <Select name="chosenRound" options={rounds} placeholder="Select fine" value={rounds.name} onChange={this.handleChange} /> */}
                
            </React.Fragment>
         );
    }
}
 
export default SelectUser;