import { useState, useEffect } from 'react';

 const STORAGE_KEY = 'listStudents';

 function useStorage() {
   const [items, setItems] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
     setItems(['Huyen','Hoa','Hung','Long'])
   }, []);

   const setNextItem = () => {
     if (currentIndex == 3) {
       setCurrentIndex(0)
     } else {
       setCurrentIndex(currentIndex+1)
     }
   };

   const setPreviousItem = () => {
    if (currentIndex == 0) {
      setCurrentIndex(3)
    } else {
      setCurrentIndex(currentIndex-1)
    }
   };

   const getCurrentItem = () => {
    return {name: items[currentIndex], index: currentIndex + 1}
   }
  
   return [items, getCurrentItem, setNextItem, setPreviousItem];
 }

 export default useStorage;