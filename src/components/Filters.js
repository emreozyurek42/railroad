import CreateDatePicker from './CreateDatePicker';
import ModifiedDatePicker from './ModifiedDatePicker';
import './Filters.css'


function Filters({ filterStatusParam, setFilterStatusParam, setFilterDivisionParam,
  setFilterPOParam, setFilterBudgetParam,setFilterCreatedDateParam,setFilterModifiedDateParam }) {

  const handleFilterByStatusChange = e => {
    setFilterStatusParam(e.target.value);
  };

  const handleFilterByDivisionChange = e => {
    setFilterDivisionParam(e.target.value);
  };

  const handleFilterByPOChange = e => {
    setFilterPOParam(e.target.value);
  };

  const handleFilterBudgetChange = e => {
    setFilterBudgetParam(e.target.value);
  };

  const handleCreatedResetDates = () => {
    setFilterCreatedDateParam({startDate:null,endDate:null})
  }

  const handleModifiedResetDates = () => {
    setFilterModifiedDateParam({startDate:null,endDate:null})
  }

  return (
    <div className='filter-div'>
      <div>
        <div className='filter-div'>
          <div className="select">
            <select
              onChange={handleFilterByStatusChange}
              className="custom-select"
              aria-label="Filter By Status"
            >
              <option value="All">Filter By Status</option>
              <option value="new">new</option>
              <option value="archived">archived</option>
              <option value="working">working</option>
              <option value="delivered">delivered</option>
            </select>
            <span className="focus"></span>
          </div>

          <div className="select">
            <select
              onChange={handleFilterByDivisionChange}

              className="custom-select"
              aria-label="Filter By Division"
            >
              <option value="All">Filter By Division</option>
              <option value="Accounting">Accounting</option>
              <option value="Administration">Administration</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Production">Production</option>

            </select>
            <span className="focus"></span>
          </div>
        </div>

        <div className='filter-div'>
          <div className="select">
            <select
              onChange={handleFilterBudgetChange}
              className="custom-select"
              aria-label="Filter By Budget"
            >
              <option value="All">Filter By Budget</option>
              <option value="opt1">less than $10,000</option>
              <option value="opt2">between $10,000 and $15,000</option>
              <option value="opt3">between $15,000 and $20,000</option>
              <option value="opt4">more than $20,000</option>
            </select>
            <span className="focus"></span>
          </div>
          <div className="select">
            <select
              onChange={handleFilterByPOChange}
              className="custom-select"
              aria-label="Filter By Project Owner"
            >
              <option value="All">Filter By Project Owner</option>
              <option value="Kevin Snyder">Kevin Snyder</option>
              <option value="Eugene Brown">Eugene Brown</option>
              <option value="Killgore Trout">Killgore Trout</option>
              <option value="Richard Henry">Richard Henry</option>
              <option value="Michelle Webb">Michelle Webb</option>
              <option value="James Holden">James Holden</option>
              <option value="Nicole Smith">Nicole Smith</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>

      </div>
      <div>
       <p className='date-filter-text'>Filter By Created Day</p>
        < CreateDatePicker setFilterCreatedDateParam={setFilterCreatedDateParam} />
        <div className='reset-dates-button-div'>
          <button className='reset-dates-button' onClick={handleCreatedResetDates}>reset dates</button>
        </div>
        
      </div>
      <div>
      <p className='date-filter-text'>Filter By Modified Day</p> 
      < ModifiedDatePicker setFilterModifiedDateParam={setFilterModifiedDateParam} />
      <div className='reset-dates-button-div'>
          <button className='reset-dates-button' onClick={handleModifiedResetDates}>reset dates</button>
        </div>
      </div>
    </div>

  )
}

export default Filters;