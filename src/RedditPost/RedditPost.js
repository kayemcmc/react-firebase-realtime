import React from 'react';
import moment from 'moment';


const style = {display: 'flex', flexDirection: 'column', marginBottom: '30px' }
export default (props) => {
    return <div style={style}>
    <a href="http://google.com">{props.title}</a>
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <p style={{marginRight: 30}}>{props.comments} Comments</p>
    <p>Submitted {moment(props.submitted).fromNow()}</p>
    </div>
    </div>
}