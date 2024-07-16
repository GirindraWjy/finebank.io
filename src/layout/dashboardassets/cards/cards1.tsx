import './cards1.css';
import logo from '../../../assets/bank-logo.png';
import { BsArrowUpRightCircleFill } from 'solid-icons/bs'
import { FaSolidChevronLeft } from 'solid-icons/fa'
import { FaSolidChevronRight } from 'solid-icons/fa'
import { AiOutlineEdit } from 'solid-icons/ai'
import { TbMilitaryAward } from 'solid-icons/tb'
import { TbTargetArrow } from 'solid-icons/tb'
import { FaBrandsFigma } from 'solid-icons/fa'
import { SiAdobe } from 'solid-icons/si'
import Gauge from './gaugechart';
import {
    CircularProgress,
    CircularProgressIndicator,
    CircularProgressLabel,
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

function Card1() {
    const { isOpen, onOpen, onClose } = createDisclosure()

    return (
        <div class="card-container">
            <div class="total-balance">
                <p class="title-card">Total Balance</p>
                <div class="container-card">
                    <div class="total-money">
                        <p class="money">$240,399</p>
                        <p class="desc">All account</p>
                    </div>
                    <div>
                        <div class="card-money">
                            <div class="container-desc-money">
                                <p class="acc">Account Type</p>
                                <p class="name-card">Credit Card</p>
                                <p class="acc">**** **** **** 2598</p>
                            </div>
                            <div class="parent-container">
                                <div class="container-desc-money-2">
                                    <div class="logo-container">
                                        <img src={logo} class="logo-img" />
                                    </div>
                                    <div class="spend-container">
                                        <p class="spending">$25000</p>
                                        <BsArrowUpRightCircleFill class="right-arrow-up" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination">
                            <button class="previous">
                                <FaSolidChevronLeft />
                                <p>Previous</p>
                            </button>
                            <div class="dot"></div>
                            <button class="next">
                                <p>Next</p>
                                <FaSolidChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* #2 */}
            <div class="Goals">
                <div class="bill-container">
                    <p class="upcoming-bill">Goals</p>
                    <div class="view-container">
                        <p class="view-all">View All</p>
                        <FaSolidChevronRight />
                    </div>
                </div>
                <div class="goals-container">
                    <div class="total-money">
                        <div class="goals-edit">
                            <p class="money">$240,399</p>
                            <AiOutlineEdit class="edit-goals" onClick={onOpen} />
                        </div>
                        <p class="desc">May, 2023</p>
                    </div>
                    <div class="goals-content">
                        <div style={{ "display": 'flex', "flex-direction": 'column', "gap": "10px" }}>
                            <div class="target-goals">
                                <div style={{ display: 'flex', "align-items": 'center', "font-size": "12px", "gap": "5px", "color": "#878787" }}>
                                    <TbMilitaryAward size={20} />
                                    <p>Target Achieved</p>
                                </div>
                                <p class="value-target">$12,500</p>
                            </div>
                            <div class="target-goals">
                                <div style={{ display: 'flex', "align-items": 'center', "font-size": "12px", "gap": "5px", "color": "#878787" }}>
                                    <TbTargetArrow size={20} />
                                    <p>This Month Target</p>
                                </div>
                                <p class="value-target">$12,500</p>
                            </div>
                        </div>
                        <div style={{ "display": 'flex', "flex-direction": 'column', "align-items": 'center' }}>
                            <CircularProgress value={40} size={100}>
                                <CircularProgressIndicator color="#299D91" />
                                <CircularProgressLabel />
                            </CircularProgress>
                            <p style={{ "font-size": "12px", }}>Target vs Achievement</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* #3 */}
            <div class="total-balance">
                <div class="bill-container">
                    <p class="upcoming-bill">Upcoming Bill</p>
                    <div class="view-container">
                        <a href="/bills"><p class="view-all">View All</p></a>
                        <FaSolidChevronRight />
                    </div>
                </div>
                <div class="container-bill-card">
                    <div class="container-bill">
                        <div class="bill-detail">
                            <div class="month-day">
                                <p class="month">May</p>
                                <p class="day">15</p>
                            </div>
                            <div>
                                <div class="logo-figma">
                                    <FaBrandsFigma />
                                    <p>Figma</p>
                                </div>
                                <p class="desc-bill">Figma - Monthly</p>
                                <p class="bill-info">Last Charge - 14 May, 2024</p>
                            </div>
                        </div>
                        <p class="charge-bill">$150</p>
                    </div>
                    <div class="container-bill">
                        <div class="bill-detail">
                            <div class="month-day">
                                <p class="month">May</p>
                                <p class="day">15</p>
                            </div>
                            <div>
                                <div class="logo-figma">
                                    <SiAdobe />
                                    <p>Adobe</p>
                                </div>
                                <p class="desc-bill">Figma - Monthly</p>
                                <p class="bill-info">Last Charge - 14 May, 2024</p>
                            </div>
                        </div>
                        <p class="charge-bill">$150</p>
                    </div>
                </div>
            </div>
            <Modal
                opened={isOpen()}
                initialFocus="#firstname"  // Focus on the element with id `firstname`
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent class="modal-content">
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="firstname" mb="$4">
                            <FormLabel>Target Amounts</FormLabel>
                            <Input placeholder="$500000" />
                        </FormControl>
                        <FormControl id="lastname">
                            <FormLabel>Present Amounts</FormLabel>
                            <Input placeholder="Write Present Amounts Here" />
                        </FormControl>
                    </ModalBody>
                    <Center>
                        <ModalFooter>
                            <div class="button-save" onClick={onClose}> Save</div>
                        </ModalFooter>
                    </Center>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Card1;
