import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Reflect Digital Marketing`
    },[title])
};

export default useTitle;