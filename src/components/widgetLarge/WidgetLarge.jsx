import React from 'react';
import './widgetLarge.scss';

export default function WidgetLarge() {

  const Button = ({ type }) => {
    return <button className={'widgetLargeButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLarge'>
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Carl Johnson</span>
          </td>
          <td className="widgetLargeDate">27 Jan 2022</td>
          <td className="widgetLargeAmount">R1,374.50</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Carl Johnson</span>
          </td>
          <td className="widgetLargeDate">27 Jan 2022</td>
          <td className="widgetLargeAmount">R1,374.50</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Carl Johnson</span>
          </td>
          <td className="widgetLargeDate">27 Jan 2022</td>
          <td className="widgetLargeAmount">R1,374.50</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Carl Johnson</span>
          </td>
          <td className="widgetLargeDate">27 Jan 2022</td>
          <td className="widgetLargeAmount">R1,374.50</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
