import './../App.css'
import Input from './Input'

const NumberOfPeople = ({ userNumberOfPeople, numberOfPeopleValue }) => {
    return (
        <div className='number-of-people'>
            <div className='number-of-people-text'>
                <h2 className='number-of-people-text__title'>Number of People</h2>
                {
                    +numberOfPeopleValue === 0 ? <span className='number-of-people-text__warning'>Can't be zero</span> : null
                }
            </div>
            <Input icon={'person'} userInput={userNumberOfPeople} />
        </div>
    )
}

export default NumberOfPeople