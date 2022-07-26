import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addSecond, addMinute, addHour, tick, updateMilestone, startMilestone} from './countdownSlice'

const Countdown = () => {
    const hours = useSelector((state) => state.countdown.hours);
    const minutes = useSelector((state) => state.countdown.minutes);
    const seconds = useSelector((state) => state.countdown.seconds);
    const stop = useSelector((state) => state.countdown.stop);
    const milestone = useSelector((state) => state.countdown.milestone);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
          dispatch(tick());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const d = new Date(); 
            dispatch(updateMilestone( d.getTime() ) );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div>
        <section>
            <div>
                <button onClick={() => dispatch(startMilestone())}>Azzera</button>
            </div>
            <p>{milestone}</p>
        </section>

        <section>
            <div>
                <button onClick={() => dispatch(addHour())}>^</button>
                <button onClick={() => dispatch(addMinute())}>^</button>
                <button onClick={() => dispatch(addSecond())}>^</button>
            </div>
            <p>{hours} : {minutes} : {seconds}</p>
        </section>
        </div>
    )
}

export default Countdown