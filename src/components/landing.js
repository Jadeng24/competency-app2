import React, { Component } from 'react';
import './landing.css';
import axios from 'axios';
class Landing extends Component {
    constructor() {
        super();

        this.state = {
            animals: []
        }
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentDidMount() {
        axios.get('/api/getallanimals', this.state).then(animals => {
            console.log(animals);
            this.setState({
                animals: animals.data
            })
        })
    }
    deleteItem(id) {
        axios.delete(`/deleteitem/${id}`)
            .then(
            axios.get('/api/getallanimals', this.state).then(animals => {
                console.log(animals);
                this.setState({
                    animals: animals.data
                })
            })

            )
    }
    render() {
        const animals = this.state.animals.map((animal, i) => {
            return (
                <div className='animal' key={i}>
                    <img src={animal.img_url} alt={animal.title} />
                    <button onClick={() => this.deleteItem(animal.id)}> Remove</button>
                </div>
            )
        })
        return (
            <div className='Landing'>
                animals{animals}
            </div>
        )
    }
}
export default Landing;