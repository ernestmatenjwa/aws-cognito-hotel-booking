import React, { Component } from 'react'
import defaultBcg from '../../images/room-3.jpeg';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../Global/context';
import StyledHero from '../StyledHero';

export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (<div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">SORRY</h1>
                                <h3>No such room could be found...</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,capacity,size,price,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg }>
           
            <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn btn-primary">Back To Rooms</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
                    {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </div>)
                    })}
               </div>
               <div className="single-room-info">
                  
                   <article className="info">
                      <h3>Info</h3>
                      <h6>price &emsp;&emsp;&emsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:R {price}</h6>
                      <h6>size  &emsp; &emsp; &emsp; &emsp; &nbsp;:{size} SQFT</h6>
                      <h6>
                          max capacity &nbsp;&nbsp;&nbsp;&nbsp;: 
                              {capacity > 1 ? `${capacity} people`: `${capacity} person`}
                      </h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
              
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state.slug}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Book Now</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
