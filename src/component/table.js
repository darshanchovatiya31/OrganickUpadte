import React from "react";
function Table() {
  return (
    <>
    <div className="container">
      <table>
      <div className="text-start border border-2 border-black ps-3 pe-4">
          <div className="d-flex justify-content-between">
          <p>Certificate showing the number of marks obtained by</p>
          <p className="text-uppercase">id no.</p>
          </div>
          <p>Shri/Smt./Kumari</p>
          <p>of<span className="text-uppercase fs-5"><b> sir p.t.sarvajanik college of science, surat</b></span></p>
          <p>in each header of passing at the <span className="text-uppercase"><b>bachelor og science ( fifth semester )</b></span><b> held in <span className="text-uppercase"> april-2016</span></b></p>
      </div>
      </table>
    <table border="1">
      <tr>
        <th rowSpan="2">Subject Name</th>
        <th colSpan="3">Passing Mark</th>
        <th colSpan="6">Mark Obtained</th>
      </tr>
      <tr>
        <th>External</th>
        <th>Enternal</th>
        <th>Total</th>
        <th>External</th>
        <th>Enternal</th>
        <th>Total</th>
        <th>GR.</th>
        <th>GP.</th>
        <th>Credit</th>
      </tr>
      <tr>
        <th className="text-uppercase">language through literature</th>
        <th>50/18</th>
        <th>20</th>
        <th>70/25</th>
        <th>19</th>
        <th>(09)</th>
        <th>28</th>
        <th>E</th>
        <th>5</th>
        <th>2</th>
      </tr>
      <tr>
        <th>PAPER-VI</th>
        <td colSpan="3"></td>
        <td  colSpan="3"></td>
      </tr>
      <tr>
        <th>PAPER-VII</th>
        <td colSpan="3"></td>
        <td  colSpan="3"></td>
      </tr>
      <tr>
        <th>PAPER-VIII</th>
        <td colSpan="3"></td>
        <td  colSpan="3"></td>
      </tr>
      <tr>
        <th>PAPER-IX</th>
        <td colSpan="3"></td>
        <td  colSpan="3"></td>
      </tr>
      <tr>
        <th>PAPER-X</th>
        <td colSpan="3"></td>
        <td  colSpan="3"></td>
      </tr>
      <tr>
        <th>PAPER-XI</th>
        <td colSpan="3"></td>
        <td  colSpan="3"></td>
      </tr>
      <tr>
        <th className="text-uppercase text-start">physics</th>
        <th>300/108</th>
        <th>120</th>
        <th>420/151</th>
        <th>(143)</th>
        <th>(60)</th>
        <th>(203)</th>
        <th>E</th>
        <th>5</th>
        <th>12</th>
      </tr>
      <tr>
        <th className="text-uppercase text-start">physics practical</th>
        <th>120/43</th>
        <th>60</th>
        <th>180/65</th>
        <th>(91)</th>
        <th>(44)</th>
        <th>(135)</th>
        <th>B</th>
        <th>8</th>
        <th>6</th>
      </tr>
      <tr>
        <th className="text-uppercase text-start">electronics</th>
        <th>50/18</th>
        <th>20</th>
        <th>70/25</th>
        <th>(26)</th>
        <th>(10)</th>
        <th>(36)</th>
        <th>D</th>
        <th>6</th>
        <th>2</th>
      </tr>
      <tr>
        <th className="text-uppercase text-start">national service scheme</th>
        <td colSpan="8"></td>
        <th>2</th>
      </tr>
      <tr>
        <td colSpan="10">.</td>
      </tr>
      <tr>
        <th className="text-uppercase text-end">Aggregrate Total</th>
        <th>520</th>
        <th></th>
        <th>740</th>
        <th>279</th>
        <th></th>
        <th>402</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <th className="text-end">Result</th>
        <th colSpan="9" className="text-start">PASS</th>
      </tr>
    </table>
    </div>
    </>
  );
}

export default Table;
