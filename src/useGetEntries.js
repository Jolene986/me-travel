import { useEffect } from 'react';
import Client from './Contentful';

const useGetEntries = (contentType, setContent, formatData) => {
  useEffect(() => {
    Client.getEntries({ content_type: contentType })
      .then(response => { 
      //format data
        return setContent(formatData(response.items));
      })
      .catch(console.error);

    
  }, [contentType, setContent, formatData]);
};

export default useGetEntries;
