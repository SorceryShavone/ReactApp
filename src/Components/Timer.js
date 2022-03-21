import {useState, useEffect} from 'react';
import ()
function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setCount((count) => count + 1);
        }, 1000);
    }, []); //adding [] and )'   final: "[]);"   made the timer render once, which this is called a dependency. In this case an empty arraay. 
                                    //if want to do something different, add something within the array

    return <h1>I've rendered {count} times!</h1>;
}

/* const Timer = () => {const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
        setCount((count) => count + 1);
        }, 1000);
    }

}
*/