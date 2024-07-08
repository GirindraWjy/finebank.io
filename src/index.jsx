/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './App';
import Dashboard from './dashboard-pages/dashboard';
import RecentPage from './layout/dashboardassets/recentpage/recent'

// Mengatur render di file utama
render(() => (
    <Router>
        <Route path="/" component={Dashboard} />
        <Route path="/recent" component={RecentPage} />
    </Router>
), document.getElementById('root'));
