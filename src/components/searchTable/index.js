import React, { useState, useEffect } from "react";
import { Table, Button, Spin } from "antd";
import axios from "axios";
import IdParam from "../idParam";
import AppIdParam from "../appIdParam";
import AppTypeParam from "../appTypeParam";
import TypeParam from "../typeParam";
import AppDateParam from "../appDateParam";

const EventsTable = () => {
  const [loggerData, setLoggerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`)
      .then((res) => {
        console.log("res", res.data.result.auditLog);
        setLoggerData(res?.data?.result?.auditLog);
        setFilteredData(res?.data?.result?.auditLog);
      });

    setLoading(false);
  }, []);

  const tableColumns = [
    {
      title: "Log ID",
      dataIndex: "logId",
      key: "logId",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.logId - b.logId,
    },
    {
      title: "ApplicationType",
      dataIndex: "applicationType",
      key: "applicationType",
    },
    {
      title: "Application ID",
      dataIndex: "applicationId",
      key: "applicationId",
    },
    {
      title: "Action",
      dataIndex: "actionType",
      key: "actionType",
    },
    {
      title: "Action Details",
      dataIndex: "performedBy",
      key: "performedBy",
    },
    {
      title: "Date:Time",
      dataIndex: "creationTimestamp",
      key: "creationTimestamp",
    },
  ];

  const idSearchHandler = (value) => {
    const tableData = [...loggerData];
    if (value === "") {
      return setFilteredData(tableData);
    }
    const filteredLoggerByUserId = tableData.filter((log) => {
      const id = log.logId.toString();
      return id.includes(value);
    });
    setFilteredData(filteredLoggerByUserId);
  };

  const appIdSearchHandler = (value) => {
    const tableData = [...loggerData];
    if (value === "") {
      return setFilteredData(tableData);
    }
    const filteredLoggerByAppId = tableData.filter((log) => {
      let appId = log.applicationId;
      if (appId == null) {
        appId = 0;
      }
      return appId.toString().includes(value);
    });
    setFilteredData(filteredLoggerByAppId);
  };

  const appTypeSearchHandler = (value) => {
    const tableData = [...loggerData];
    if (value === undefined) {
      return setFilteredData(tableData);
    }
    const filteredLoggerByAppType = tableData.filter((log) => {
      let appType = log.applicationType;
      if (appType == null) {
        appType = "abc";
      }
      return appType.includes(value);
    });
    setFilteredData(filteredLoggerByAppType);
  };

  const actionTypeSearchHandler = (value) => {
    const tableData = [...loggerData];
    if (value === undefined) {
      return setFilteredData(tableData);
    }
    const filteredLoggerByActionType = tableData.filter((log) => {
      let actionType = log.actionType;
      if (actionType == null) {
        actionType = "abc";
      }
      return actionType.includes(value);
    });
    setFilteredData(filteredLoggerByActionType);
  };

  const onChangeDate = (date, dateString) => {
    const tableData = [...loggerData];
    if (date === null) {
      return setFilteredData(tableData);
    }
    const filteredLoggerByDate = tableData.filter((log) => {
      let appDate = log.creationTimestamp;
      return appDate.includes(dateString);
    });
    setFilteredData(filteredLoggerByDate);
  };

  return (
    <div>
      <Spin spinning={loading}>
        <div className="search-container">
          <IdParam
            label="Employee Log ID"
            placeholder="Enter Id"
            onSearch={idSearchHandler}
          />
          <AppTypeParam
            label="Application Type"
            onChange={appTypeSearchHandler}
          />
          <AppIdParam
            label="Application ID"
            placeholder="Enter Id"
            onSearch={appIdSearchHandler}
          />
          <TypeParam
            label="Action Type"
            onChange={actionTypeSearchHandler}
          />
          <AppDateParam
            label="Application Date"
            onChange={onChangeDate}
          />
        </div>

        {loggerData.length > 1 ? (
          <Table dataSource={filteredData} columns={tableColumns} />
        ) : (
          <h1>Loading Data</h1>
        )}
      </Spin>
    </div>
  );
};

export default EventsTable;
