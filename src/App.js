import React, { Component } from 'react'
import axios from 'axios'
import GraphMap from './components/GraphMap'
import './App.css'

// async function getPoints() {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1/`)
//     const pokemon = response.data
//     console.log(pokemon.name)
//     return pokemon
// }

// function App() {
//     const points = [
//         { lat: -34.4, lng: 150.744 },
//         { lat: -34.397, lng: 150.644 },
//         { lat: -34.6, lng: 150.545 },
//         { lat: -34.5, lng: 150.744 }
//     ]

//     const pokemon = await getPoints()

//     return (
//         <div className="App">
//             Name: {pokemon.name}
//             <GraphMap
//                 isMarkerShown
//                 googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `100vh` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//                 points={points}
//             />
//         </div>
//     )
// }

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: null,
            polygons: null
        }
    }

    componentDidMount() {
        this.getPoints()
    }

    getPoints() {
        axios.get(`https://us-central1-gps-tracking-21bb9.cloudfunctions.net/api/coordinates`).then(result => {
            this.setState({ polygons: result.data })
        })
    }

    render() {
        const { polygons } = this.state
        return (
            <div className="App">
                {polygons ? (
                    <GraphMap
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100vh` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        polygons={polygons}
                    />
                ) : null}
            </div>
        )
    }
}

export default App
