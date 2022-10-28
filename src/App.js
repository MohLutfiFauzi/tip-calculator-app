import './App.css';
import Logo from './components/Logo'
import Bill from './components/Bill'
import NumberOfPeople from './components/NumberOfPeople';
import SelectTip from './components/SelectTip'
import DetailTip from './components/DetailTip';
import useInput from './hooks/useInput';

function App() {
  const [userBill, handleUserBill] = useInput(0);
  const [userSelectTip, handleuserSelectTip] = useInput(0);
  const [userNumberOfPeople, handleUserNumberOfPeople] = useInput(0);

  const rounded = (value) => {
    let roundedString = value.toFixed(2);
    let roundedNumber = Number(roundedString);

    return roundedNumber
  }

  const totalBillPerPerson = userBill / userNumberOfPeople;
  let totalBillPerPersonAndTip = 0;

  if (userSelectTip > 0) {
    totalBillPerPersonAndTip = (totalBillPerPerson / 100) * userSelectTip
  }

  let tipPerPerson = totalBillPerPerson;

  if (totalBillPerPersonAndTip !== totalBillPerPerson) {
    tipPerPerson += totalBillPerPersonAndTip
  }

  console.log(tipPerPerson);

  return (
    <main className="app">
      <Logo />
      <section className='container'>
        <div>
          <Bill userBill={handleUserBill} billValue={userBill} />
          <SelectTip userSelectTip={handleuserSelectTip} selectTipValue={userSelectTip} />
          <NumberOfPeople userNumberOfPeople={handleUserNumberOfPeople} numberOfPeopleValue={userNumberOfPeople} />
        </div>
        <DetailTip totalBillPerPersonAndTip={rounded(totalBillPerPersonAndTip)} tipPerPerson={rounded(tipPerPerson)} />
      </section>
    </main>
  );
}

export default App;
