import React, {useState} from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Check1 from './Check';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkQuestion: 0,
      formVisibleOnPage: false,
      tickets: false
    };
    let [checkQuestion, setCheck] = useState(0)

  }
  handleClick = ()=>{
    if (!this.state.formVisibleOnPage) {
      switch (this.state.checkQuestion) {
        case (0):
          this.setState({  checkQuestion:1, tickets:false })
          break;
        case (1):
          this.setState({  checkQuestion:2 })
          break;
        case (2):
          this.setState({  checkQuestion:3 , formVisibleOnPage: true})
          break;
        default:
          this.setState({  checkQuestion:0 })
          break;
      }
    }
  }
   
  goBack=()=>{
    this.setState({tickets:true, formVisibleOnPage: false, checkQuestion:0})
  }
 
    render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let questionText = ["have you read through LHTP and still need help?", "have you asked another pair?", "have you prayed?", ""]
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      questionText = questionText[this.state.checkQuestion]
    
  
      buttonText = "Return to Ticket List";
    } else {
      if (this.state.checkQuestion === 0) {
        currentlyVisibleState = <Check1 />;
        buttonText = "Yes";
      } else if (this.state.checkQuestion === 1) {
        currentlyVisibleState = <Check1 />;
        buttonText = "Yes";
        questionText = questionText[this.state.checkQuestion]
      } else if (this.state.checkQuestion === 2) {
        currentlyVisibleState = <Check1 />;
        questionText = questionText[this.state.checkQuestion]
        buttonText = "Yes";
      } 
    }
    return (
      <React.Fragment>
        {this.state.tickets? <TicketList/>: currentlyVisibleState}
        {typeof questionText !== "string" ? questionText[0]: questionText}
        {this.state.formVisibleOnPage? <button onClick={this.goBack}>go back</button>:  <button onClick={this.handleClick}>{buttonText}</button> }
      </React.Fragment>
    );
  }
}

export default TicketControl;