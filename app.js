const studentInfo = {
    name: 'MARCUS',
    id: 31234566,
    balance: 0005,500.00,
    benchFee: 00000.00 // changed from 'bench fee' to 'benchFee'
};

document.getElementById('student-name').textContent = `Name: ${studentInfo.name}`;
document.getElementById('student-id').textContent = `ID: ${studentInfo.id}`;
document.getElementById('balance').textContent = `Balance: $${studentInfo.balance.toFixed(2)}`;
document.getElementById('bench-fee').textContent = `Bench Fee: £${studentInfo.benchFee.toFixed(2)}`;

