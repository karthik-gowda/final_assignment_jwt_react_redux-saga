import React from 'react';
import { connect } from 'react-redux';
import Query from '../../components/query';
import {Redirect} from 'react-router-dom';
import {Link ,useHistory} from 'react-router-dom';
import './restoitem.css';
import bg from '../../bg.jpg';

let ResItem = ({ list }) => (
list ?
    <div className="main">
    {list.map(listitems =>
                    <div className="row">
                        
                                <div>
                                    <img className="img-responsive bg" src={bg} alt="image" />
                                </div>
                                <Link to="/query"><td className="links" ><h5 className="card-title">{listitems.name}</h5></td></Link>
                                <td className="location">{listitems.location}</td>
                                <td className="price">$ Price For Two {listitems.pricefortwo}</td>
                                <td className ="rating">{listitems.rating}</td>
                                <td className="category">{listitems.category}</td>
                            
                    
                    </div>)}
    </div>
:
null

);
const mapStateToProps = (state) => ({
list: state.restaurants,

})

ResItem = connect(mapStateToProps,null)(ResItem)
export default ResItem;













/*<table className="table table-bordered striped my-4">
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
*/ 