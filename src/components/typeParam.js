import React from 'react';
import { Select } from 'antd';

 const AppTypeParam = ({ onChange, label}) => (
  <div>
    <h2>{label}</h2>
    <Select
    showSearch
    placeholder="Select Action Type"
    optionFilterProp="children"
    onChange={onChange}
    allowClear
    style={{
        width: 300,
      }}
    options={[
      {
        value: 'DARI_REFRESH_TOKEN',
        label: 'DARI_REFRESH_TOKEN',
      },
      {
        value: 'INITIATE_APPLICATION',
        label: 'INITIATE_APPLICATION',
      },
      {
        value: 'DARI_APP_LOGIN',
        label: 'DARI_APP_LOGIN',
      },
      {
        value: 'SUBMIT_APPLICATION',
        label: 'SUBMIT_APPLICATION',
      },
      {
        value: 'INITIATE_APPLICATION',
        label: 'INITIATE_APPLICATION',
      },
      
    ]}
  />
  </div>
);


export default AppTypeParam;