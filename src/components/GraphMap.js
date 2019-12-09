import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from 'react-google-maps'

const GraphMap = withScriptjs(
    withGoogleMap(props => {
        const { polygons } = props
        const center = polygons[0].coordinates[0]
        return (
            <GoogleMap defaultZoom={15} defaultCenter={{ lat: center.lat, lng: center.lng }}>
                {props.isMarkerShown
                    ? polygons.map((polygon, index) => {
                          return <Polygon key={`${polygon.name}i${index}`} path={polygon.coordinates} />
                      })
                    : null}
            </GoogleMap>
        )
    })
)

export default GraphMap
