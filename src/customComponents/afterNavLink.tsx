import React from 'react';
import {NavLink} from 'react-router-dom'
import { useConfig, useAuth } from 'payload/components/utilities';
const baseClass = 'after-nav-links';

const AfterNavLinks: React.FC = () => {
    const {routes: { admin: adminRoute } } = useConfig();
    return(
        <div className={baseClass}>
            <NavLink
            activeClassName='active'
            to={`${adminRoute}/newcampaing`}
            >
            { 'Create Campaing' }
            </NavLink>
            <NavLink
            activeClassName='active'
            to={`${adminRoute}/editcampaing`}
            >
            { 'Edit Campaing' }
            </NavLink>

        </div>
    )
}
export default AfterNavLinks;