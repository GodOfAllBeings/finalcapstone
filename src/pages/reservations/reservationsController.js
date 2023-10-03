import React, {useEffect, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../utils/fakeAPI';
import { useNavigate } from "react-router-dom";
import Reservations from './reservations';

function ReservationsController(props){
    const navigate = useNavigate();
    const {
    } = props;

    const submitForm = (formData) => {
        submitAPI(formData)
          .then((success) => {
            if (success) {
              navigate('/confirmed-booking');
            } else {
              console.error('Booking submission failed.');
            }
          })
          .catch((error) => {
            console.error('Error submitting booking:', error);
          });
      };

    const reducer = (state, action) => {
        switch (action.type) {
          case 'INITIALIZE_TIMES':
            return action.payload;
          case 'UPDATE_TIMES':
            return action.payload;;
          default:
            return state;
        }
      };

    const [availableTimes, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        initializeTimes();
    }, []);

    const initializeTimes = () => {
        const today = new Date();
        fetchAPI(today)
            .then((data) => {
                dispatch({ type: 'INITIALIZE_TIMES', payload: data });
            })
            .catch((error) => {
                console.error('Error fetching available times:', error);
            });
    };

    const updateTimes = (date) => {
        fetchAPI(date)
            .then((data) => {
            console.log(data);
            dispatch({ type: 'UPDATE_TIMES', payload: data });
            })
            .catch((error) => {
            console.error('Error fetching available times:', error);
            });
    };

    return (
        <>
            <Reservations
                updateTimes={updateTimes}
                submitForm={submitForm}
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </>
    )
}
export default ReservationsController;