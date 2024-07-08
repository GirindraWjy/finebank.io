import './expenses.css';
import { For } from 'solid-js';
import { BiRegularBuildingHouse } from 'solid-icons/bi'
import { AiOutlineArrowUp } from 'solid-icons/ai'
import { AiOutlineArrowDown } from 'solid-icons/ai'
import { BiRegularMovie } from 'solid-icons/bi'
import { FaSolidUtensils } from 'solid-icons/fa';
import { AiOutlineCar } from 'solid-icons/ai'
import { AiOutlineShopping } from 'solid-icons/ai'
import { BsMenuDown } from 'solid-icons/bs'

const expensesData = [
    {
        title: 'Housing',
        icon: AiOutlineArrowUp,
        price: '$250.00',
        percentage: '15%',
        logo: BiRegularBuildingHouse,
    },
    {
        title: 'Food',
        icon: AiOutlineArrowDown,
        price: '$360.00',
        percentage: '08%',
        logo: FaSolidUtensils,
    },
    {
        title: 'Transportation',
        icon: AiOutlineArrowUp,
        price: '$50.00',
        percentage: '12%',
        logo: AiOutlineCar,
    },
    {
        title: 'Entertainment',
        icon: AiOutlineArrowDown,
        price: '$80.00',
        percentage: '15%',
        logo: BiRegularMovie,
    },
    {
        title: 'Shop',
        icon: AiOutlineArrowUp,
        price: '$420.00',
        percentage: '25%',
        logo: AiOutlineShopping,
    },{
        title: 'Others',
        icon: AiOutlineArrowUp,
        price: '$650.00',
        percentage: '25%',
        logo: BsMenuDown,
    },
];

function expenses() {

    return (
        <div class="parent-statistics-expenses">
            <p class="expenses-title">Expenses Breakdown</p>
            <div class="expenses-container">
                <div class="content-container">
                    <div class="separator-container" >
                        <hr class="separator1" />
                    </div>
                    <div class="separator-vertical">
                        <hr class="separator2" />
                        <hr class="separator3" />
                    </div>
                    <For each={expensesData.slice(0, 6)}>
                        {(cardItem) => (
                            <div class="parent-content">
                                <div class="expenses-content">
                                    <cardItem.logo size={20} class="icon-expenses" />
                                    <div>
                                        <p class="expenses-content-title">{cardItem.title}</p>
                                        <p class="total-expenses">{cardItem.price}</p>
                                        <div class="expenses-percentage">
                                            <p>{cardItem.percentage}</p>
                                            <cardItem.icon size={18} class="percentage-icon" style={{ color: cardItem.icon === AiOutlineArrowUp ? 'red' : 'green' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
}

export default expenses;
