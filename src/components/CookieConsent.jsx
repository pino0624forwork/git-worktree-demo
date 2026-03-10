import { useState, useEffect } from 'react';

function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000); // Show after 2 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (status) => {
        localStorage.setItem('cookie-consent', status);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent" role="dialog" aria-labelledby="cookie-title">
            <div className="cookie-consent__content">
                <div className="cookie-consent__icon">🍪</div>
                <div className="cookie-consent__text">
                    <h3 id="cookie-title" className="cookie-consent__title">我們重視您的隱私</h3>
                    <p>
                        我們使用 Cookie 來改善您的瀏覽體驗、提供個人化內容並分析我們的流量。點擊「接受」即表示您同意我們使用 Cookie。
                    </p>
                </div>
                <div className="cookie-consent__actions">
                    <button 
                        className="btn btn--outline btn--sm" 
                        onClick={() => handleConsent('declined')}
                    >
                        拒絕
                    </button>
                    <button 
                        className="btn btn--primary btn--sm" 
                        onClick={() => handleConsent('accepted')}
                    >
                        接受全部
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
