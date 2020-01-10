import React from "react";
import {SeatSelectionComponent} from "./SeatSelectionComponent";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from "./actions";

class BookScreenComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalShow:false
        }
    }

    handleSeatSelection = (selectedseats) =>{
        console.log("seatselected::",selectedseats);
    }

    handleSeatSelPopUp = ()=>{
        console.log("button clicked");
        let ispopup = (this.state.modalShow)?false:true;
       this.setState({modalShow:ispopup});
    }

    constructShowTime = (showlist) =>{
    return showlist.map((data,index) => <span className="movie-padding" key={index}><button name={`time+${index}`} onClick={this.handleSeatSelPopUp}>{data}</button></span>); 
    }

    constructTheaterData = (listdata)=>{

     return listdata.map((data)=>{
         return <div>
         <label className="movie-padding">{data.name}</label>
         {this.constructShowTime(data.showtimes)}
     </div>
     })

    }

    render(){
        let theaterDomList = this.constructTheaterData(this.props.theaterlist.get(this.props.curSelectedMovie.imdbID));
        return (<div>
    <header><h1>{this.props.curSelectedMovie.Title}</h1></header>
            <section>
            {theaterDomList}
            </section>
            <SeatSelectionComponent show={this.state.modalShow} onHide={this.handleSeatSelPopUp} name={this.props.curSelectedMovie.Title} handleSeatSelection={this.handleSeatSelection} />
        </div>)
    }
}

const mapStateToProps = (state)=>({
    curSelectedMovie: state.curSelectedMovieObj,
    theaterlist:state.theaterlist
})

const mapDispatchToProps = (dispatch)=>({
movieActions: bindActionCreators(MovieActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(BookScreenComponent);;