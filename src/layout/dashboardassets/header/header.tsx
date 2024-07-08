import './header.css';
import { IoNotifications } from 'solid-icons/io'
import { FiSearch } from 'solid-icons/fi'

function Header() {

    return (
        <div class="header-container">
            <h2 class="title">Hello Girindra Wijaya</h2>
            <div class="input-notif">
                <div class="notif"><IoNotifications size={20} /></div>
                <div class="search-container">
                    <input class="input-search" type="text" placeholder="search here" />
                    <div  class="search-icon" >
                        <FiSearch size={18}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
