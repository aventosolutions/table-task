import React from 'react';
import { Select } from 'antd';

 const AppTypeParam = ({ onChange, label}) => (
  <div>
    <h2>{label}</h2>
    <Select
    showSearch
    placeholder="Select Application Type"
    optionFilterProp="children"
    onChange={onChange}
    allowClear
        style={{
        width: 300,
      }}
    options={[
      {
        value: 'CERT_TITLE_DEED_PLOT',
        label: 'CERT TITLE DEED_PLOT',
      },
      {
        value: 'LEASE_REGISTRATION',
        label: 'LEASE REGISTRATION',
      },
      {
        value: 'ADD_COMPANY',
        label: 'ADD COMPANY',
      },
      {
        value: 'ADD_COMPANY_EMPLOYEE',
        label: 'ADD COMPANY EMPLOYEE',
      },
      {
        value: 'LEASE_CLOSURE',
        label: 'LEASE CLOSURE',
      },
    ]}
  />
  </div>
);


export default AppTypeParam;