const studentInfo = {
    name: 'Yubin Gu',
    id: 34441646,
    balance: 25,500.00,
    benchFee: 5000.00 // changed from 'bench fee' to 'benchFee'
};

document.getElementById('student-name').textContent = `Name: ${studentInfo.name}`;
document.getElementById('student-id').textContent = `ID: ${studentInfo.id}`;
document.getElementById('balance').textContent = `Balance: $${studentInfo.balance.toFixed(2)}`;
document.getElementById('bench-fee').textContent = `Bench Fee: £${studentInfo.benchFee.toFixed(2)}`;

