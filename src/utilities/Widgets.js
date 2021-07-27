import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { ProgressBar } from 'primereact/progressbar';
import { InputTextarea } from 'primereact/inputtextarea';

export const Widgets = () => {

    const menuItems = [
        {
            label: 'Save', icon: 'pi pi-fw pi-check'
        },
        {
            label: 'Update', icon: 'pi pi-fw pi-refresh'
        },
        {
            label: 'Delete', icon: 'pi pi-fw pi-trash'
        }
    ]

    const menu = useRef(null);

    return (
        <div className="layout-widgets">
            <div className="p-grid">
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box card">
                        <div className="overview-box-value">90</div>
                        <div className="overview-box-title">TASKS</div>

                        <img src="assets/layout/images/dashboard/graph-tasks.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +8.9% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box card">
                        <div className="overview-box-value">1259</div>
                        <div className="overview-box-title">PURCHASES</div>

                        <img src="assets/layout/images/dashboard/graph-purchases.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +67.2% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box card">
                        <div className="overview-box-value">21</div>
                        <div className="overview-box-title">ISSUES</div>

                        <img src="assets/layout/images/dashboard/graph-issues.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +3.0% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box card">
                        <div className="overview-box-value">42</div>
                        <div className="overview-box-title">MESSAGES</div>

                        <img src="assets/layout/images/dashboard/graph-messages.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +12.5% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box bluebg card">
                        <div className="overview-box-value">129</div>
                        <div className="overview-box-title">TASKS</div>

                        <img src="assets/layout/images/dashboard/graph-purchases-white.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +12.5% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box orangebg card">
                        <div className="overview-box-value">29</div>
                        <div className="overview-box-title">PURCHASES</div>

                        <img src="assets/layout/images/dashboard/graph-purchases-white.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +12.5% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box purplebg card">
                        <div className="overview-box-value">42</div>
                        <div className="overview-box-title">ISSUES</div>

                        <img src="assets/layout/images/dashboard/graph-purchases-white.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +12.5% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="overview-box limebg card">
                        <div className="overview-box-value">22</div>
                        <div className="overview-box-title">MESSAGES</div>

                        <img src="assets/layout/images/dashboard/graph-purchases-white.svg" alt="roma-layout" />
                        <div className="overview-box-status">
                            +12.5% <i className="pi pi-chevron-circle-up"></i>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="timeline card card-w-title">
                        <h5>Timeline</h5>
                        <ul>
                            <li>
                                <i className="pi pi-image"></i>
                                <span className="timeline-event-title">Uploaded Images</span>
                                <span className="timeline-event-time">15m</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="p-grid">
                                    <div className="p-col-6">
                                        <img src="assets/layout/images/dashboard/image-1.jpg" alt="roma-layout" />
                                    </div>
                                    <div className="p-col-6">
                                        <img src="assets/layout/images/dashboard/image-2.jpg" alt="roma-layout" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <i className="pi pi-heart"></i>
                                <span className="timeline-event-title">Favorites</span>
                                <span className="timeline-event-time">1h</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </li>
                            <li>
                                <i className="pi pi-users"></i>
                                <span className="timeline-event-title">Meeting</span>
                                <span className="timeline-event-time">2h</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </li>
                            <li>
                                <i className="pi pi-money-bill"></i>
                                <span className="timeline-event-title">Payment Received</span>
                                <span className="timeline-event-time">3h</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-col-12 p-xl-8">
                    <div className="card card-w-title live-support">
                        <h5>Live Support</h5>
                        <ul>
                            <li className="message-from">
                                <div className="p-grid">
                                    <div className="p-col-fixed">
                                        <img src="assets/layout/images/avatar-2.png" alt="roma-layout" />
                                    </div>
                                    <div className="p-col">
                                        <div className="chat-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nam ac euismod justo, eget blandit purus.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="message-to">
                                <div className="p-grid">
                                    <div className="p-col">
                                        <div className="chat-message">Mauris malesuada quis risus ut consequat.
										Maecenas ornare nunc risus, pulvinar euismod mi pellentesque eget.</div>
                                    </div>
                                    <div className="p-col-fixed">
                                        <img src="assets/layout/images/avatar-1.png" alt="roma-layout" />
                                    </div>
                                </div>
                            </li>
                            <li className="message-from">
                                <div className="p-grid">
                                    <div className="p-col-fixed">
                                        <img src="assets/layout/images/avatar-2.png" alt="roma-layout" />
                                    </div>
                                    <div className="p-col">
                                        <div className="chat-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nam ac euismod justo, eget blandit purus.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="message-to">
                                <div className="p-grid">
                                    <div className="p-col">
                                        <div className="chat-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    </div>
                                    <div className="p-col-fixed">
                                        <img src="assets/layout/images/avatar-1.png" alt="roma-layout" />
                                    </div>
                                </div>
                            </li>
                            <li className="message-to">
                                <div className="p-grid">
                                    <div className="p-col">
                                        <div className="chat-message">Mauris malesuada quis risus ut consequat.
										Maecenas ornare nunc risus, pulvinar euismod mi pellentesque eget.</div>
                                    </div>
                                    <div className="p-col-fixed">
                                        <img src="assets/layout/images/avatar-1.png" alt="roma-layout" />
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="new-message">
                            <div className="p-grid p-nogutter">
                                <div className="p-col">
                                    <InputText placeholder="Write a message.." />
                                </div>
                                <div className="p-col-fixed">
                                    <Button label="Send" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-lg-6 p-xl-4">
                    <div className="card card-w-title resolution-center p-fluid">
                        <h5>Resolution Center</h5>

                        <InputText placeholder="Username" />

                        <InputText placeholder="Email" />

                        <InputTextarea rows={5} placeholder="Message" autoResize={false} ></InputTextarea>

                        <div className="resolution-button-bar">
                            <Button label="Send" icon="pi pi-envelope" />
                            <Button label="Save" className="p-button-secondary" icon="pi pi-plus" />
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-xl-4">
                    <div className="card card-w-title team">
                        <h5>Team</h5>
                        <ul>
                            <li>
                                <img src="assets/layout/images/avatar-1.png" alt="roma-layout" />
                                <div className="team-box">
                                    <span className="team-member">John Swisher Welch</span>
                                    <span className="team-member-account">@jswisher</span>
                                </div>
                                <button type="button" className="p-link">
                                    <i className="pi pi-github"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-twitter"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-facebook"></i>
                                </button>
                            </li>
                            <li>
                                <img src="assets/layout/images/avatar-2.png" alt="roma-layout" />
                                <div className="team-box">
                                    <span className="team-member">Bernd Pfefferberg</span>
                                    <span className="team-member-account">@pfefferberg</span>
                                </div>
                                <button type="button" className="p-link">
                                    <i className="pi pi-github"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-twitter"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-facebook"></i>
                                </button>
                            </li>
                            <li>
                                <img src="assets/layout/images/avatar-3.png" alt="roma-layout" />
                                <div className="team-box">
                                    <span className="team-member">Chinaza Akachi</span>
                                    <span className="team-member-account">@chinazzza_</span>
                                </div>
                                <button type="button" className="p-link">
                                    <i className="pi pi-github"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-twitter"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-facebook"></i>
                                </button>
                            </li>
                            <li>
                                <img src="assets/layout/images/avatar-4.png" alt="roma-layout" />
                                <div className="team-box">
                                    <span className="team-member">Luka Miller</span>
                                    <span className="team-member-account">@luk4mr</span>
                                </div>
                                <button type="button" className="p-link">
                                    <i className="pi pi-github"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-twitter"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-facebook"></i>
                                </button>
                            </li>
                            <li>
                                <img src="assets/layout/images/avatar-5.png" alt="roma-layout" />
                                <div className="team-box">
                                    <span className="team-member">Maria Illescas</span>
                                    <span className="team-member-account">@casilledelamaria</span>
                                </div>
                                <button type="button" className="p-link">
                                    <i className="pi pi-github"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-twitter"></i>
                                </button>
                                <button type="button" className="p-link">
                                    <i className="pi pi-facebook"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-col-12 p-xl-4">
                    <div className="card user-card">
                        <div className="user-card-header">
                            <img src="assets/layout/images/dashboard/bg-header.png" alt="roma-layout" />
                        </div>
                        <div className="user-card-content">
                            <img src="assets/layout/images/avatar.png" alt="roma-layout" />
                            <Button icon="pi pi-cog" onClick={(event) => menu.current.toggle(event)} />
                            <Menu model={menuItems} popup={true} ref={menu} appendTo={document.body} />

                            <div className="user-card-name">
                                <span>Maria Llescas</span>
                            </div>

                            <div className="user-detail">
                                <div className="p-grid">
                                    <div className="p-col-4">
                                        <div className="user-detail-box">
                                            <div className="user-detail-box-name">Tasks</div>
                                            <div className="user-detail-box-detail">3 open</div>
                                            <i className="pi pi-chart-bar"></i>
                                            <ProgressBar value={60} />
                                        </div>
                                    </div>
                                    <div className="p-col-4">
                                        <div className="user-detail-box">
                                            <div className="user-detail-box-name">Revenue</div>
                                            <div className="user-detail-box-detail">+20%</div>
                                            <i className="pi pi-dollar"></i>
                                            <ProgressBar value={80} />
                                        </div>
                                    </div>
                                    <div className="p-col-4">
                                        <div className="user-detail-box">
                                            <div className="user-detail-box-name">Payments</div>
                                            <div className="user-detail-box-detail">24 New</div>
                                            <i className="pi pi-credit-card"></i>
                                            <ProgressBar value={60} />
                                        </div>
                                    </div>
                                    <div className="p-col-4">
                                        <div className="user-detail-box">
                                            <div className="user-detail-box-name">Clients</div>
                                            <div className="user-detail-box-detail">+80%</div>
                                            <i className="pi pi-users"></i>
                                            <ProgressBar value={50} />
                                        </div>
                                    </div>
                                    <div className="p-col-4">
                                        <div className="user-detail-box">
                                            <div className="user-detail-box-name">Sales</div>
                                            <div className="user-detail-box-detail">3 open</div>
                                            <i className="pi pi-shopping-cart"></i>
                                            <ProgressBar value={60} />
                                        </div>
                                    </div>
                                    <div className="p-col-4">
                                        <div className="user-detail-box">
                                            <div className="user-detail-box-name">Tasks</div>
                                            <div className="user-detail-box-detail">3 open</div>
                                            <i className="pi pi-chart-bar"></i>
                                            <ProgressBar value={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}