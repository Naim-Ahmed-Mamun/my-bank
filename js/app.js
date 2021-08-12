const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click',(e) => {
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';
    e.preventDefault()
})


const addDepositBtn = document.getElementById('add_deposit');
addDepositBtn.addEventListener('click',() => {
    const depositAmount = document.getElementById('deposit_amount').value;
    const depositAmountNum = parseFloat(depositAmount)
    
    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNum = parseFloat(currentDeposit);
    // const total = depositAmountNum + currentDepositNum;
    // document.getElementById('currentDeposit').innerText = total;
    // console.log(currentDepositNum);
    updateSpanText('currentDeposit',depositAmountNum)

    // const currentAmount = document.getElementById('currentAmount').innerText;
    // const currentAmountNum = parseFloat(currentAmount);
    // const totalAmount = depositAmountNum + currentAmountNum;
    // document.getElementById('currentAmount').innerText = totalAmount;
    updateSpanText('currentAmount',depositAmountNum)

    document.getElementById('deposit_amount').value = ''
})

function updateSpanText(id,depositAmountNum) {
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNum = parseFloat(currentAmount);
    const totalAmount = depositAmountNum + currentAmountNum;
    document.getElementById(id).innerText = totalAmount;
}

const addWithdrawBtn = document.getElementById('addWithdraw');
addWithdrawBtn.addEventListener('click',() => {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawAmountNum = parseFloat(withdrawAmount);
    
    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // const currentWithdrawNum = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawAmountNum + currentWithdrawNum;
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;
    updateSpanText('currentWithdraw',withdrawAmountNum);

    // const currentAmount = document.getElementById('currentAmount').innerText;
    // const currentAmountNum = parseFloat(currentAmount);
    // const totalWithdrawAmount = withdrawAmount -1 * currentAmountNum;
    // document.getElementById('currentAmount').innerText = totalWithdrawAmount;\
    updateSpanText('currentAmount',-1* withdrawAmountNum)

    document.getElementById('withdrawAmount').value = '';
})