import React from 'react';
import { connect } from 'react-redux';
import Query from '../../components/query';
import {Redirect} from 'react-router-dom';
import {Link ,useHistory} from 'react-router-dom';
import './restoitem.css';

let ResItem = ({ list }) => (
list ?
<center >
    <div>
        <table className="table table-bordered striped my-4">
            <thead>
            <th>Restaurants</th>
            <th>Location</th>
            <th>Price for two</th>
            <th>Rating</th>
            <th>Category</th>
            </thead>
                
            {list.map(listitems =>
                    <tbody>
                        <Link to="/query"><td className="links" >{listitems.name}</td></Link>
                        <td>{listitems.location}</td>
                        <td>{listitems.pricefortwo}</td>
                        <td>{listitems.rating}</td>
                        <td>{listitems.category}</td>
                    </tbody>
            )}
        </table> 
    </div>
</center> :
null

);
const mapStateToProps = (state) => ({
list: state.restaurants,

})

ResItem = connect(mapStateToProps,null)(ResItem)
export default ResItem;