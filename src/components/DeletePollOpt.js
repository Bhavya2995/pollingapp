import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { deleteOptionPoll } from "../actions";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import AlertBox from './AlertBox';

class DeletePollOpt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      option: "",
      selected: []
    };
  }
  handleDelete = e => {
    this.props.deleteOptionPoll(this.props.id, this.state.option);
  };
  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  handleClickCell = (row, col, e) => {
    console.log(e.target.dataset.myRowIdentifier);
    this.setState({
      option: this.props.options[e.target.dataset.myRowIdentifier].option
    });
  };

  render() {
    console.log(this.state.selected, this.state.option);
    return (
      <div>
        <div className="lead mb-3">Select an option to Delete</div>
        {this.props.options ? (
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-8">
                <Table
                  onRowSelection={this.handleRowSelection}
                  onCellClick={this.handleClickCell}
                >
                  <TableBody displayRowCheckbox={false}>
                    {this.props.options.map((option, index) => (
                      <TableRow
                        key={index}
                        selected={this.isSelected(index)}
                        data-my-row-identifier={index}
                      >
                        <TableRowColumn
                          data-my-row-identifier={index}
                          children={option.option}
                        />
                      </TableRow>
                      
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        ) : null}
        <br/>
        <RaisedButton
          label="Delete Poll Option"
          primary={true}
          onClick={this.handleDelete}
        />
        {
            (this.props.pollupdate.error===0)?<AlertBox url = "no" message = "Poll Option Deleted" /> : null 
        }
      </div>
    );
  }
}
const mapStateToProps = ({pollupdate}) => ({pollupdate});
export default connect(mapStateToProps, { deleteOptionPoll })(DeletePollOpt);
