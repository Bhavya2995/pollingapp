import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoll, updatePollTitle, addOptionPoll,deleteOptionPoll } from "../actions";
import NavBar from "./NavBar";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField/TextField";

const style = {
  styleButton: {
    marginLeft: "10px"
  }
};

class PollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      option: ""
    };
  }
  componentWillMount() {
    this.props.fetchPoll(this.props.match.params.id);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // handleUpdate = e => {
  //   console.log("working");
  // };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTitleSubmit = e => {
    console.log("Sadf");
    this.props.updatePollTitle(this.props.match.params.id, this.state.title);
  };

  handleAddOption = e => {
    this.props.addOptionPoll(this.props.match.params.id, this.state.option);
  };
  handleDelete = (e) =>{

    this.props.deleteOptionPoll(this.props.match.params.id,"testingnewoption")
  }
  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleTitleSubmit}
      />
    ];
    return (
      <div>
        <NavBar />
        <div className="display-4 text-center mb-5">
          {this.props.poll.title} Details
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="lead mb-3">Poll ID : {this.props.poll._id}</div>
              <div className="lead mb-3">
                Title : {this.props.poll.title}
                <div>
                  <RaisedButton
                    label="Update Title"
                    primary={true}
                    onClick={this.handleOpen}
                  />
                  <Dialog
                    title="Update Title"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    <TextField
                      type="text"
                      floatingLabelText="New title"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </Dialog>
                </div>
                <div className="lead mb-3">
                  {/* Options:
                {this.props.poll.options.map((option,index)=>(
                  <div key = {index}>{option.option}</div>
                ))} */}
                  <TextField
                    type="text"
                    floatingLabelText="Add New Option"
                    name="option"
                    value={this.state.option}
                    onChange={this.handleChange}
                  />
                  <RaisedButton
                    label="Add Options"
                    primary={true}
                    onClick={this.handleAddOption}
                  />
                </div>
                {/* {this.props.poll.options.map((option,index)=>(
                  <div key = {index}>{option.option}</div>
                ))} } */}
                <RaisedButton
                    label="Delete Poll Option"
                    primary={true}
                    onClick={this.handleDelete}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ poll }) => ({ poll });
export default connect(mapStateToProps, {
  fetchPoll,
  updatePollTitle,
  addOptionPoll,
  deleteOptionPoll
})(PollView);
