import React, { useEffect, useState } from "react";
import Endpoints from "../util/Endpoints";
import GliderMap from "../components/GliderMap";

export default function Question3(props) {
  //Displaying real-time metrics for our devices' locations and statuses is a critical component of our reporting strategy.
  // This allows us to provide accurate, live data to our clients.
  //
  // Using Translink's JourneyPlanner API, implement an MVP in React for a real-time reporting dashboard.
  // What exactly this consists of is up to you, but preferably it will include:
  // - A map component (or a *very* pretty table, lol)
  // - A way to locate/inspect stops
  // - A way to track buses
  // - Information about the routes available
  //
  // As Translink's JourneyPlanner API is supposedly quite complex and undocumented (surprise surprise!) you may find this package useful:
  // https://github.com/McPo/belfast-glider-api-server
  //
  // This file contains the map component and two endpoints to obtain Stop data.

  const [stops, setStops] = useState([]);

  useEffect(() => {
    fetchStops();
    // fetchStopInfo();
  }, []);

  const fetchStops = () => {
    fetch(Endpoints.STOPS)
      .then((res) => res.json())
      .then((newStops) => {
        if (newStops.stops.length) {
          setStops(newStops.stops);
        }
      })
      .catch((e) => console.log(e));
  };

  const fetchStopInfo = (stop) => {
    fetch(Endpoints.STOP_INFO + "/" + stop.id)
      .then((res) => res.json())
      .then((stopInfo) => {
        if (stopInfo.length) {
          console.log(stopInfo);
        }
      })
      .catch((e) => console.log(e));
  };

  /**
   * Strategy for Question 3...
   * 
   * My idea for this question is to have a drop down menu that you could select different views: 
   * - one view to locate/inspect stops
   * - one view to track busses/routes
   * 
   * If you are in the stops view...
   * - Each stop is represented as a pin on the map
   * - Clicking on a pin would have a modal appear above it that contains the stop info
   * 
   * If you are in the routes view...
   * - You would have a bus icon showing where a bus is located on the map
   * - You would have a route from one stop to another highlighted in blue that the bus is currently on
   * - If you click on the bus a modal for the busses tracking information would appear
   * 
   * To implement this plan, the main challenge would be to collect the data from the Journey Planner API
   * and then have the selected view of the map component re-render to display this new data 
   * 
   */

  return (
    <div>
      <GliderMap
        stops={stops}
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkHRuOEvL8BERtTR0oIB-mw8e0QkMVA2U&v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px`, margin: 20 }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
