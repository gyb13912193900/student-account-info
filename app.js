const studentInfo = {
    name: 'Yubin Gu',
    id: 34441646,
    balance: 25,500.00,
    bench fee: 5000.00
};

document.getElementById('student-name').textContent = `Name: ${studentInfo.name}`;
document.getElementById('student-id').textContent = `ID: ${studentInfo.id}`;
document.getElementById('balance').textContent = `Balance: $${studentInfo.balance.toFixed(2)}`;
