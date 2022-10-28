import './../App.css'
import Input from './Input'

const Bill = ({ userBill, billValue }) => {
    return (
        <div className='bill'>
            <div className='bill-text'>
                <h2 className='bill-text__title'>Bill</h2>
                {
                    typeof billValue !== 'number' ? (+billValue === 0 ? billValue === '' ? null : <span className='bill-text__warning'>Can't be zero</span> : null) : null
                }
            </div>
            <Input icon={'dolar'} userInput={userBill} />
        </div>
    )
}

export default Bill