import React, { useState, useEffect } from "react";
import TransactionsTable from "./components/TransactionsTable";
import StatisticsBox from "./components/StatisticsBox";
import BarChart from "./components/BarChart";
import PieCharts from "./components/PieCharts";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [month, setMonth] = useState("March"); // Default month
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Fetch data when month, search, or page changes
  useEffect(() => {
    fetchTransactions();
    fetchStatistics();
    fetchBarChartData();
    fetchPieChartData();
  }, [month, search, page]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/transactions`,
        {
          params: { month, search, page, perPage: 10 },
        }
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/statistics`, {
        params: { month },
      });
      setStatistics(response.data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/barchart`, {
        params: { month },
      });
      setBarChartData(response.data);
    } catch (error) {
      console.error("Error fetching bar chart data:", error);
    }
  };

  const fetchPieChartData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/piechart?month=${month}`
      );
      setPieChartData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching pie chart data:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-3">Transactions Dashboard</h1>

      <div className="row mt-3">
        <div className="col-md-6">
          <select
            className="form-select"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search transactions"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <StatisticsBox statistics={statistics} />
      <TransactionsTable
        data={transactions}
        page={page}
        setPage={setPage}
      />
      <div className="mt-5 mb-5">
        <BarChart data={barChartData} />
        </div>
        <div className="mt-5 mb-5">
        <PieCharts data={pieChartData} />
        </div>
    </div>
  );
};

export default App;
