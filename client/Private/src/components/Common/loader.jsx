import React from 'react';
import { Watch } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Watch
        height="100"
        width="100"
        radius="48"
        color="#ffa500"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
