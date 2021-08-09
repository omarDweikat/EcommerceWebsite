
import React, { Component, useCallback, useRef, useState } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
//                <img src={logo} alt="Logo" />;
import '../App.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import axios from 'axios';
import { config } from 'react-transition-group';
const accessToken = 'AMs8Yk0gwtPUv5NFxBQ01xWN5oqJDKOmB0cqT4H2khgBiDP1dP'
const apiUrl = 'http://localhost:5000/api/images/4/images'
var fName = new String();
import { ImageList } from '@material-ui/core';


export class ItemPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            post: [],
            img: [],
            filename: ''

        }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/api/item/?Id=124', { headers: { token: accessToken, Vcode: 1 } })

            .then(res => {

                console.log(res)
                this.setState({ post: res.data })
            })
        axios.get('http://localhost:5000/api/images/124/images', { headers: { token: accessToken, Vcode: 1 } })

            .then(res => {

                console.log(res)
                this.setState({ img: res.data })

            })

    }
    buyNow() {
        { console.log("CLICKED") }
        /* axios.post('', { headers: { Vcode: 1 } },
         {
            id:''
         }
         )
 
     .then(res => {
 
         console.log(res)
     })*/
    }
    addToCart() {
        { console.log("CLICKED") }
        /*axios.post('', { headers: { Vcode: 1 } },
        {
           id:''
        }
        )

    .then(res => {

        console.log(res)
    })*/
    }
    //                        {img.map(img => <img key={post.id} src={img.filename} width="200px" height="200px"></img>)}

    render() {
        const { post } = this.state
        const { img } = this.state
        return (
            <div className="container">
                <div className="divimageclass">
                    <div className="divimageclass">

                        <Zoom>

                            {img.map(img => <img key={img.id} src={img.filename} width="200px" height="200px"></img>)}




                        </Zoom>

                    </div>

                </div>
                <div className="textclass" >
                    {post.map(post => <h1 className="f" key={post.id}>{post.name} </h1>)}
                    <div style={{ borderTop: "1px solid black ", marginLeft: 0, marginRight: 0 }}></div>

                    {post.map(post => <div key={post.id} > Price:  <span className="pr">{post.price} NIS</span></div>)}

                    <ul>About this item :
                        <li>
                            {post.map(post => <div key={post.id}>  {post.description}</div>)}
                        </li>

                    </ul>





                </div>
                <div className="buttonclass" >

                    <div className="odiv"  > <button className="o" onClick={this.addToCart}> اضف على سلة المشتريات   </button>

                    </div>
                    <div className="pdiv"  > <button className="p" onClick={this.buyNow} >إشتري الان </button>
                    </div>
                </div>
            </div>);

    }
}

