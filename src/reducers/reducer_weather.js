import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            if (action && action.payload && action.payload.data) {
                console.log('FETCH_WEATHER ACTION RECIEVED SUCCESS:', action.payload.data);

                if (state.map(s => s.city.name).includes(action.payload.data.city.name)) {
                    console.log('City already exists!');
                    return state;
                }
                
                // ensure we return a NEW instance of state and do NOT mutate it
                ///return state.concat([action.payload.data]);
                return [ action.payload.data, ...state ];
            }       
    }

    return state;
}