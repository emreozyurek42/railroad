import { useState } from 'react';
import InlineEdit  from './InlineEdit';
import './DataCard.css'


function DataCard(props) {
    const { data } = props;
    const [statusValue, setStatusValue] = useState(data.status);
    const [pOValue, setPOSValue] = useState(data.project_owner);
    const [budgetValue, setBudgetValue] = useState(data.budget);
   
  
    return (
        <ul>
            <li>
                <article className="card">
                    <div className="card-content">
                        <h2 className="card-name">{data.title}</h2>
                        <ol className="card-list">
                            <li>
                                Division:{" "}
                                <span>{data.division}</span>
                            </li>
                            <li>
                                Project Owner:{" "}
                                <InlineEdit value={pOValue} setValue={setPOSValue} />
                               
                                
                            </li>
                            <li>
                                Budget:{" "}
                             $<InlineEdit value={budgetValue} setValue={setBudgetValue} />
                               
                               
                            </li>
                            <li>
                                Status:{" "}
                                <InlineEdit value={statusValue} setValue={setStatusValue} />
                           
                            </li>
                            <li>
                                Created: <span>{data.created}</span>
                            </li>
                            <li>
                                Modified: <span>{data.modified}</span>
                            </li>
                            <li>
                                <a href='#'>Click for more info...</a>
                            </li>
                        </ol>
                    </div>
                </article>
            </li>
        </ul>
    );
}

export default DataCard;