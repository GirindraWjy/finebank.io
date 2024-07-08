import { lazy, createSignal } from 'solid-js';
import { HopeProvider } from '@hope-ui/solid';

import styles from './dashboard.module.css';

// Komponen yang dimuat dinamis
const SideBar = lazy(() => import('../layout/dashboardassets/sidebar/sidebar'));
const Recent = lazy(() => import('../layout/dashboardassets/cards/recent'));
const Statistics = lazy(() => import('../layout/dashboardassets/cards/statistics'));
const Expenses = lazy(() => import('../layout/dashboardassets/cards/expenses'));
const Header = lazy(() => import('../layout/dashboardassets/header/header'));
const Card1 = lazy(() => import('../layout/dashboardassets/cards/cards1'));

function Dashboard() {
    const [currentRoute, setCurrentRoute] = createSignal<string>('');

    return (
        <div class="parent-container">
            <HopeProvider>
                <div class={styles.container}>
                    <div class={styles.sidebar}><SideBar /></div>
                    <div class={styles.content}>
                        <Header />
                        <Card1 />
                        <div class={styles.data_data}>
                            <div>
                                <Recent />
                            </div>
                            <div class={styles.data_data2}>
                                <Statistics />
                                <Expenses />
                            </div>
                        </div>
                    </div>
                </div>
            </HopeProvider>
        </div>
    );
}

export default Dashboard;
