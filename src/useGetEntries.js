import { useEffect } from 'react';
import Client from './Contentful';

const useGetEntries = (contentType, setContent, formatData) => {
  useEffect(() => {
    Client.getEntries({ content_type: contentType })
      .then(response => { console.log(response.items)
        return setContent(formatData(response.items));
      })
      .catch(console.error);

    //format data
  }, [contentType, setContent, formatData]);
};

export default useGetEntries;
