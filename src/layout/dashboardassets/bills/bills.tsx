import { lazy, createSignal, For } from 'solid-js';
import { HopeProvider } from '@hope-ui/solid';
import './billspage.css'
import { IoGameControllerOutline } from 'solid-icons/io';
import { FaSolidChevronRight } from 'solid-icons/fa';
import { AiOutlineShopping } from 'solid-icons/ai';
import { FaSolidUtensils } from 'solid-icons/fa';
import { RiMapTaxiLine } from 'solid-icons/ri';
import { FaSolidDollarSign } from 'solid-icons/fa';

import figma from '../../../assets/logo-figma.png'
import adobe from '../../../assets/logo-adobe.png'

import Sidebar from '../sidebar/sidebar';
import Header from './header'

function Dashboard() {
    const transactionData = [
        {
            month: 'May',
            day: '15',
            icon: IoGameControllerOutline,
            item: 'Figma - Yearly Plan',
            desc: 'With unlimited files, pages, projects, and version history, the Figma Professional plan gives your team the features you need to get everyone on the same page without any constraints.',
            date: '17 May 2023',
            amount: '120$',
            logo: figma
        },
        {
            month: 'June',
            day: '14',
            icon: IoGameControllerOutline,
            item: 'Adobe - Monthly Plan',
            desc: 'Unleash Your Imagination & Create Beautiful Pieces Of Art. Download Creative Cloud® Now. Experience The Entire adobe Creative Cloud And Start Creating Amazing Things.',
            date: '11 May 2023',
            amount: '12$',
            logo: adobe
        },
        {
            month: 'June',
            day: '14',
            icon: IoGameControllerOutline,
            item: 'Adobe - Monthly Plan',
            desc: 'Unleash Your Imagination & Create Beautiful Pieces Of Art. Download Creative Cloud® Now. Experience The Entire adobe Creative Cloud And Start Creating Amazing Things.',
            date: '11 May 2023',
            amount: '12$',
            logo: adobe
        },
        {
            month: 'June',
            day: '14',
            icon: IoGameControllerOutline,
            item: 'Adobe - Monthly Plan',
            desc: 'Unleash Your Imagination & Create Beautiful Pieces Of Art. Download Creative Cloud® Now. Experience The Entire adobe Creative Cloud And Start Creating Amazing Things.',
            date: '11 May 2023',
            amount: '12$',
            logo: adobe
        },
        {
            month: 'May',
            day: '15',
            icon: IoGameControllerOutline,
            item: 'Figma - Yearly Plan',
            desc: 'With unlimited files, pages, projects, and version history, the Figma Professional plan gives your team the features you need to get everyone on the same page without any constraints.',
            date: '17 May 2023',
            amount: '120$',
            logo: figma
        },
        {
            month: 'May',
            day: '15',
            icon: IoGameControllerOutline,
            item: 'Figma - Yearly Plan',
            desc: 'With unlimited files, pages, projects, and version history, the Figma Professional plan gives your team the features you need to get everyone on the same page without any constraints.',
            date: '17 May 2023',
            amount: '120$',
            logo: figma
        },
    ];
    return (
        <div class="parent-container">
            <HopeProvider>
                <div class="container">
                    <div class="sidebar"><Sidebar /></div>
                    <div class="content">
                        <Header />
                        <div class="main-recent-container">
                            <div class="main-title-container">
                                <p class="main-title-recent">Upcoming Bills</p>
                            </div>
                            <div class="recent-content-container">
                                <div class="table-wrapper">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="due-date-container">Due Date</th>
                                                <th class="item-logo">Logo</th>
                                                <th class="item-desc">Item Description</th>
                                                <th class="item-lastcharge">Last Charge</th>
                                                <th class="item-amount">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <For each={transactionData}>
                                                {(cardItem) => (
                                                    <tr>
                                                        <td>
                                                            <div class="due-date">
                                                                <p class="month">{cardItem.month}</p>
                                                                <p class="day">{cardItem.day}</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src={cardItem.logo} class="logo-item" />
                                                        </td>
                                                        <td>
                                                            <p class="title-item">{cardItem.item}</p>
                                                            <p class="desc-item">{cardItem.desc}</p>
                                                        </td>
                                                        <td class="date-item">{cardItem.date}</td>
                                                        <td>
                                                            <div class="amount-item">
                                                                {cardItem.amount}
                                                            </div>
                                                        </td>
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