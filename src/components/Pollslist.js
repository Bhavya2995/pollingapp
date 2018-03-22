import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPolls } from "../actions";
import NavBar from "./NavBar";

const style = {
  rowcol: {
    fontSize: "18px"
  },
  headercol: {
    fontSize: "14px"
  },
  heading: {
    color: "#0b101c"
  }
};

class Pollslist extends Component {
  componentDidMount() {
    this.props.fetchPolls();
  }
  render() {
    return (
      <div className="mb-5">
        <NavBar />
        <h1 className="text-center display-4" style={style.heading}>
          List of Polls
        </h1>
        <div className="container">
          <Table height="400px">
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={style.headercol}>
                  ID
                </TableHeaderColumn>
                <TableHeaderColumn style={style.headercol} tooltip = "Click on respective title to edit the poll">
                  Title
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.props.polls.map((poll, index) => {
                return (
                  <TableRow key={index}>
                    <TableRowColumn style={style.rowcol}>
                      {index + 1}
                    </TableRowColumn>
                    <Link
                      to={`/polls/${poll._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <TableRowColumn style={style.rowcol}>
                        {poll.title}
                      </TableRowColumn>
                    </Link>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ polls }) => ({ polls });
export default connect(mapStateToProps, { fetchPolls })(Pollslist);
