
import './App.css';
import { useState, useEffect } from 'react';
import data from './data/data.json';
import DataCard from './components/DataCard'
import Search from './components/Search';
import Filters from './components/Filters';
import SideDrawer from './components/SideDrawer';
import moment from 'moment';


function App() {
  const [items, setItems] = useState(data);
  const [sortedItems, setSortedItems] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [filterStatusParam, setFilterStatusParam] = useState("All");
  const [filterDivisionParam, setFilterDivisionParam] = useState("All");
  const [filterBudgetParam, setFilterBudgetParam] = useState("All");
  const [filterPOParam, setFilterPOParam] = useState("All");
  const [filterCreatedDateParam, setFilterCreatedDateParam] = useState({ startDate: null, endDate: null });
  const [filterModifiedDateParam, setFilterModifiedDateParam] = useState({ startDate: null, endDate: null });

  const options = {
    "All": item => item.budget > 0,
    "opt1": item => item.budget < 10000,
    "opt2": item => item.budget >= 10000 && item.budget < 15000,
    "opt3": item => item.budget >= 15000 && item.budget < 20000,
    "opt4": item => item.budget >= 20000,
  }

  useEffect(() => {

    if (filterStatusParam !== "All") {
      var statusRegex = filterStatusParam
    }
    if (filterDivisionParam !== "All") {
      var divisionRegex = filterDivisionParam;
    }
    if (filterPOParam !== "All") {
      var pORegex = filterPOParam
    }

    const result = items.filter(options[filterBudgetParam]).filter(
      item =>
        (!filterCreatedDateParam.startDate || !filterCreatedDateParam.endDate || moment(item.created).isBetween(filterCreatedDateParam.startDate,
          filterCreatedDateParam.endDate)) &&
        (!filterModifiedDateParam.startDate || !filterModifiedDateParam.endDate || moment(item.modified).isBetween(filterModifiedDateParam.startDate,
          filterModifiedDateParam.endDate)) &&
        (item.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) &&
        (!divisionRegex || item.division === filterDivisionParam) &&
        (!statusRegex || item.status === filterStatusParam) &&
        (!pORegex || item.project_owner === filterPOParam)
    );
    setSortedItems(result);
  }, [searchValue, filterStatusParam, filterDivisionParam, filterPOParam, filterBudgetParam,
    filterCreatedDateParam.startDate, filterCreatedDateParam.endDate,
    filterModifiedDateParam.startDate, filterModifiedDateParam.endDate, items]);



  return (
    <>
      <SideDrawer />
      <div className="wrapper">
        <h1 className='proje-title'>Project Dashboard</h1>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
        <Filters
          filterStatusParam={filterStatusParam}
          setFilterStatusParam={setFilterStatusParam}
          filterDivisionParam={filterDivisionParam}
          setFilterDivisionParam={setFilterDivisionParam}
          filterPOParam={filterPOParam}
          setFilterPOParam={setFilterPOParam}
          setFilterBudgetParam={setFilterBudgetParam}
          setFilterCreatedDateParam={setFilterCreatedDateParam}
          setFilterModifiedDateParam={setFilterModifiedDateParam}
        />
        <div className="card-grid">
          {sortedItems.map((item, index) => <DataCard key={`${item.title}+${index}`} data={item} />)}
        </div>
      </div>

    </>
  );
}

export default App;
