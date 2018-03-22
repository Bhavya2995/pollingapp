import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

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

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <h1 className="text-center display-4" style={style.heading}>
          List of Users
        </h1>
        <div className="container">
          <Table height="400px">
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={style.headercol}>
                  Username
                </TableHeaderColumn>
                <TableHeaderColumn style={style.headercol}>
                  Role
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} stripedRows={true}>
              {this.props.userlist.map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableRowColumn style={style.rowcol}>
                      {user.username}
                    </TableRowColumn>
                    <TableRowColumn style={style.rowcol}>
                      {user.role}
                    </TableRowColumn>
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
const mapStateToProps = ({ userlist }) => ({ userlist });
export default connect(mapStateToProps, { fetchUsers })(UserList);
