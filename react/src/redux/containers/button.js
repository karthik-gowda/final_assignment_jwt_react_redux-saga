import React from 'react';
import { connect } from 'react-redux';
import { getLists } from '../actions';
import './button.css';

let Button=({getLists})=>(
    <button className="btn-list" onClick={getLists}>Discover food joints</button>
)
const mapDispatchToProps = {
        getLists: getLists,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;