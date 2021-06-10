import React, { Component } from "react";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {f_name:'', l_name:'', male:'', female:'',
    date:'', city:'', team:'', rank:'', achvmts:'', file:'',
    allPlayers:[]};
    this.onDelete = this.onDelete.bind(this);
  }

/*
 * Purpose: This function creates a new record in local storage
 * Return Value: None. A new record is generated.
*/
onFormSubmit = (event) => {
  event.preventDefault();
  let new_player = [...this.state.allPlayers, {f_name:this.state.f_name, l_name:this.state.l_name,
  male:this.state.male, female:this.state.female, date:this.state.date, city:this.state.city,
team:this.state.team, rank:this.state.rank, achvmts:this.state.achvmts, file:this.state.file}];
  this.setState({allPlayers:new_player}, () => {
  });
}

/*
 * Purpose: Save information passed from user input into state
 * Return Value: None. User input is saved into an array
*/
onTextInputChange = (event) => {
  const fieldName = event.target.name;
  switch(fieldName) {
    case 'inputFName':
      this.setState({f_name:event.target.value});
      break;
    case 'inputLName':
      this.setState({l_name:event.target.value});
      break;
    case 'genderRadio1':
      this.setState({male:event.target.value});
      break;
    case 'genderRadio2':
      this.setState({female:event.target.value});
      break;
    case 'inputDate':
      this.setState({date:event.target.value});
      break;
    case 'inputCity':
      this.setState({city:event.target.value});
      break;
    case 'inputTeam':
      this.setState({team:event.target.value});
      break;
    case 'inputRank':
      this.setState({rank:event.target.value});
      break;
    case 'inputAcheive':
      this.setState({achvmts:event.target.value});
      break;
    case 'filename':
      this.setState({file:event.target.value});
      break;
    default:
      break;
  }
}

/*
 * Purpose: Display all hockey players
 * Return Value: None. Static table is displayed once a record is created
*/

displayRows = (obj, ind) => {
  return <tr>             
    <td>{ind + 1}</td>
    <td>{obj.f_name}</td>
    <td>{obj.l_name}</td>
    <td>{obj.male}</td>
    <td>{obj.date}</td>
    <td>{obj.city}</td>
    <td>{obj.team}</td>
    <td>{obj.rank}</td>
    <td>{obj.achvmts}</td>
    <td>{obj.file}</td>
    <td>
      <div className="delete-button">
        <button onClick={() => this.onDelete({ind})} className="btn btn-danger">Delete</button>
      </div>
    </td>
    <td>
      <div className="edit-button">
        <button onClick={() => this.onEdit({ind})} className="btn btn-warning">Edit</button>
      </div>
    </td>
  </tr>
}

/*
 * Purpose: Delete an existing record given the ID
 * Return Value: None. Record is deleted upon confirmation
*/
onDelete = (idx) => {
  console.log('id is ', idx);
  alert("Are you sure you want to delete this record?");
  let temp = [...this.state.allPlayers];                        // Create a temp array
  if (idx !== -1) {
    temp.splice(idx, 1);
    this.setState({allPlayers: temp});                          // Remove record from local storage
  }
}

/*
 Purpose: Edit an existing hockey record
 Return value: None, function is incomplete
*/
onEdit = (idx) => {
  console.log('id is ', idx);
}

render() {
  return (
    <div className = "container">
      <div className="header"> Hockey Player - Team Management </div>
      <div className="row">
      <br></br>
      <div className="col-md-6">
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="inputFName" placeholder="Enter First Name" className="form-control"
          value={this.state.f_name} onChange={this.onTextInputChange}></input>
        </div>
        <br></br>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="inputLName" placeholder="Enter Last Name" className="form-control"
          value={this.state.l_name} onChange={this.onTextInputChange}></input>
        </div>
        <br></br>
        <div className="form-check">
          <input type="radio" name="genderRadio1"
          value={this.state.male} onChange={this.onTextInputChange}></input>
          <label className="form-check-label">Male</label>
          <input type="radio" name="genderRadio2"
          value={this.state.female} onChange={this.onTextInputChange}></input>
          <label className="form-check-label">Female</label>
        </div>
        <br></br>
        <div className="form-group">
          <label> Date </label>
          <input type="date" name="inputDate"
          value={this.state.date} onChange={this.onTextInputChange}></input>
          </div>
        <br></br>
        <div className="form-group">
          <label>City</label>
          <select id="inputCity" name ="inputCity" className="form-control"
          value={this.state.city} onChange={this.onTextInputChange}>
            <option selected>Choose</option>
            <option>Edmonton</option>
            <option>Calgary</option>
            <option>Toronto</option>
            <option>Vancouver</option>
            <option>Winnipeg</option>
            <option>Montreal</option>
            <option>Ottawa</option>
          </select>
        </div>
        <br></br>
        <div className="form-group">
          <label>Team</label>
          <select id="inputTeam" name="inputTeam" className="form-control"
          value={this.state.team} onChange={this.onTextInputChange}>
            <option selected>Pick...</option>
            <option>Edmonton Oilers</option>
            <option>Calgary Flames</option>
            <option>Toronto Maple Leafs</option>
            <option>Vancouver Canucks</option>
            <option>Winnipeg Jets</option>
            <option>Montreal Canadians</option>
            <option>Ottawa Senators</option>
          </select>
        </div>
        <br></br>
        <div className="form-group">
          <label>Rank</label>
          <input type="number" name="inputRank" placeholder="Enter a Rank" className="form-control"
          value={this.state.rank} onChange={this.onTextInputChange}></input>
        </div>
        <br></br>
        <div className="form-group">
          <label>Acheivements</label>
          <textarea className="form-control" name="inputAcheive" placeholder="Enter Acheivements..." rows="3"
          value={this.state.achvmts} onChange={this.onTextInputChange}></textarea>
        </div>
        <br></br>
        <div className="form-group">
          <label>Upload</label>
          <input type="file" className="form-control-file" name ="filename" id="inputFile"
          value={this.state.file} onChange={this.onTextInputChange}></input>
        </div>
        <br></br>
        <div className="submit-button">
          <button type="submit" className="btn btn-success">Submit Form</button>
        </div>
      <br></br>
      </form>
        <div className="col-md-3">
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> S1. </th>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Gender </th>
                <th> DOB</th>
                <th> City </th>
                <th> Team </th>
                <th> Rank </th>
                <th> Acheivements </th>
                <th> File Name </th>
              </tr>
            </thead>
            <tbody>
              {this.state.allPlayers.map(this.displayRows)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  }
}
export default App;
