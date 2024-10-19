import React from 'react';

const StatisticsBox = ({ statistics }) => {
  return (
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5>Total Sales Amount</h5>
            <p>${statistics.totalSaleAmount}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5>Total Sold Items</h5>
            <p>{statistics.totalSoldItems}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5>Total Not Sold Items</h5>
            <p>{statistics.totalNotSoldItems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBox;
