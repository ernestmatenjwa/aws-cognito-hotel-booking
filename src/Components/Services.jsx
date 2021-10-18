import React, { Component } from 'react'
import Title from './Title'
import Nav from './Navbar'
import {FaHotel , FaShuttleVan,FaBeer, FaUtensilSpoon} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHotel/>,
                title: "Rooms",
                info: "We provide fancy rooms at lower prices"
            },
            {
                icon:<FaUtensilSpoon/>,
                title: "Catering",
                info: "We provide Catering for our first time visitors to hour hotel"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Transport",
                info: "We provide transport for our customers"
            },
            {
                icon:<FaBeer/>,
                title: "Bar",
                info: "In our bar we provide baverages and food to our customers"
            },

        ]
    }
    render() {
        return (
            <>
            <Nav />
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
            </>
        )
    }
}