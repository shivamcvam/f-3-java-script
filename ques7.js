function addUser(name, age, email) {
    const userInfo = { age, email };
    userMap.set(name, userInfo);
  }
  
  function updateUser(name, age, email) {
    if (userMap.has(name)) {
      const userInfo = userMap.get(name);
      userInfo.age = age;
      userInfo.email = email;
    }
  }
  
  function deleteUser(name) {
    userMap.delete(name);
  }
  
  addUser("shivam", 30, "shivam@example.com");
  addUser("ram", 25, "bob@example.com");
  console.log(userMap);
  
  updateUser("syam", 31, "syam@example.com");
  console.log(userMap);
  
  deleteUser("ram");
  console.log(userMap);
  