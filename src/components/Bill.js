import './../App.css'
import Input from './Input'

const Bill = ({ userBill, billValue }) => {
    return (
        <div className='bill'>
            <div className='bill-text'>
                <h2 className='bill-text__title'>Bill</h2>
                {
                    +billValue === 0 ? <span className='bill-text__warning'>Can't be zero</span> : null
                }
            </div>
            <Input icon={'dolar'} userInput={userBill} />
        </div>
    )
}

export default Bill