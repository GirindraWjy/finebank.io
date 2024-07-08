import './recent.css';
import { createSignal, For } from 'solid-js';
import { IoGameControllerOutline } from 'solid-icons/io';
import { FaSolidChevronRight } from 'solid-icons/fa';
import { AiOutlineShopping } from 'solid-icons/ai';
import { FaSolidUtensils } from 'solid-icons/fa';
import { RiMapTaxiLine } from 'solid-icons/ri';
import { FaSolidDollarSign } from 'solid-icons/fa';
import { Route, Router } from 'solid-app-router';
import { lazy } from "solid-js";


const transactionData = [
    {
        title: 'GTR 5',
        icon: IoGameControllerOutline,
        provider: 'Gadget And Gear',
        price: '$160.00',
        date: '17 May 2023',
        type: 'Expenses'
    },
    {
        title: 'Polo Shirt',
        icon: AiOutlineShopping,
        provider: 'XL Fashion',
        price: '$10.00',
        date: '17 May 2023',
        type: 'Expenses'
    },
    {
        title: 'Biriyani',
        icon: FaSolidUtensils,
        provider: 'Haji Biriyani',
        price: '$10.00',
        date: '17 May 2023',
        type: 'Expenses'
    },
    {
        title: 'Taxi Fare',
        icon: RiMapTaxiLine,
        provider: 'Uber',
        price: '$12.00',
        date: '17 May 2023',
        type: 'Expenses'
    },
    {
        title: 'Keyboard',
        icon: AiOutlineShopping,
        provider: 'Gadget And Gear',
        price: '$22.00',
        date: '17 May 2023',
        type: 'Expenses'
    },
    {
        title: 'Payday',
        icon: FaSolidDollarSign,
        provider: 'SeaBank',
        price: '$12,000',
        date: '17 May 2023',
        type: 'Revenue'
    },
    {
        title: 'Payday',
        icon: FaSolidDollarSign,
        provider: 'SeaBank',
        price: '$12,000',
        date: '17 May 2023',
        type: 'Revenue'
    },
    {
        title: 'Payday',
        icon: FaSolidDollarSign,
        provider: 'SeaBank',
        price: '$12,000',
        date: '17 May 2023',
        type: 'Revenue'
    }
];

function Recent() {
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
        <div class="recent-container">
            <div class="title-container">
                <p class="title-recent">Recent Transaction</p>
                <div class="view-all">
                    <a href="/recent"><p>View All</p></a>
                    <FaSolidChevronRight size={10} />
                </div>
            </div>
            <div class="recent-content-container">
                <div class="recent-menu">
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
                <div class="parent-container-transaction">
                    <For each={filteredTransactions()}>
                        {(cardItem) => (
                            <div class="transaction">
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <cardItem.icon size={50} style={{ "border-radius": "8px", "background-color": "#E8E8E8", "padding": "10px", "color": "#666666" }} />
                                    <div>
                                        <p style={{ "font-weight": 'bold' }}>{cardItem.title}</p>
                                        <p style={{ "font-size": "12px", color: "#F3F3F3" }}>{cardItem.provider}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', "flex-direction": 'column', "text-align": 'right' }}>
                                    <p style={{ "font-size": "16px", color: "#525256", "font-weight": 'bold' }}>{cardItem.price}</p>
                                    <p style={{ "font-size": "12px", color: "#F3F3F3" }}>{cardItem.date}</p>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
}

export default Recent;
