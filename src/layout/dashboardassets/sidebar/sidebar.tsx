import { createSignal, onMount, } from 'solid-js';
import { CgLogOut } from 'solid-icons/cg'
import { BiRegularDotsVerticalRounded } from 'solid-icons/bi'
import Logo from '../../../assets/FINEbank.IO.png';
import overview from '../../../assets/Overview.png';
import wallet from '../../../assets/wallet.png';
import transaction from '../../../assets/Transaction.png';
import bill from '../../../assets/Bill.png';
import expences from '../../../assets/Expencces.png';
import goal from '../../../assets/Goal.png';
import setting from '../../../assets/Settings.png';
import profile from '../../../assets/profile.jpg';
import { IoHomeOutline } from 'solid-icons/io'
import { render } from "solid-js/web";
import { Route, Router, useNavigate } from "@solidjs/router";
import {
    Input,
    Button,
    Modal,
    FormControl,
    ModalBody,
    FormLabel,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    createDisclosure,
    Center,
} from "@hope-ui/solid"
import './sidebar.css';

function Sidebar(props: any) {
    const [activeMenu, setActiveMenu] = createSignal<string>('');
    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    const { isOpen, onOpen, onClose } = createDisclosure()

    return (
        <div class="sidebar-container">
            <div>

                <div class="logo-container">
                    <img src={Logo} class="logo" />
                </div>
                <div class="menu">
                    <a href="/"><div class="menucontainer">
                        <img src={overview} class="img-menu" />
                        <p class="menu-desc">Overview</p>
                    </div></a>
                    <div class="menucontainer">
                        <img src={wallet} class="img-menu" />
                        <p class="menu-desc">Balances</p>
                    </div>
                    <a href="/recent"><div class="menucontainer">
                        <img src={transaction} class="img-menu" />
                        <p class="menu-desc">Transactions</p>
                    </div></a>
                    <div class="menucontainer">
                        <img src={bill} class="img-menu" />
                        <p class="menu-desc">Bills</p>
                    </div>
                    <div class="menucontainer">
                        <img src={expences} class="img-menu" />
                        <p class="menu-desc">Expences</p>
                    </div>
                    <div class="menucontainer">
                        <img src={goal} class="img-menu" />
                        <p class="menu-desc">Goals</p>
                    </div>
                    <div class="menucontainer">
                        <img src={setting} class="img-menu" />
                        <p class="menu-desc">Setting</p>
                    </div>
                </div>
                <div class="bottom-menu">
                    <button class="button-logout">
                        <div class="logo-logout"><CgLogOut /></div>
                        <p class="logout-text">Logout</p>
                    </button>
                    <hr class="custom-line" />
                    <div class="menu-user">
                        <img src={profile} class="profile" />
                        <div class="user-desc">
                            <p class="name">Girindra W</p>
                            <p class="desc">View Profile</p>
                        </div>
                        <div class="dot"><BiRegularDotsVerticalRounded /></div>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Sidebar;
