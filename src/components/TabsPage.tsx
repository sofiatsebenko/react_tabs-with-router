

import { Link, useParams } from "react-router-dom";
import { tabs } from "../App";
import cn from "classnames";

import { Tab } from "../types/Tab";

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find((tab : Tab) => tab.id === tabId)

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li key={tab.id}data-cy="Tab" className={cn({ 'is-active': tab.id === activeTab?.id })}>
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
