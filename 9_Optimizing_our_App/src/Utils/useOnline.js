import {useState , useEffect} from 'react';

const useOnline = () =>{

    const [isOnline , setIsOnline]  = useState(true);
    
    useEffect(() =>{

        const handleOnline = () =>{
            setIsOnline(true);
        }

        const handleOffline = () =>{
            setIsOnline(false);
        }

        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        
        /* Always clear your event listener as well : study more about this */
        return () => {
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }

    },[]);
    
    return isOnline;
}

export default useOnline;