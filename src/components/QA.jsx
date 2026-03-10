import { useState } from 'react';
import { FAQ_DATA } from '../data/faq';

function QA() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="qa" className="qa section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 className="section-header__title">解答您的疑惑</h2>
                    <p className="section-header__desc">
                        想了解更多關於 SalesPilot 的資訊嗎？這裡有一些客戶最常詢問的問題。
                    </p>
                </div>

                <div className="qa__grid">
                    {FAQ_DATA.map((item, index) => (
                        <div 
                            key={index} 
                            className={`qa__item ${activeIndex === index ? 'qa__item--active' : ''}`}
                        >
                            <button 
                                className="qa__question" 
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{item.question}</span>
                                <span className="qa__icon">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div className="qa__answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default QA;
