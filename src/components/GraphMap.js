import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from 'react-google-maps'

const GraphMap = withScriptjs(
    withGoogleMap(props => {
        const { polygons, isMarkerShown } = props
        const center = polygons[0].coordinates[0]
        return (
            <GoogleMap defaultZoom={15} defaultCenter={{ lat: center.lat, lng: center.lng }} mapTypeId={'satellite'}>
                {isMarkerShown && polygons
                    ? polygons.map((polygon, index) => {
                          return (
                              <Polygon
                                  key={`${polygon.name}i${index}`}
                                  path={polygon.coordinates}
                                  options={{ strokeOpacity: 0.8, strokeColor: "#2A2A57", fillColor:"#FFF"}}
                              />
                          )
                      })
                    : null}

                {isMarkerShown && polygons
                    ? polygons.map(polygon => {
                          return polygon.markers.map((marker, index) => {
                              return (
                                  <Marker
                                      key={`${polygon.name}mark${index}`}
                                      position={{ lat: marker.lat, lng: marker.lng }}
                                  />
                              )
                          })
                      })
                    : null}
            </GoogleMap>
        )
    })
)

export default GraphMap
