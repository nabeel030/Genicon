import React, { useState, useEffect } from 'react';

function Widget() {
    const [enableWhatsapp, setEnableWhatsapp] = useState(false)
    const [enableInsta, setEnableInsta] = useState(false)
    const [enableSkype, setEnableSkype] = useState(false)
    const [enableMsger, setEnableMsger] = useState(false)
    const [enableTwitter, setEnableTwitter] = useState(false)
    const [enableCall, setEnableCall] = useState(false)
    const [show, setShow] = useState(true);
    const [widgetStyle, setWidgetStyle] = useState({display: 'flex', flexDirection: 'column', position: 'fixed', bottom: '0px', width: '95px'});

    const [metaData, setMetaData] = useState({
        position: 'right',
        bottom: '0',
        message: 'Message'
    })

    useEffect(() => {
        let newStyle = {display: 'flex', flexDirection: 'column', position: 'fixed', bottom: `${metaData.bottom}px`, width: '95px'};
        newStyle[metaData.position] = '25px';
        setWidgetStyle(newStyle);
    }, [metaData]);

    const defaultLinks = {
        whatsapp: '#',
        instagram: '#',
        skype: '#',
        messenger: '#',
        twitter: '#',
        call: '#'
    }

    const [links, setLinks] = useState(defaultLinks);

    const selectPlatform = (type) => {
        switch(type) {
            case 'whatsapp':
                setEnableWhatsapp(!enableWhatsapp);
                if(!enableWhatsapp) {
                    setLinks({
                        ...links,
                        whatsapp: '#'
                    })
                }
                break
            case 'instagram':
                setEnableInsta(!enableInsta);
                if(!enableInsta) {
                    setLinks({
                        ...links,
                        instagram: '#'
                    })
                }

                break
            case 'skype':
                setEnableSkype(!enableSkype);
                if(!enableSkype) {
                    setLinks({
                        ...links,
                        skype: '#'
                    })
                }

                break
            case 'messenger':
                setEnableMsger(!enableMsger);
                if(!enableMsger) {
                    setLinks({
                        ...links,
                        messenger: '#'
                    })
                }

                break
            case 'twitter':
                setEnableTwitter(!enableTwitter);
                if(!enableTwitter) {
                    setLinks({
                        ...links,
                        twitter: '#'
                    })
                }
                break
            default:
                setEnableCall(!enableCall)
                if(!enableCall) {
                    setLinks({
                        ...links,
                        call: '#'
                    })
                }
        }
    }   

    const getIconSpans = () => {
        const waIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>';
        const msgerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16"><path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/></svg>';
        const instaIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>';
        const skypeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-skype" viewBox="0 0 16 16"><path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/></svg>'
        const twitterIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>'
        const callIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>'
        const caretUp = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16"><path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/></svg>'
        const caretDown = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16"><path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/></svg>'

        const whatsappSpan = enableWhatsapp ? `<li><a class="widget-circle widget-whatsapp" target="_blank" href="tel:${links.whatsapp}">${waIcon}</a></li>` : '';
        const msgerSpan = enableMsger ? `<li><a class="widget-circle widget-messenger" target="_blank" href="https://www.facebook.com/${links.messenger}">${msgerIcon}</a></li>` : '';
        const instaSpan = enableInsta ? `<li><a class="widget-circle widget-insta" target="_blank" href="https://www.instagram.com/${links.instagram}">${instaIcon}</a></li>` : '';
        const skypeSpan = enableSkype ? `<li><a class="widget-circle widget-skype" target="_blank" href="${links.skype}">${skypeIcon}</a></li>` : '';
        const twitterSpan = enableTwitter ? `<li><a class="widget-circle widget-twitter" target="_blank" href="https://twitter.com/${links.twitter}">${twitterIcon}</a></li>` : '';
        const callSpan = enableCall ? `<li><a class="widget-circle widget-call" target="_blank" href=tel:${links.call}">${callIcon}</a></li>` : '';

        return {whatsappSpan, msgerSpan, instaSpan, skypeSpan, twitterSpan, callSpan, caretUp, caretDown}
    }

    const enabledButtonsCount = () => {
        return enableCall + enableInsta + enableMsger + enableSkype + enableTwitter + enableWhatsapp;
    }

    const generateCode = () => {
        const spans = getIconSpans();
        const containerStyle = `display: flex; flex-direction: column; position: fixed; ${metaData.position}: 25px; bottom: ${metaData.bottom}px;width:95px`;

        let toggleButton = '';

        if(enabledButtonsCount() > 1 ) {
            toggleButton = `<ul><span id="caretup" class="widget-circle widget-caret" onClick="showMenu(true)" style="display: flex">
                                ${spans.caretUp}
                            </span>
                            <span id="caretdown" class="widget-circle widget-caret" onClick="showMenu(false)" style="display: none">
                                ${spans.caretDown}
                            </span></ul>
                            `
        }

        let scriptCode = `
                var head = document.getElementsByTagName('HEAD')[0];
        
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'https://socialwidgets.herokuapp.com/css/widget.css';
        
                head.appendChild(link);
                
                function showMenu(flag) {
                    var caretUp = document.getElementById('caretup'); 
                    var caretDown = document.getElementById('caretdown');
                    var iconsList = document.getElementById('iconsList'); 
                    if(flag) {
                        iconsList.style.display = "block";
                        caretDown.style.display = "flex";
                        caretUp.style.display = "none";
                    } else {
                        iconsList.style.display = "none";
                        caretDown.style.display = "none";
                        caretUp.style.display = "flex";
                    }
                }

                var mainDiv = document.createElement("div"); 
                mainDiv.id = "widgetsContainer"; 
                mainDiv.innerHTML = '<ul id="iconsList" style="display: ${enabledButtonsCount() > 1 ? 'none' : 'block'}">
                        ${spans.whatsappSpan}
                        ${spans.msgerSpan}
                        ${spans.instaSpan}
                        ${spans.skypeSpan}
                        ${spans.twitterSpan}
                        ${spans.callSpan}
                    </ul>
                    ${toggleButton}';
                
                mainDiv.style = '${containerStyle}';
                document.body.appendChild(mainDiv);
        `;

        return scriptCode.replace(/<!--(.*?)-->|\s+\B(?=([^"]*"[^"]*")*[^"]*$)/gm, '');
    }

    const downloadFile = () => {
        const code = generateCode();
        let anchor = document.getElementById('downloadbtn');
        anchor.href = window.URL.createObjectURL(new Blob([code], {type: "text/javascript"}));
    }

    return (
        <>
            <header className='platform-widgets-container'>
                <div className="platform-widgets-subheading">1. Choose platform</div>
                <div className="platform-widgets-heading">
                    <div className='row justify-content-md-center'>
                        <div className='col-md-6 platform-widgets'>
                            <span className='icon-span' style={{color: enableWhatsapp ? '#38eb38' : ''}} onClick={() => selectPlatform('whatsapp')}>
                                <i className="bi bi-whatsapp"></i>
                            </span>
                            <span className='icon-span' style={{color: enableInsta ? '#f5768c' : ''}} onClick={() => selectPlatform('instagram')}>
                                <i className="bi bi-instagram"></i>
                            </span>
                            <span className='icon-span' style={{color: enableSkype ? '#00aff0' : ''}} onClick={() => selectPlatform('skype')}>
                                <i className="bi bi-skype"></i>                        
                            </span>
                            <span className='icon-span' style={{color: enableMsger ? '#006AFF' : ''}} onClick={() => selectPlatform('messenger')}>
                                <i className="bi bi-messenger"></i>
                            </span>
                            <span className='icon-span' style={{color: enableTwitter ? '#00acee' : ''}} onClick={() => selectPlatform('twitter')}>
                                <i className="bi bi-twitter"></i>
                            </span>
                            <span className='icon-span' style={{color: enableCall ? '#ff8d00cf' : ''}} onClick={() => selectPlatform('call')}>
                                <i className="bi bi-telephone"></i>
                            </span>
                            {
                                enableWhatsapp && (
                                    <div className='platform-widgets-form text-left mt-2'>
                                        <div className='form-group'>
                                            <label htmlFor='form-label'>Whatsapp number</label>
                                            <div className='input-group'>
                                                <span className='input-group-text input-group-span' style={{color: '#27d927'}}>
                                                    <i className="bi bi-whatsapp"></i>
                                                </span>
                                                <input type='number' className='form-control' placeholder='Example 79851360066'
                                                    onChange={(e) => setLinks({...links, whatsapp: e.target.value})}
                                                />
                                                <span className='input-group-text remove-widget' onClick={() => selectPlatform('whatsapp')}>
                                                    <i className="bi bi-x"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                enableInsta && (
                                    <div className='platform-widgets-form text-left mt-2'>
                                        <div className='form-group'>
                                            <label htmlFor='form-label'>Instagram URL</label>
                                            <div className='input-group'>
                                                <span className='input-group-text input-group-span' style={{color: '#f5768c'}}>
                                                    <i className="bi bi-instagram"></i>
                                                </span>
                                                <input type='text' className='form-control' placeholder='Instagram username'
                                                    onChange={(e) => setLinks({...links, instagram: e.target.value})} />
                                                <span className='input-group-text remove-widget' onClick={() => selectPlatform('instagram')}>
                                                    <i className="bi bi-x"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                enableSkype && (
                                    <div className='platform-widgets-form text-left mt-2'>
                                        <div className='form-group'>
                                            <label htmlFor='form-label'>Skype URL</label>
                                            <div className='input-group'>
                                                <span className='input-group-text input-group-span' style={{color: '#00aff0'}}>
                                                    <i className="bi bi-skype"></i>                        
                                                </span>
                                                <input type='text' className='form-control' placeholder='Skype username' 
                                                    onChange={(e) => setLinks({...links, skype: e.target.value})}/>
                                                <span className='input-group-text remove-widget' onClick={() => selectPlatform('skype')}>
                                                    <i className="bi bi-x"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                enableMsger && (
                                    <div className='platform-widgets-form text-left mt-2'>
                                        <div className='form-group'>
                                            <label htmlFor='form-label'>Facebook Messenger</label>
                                            <div className='input-group'>
                                                <span className='input-group-text input-group-span' style={{color: '#006AFF'}}>
                                                    <i className="bi bi-messenger"></i>
                                                </span>
                                                <input type='text' className='form-control' placeholder='Facebook username' 
                                                    onChange={(e) => setLinks({...links, messenger: e.target.value})}/>
                                                <span className='input-group-text remove-widget' onClick={() => selectPlatform('messenger')}>
                                                    <i className="bi bi-x"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                enableTwitter && (
                                    <div className='platform-widgets-form text-left mt-2'>
                                        <div className='form-group'>
                                            <label htmlFor='form-label'>Twitter URL</label>
                                            <div className='input-group'>
                                                <span className='input-group-text input-group-span' style={{color: '#00acee'}}>
                                                    <i className="bi bi-twitter"></i>
                                                </span>
                                                <input type='text' className='form-control' placeholder='Twitter username' 
                                                    onChange={(e) => setLinks({...links, twitter: e.target.value})}/>
                                                <span className='input-group-text remove-widget' onClick={() => selectPlatform('twitter')}>
                                                    <i className="bi bi-x"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                enableCall && (
                                    <div className='platform-widgets-form text-left mt-2'>
                                        <div className='form-group'>
                                            <label htmlFor='form-label'>Phone number</label>
                                            <div className='input-group'>
                                                <span className='input-group-text input-group-span' style={{color: '#ff8d00cf'}}>
                                                    <i className="bi bi-telephone"></i>
                                                </span>
                                                <input type='number' className='form-control' placeholder='Example +929851360066' 
                                                    onChange={(e) => setLinks({...links, call: e.target.value})}/>
                                                <span className='input-group-text remove-widget' onClick={() => selectPlatform('call')}>
                                                    <i className="bi bi-x"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
            {
                (enableWhatsapp || enableCall || enableInsta || enableMsger || enableSkype || enableTwitter) && (
                    <>
                        <header className='platform-widgets-container pt-4'>
                            <div className="platform-widgets-subheading">2. Customize button</div>
                            <div className="platform-widgets-heading">
                                <div className='row justify-content-md-center'>
                                    <div className='col-md-6 platform-widgets'>
                                        <div className='platform-widgets-form text-left'>
                                            Position
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <select className='form-control' onChange={(e) => setMetaData({...metaData, position: e.target.value})}>
                                                            <option value='right'>Right</option>
                                                            <option value='left'>Left</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <div className='input-group'>
                                                            <input type='number' className='form-control' min="0" placeholder='Bottom Spacing'
                                                                onChange={(e) => setMetaData({...metaData, bottom: e.target.value})} />
                                                            <span className='input-group-text'>px</span>                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='form-group mt-2'>
                                                <label className='form-label'>Action message</label>
                                                <input type='text' className='form-control' placeholder='Instant message' 
                                                    onChange={(e) => setMetaData({...metaData, message: e.target.value})}/>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <header className='platform-widgets-container pt-4'>
                            <div className="platform-widgets-subheading">3. Get Code</div>
                            <div className="platform-widgets-heading">
                                <div className='row justify-content-md-center'>
                                    <div className='col-md-6 platform-widgets'>
                                        <a className='btn btn-success' id='downloadbtn' download='social-widgets.js' href='#'
                                            onClick={() => downloadFile()}>
                                            Dowload script file
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div id='widgetsContainer' style={widgetStyle}>
                           {
                                (show || enabledButtonsCount() == 1) && 
                                <ul className='widgets-list'>
                                    {
                                        enableWhatsapp && 
                                        <li>
                                            <a className="widget-circle widget-whatsapp" href={`tel:${links.whatsapp}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                                            </a>
                                        </li>
                                    }
                                    {
                                        enableInsta && 
                                        <li>
                                            <a className="widget-circle widget-insta" href={`https://www.instagram.com/${links.instagram}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>                                        
                                            </a>
                                        </li>
                                    }
                                    {
                                        enableSkype && 
                                        <li>
                                            <a className="widget-circle widget-skype" href={`${links.skype}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16"><path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/></svg>
                                            </a>
                                        </li>
                                    }
                                    {
                                        enableMsger && 
                                        <li>
                                            <a className="widget-circle widget-messenger" href={`https://www.facebook.com/${links.messenger}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16"><path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/></svg>                                        
                                            </a>
                                        </li>
                                    }
                                    {
                                        enableTwitter && 
                                        <li>
                                            <a className="widget-circle widget-twitter" href={`https://www.twitter.com/${links.twitter}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                                            </a>
                                        </li>
                                    }
                                    {
                                        enableCall && 
                                        <li>
                                            <a className="widget-circle widget-call" href={`tel:${links.call}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                                            </a>
                                        </li>
                                    }
                                </ul>
                           }  
                            
                            <ul>
                                {
                                    (enableCall + enableInsta + enableMsger + enableSkype + enableTwitter+ enableWhatsapp) > 1 &&
                                    <span className='widget-circle widget-caret' onClick={() => setShow(!show)}>
                                        {
                                            !show ? 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-up" viewBox="0 0 16 16"><path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/></svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16"><path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/></svg>
                                        }
                                    </span>
                                }
                            </ul>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Widget;