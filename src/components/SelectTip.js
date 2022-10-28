import { useState } from 'react';
import './../App.css'

const SelectTip = ({ userSelectTip, selectTipValue }) => {
    const [num, setNum] = useState('');

    const handleNumChange = event => {
        const limit = 3;
        setNum(event.target.value.slice(0, limit));
        userSelectTip(event)
    };

    return (
        <div className='container-tip'>
            <h2 className='container-tip__text'>Select Tip %</h2>
            <div className='select-tip'>
                <button className={+selectTipValue === 5 ? `select-tip__button-original clicked` : `select-tip__button-original`} onClick={userSelectTip} value={5}>5%</button>
                <button className={+selectTipValue === 10 ? `select-tip__button-original clicked` : `select-tip__button-original`} onClick={userSelectTip} value={10}>10%</button>
                <button className={+selectTipValue === 15 ? `select-tip__button-original clicked` : `select-tip__button-original`} onClick={userSelectTip} value={15}>15%</button>
                <button className={+selectTipValue === 25 ? `select-tip__button-original clicked` : `select-tip__button-original`} onClick={userSelectTip} value={25}>25%</button>
                <button className={+selectTipValue === 50 ? `select-tip__button-original clicked` : `select-tip__button-original`} onClick={userSelectTip} value={50}>50%</button>
                <input className='select-tip__input-custom' type={'number'} min={0} placeholder='Custom' value={num} onChange={handleNumChange} />
            </div>
        </div>
    )
}

export default SelectTip