import './../App.css'

const DetailTip = ({ totalBillPerPersonAndTip, tipPerPerson }) => {
    return (
        <div className='container-detail-tip'>
            <div className='detail-tip'>
                <div className='detail-tip__desc'>
                    <h3 className='detail-tip__h3'>Tip Amount</h3>
                    <p className='detail-tip__p'>/ person</p>
                </div>
                {
                    totalBillPerPersonAndTip | totalBillPerPersonAndTip === 'Infinity' ? <strong className='detail-tip__total'>${totalBillPerPersonAndTip}</strong> :
                        <strong className='detail-tip__total'>$0</strong>
                }
            </div>
            <div className='detail-tip'>
                <div className='detail-tip__desc'>
                    <h3 className='detail-tip__h3'>Total</h3>
                    <p className='detail-tip__p'>/ person</p>
                </div>
                {
                    tipPerPerson | tipPerPerson === 'Infinity' ? <strong className='detail-tip__total'>${tipPerPerson}</strong> :
                        <strong className='detail-tip__total'>$0</strong>
                }
            </div>
            <button className='container-detail-tip__btn' type={'reset'}>RESET</button>
        </div>
    )
}

export default DetailTip