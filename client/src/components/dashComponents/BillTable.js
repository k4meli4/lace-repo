/* eslint-disable */
import React from 'react';
import { Table } from 'react-bootstrap';

function BillTable(props) {
  console.log(props)
  const table = (
    props.specificBills.map((rows) =>
      <div
        key={rows._id}>
        <a target='_blank' rel="noopener noreferrer" href={rows.URL}>{rows.title}</a>
        <Table responsive bordered condensed className="f6 black-70" >
          <thead>
            <tr>
              <th>Date</th>
              <th>Bill Stage</th>
              <th>Activity</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{rows.date[0]}</td>
              <td>{rows.stage[0]}</td>
              <td>{rows.activity[0]}</td>
              <td>{props.votes[-1]}</td>
            </tr>
             
          </tbody>
        </Table>
      </div>
    )
  );
  return (
    <div>{table}</div>
  );
}


// const BillTable = props => (
//   <div>
//     {/* {props.map(rows)} */}
//     <a target='_blank' rel="noopener noreferrer" key={props._id} href={props.URL}>{props.title}</a>
//     <Table responsive bordered condensed className="f6 black-70" >
//       <thead>
//         <tr>
//           <th>Date</th>
//           <th>Bill Stage</th>
//           <th>Activity</th>
//           <th>Vote</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{props.date}</td>
//           <td>{props.stage}</td>
//           <td>{props.activity}</td>
//           <td>{props.votes}</td>
//         </tr>
//       </tbody>
//     </Table>
//   </div>
// );

export default BillTable;