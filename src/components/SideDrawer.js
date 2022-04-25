import './SideDrawer.css';
import { useState } from 'react';
import data from '../data/data.json';

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div >
      <div className="drawer-title-bar">
        <DrawerButton onClick={toggleDrawer} />
      </div>
      <Drawer closeDrawer={toggleDrawer} isOpen={isOpen} />
    </div>
  );
};

const DrawerButton = ({ onClick }) => (
  <div className="drawer-button-container " onClick={onClick}>
    Click Here to See Record Summary
  </div>
);


const DrawerContents = ({ closeDrawer }) => {
  const divisions = data.map(x => x.division).reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const status = data.map(x => x.status).reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const projectOwner = data.map(x => x.project_owner).reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const averageBudget = data.reduce((total, next) => total + next.budget, 0) / data.length;


  return (
    <div>
      <div className="drawer-contents-header">
        <h2>Record Summary</h2>
        <button className='drawer-container-close-button' onClick={closeDrawer}>X</button>
      </div>
      <div className='summary-cards-top'>
        <div>
          <div className='summary-card'>
            <h3>Records By Division</h3>
            {Object.keys(divisions).map((k, i) => <li key={`${k}+${i}`} >{k}: {divisions[k]}</li>)}
          </div>
          <div className='summary-card' >
            <h3>Records By Status</h3>
            {Object.keys(status).map((k, i) => <li key={`${k}+${i}`} >{k}: {status[k]}</li>)}
          </div>
        </div>

        <div>
          <div className='summary-card'>
            <h3>Records By Project Owner</h3>
            {Object.keys(projectOwner).map((k, i) => <li key={`${k}+${i}`} >{k}: {projectOwner[k]}</li>)}
          </div>
          <div className='summary-card'>
            <h3>Average Budget For Project</h3>
             <div>Total number of record: {data.length}</div>
             <div>Average Budget: ${Math.round(averageBudget)} </div>
          </div>
        </div>


      </div>
    </div>

  )
};

const Drawer = ({ isOpen, closeDrawer }) => (
  <div
    className={`drawer-container ${isOpen ? "drawer-container--isOpen" : ""}`}
  >
    <DrawerContents closeDrawer={closeDrawer} />
  </div>
);

export default SideDrawer;