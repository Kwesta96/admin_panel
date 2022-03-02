import { Visibility } from '@mui/icons-material';
import React from 'react';
import './widgetSmall.scss';

export default function WidgetSmall() {
  return (
    <div className='widgetSmall'>
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">John Doe</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='widgetSmallIcon'/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
