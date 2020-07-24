import React from 'react';
import axios from 'axios';


class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            api_data:[],
         }
    }
    componentDidMount() {
        const apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((datas) => this.setState({
            api_data: datas.data

          }));

      }
      addExployee=(e)=> {
        e.preventDefault();
        const employee = {
            employee_name:'thiru',
            employee_age: 20,
            employee_salary: 20000,
        }
        axios.post('http://dummy.restapiexample.com/api/v1/create', employee)
        .then(res => console.log(res.data));
      }
      editEmployee=(EmployeeId)=> {
        //   console.log('http://dummy.restapiexample.com/api/v1/update/{EmployeeId}');
        const employee = {
            employee_name: "thiruvicky",
            employee_age: 20,
            employee_salary: 30000,
        }
        axios.put('http://dummy.restapiexample.com/api/v1/update/1', employee)
        .then(res => console.log(res.data));
      }
      delEmployee=(e)=> {
       
      }
    render() { 
        // console.log(this.state.api_data[0]);

        const listItems = this.state.api_data.map((myList,index) =>  
            <tr key={index}>
                 <td>{myList.id}</td>
                 <td>{myList.employee_name}</td>
                 <td>{myList.employee_age}</td>
                 <td>{myList.employee_salary}</td>
                 <td> <button variant="info" onClick={this.editEmployee.bind(this,myList.id)}>Edit</button>
                    &nbsp;<button variant="danger"  onClick={this.delEmployee}>Delete</button></td>

             </tr>
        ); 

        return ( 
            <div>
            <button variant="danger"   onClick={this.addExployee} >Add Employee</button>
            <h2>Data's</h2>
            <div>
                <table align="center" style={{width: '80%'}}>
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>employee_name</th>
                            <th>employee_age</th>
                            <th>employee_salary</th>
                            <th>Action</th>
                        </tr>
                        {listItems}
                    </tbody>
                </table>
            </div>


        </div>
         );
    }
}
 
export default Api;