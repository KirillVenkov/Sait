// Функция для добавления пользователя в таблицу
function addUserToTable(name, email, password) {
    var table = document.getElementById("usersTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.textContent = name;
    cell2.textContent = email;
    // В реальном приложении пароль не должен отображаться.
    cell3.textContent = password; // Заменено на звездочки для демонстрации
  }
  
  // Функция проверки пароля
  function validatePassword(password) {
    // Проверка минимальной длины пароля (6 символов)
    if (password.length < 6) {
      alert("Пароль должен содержать минимум 6 символов.");
      return false;
    }
    // Проверка наличия хотя бы одной цифры
    if (!/\d/.test(password)) {
      alert("Пароль должен содержать хотя бы одну цифру.");
      return false;
    }
    // Проверка наличия хотя бы одной заглавной буквы
    if (!/[A-Z]/.test(password)) {
      alert("Пароль должен содержать хотя бы одну заглавную букву.");
      return false;
    }
    return true;
  }
  
  // Обработчик события отправки формы
  document.getElementById("registrationForm").addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    password = "1";
    // Проверка пароля перед добавлением пользователя в таблицу
    if (validatePassword(password)) {
      addUserToTable(name, email, password);
      
      
    }
  });