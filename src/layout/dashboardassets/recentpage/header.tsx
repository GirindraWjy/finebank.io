import './header.css';
import { IoNotifications } from 'solid-icons/io'
import { FaSolidAngleRight } from 'solid-icons/fa'
import { FiSearch } from 'solid-icons/fi'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator
} from "@hope-ui/solid"

function Header() {

    return (
        <div class="header-container">
            <Breadcrumb separator={<FaSolidAngleRight size={10} color="$neutral11" />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    <BreadcrumbSeparator />
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Transaction</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <div class="input-notif">
                <div class="notif"><IoNotifications size={20} /></div>
                <div class="search-container">
                    <input class="input-search" type="text" placeholder="search here" />
                    <div class="search-icon" >
                        <FiSearch size={18} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
