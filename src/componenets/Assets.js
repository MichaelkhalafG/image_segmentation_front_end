import profileImage from '../img/profile.jpg';
function Assets({ isDarkMode, toggleMode, FontSize, setFontSize }) {
    return (
        <>
            <div className={`row col-12 rounded-3  justify-content-center ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-lg-5 p-3`} data-aos="zoom-in" data-aos-duration="1000">
                <h2 className={`text-light ${(window.innerWidth > 1100) ? FontSize : "fs-6"} mb-3 text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 rounded-3 p-2`} >
                    who we are ?
                </h2>
                <div className={`col-12 text-center ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 rounded-bottom-0 p-lg-4 p-0 pt-3`}>
                    <p className={`d-inline text-center ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? "fs-5" : "fs-6"} col-12 `} >
                        Image segmentation is a computer vision technique that partitions a digital image into discrete groups of pixels image segments to inform object detection and related tasks. By parsing an image’s complex visual data into specifically shaped segments, image segmentation enables faster, more advanced image processing.
                    </p>
                </div>
                <div className='col-12 row bg-dark bg-opacity-50'>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 p-1 d-flex justify-content-center'>
                        <div className="card3 col-10 rounded-3">
                            <img src={profileImage} alt='profile' className="card-photo"></img>
                            <div className="card-title">Michael khalaf <br />
                                <span>Fullstack dev &amp; UX UI</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div>
                    <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div>
                    <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div>
                    <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div>
                    <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div>
                    <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div>
                    <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div>
                    <div className='col-md-3 col-6 rounded-circle'>
                        <img src={profileImage} className='col-12 p-3 rounded-circle' alt="profile img" />
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default Assets;