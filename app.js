const studentInfo = {
    name: 'John Doe',
    id: 123456,
    balance: 500.00
};

document.getElementById('student-name').textContent = `Name: ${studentInfo.name}`;
document.getElementById('student-id').textContent = `ID: ${studentInfo.id}`;
document.getElementById('balance').textContent = `Balance: $${studentInfo.balance.toFixed(2)}`;
