import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentRemove from "material-ui/svg-icons/content/remove";
import RaisedButton from "material-ui/RaisedButton";
import { addPoll } from "../actions";
import AlertBox from "./AlertBox";

const style = {
  buttonStyle: { margin: "10px" },
  textStyle: { color: "#ccc" }
};

class AddPoll extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      options: [{ opt: "" }],
      errors: {}
    };
  }

  handleTitleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOptionNameChange = id => e => {
    const newOptions = this.state.options.map((option, oid) => {
      if (id !== oid) return option;
      return { ...option, opt: e.target.value };
    });

    this.setState({ options: newOptions });
  };

  handleSubmit = e => {
    const errors = this.validate(this.state);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const options = this.state.options.reduce(
        (acc, cur) => acc + cur.opt + "____",
        ""
      );
      const optionString = options.slice(0, options.length - 4);
      this.props.addPoll(this.state.title, optionString);
    }
  };

  handleAddOption = () => {
    this.setState({ options: this.state.options.concat([{ opt: "" }]) });
  };

  handleRemoveOption = id => () => {
    this.setState({
      options: this.state.options.filter((s, oid) => id !== oid)
    });
  };

  validate(data) {
    const errors = {};
    if (!data.title) errors.title = "This field is required";
    return errors;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="display-4 text-center mb-3">Add New Poll </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <TextField
                floatingLabelText="Title"
                floatingLabelFixed={true}
                fullWidth={true}
                name="title"
                value={this.state.title}
                onChange={this.handleTitleChange}
                errorText={this.state.errors.title}
              />

              {this.state.options.map((option, id) => (
                <div key={id}>
                  <TextField
                    type="text"
                    floatingLabelText="Option"
                    floatingLabelFixed={true}
                    placeholder={`Option #${id + 1}`}
                    value={option.opt}
                    onChange={this.handleOptionNameChange(id)}
                  />
                  <FloatingActionButton
                    mini={true}
                    onClick={this.handleRemoveOption(id)}
                  >
                    <ContentRemove />
                  </FloatingActionButton>
                </div>
              ))}
              <RaisedButton
                label="Add Options"
                primary={true}
                onClick={this.handleAddOption}
              />
              <br />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </div>
        {this.props.poll.error === 0 ? (
          <AlertBox message="Poll has been added" url="no" />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = ({ poll }) => ({ poll });
export default connect(mapStateToProps, { addPoll })(AddPoll);
