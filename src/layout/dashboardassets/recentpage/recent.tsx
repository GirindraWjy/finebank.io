import { lazy, createSignal, For } from 'solid-js';
import { HopeProvider } from '@hope-ui/solid';
import './recentpage.css'
import { IoGameControllerOutline } from 'solid-icons/io';
import { FaSolidChevronRight } from 'solid-icons/fa';
import { AiOutlineShopping } from 'solid-icons/ai';
import { FaSolidUtensils } from 'solid-icons/fa';
import { RiMapTaxiLine } from 'solid-icons/ri';
import { FaSolidDollarSign } from 'solid-icons/fa';

import Sidebar from '../sidebar/sidebar';
import Header from './header'

function Dashboard() {
    const transactionData = [
        {
            title: 'GTR 5',
            icon: IoGameControllerOutline,
            shopname: 'Gadget And Gear',
            price: '$160.00',
            date: '17 May 2023',
            type: 'Expenses',
            payment: 'M-Banking'
        },
        {
            title: 'Polo Shirt',
            icon: AiOutlineShopping,
            shopname: 'XL Fashion',
            price: '$10.00',
            date: '17 May 2023',
            type: 'Expenses',
            payment: 'M-Banking'
        },
        {
            title: 'Biriyani',
            icon: FaSolidUtensils,
            shopname: 'Haji Biriyani',
            price: '$10.00',
            date: '17 May 2023',
            type: 'Expenses',
            payment: 'M-Banking'
        },
        {
            title: 'Taxi Fare',
            icon: RiMapTaxiLine,
            shopname: 'Uber',
            price: '$12.00',
            date: '17 May 2023',
            type: 'Expenses',
            payment: 'M-Banking'
        },
        {
            title: 'Keyboard',
            icon: AiOutlineShopping,
            shopname: 'Gadget And Gear',
            price: '$22.00',
            date: '17 May 2023',
            type: 'Expenses',
            payment: 'M-Banking'
        },
        {
            title: 'Payday',
            icon: FaSolidDollarSign,
            shopname: 'SeaBank',
            price: '$12,000',
            date: '17 May 2023',
            type: 'Revenue',
            payment: 'M-Banking'
        },
        {
            title: 'Payday',
            icon: FaSolidDollarSign,
            shopname: 'SeaBank',
            price: '$12,000',
            date: '17 May 2023',
            type: 'Revenue',
            payment: 'M-Banking'
        },
        {
            title: 'Payday',
            icon: FaSolidDollarSign,
            shopname: 'SeaBank',
            price: '$12,000',
            date: '17 May 2023',
            type: 'Revenue',
            payment: 'M-Banking'
        },
        {
            title: 'TWS',
            icon: IoGameControllerOutline,
            shopname: 'Gadget And Gear',
            price: '$1,000',
            date: '17 May 2023',
            type: 'Expenses',
            payment: 'M-Banking'
        },
        {
            title: 'Tumbler',
            icon: AiOutlineShopping,
            shopname: 'Tupperware',
            price: '$150',
            date: '17 May 2023',
            type: 'Expenses',
            payment: 'M-Banking'
        }
    ];
    const [activeMenu, setActiveMenu] = createSignal('All');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    const filteredTransactions = () => {
        if (activeMenu() === 'All') {
            return transactionData;
        }
        return transactionData.filter(item => item.type === activeMenu());
    };

    return (
        <div class="parent-container">
            <HopeProvider>
                <div class="container">
                    <div class="sidebar"><Sidebar /></div>
                    <div class="content">
                        <Header />
                        <div class="main-recent-container">
                            <div class="main-title-container">
                                <p class="main-title-recent">Recent Transaction</p>
                            </div>
                            <div class="main-recent-menu">
                                <div
                                    class={`menu-menu ${activeMenu() === 'All' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('All')}>
                                    All
                                </div>
                                <div
                                    class={`menu-menu ${activeMenu() === 'Revenue' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('Revenue')}>
                                    Revenue
                                </div>
                                <div
                                    class={`menu-menu ${activeMenu() === 'Expenses' ? 'active' : ''}`}
                                    onClick={() => handleMenuClick('Expenses')}>
                                    Expenses
                                </div>
                            </div>
                            <div class="recent-content-container">
                            <div class="table-wrapper">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Items</th>
                                                <th>Shop Name</th>
                                                <th>Date</th>
                                                <th>Payment Method</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <For each={filteredTransactions()}>
                                                {(cardItem) => (
                                                    <tr>
                                                        <td>
                                                            <div class="td-title">
                                                                <cardItem.icon class="td-icon" size={50} />
                                                                {cardItem.title}
                                                            </div>
                                                        </td>
                                                        <td>{cardItem.shopname}</td>
                                                        <td>{cardItem.date}</td>
                                                        <td>{cardItem.payment}</td>
                                                        <td>{cardItem.price}</td>
                                                    </tr>
                                                )}
                                            </For>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HopeProvider>
        </div>
    );
}

export default Dashboard;


{/* <div class="transaction">
    <div style={{ display: 'flex', gap: '20px', "align-items": "center" }}>
        <cardItem.icon size={50} style={{ "border-radius": "8px", "background-color": "#E8E8E8", "padding": "10px", "color": "#666666" }} />
        <div>
            <p style={{ "font-weight": 'bold' }}>{cardItem.title}</p>
        </div>
    </div>
    <div style={{ display: 'flex', "flex-direction": 'column', "text-align": 'right' }}>
        <p style={{ "font-size": "16px", color: "#525256", "font-weight": 'bold' }}>{cardItem.price}</p>
        <p style={{ "font-size": "12px", color: "#F3F3F3" }}>{cardItem.date}</p>
    </div>
</div> */}