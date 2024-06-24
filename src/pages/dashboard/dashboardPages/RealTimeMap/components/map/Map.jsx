import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MapComponent from './Components/MapComponent '

const Map = () => {
  const blueShade = '#0080ff'
  let initial = {
    latitude: 29.2985,
    longitude: 42.551,
    zoom: 6,
    pitch: 0,
    antialias: true,
  }
  const [layerColor, setLayerColor] = useState(blueShade)
  const [count, setCount] = useState(100)
  const [newPlace, setNewPlace] = useState(null)
  const [polygonCord, setPolygonCord] = useState([])
  let area = 250
  const [viewport, setViewport] = useState(initial)

  const mapRef = useRef()

  const theme = useTheme()
  const lgAbove = useMediaQuery(theme.breakpoints.up('lg'))

  function getLayerCord(bearing, initial_position) {
    const bearing_rad = (bearing * Math.PI) / 180

    const distance = 5
    const EARTH_RADIUS = 6378.137
    const init_lat = (initial_position.latitude * Math.PI) / 180
    const init_lon = (initial_position.longitude * Math.PI) / 180

    const final_lat =
      (180 / Math.PI) *
      Math.asin(
        Math.sin(init_lat) * Math.cos(distance / EARTH_RADIUS) +
          Math.cos(init_lat) *
            Math.sin(distance / EARTH_RADIUS) *
            Math.cos(bearing_rad),
      )

    const final_lon =
      (180 / Math.PI) *
      (init_lon +
        Math.atan2(
          Math.sin(bearing_rad) *
            Math.sin(distance / EARTH_RADIUS) *
            Math.cos(init_lat),
          Math.cos(distance / EARTH_RADIUS) -
            Math.sin(init_lat) * Math.sin(final_lat),
        ))

    let finalCord = []
    finalCord = [...finalCord, final_lon, final_lat]
    return finalCord
  }

  function getAllCordinates() {
    const initial_position = {
      latitude: newPlace?.lat,
      longitude: newPlace?.lng,
    }

    let oneC = getLayerCord(45, initial_position)
    let twoC = getLayerCord(135, initial_position)
    let threeC = getLayerCord(225, initial_position)
    let fourC = getLayerCord(315, initial_position)
    setPolygonCord([oneC, twoC, threeC, fourC])
  }

  useEffect(() => {
    if (newPlace) {
      getAllCordinates(area)
    }
  }, [newPlace])

  function clearAll() {
    setNewPlace(null)
    setPolygonCord([])
    setViewport(initial)
    setLayerColor(blueShade)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          borderRadius: 1,
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            '& .ps__rail-y': { zIndex: 5 },
          }}
        >
          {/* <Box sx={{   width: "100%",height: "100vh",  }}> */}
          <MapComponent
            mapRef={mapRef}
            count={count}
            layerColor={layerColor}
            polygonCord={polygonCord}
            setNewPlace={setNewPlace}
            newPlace={newPlace}
            viewport={viewport}
            setViewport={setViewport}
          />
          {/* </Box> */}
        </Box>
      </Box>
    </>
  )
}

export default Map
