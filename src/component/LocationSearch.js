import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { geocodeByPlaceId , getLatLng } from 'react-google-places-autocomplete';
// If you want to use the provided css
// import 'react-google-places-autocomplete/dist/assets/index.css';
 
const Component = () => (
  <div>
    <GooglePlacesAutocomplete onSelect={async (locationResult) => {
        console.log(locationResult.place_id);
        const data = await geocodeByPlaceId('ChIJH_imbZDuDzkR2AjlbPGYKVE');
        console.log(data);
    }}
    />
  </div>
);
 
export default Component;