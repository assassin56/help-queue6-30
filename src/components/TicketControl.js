import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Check1 from './Check';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkQuestion: 0,
      formVisibleOnPage: false

    };

  }
  handleClick = ()=>{
    if (!this.state.formVisibleOnPage) {
      switch (this.state.checkQuestion) {
        case (0):
          this.setState({  checkQuestion:1 })
          break;
        case (1):
          this.setState({  checkQuestion:2 })
          break;
        case (2):
          this.setState({  checkQuestion:3 , formVisibleOnPage: true})
          break;
        case (3):
            this.setState({  checkQuestion:3 , formVisibleOnPage: true})
        break;
        default:
          this.setState({  checkQuestion:4 })
          break;
      }
    }
   // this.setState({ checkQuestion });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let questionText = ["Have you read through LHTP?", "have you asked another pair?", "have you prayed?", ""]
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      questionText = questionText[this.state.checkQuestion]
        console.log(questionText)
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
      } else if (this.state.checkQuestion === 3) {
        currentlyVisibleState = <Check1 />
        questionText = questionText[this.state.checkQuestion]
        console.log(questionText)
        buttonText = "Yes";
      }else {
      currentlyVisibleState = <TicketList/>
      }
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {typeof questionText !== "string" ? questionText[0]: questionText}
        <button onClick={this.handleClick}>{buttonText}</button> 
        
      </React.Fragment>
    );
  }
}

export default TicketControl;